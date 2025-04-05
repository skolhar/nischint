export const API_URL = 'http://localhost:8055';
export const TOKEN = '2kE892uA0dUL4oOtna1dls-xgceSO7m-';

export const commonFields = {
  id: {
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
  published: {
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
  published_at: {
    field: 'published_at',
    type: 'timestamp',
    meta: {
      interface: 'datetime',
      options: {
        includeSeconds: true,
      },
    },
  },
  language: {
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
}; 