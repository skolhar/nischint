'use client'

import { useState } from 'react'

interface Asset {
  type: string
  amount: number
  allocation: number
}

interface Portfolio {
  name: string
  total_value: number
  assets: Asset[]
  allocation: {
    equity: number
    debt: number
    gold: number
    real_estate: number
    others: number
  }
}

interface InvestmentPortfolioProps {
  portfolio: Portfolio
}

export default function InvestmentPortfolio({ portfolio }: InvestmentPortfolioProps) {
  const [showAddAsset, setShowAddAsset] = useState(false)
  const [newAsset, setNewAsset] = useState<Asset>({
    type: '',
    amount: 0,
    allocation: 0
  })

  const handleAddAsset = () => {
    // In a real app, we would save this to the backend
    console.log('Adding new asset:', newAsset)
    setShowAddAsset(false)
    setNewAsset({ type: '', amount: 0, allocation: 0 })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Investment Portfolio</h2>
        <button
          onClick={() => setShowAddAsset(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Asset
        </button>
      </div>

      {showAddAsset && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Add New Asset</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Asset Type</label>
              <input
                type="text"
                value={newAsset.type}
                onChange={(e) => setNewAsset({ ...newAsset, type: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount (₹)</label>
              <input
                type="number"
                value={newAsset.amount}
                onChange={(e) => setNewAsset({ ...newAsset, amount: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Allocation (%)</label>
              <input
                type="number"
                value={newAsset.allocation}
                onChange={(e) => setNewAsset({ ...newAsset, allocation: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={() => setShowAddAsset(false)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleAddAsset}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Asset Allocation</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(portfolio.allocation).map(([type, percentage]) => (
            <div key={type} className="text-center">
              <div className="text-2xl font-bold">{percentage}%</div>
              <div className="text-sm text-gray-600 capitalize">{type.replace('_', ' ')}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Assets</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allocation</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {portfolio.assets.map((asset, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{asset.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{asset.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.allocation}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 