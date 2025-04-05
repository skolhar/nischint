'use client'

interface RetirementGoal {
  target_age: number
  current_age: number
  monthly_expenses: number
  inflation_rate: number
  expected_returns: number
  current_savings: number
  monthly_savings: number
  risk_profile: string
  completion_probability: number
  safe_withdrawal_rate: number
}

interface Portfolio {
  total_value: number
  allocation: {
    equity: number
    debt: number
    gold: number
    real_estate: number
    others: number
  }
}

interface RetirementInsightsProps {
  goal: RetirementGoal
  portfolio: Portfolio
}

export default function RetirementInsights({ goal, portfolio }: RetirementInsightsProps) {
  const getRiskLevelColor = (risk: string) => {
    switch (risk) {
      case 'conservative':
        return 'bg-green-100 text-green-800'
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800'
      case 'aggressive':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCompletionStatus = (probability: number) => {
    if (probability >= 80) return 'On Track'
    if (probability >= 50) return 'Needs Attention'
    return 'At Risk'
  }

  const getCompletionStatusColor = (probability: number) => {
    if (probability >= 80) return 'text-green-600'
    if (probability >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Retirement Insights</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Risk Profile</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskLevelColor(goal.risk_profile)}`}>
            {goal.risk_profile.charAt(0).toUpperCase() + goal.risk_profile.slice(1)}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Goal Completion Status</h3>
          <div className="flex items-center space-x-2">
            <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${goal.completion_probability}%` }}
              />
            </div>
            <span className={`text-sm font-medium ${getCompletionStatusColor(goal.completion_probability)}`}>
              {getCompletionStatus(goal.completion_probability)}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {goal.completion_probability}% probability of meeting retirement goals
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Safe Withdrawal Rate</h3>
          <p className="text-2xl font-bold">{goal.safe_withdrawal_rate}%</p>
          <p className="text-sm text-gray-600 mt-1">
            Recommended annual withdrawal rate from retirement corpus
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Portfolio Health</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Portfolio Value</span>
              <span className="font-medium">₹{portfolio.total_value.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Equity Allocation</span>
              <span className="font-medium">{portfolio.allocation.equity}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Debt Allocation</span>
              <span className="font-medium">{portfolio.allocation.debt}%</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Recommendations</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Consider increasing monthly savings by 10%</li>
            <li>• Rebalance portfolio to maintain target allocation</li>
            <li>• Review insurance coverage for retirement</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 