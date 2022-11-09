import { CodegenConfig } from '@graphql-codegen/cli';

const CMS_URL = process.env.CMS_URL ?? '';
const CMS_PROD_TOKEN = process.env.CMS_PROD_TOKEN ?? '';

const config: CodegenConfig = {
  schema: [
    {
      [CMS_URL]: {
        headers: {
          Authorization: `Bearer ${CMS_PROD_TOKEN}`,
        },
      },
    },
  ],
  documents: ['src/**/*.graphql', '!node_modules'],
  generates: {
    'src/graphql/generated/types.generated.ts': {
      plugins: [
        {
          add: {
            content: `
// DO NOT EDIT
// This file is automatically generated, run yarn gen to update
        `,
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-document-nodes',
      ],
    },
    './schema.generated.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
