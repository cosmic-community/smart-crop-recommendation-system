'use client'

import { State } from '@/types'
import { useState } from 'react'

interface StateSelectorProps {
  states: State[]
  featuredState: State | null
}

export default function StateSelector({ states, featuredState }: StateSelectorProps) {
  const [showStates, setShowStates] = useState(false)

  const otherStates = states.filter(
    state => state.id !== featuredState?.id
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">
          State Data Overview
        </h2>
        <button
          onClick={() => setShowStates(!showStates)}
          className="btn-secondary"
        >
          {showStates ? 'Hide States' : 'Select State'}
        </button>
      </div>

      {showStates && (
        <div className="space-y-6 animate-fadeIn">
          {featuredState && (
            <div className="card p-6 border-2 border-primary-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {featuredState.metadata.state_name}
                </h3>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                  Featured State
                </span>
              </div>
              <StateCard state={featuredState} />
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Other States
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherStates.map(state => (
                <div key={state.id} className="card p-4">
                  <StateCard state={state} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function StateCard({ state }: { state: State }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">State Code</span>
        <span className="text-sm font-bold text-gray-900">
          {state.metadata.state_code}
        </span>
      </div>
      {state.metadata.climate_zone && (
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Climate Zone</span>
          <span className="text-sm font-semibold text-gray-900">
            {state.metadata.climate_zone.value}
          </span>
        </div>
      )}
      {state.metadata.avg_rainfall !== undefined && (
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Avg Rainfall</span>
          <span className="text-sm font-semibold text-gray-900">
            {state.metadata.avg_rainfall} mm
          </span>
        </div>
      )}
    </div>
  )
}