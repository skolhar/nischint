import { getRetirementGoals, getInvestmentPortfolios } from '@/lib/directus'
import RetirementCalculator from '@/components/RetirementCalculator'
import InvestmentPortfolio from '@/components/InvestmentPortfolio'
import RetirementInsights from '@/components/RetirementInsights'

export default async function DashboardPage() {
  // In a real app, we would get the user ID from the session
  const userId = 'demo-user'
  const goals = await getRetirementGoals(userId)
  const portfolios = await getInvestmentPortfolios(userId)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Retirement Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RetirementCalculator initialData={goals[0]} />
        </div>
        
        <div className="space-y-8">
          <RetirementInsights goal={goals[0]} portfolio={portfolios[0]} />
          <InvestmentPortfolio portfolio={portfolios[0]} />
        </div>
      </div>
    </div>
  )
} 