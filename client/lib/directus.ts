import { createDirectus, rest, readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk'
import { RetirementGoal, InvestmentPortfolio } from '@/types'

const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055')
  .with(rest())

export async function getResources() {
  try {
    console.log('Fetching resources from:', process.env.NEXT_PUBLIC_DIRECTUS_URL);
    const resources = await directus.request(
      readItems('resources', {
        filter: {
          published: {
            _eq: true,
          },
        },
        sort: ['-published_at'],
      })
    );
    console.log('Fetched resources:', resources);
    return resources;
  } catch (error) {
    console.error('Error fetching resources:', error);
    return [];
  }
}

export async function getWikiEntries() {
  try {
    console.log('Fetching wiki entries from:', process.env.NEXT_PUBLIC_DIRECTUS_URL);
    const entries = await directus.request(
      readItems('wiki_entries', {
        filter: {
          published: {
            _eq: true,
          },
        },
        sort: ['order'],
      })
    );
    console.log('Fetched wiki entries:', entries);
    return entries;
  } catch (error) {
    console.error('Error fetching wiki entries:', error);
    return [];
  }
}

export async function getRetirementPlans() {
  try {
    const plans = await directus.request(
      readItems('retirement_plans', {
        fields: ['*', 'user.*'],
        sort: ['-date_created'],
      })
    );
    return plans;
  } catch (error) {
    console.error('Error fetching retirement plans:', error);
    return [];
  }
}

export async function getRetirementGoals(userId: string): Promise<RetirementGoal[]> {
  try {
    const goals = await directus.request(
      readItems('retirement_goals', {
        filter: {
          user_id: {
            _eq: userId,
          },
        },
        sort: ['-created_at'],
      })
    );
    return goals as RetirementGoal[];
  } catch (error) {
    console.error('Error fetching retirement goals:', error);
    return [];
  }
}

export async function getInvestmentPortfolios(userId: string): Promise<InvestmentPortfolio[]> {
  try {
    const portfolios = await directus.request(
      readItems('investment_portfolios', {
        filter: {
          user_id: {
            _eq: userId,
          },
        },
        sort: ['-created_at'],
      })
    );
    return portfolios as InvestmentPortfolio[];
  } catch (error) {
    console.error('Error fetching investment portfolios:', error);
    return [];
  }
}

export default directus 