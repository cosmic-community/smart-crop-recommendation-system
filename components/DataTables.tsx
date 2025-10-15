'use client'

import { CropYieldRecord, State } from '@/types'
import { useState } from 'react'

interface DataTablesProps {
  yieldRecords: CropYieldRecord[]
  featuredState: State | null
  states: State[]
}

export default function DataTables({ yieldRecords, featuredState, states }: DataTablesProps) {
  const [selectedState, setSelectedState] = useState<string>('all')

  const filteredRecords = selectedState === 'all'
    ? yieldRecords
    : yieldRecords.filter(record => record.metadata.state.id === selectedState)

  const featuredRecords = featuredState
    ? yieldRecords.filter(record => record.metadata.state.id === featuredState.id)
    : []

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Crop Yield Data
        </h2>
        
        {featuredState && featuredRecords.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary-600 mb-4">
              {featuredState.metadata.state_name} - Featured Data
            </h3>
            <YieldTable records={featuredRecords} />
          </div>
        )}

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              All States Data
            </h3>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All States</option>
              {states.map(state => (
                <option key={state.id} value={state.id}>
                  {state.metadata.state_name}
                </option>
              ))}
            </select>
          </div>
          <YieldTable records={filteredRecords} />
        </div>
      </div>
    </div>
  )
}

function YieldTable({ records }: { records: CropYieldRecord[] }) {
  if (records.length === 0) {
    return (
      <div className="card p-8 text-center text-gray-500">
        No yield records available for the selected criteria.
      </div>
    )
  }

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                State
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Crop
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Year
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Season
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Area (ha)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Production (t)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Yield (t/ha)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records.map(record => (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {record.metadata.state.metadata.state_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.metadata.crop.metadata.crop_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.metadata.crop_year}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.metadata.season.value}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.metadata.area.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.metadata.production.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">
                  {record.metadata.yield.toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}