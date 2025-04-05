import { createDirectus, rest, readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk'

const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055')
  .with(rest())

export async function getResources() {
  try {
    console.log('Fetching resources from:', process.env.NEXT_PUBLIC_DIRECTUS_URL);
    const resources = await directus.request(
      readItems('resources', {
        fields: ['*', 'category.*'],
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
        fields: [
          'id',
          'title',
          'content',
          'slug',
          'parent',
          'order',
          'published',
          'published_at'
        ],
        filter: {
          published: {
            _eq: true
          }
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

export async function getInvestmentPortfolios() {
  try {
    const portfolios = await directus.request(
      readItems('investment_portfolios', {
        fields: ['*', 'user.*', 'assets.*'],
        sort: ['-date_created'],
      })
    );
    return portfolios;
  } catch (error) {
    console.error('Error fetching investment portfolios:', error);
    return [];
  }
}

export default directus 