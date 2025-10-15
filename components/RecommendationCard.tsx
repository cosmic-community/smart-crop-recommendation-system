import { CropRecommendation } from '@/types'
import { formatINR, getYPSRating } from '@/lib/recommendation'

interface RecommendationCardProps {
  recommendation: CropRecommendation
}

export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const { crop, yps, calculatedValues, marketPrice } = recommendation
  const ypsRating = getYPSRating(yps)

  return (
    <div className="card p-8 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Recommended Crop
        </h3>
        <p className="text-gray-600">
          Based on optimal soil and climate conditions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {crop.metadata.crop_image && (
            <img
              src={`${crop.metadata.crop_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={crop.metadata.crop_name}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          )}
          <div className="mt-4 text-center">
            <h4 className="text-3xl font-bold text-primary-600 mb-2">
              {crop.metadata.crop_name}
            </h4>
            {crop.metadata.category && (
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                {crop.metadata.category.value}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h5 className="text-lg font-bold text-gray-900 mb-3">
              Soil Parameters
            </h5>
            <div className="grid grid-cols-2 gap-4">
              <MetricCard label="Nitrogen (N)" value={`${calculatedValues.n} kg/ha`} />
              <MetricCard label="Phosphorus (P)" value={`${calculatedValues.p} kg/ha`} />
              <MetricCard label="Potassium (K)" value={`${calculatedValues.k} kg/ha`} />
              <MetricCard label="pH Value" value={calculatedValues.ph.toFixed(1)} />
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold text-gray-900 mb-3">
              Climate Requirements
            </h5>
            <div className="grid grid-cols-2 gap-4">
              <MetricCard label="Humidity" value={`${calculatedValues.humidity}%`} />
              <MetricCard label="Rainfall" value={`${calculatedValues.rainfall} mm`} />
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold text-gray-900 mb-3">
              Market Information
            </h5>
            <div className="bg-primary-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Current Market Price</div>
              <div className="text-2xl font-bold text-primary-700">
                {formatINR(marketPrice)}
                <span className="text-sm font-normal text-gray-600 ml-1">per quintal</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 p-6 rounded-lg">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">
                Yield Predictor Score (YPS)
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {yps}
              </div>
              <div className={`text-lg font-semibold ${ypsRating.color}`}>
                {ypsRating.label}
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Business viability rating (1-100)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 p-3 rounded-lg">
      <div className="text-xs text-gray-600 mb-1">{label}</div>
      <div className="text-lg font-bold text-gray-900">{value}</div>
    </div>
  )
}