import { createDirectus, rest, createItem, staticToken, updateItem } from '@directus/sdk';

const directus = createDirectus('http://localhost:8055')
  .with(staticToken('2kE892uA0dUL4oOtna1dls-xgceSO7m-'))
  .with(rest());

async function populateMockData() {
  try {
    // Create resources
    const resources = [
      {
        name: 'Understanding Retirement Planning in India',
        description: 'A comprehensive guide to retirement planning in the Indian context',
        type: 'article',
        url: 'https://example.com/retirement-guide',
        language: 'en',
        tags: ['retirement', 'planning', 'india'],
        published: true,
        published_at: new Date().toISOString(),
        author: 'Financial Expert',
        content: 'Detailed content about retirement planning...'
      },
      {
        name: 'Best Investment Options for Retirement',
        description: 'Analysis of various investment options suitable for retirement planning',
        type: 'video',
        url: 'https://youtube.com/watch?v=example',
        language: 'en',
        tags: ['investments', 'retirement'],
        published: true,
        published_at: new Date().toISOString(),
        author: 'Investment Advisor',
        content: 'Video content about investment options...'
      }
    ]

    for (const resource of resources) {
      await directus.request(createItem('resources', resource))
    }

    // Create wiki entries
    const wikiEntries = [
      {
        title: 'Introduction to Retirement Planning',
        content: 'Comprehensive introduction to retirement planning...',
        slug: 'introduction',
        order: 1,
        language: 'en',
        published: true,
        published_at: new Date().toISOString(),
        author: 'Wiki Editor'
      },
      {
        title: 'Investment Strategies',
        content: 'Detailed investment strategies for retirement...',
        slug: 'investment-strategies',
        parent: null,
        order: 2,
        language: 'en',
        published: true,
        published_at: new Date().toISOString(),
        author: 'Wiki Editor'
      }
    ]

    // First create all entries
    const createdEntries = [];
    for (const entry of wikiEntries) {
      const createdEntry = await directus.request(createItem('wiki_entries', entry));
      createdEntries.push(createdEntry);
    }

    // Then update parent references if needed
    for (let i = 0; i < wikiEntries.length; i++) {
      if (wikiEntries[i].parent !== null) {
        const parentEntry = createdEntries.find(e => e.slug === wikiEntries[i].parent);
        if (parentEntry) {
          await directus.request(updateItem('wiki_entries', createdEntries[i].id, {
            parent: parentEntry.id
          }));
        }
      }
    }

    // Create retirement goals
    const retirementGoals = [
      {
        user: 'demo-user',
        target_age: 60,
        current_age: 30,
        monthly_expenses: 50000,
        inflation_rate: 6,
        expected_returns: 8,
        current_savings: 1000000,
        monthly_savings: 25000,
        risk_profile: 'moderate',
        completion_probability: 75,
        safe_withdrawal_rate: 4,
        status: 'active'
      }
    ]

    for (const goal of retirementGoals) {
      await directus.request(createItem('retirement_goals', goal))
    }

    // Create investment portfolios
    const portfolios = [
      {
        user: 'demo-user',
        name: 'Main Portfolio',
        total_value: 1500000,
        assets: [
          { type: 'Equity', amount: 750000, allocation: 50 },
          { type: 'Debt', amount: 450000, allocation: 30 },
          { type: 'Gold', amount: 150000, allocation: 10 },
          { type: 'Real Estate', amount: 150000, allocation: 10 }
        ],
        allocation: {
          equity: 50,
          debt: 30,
          gold: 10,
          real_estate: 10,
          others: 0
        },
        status: 'active'
      }
    ]

    for (const portfolio of portfolios) {
      await directus.request(createItem('investment_portfolios', portfolio))
    }

    console.log('Mock data populated successfully!')
  } catch (error) {
    console.error('Error populating mock data:', error)
  }
}

populateMockData();
