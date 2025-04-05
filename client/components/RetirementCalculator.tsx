'use client'

import { useState } from 'react'

interface RetirementGoal {
  target_age: number
  current_age: number
  monthly_expenses: number
  inflation_rate: number
  expected_returns: number
  current_savings: number
  monthly_savings: number
  risk_profile: string
}

interface RetirementCalculatorProps {
  initialData?: RetirementGoal
}

export default function RetirementCalculator({ initialData }: RetirementCalculatorProps) {
  const [formData, setFormData] = useState<RetirementGoal>({
    target_age: initialData?.target_age || 60,
    current_age: initialData?.current_age || 30,
    monthly_expenses: initialData?.monthly_expenses || 50000,
    inflation_rate: initialData?.inflation_rate || 6,
    expected_returns: initialData?.expected_returns || 8,
    current_savings: initialData?.current_savings || 0,
    monthly_savings: initialData?.monthly_savings || 0,
    risk_profile: initialData?.risk_profile || 'moderate'
  })

  const calculateRetirementCorpus = () => {
    const yearsToRetirement = formData.target_age - formData.current_age
    const monthlyInflation = formData.inflation_rate / 12 / 100
    const monthlyReturns = formData.expected_returns / 12 / 100
    
    let corpus = formData.current_savings
    let monthlyExpense = formData.monthly_expenses
    
    for (let i = 0; i < yearsToRetirement * 12; i++) {
      corpus = (corpus + formData.monthly_savings) * (1 + monthlyReturns)
      monthlyExpense = monthlyExpense * (1 + monthlyInflation)
    }
    
    return {
      corpus: Math.round(corpus),
      monthlyExpense: Math.round(monthlyExpense)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would save this to the backend
    console.log('Saving retirement goal:', formData)
  }

  const { corpus, monthlyExpense } = calculateRetirementCorpus()

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Retirement Calculator</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Age</label>
            <input
              type="number"
              value={formData.current_age}
              onChange={(e) => setFormData({ ...formData, current_age: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Target Retirement Age</label>
            <input
              type="number"
              value={formData.target_age}
              onChange={(e) => setFormData({ ...formData, target_age: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Monthly Expenses (₹)</label>
            <input
              type="number"
              value={formData.monthly_expenses}
              onChange={(e) => setFormData({ ...formData, monthly_expenses: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Expected Inflation Rate (%)</label>
            <input
              type="number"
              value={formData.inflation_rate}
              onChange={(e) => setFormData({ ...formData, inflation_rate: parseFloat(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Expected Returns (%)</label>
            <input
              type="number"
              value={formData.expected_returns}
              onChange={(e) => setFormData({ ...formData, expected_returns: parseFloat(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Savings (₹)</label>
            <input
              type="number"
              value={formData.current_savings}
              onChange={(e) => setFormData({ ...formData, current_savings: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Savings (₹)</label>
            <input
              type="number"
              value={formData.monthly_savings}
              onChange={(e) => setFormData({ ...formData, monthly_savings: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Risk Profile</label>
            <select
              value={formData.risk_profile}
              onChange={(e) => setFormData({ ...formData, risk_profile: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="conservative">Conservative</option>
              <option value="moderate">Moderate</option>
              <option value="aggressive">Aggressive</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Plan
          </button>
        </div>
      </form>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Retirement Corpus Required</h3>
        <p className="text-2xl font-bold">₹{corpus.toLocaleString()}</p>
        <p className="text-sm text-gray-600 mt-2">
          Monthly expenses at retirement: ₹{monthlyExpense.toLocaleString()}
        </p>
      </div>
    </div>
  )
} 