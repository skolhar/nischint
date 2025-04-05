import { calculateRetirementCorpus } from '@/utils/calculations'

describe('Retirement Calculations', () => {
  test('calculates retirement corpus correctly', () => {
    const input = {
      target_age: 60,
      current_age: 30,
      monthly_expenses: 50000,
      inflation_rate: 6,
      expected_returns: 8,
      current_savings: 1000000,
      monthly_savings: 25000
    }

    const result = calculateRetirementCorpus(input)
    
    expect(result.corpus).toBeGreaterThan(0)
    expect(result.monthlyExpense).toBeGreaterThan(input.monthly_expenses)
  })

  test('handles edge cases', () => {
    const input = {
      target_age: 30,
      current_age: 30,
      monthly_expenses: 0,
      inflation_rate: 0,
      expected_returns: 0,
      current_savings: 0,
      monthly_savings: 0
    }

    const result = calculateRetirementCorpus(input)
    
    expect(result.corpus).toBe(0)
    expect(result.monthlyExpense).toBe(0)
  })
}) 