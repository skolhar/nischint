const API_URL = 'http://localhost:8055';
const TOKEN = '2kE892uA0dUL4oOtna1dls-xgceSO7m-';

async function createCollections() {
  try {
    // Create Resources Collection
    await fetch(`${API_URL}/collections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        collection: 'resources',
        meta: {
          icon: 'article',
          note: 'Educational resources for retirement planning',
          display_template: '{{name}}',
          sort_field: 'published_at',
        },
        schema: {
          name: 'resources',
          comment: 'Educational resources for retirement planning',
        },
        fields: [
          {
            field: 'id',
            type: 'integer',
            meta: {
              hidden: true,
              interface: 'input',
              readonly: true,
            },
            schema: {
              is_primary_key: true,
              has_auto_increment: true,
            },
          },
          {
            field: 'name',
            type: 'string',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter resource name',
              },
              required: true,
            },
            schema: {
              is_nullable: false,
            },
          },
          {
            field: 'description',
            type: 'text',
            meta: {
              interface: 'input-multiline',
              options: {
                placeholder: 'Enter resource description',
              },
            },
          },
          {
            field: 'type',
            type: 'string',
            meta: {
              interface: 'select-dropdown',
              options: {
                choices: [
                  { text: 'Article', value: 'article' },
                  { text: 'Video', value: 'video' },
                  { text: 'Podcast', value: 'podcast' },
                ],
              },
              required: true,
            },
          },
          {
            field: 'url',
            type: 'string',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter resource URL',
              },
            },
          },
          {
            field: 'language',
            type: 'string',
            meta: {
              interface: 'select-dropdown',
              options: {
                choices: [
                  { text: 'English', value: 'en' },
                  { text: 'Hindi', value: 'hi' },
                ],
              },
              default: 'en',
            },
          },
          {
            field: 'tags',
            type: 'json',
            meta: {
              interface: 'tags',
              options: {
                placeholder: 'Enter tags',
              },
            },
          },
          {
            field: 'published',
            type: 'boolean',
            meta: {
              interface: 'boolean',
              options: {
                label: 'Published',
              },
              default: false,
            },
          },
          {
            field: 'published_at',
            type: 'timestamp',
            meta: {
              interface: 'datetime',
              options: {
                includeSeconds: true,
              },
            },
          },
        ],
      }),
    });

    // Create Wiki Entries Collection
    await fetch(`${API_URL}/collections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        collection: 'wiki_entries',
        meta: {
          icon: 'book',
          note: 'Retirement planning wiki entries',
          display_template: '{{title}}',
          sort_field: 'order',
        },
        schema: {
          name: 'wiki_entries',
          comment: 'Retirement planning wiki entries',
        },
        fields: [
          {
            field: 'id',
            type: 'integer',
            meta: {
              hidden: true,
              interface: 'input',
              readonly: true,
            },
            schema: {
              is_primary_key: true,
              has_auto_increment: true,
            },
          },
          {
            field: 'title',
            type: 'string',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter wiki entry title',
              },
              required: true,
            },
            schema: {
              is_nullable: false,
            },
          },
          {
            field: 'content',
            type: 'text',
            meta: {
              interface: 'input-rich-text-md',
              options: {
                placeholder: 'Enter wiki content',
              },
              required: true,
            },
          },
          {
            field: 'slug',
            type: 'string',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter URL slug',
              },
              required: true,
            },
          },
          {
            field: 'parent',
            type: 'integer',
            meta: {
              interface: 'select-dropdown-m2o',
              options: {
                template: '{{title}}',
              },
            },
            schema: {
              foreign_key_table: 'wiki_entries',
              foreign_key_column: 'id',
            },
          },
          {
            field: 'order',
            type: 'integer',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter display order',
              },
            },
          },
          {
            field: 'language',
            type: 'string',
            meta: {
              interface: 'select-dropdown',
              options: {
                choices: [
                  { text: 'English', value: 'en' },
                  { text: 'Hindi', value: 'hi' },
                ],
              },
              default: 'en',
            },
          },
          {
            field: 'published',
            type: 'boolean',
            meta: {
              interface: 'boolean',
              options: {
                label: 'Published',
              },
              default: false,
            },
          },
          {
            field: 'published_at',
            type: 'timestamp',
            meta: {
              interface: 'datetime',
              options: {
                includeSeconds: true,
              },
            },
          },
        ],
      }),
    });

    // Create Retirement Goals Collection
    await fetch(`${API_URL}/collections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        collection: 'retirement_goals',
        meta: {
          icon: 'flag',
          note: 'User retirement goals and calculations',
          display_template: '{{user}} - {{target_age}}',
        },
        schema: {
          name: 'retirement_goals',
          comment: 'User retirement goals and calculations',
        },
        fields: [
          {
            field: 'id',
            type: 'integer',
            meta: {
              hidden: true,
              interface: 'input',
              readonly: true,
            },
            schema: {
              is_primary_key: true,
              has_auto_increment: true,
            },
          },
          {
            field: 'user',
            type: 'string',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter user ID',
              },
              required: true,
            },
          },
          {
            field: 'target_age',
            type: 'integer',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter target retirement age',
              },
              required: true,
            },
          },
          {
            field: 'current_age',
            type: 'integer',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter current age',
              },
              required: true,
            },
          },
          {
            field: 'monthly_expenses',
            type: 'float',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter monthly expenses',
              },
              required: true,
            },
          },
          {
            field: 'inflation_rate',
            type: 'float',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter expected inflation rate',
              },
              required: true,
            },
          },
          {
            field: 'expected_returns',
            type: 'float',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter expected returns',
              },
              required: true,
            },
          },
          {
            field: 'current_savings',
            type: 'float',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter current savings',
              },
              required: true,
            },
          },
          {
            field: 'monthly_savings',
            type: 'float',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter monthly savings',
              },
              required: true,
            },
          },
          {
            field: 'risk_profile',
            type: 'string',
            meta: {
              interface: 'select-dropdown',
              options: {
                choices: [
                  { text: 'Conservative', value: 'conservative' },
                  { text: 'Moderate', value: 'moderate' },
                  { text: 'Aggressive', value: 'aggressive' },
                ],
              },
              required: true,
            },
          },
          {
            field: 'completion_probability',
            type: 'float',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter completion probability',
              },
            },
          },
          {
            field: 'safe_withdrawal_rate',
            type: 'float',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter safe withdrawal rate',
              },
            },
          },
          {
            field: 'status',
            type: 'string',
            meta: {
              interface: 'select-dropdown',
              options: {
                choices: [
                  { text: 'Active', value: 'active' },
                  { text: 'Completed', value: 'completed' },
                  { text: 'Archived', value: 'archived' },
                ],
              },
              default: 'active',
            },
          },
        ],
      }),
    });

    // Create Investment Portfolios Collection
    await fetch(`${API_URL}/collections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        collection: 'investment_portfolios',
        meta: {
          icon: 'account_balance',
          note: 'User investment portfolios',
          display_template: '{{user}} - {{name}}',
        },
        schema: {
          name: 'investment_portfolios',
          comment: 'User investment portfolios',
        },
        fields: [
          {
            field: 'id',
            type: 'integer',
            meta: {
              hidden: true,
              interface: 'input',
              readonly: true,
            },
            schema: {
              is_primary_key: true,
              has_auto_increment: true,
            },
          },
          {
            field: 'user',
            type: 'string',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter user ID',
              },
              required: true,
            },
          },
          {
            field: 'name',
            type: 'string',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter portfolio name',
              },
              required: true,
            },
          },
          {
            field: 'total_value',
            type: 'float',
            meta: {
              interface: 'input',
              options: {
                placeholder: 'Enter total portfolio value',
              },
              required: true,
            },
          },
          {
            field: 'assets',
            type: 'json',
            meta: {
              interface: 'input-multiline',
              options: {
                placeholder: 'Enter asset details',
              },
            },
          },
          {
            field: 'allocation',
            type: 'json',
            meta: {
              interface: 'input-multiline',
              options: {
                placeholder: 'Enter asset allocation',
              },
            },
          },
          {
            field: 'status',
            type: 'string',
            meta: {
              interface: 'select-dropdown',
              options: {
                choices: [
                  { text: 'Active', value: 'active' },
                  { text: 'Archived', value: 'archived' },
                ],
              },
              default: 'active',
            },
          },
        ],
      }),
    });

    console.log('Collections created successfully!');
  } catch (error) {
    console.error('Error creating collections:', error);
  }
}

createCollections(); 