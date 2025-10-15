'use client'

import { Crop, CropYieldRecord, State } from '@/types'
import { useState } from 'react'
import { generateRecommendation } from '@/lib/recommendation'
import RecommendationCard from '@/components/RecommendationCard'

interface RecommendationSectionProps {
  crops: Crop[]
  yieldRecords: CropYieldRecord[]
  states: State[]
}

export default function RecommendationSection({ 
  crops, 
  yieldRecords,
  states 
}: RecommendationSectionProps) {
  const [recommendation, setRecommendation] = useState<ReturnType<typeof generateRecommendation> | null>(null)
  const [selectedStateId, setSelectedStateId] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateRecommendation = () => {
    setIsGenerating(true)
    
    // Simulate processing delay for better UX
    setTimeout(() => {
      const result = generateRecommendation(
        crops,
        yieldRecords,
        selectedStateId || undefined
      )
      setRecommendation(result)
      setIsGenerating(false)
    }, 800)
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Get Crop Recommendation
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our intelligent recommendation engine analyzes soil parameters, climate data, 
          and market pricing to suggest the optimal crop for your requirements.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <select
            value={selectedStateId}
            onChange={(e) => setSelectedStateId(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">All States</option>
            {states.map(state => (
              <option key={state.id} value={state.id}>
                {state.metadata.state_name}
              </option>
            ))}
          </select>
          
          <button
            onClick={handleGenerateRecommendation}
            disabled={isGenerating}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? 'Generating...' : 'Get Recommendation'}
          </button>
        </div>
      </div>

      {recommendation && (
        <div className="mt-8 animate-fadeIn">
          <RecommendationCard recommendation={recommendation} />
        </div>
      )}
    </div>
  )
}