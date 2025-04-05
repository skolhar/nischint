import { getRetirementGoals, getInvestmentPortfolios } from '@/lib/directus'
import RetirementCalculator from '@/components/RetirementCalculator'
import InvestmentPortfolio from '@/components/InvestmentPortfolio'
import RetirementInsights from '@/components/RetirementInsights'
import { CalculatorIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default async function DashboardPage() {
  // In a real app, we would get the user ID from the session
  const userId = 'demo-user'
  const goals = await getRetirementGoals(userId)
  const portfolios = await getInvestmentPortfolios(userId)

  const hasData = goals.length > 0 && portfolios.length > 0

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Retirement Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Track your retirement goals and monitor your investment portfolio
        </p>
      </div>

      {hasData ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RetirementCalculator initialData={goals[0]} />
          </div>
          
          <div className="space-y-8">
            <RetirementInsights goal={goals[0]} portfolio={portfolios[0]} />
            <InvestmentPortfolio portfolio={portfolios[0]} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-8 text-center">
            <CalculatorIcon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Retirement Goals Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Start by creating your retirement goals using our calculator
            </p>
            <button className="btn-primary">
              Create Retirement Plan
            </button>
          </div>

          <div className="card p-8 text-center">
            <ChartBarIcon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Investment Portfolio Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Add your investments to track your portfolio performance
            </p>
            <button className="btn-primary">
              Add Investments
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 