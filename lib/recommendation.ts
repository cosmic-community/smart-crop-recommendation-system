import { Crop, CropYieldRecord, CropRecommendation } from '@/types';

/**
 * Calculate Yield Predictor Score (YPS)
 * Formula: (marketPrice * averageYield) / normalizationFactor
 * Returns a value between 1-100
 */
export function calculateYPS(
  crop: Crop,
  averageYield: number
): number {
  const marketPrice = crop.metadata.market_price || 0;
  
  // Normalization factor to scale the result to 1-100
  const rawScore = (marketPrice * averageYield) / 1000;
  
  // Ensure score is between 1 and 100
  const normalizedScore = Math.min(Math.max(Math.round(rawScore), 1), 100);
  
  return normalizedScore;
}

/**
 * Generate a crop recommendation based on available data
 * Simulates intelligent selection based on yield, market price, and optimal conditions
 */
export function generateRecommendation(
  crops: Crop[],
  yieldRecords: CropYieldRecord[],
  selectedStateId?: string
): CropRecommendation | null {
  if (crops.length === 0) {
    return null;
  }

  // Filter yield records by state if provided
  const relevantRecords = selectedStateId
    ? yieldRecords.filter(record => record.metadata.state.id === selectedStateId)
    : yieldRecords;

  // Calculate scores for each crop
  const cropScores = crops.map(crop => {
    // Find yield records for this crop
    const cropRecords = relevantRecords.filter(
      record => record.metadata.crop.id === crop.id
    );

    // Calculate average yield
    const averageYield = cropRecords.length > 0
      ? cropRecords.reduce((sum, record) => sum + record.metadata.yield, 0) / cropRecords.length
      : crop.metadata.optimal_rainfall ? crop.metadata.optimal_rainfall / 1000 : 5; // Fallback estimate

    // Calculate YPS
    const yps = calculateYPS(crop, averageYield);

    return {
      crop,
      yps,
      averageYield,
      recordCount: cropRecords.length,
    };
  });

  // Sort by YPS (highest first) and select the best
  cropScores.sort((a, b) => b.yps - a.yps);
  const bestCrop = cropScores[0];

  if (!bestCrop) {
    return null;
  }

  // Generate calculated values (ensuring non-negative and pH constraint)
  const calculatedValues = {
    n: Math.max(bestCrop.crop.metadata.n_value || 0, 0),
    p: Math.max(bestCrop.crop.metadata.p_value || 0, 0),
    k: Math.max(bestCrop.crop.metadata.k_value || 0, 0),
    ph: Math.min(Math.max(bestCrop.crop.metadata.ph_value || 6.5, 0), 10),
    humidity: Math.max(bestCrop.crop.metadata.optimal_humidity || 60, 0),
    rainfall: Math.max(bestCrop.crop.metadata.optimal_rainfall || 800, 0),
  };

  return {
    crop: bestCrop.crop,
    yps: bestCrop.yps,
    calculatedValues,
    marketPrice: bestCrop.crop.metadata.market_price || 0,
  };
}

/**
 * Format currency in INR
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Get YPS rating label
 */
export function getYPSRating(yps: number): {
  label: string;
  color: string;
} {
  if (yps >= 80) {
    return { label: 'Excellent', color: 'text-green-600' };
  } else if (yps >= 60) {
    return { label: 'Good', color: 'text-blue-600' };
  } else if (yps >= 40) {
    return { label: 'Moderate', color: 'text-yellow-600' };
  } else {
    return { label: 'Fair', color: 'text-orange-600' };
  }
}