// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// State object type
export interface State extends CosmicObject {
  type: 'states';
  metadata: {
    state_name: string;
    state_code: string;
    climate_zone?: {
      key: string;
      value: string;
    };
    avg_rainfall?: number;
    featured?: boolean;
  };
}

// Crop object type
export interface Crop extends CosmicObject {
  type: 'crops';
  metadata: {
    crop_name: string;
    crop_image?: {
      url: string;
      imgix_url: string;
    };
    category?: {
      key: string;
      value: string;
    };
    n_value: number;
    p_value: number;
    k_value: number;
    ph_value: number;
    optimal_humidity?: number;
    optimal_rainfall?: number;
    season?: {
      key: string;
      value: string;
    };
    growth_duration?: number;
    market_price?: number;
  };
}

// Crop Yield Record object type
export interface CropYieldRecord extends CosmicObject {
  type: 'crop-yield-records';
  metadata: {
    state: State;
    crop: Crop;
    crop_year: number;
    season: {
      key: string;
      value: string;
    };
    area: number;
    production: number;
    annual_rainfall?: number;
    fertilizer?: number;
    pesticide?: number;
    yield: number;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip?: number;
}

// Recommendation result type
export interface CropRecommendation {
  crop: Crop;
  yps: number;
  calculatedValues: {
    n: number;
    p: number;
    k: number;
    ph: number;
    humidity: number;
    rainfall: number;
  };
  marketPrice: number;
}

// Type guards
export function isState(obj: CosmicObject): obj is State {
  return obj.type === 'states';
}

export function isCrop(obj: CosmicObject): obj is Crop {
  return obj.type === 'crops';
}

export function isCropYieldRecord(obj: CosmicObject): obj is CropYieldRecord {
  return obj.type === 'crop-yield-records';
}