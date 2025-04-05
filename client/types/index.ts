export interface RetirementGoal {
  id: string;
  user_id: string;
  target_age: number;
  current_age: number;
  monthly_expenses: number;
  inflation_rate: number;
  expected_returns: number;
  current_savings: number;
  monthly_savings: number;
  risk_profile: 'conservative' | 'moderate' | 'aggressive';
  completion_probability: number;
  safe_withdrawal_rate: number;
  created_at: string;
  updated_at: string;
}

export interface PortfolioAsset {
  type: string;
  amount: number;
  allocation: number;
}

export interface PortfolioAllocation {
  equity: number;
  debt: number;
  cash: number;
  other: number;
}

export interface InvestmentPortfolio {
  id: string;
  user_id: string;
  name: string;
  total_value: number;
  assets: PortfolioAsset[];
  allocation: PortfolioAllocation;
  created_at: string;
  updated_at: string;
} 