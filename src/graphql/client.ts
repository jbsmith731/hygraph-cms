import { GraphQLClient, RequestDocument } from 'graphql-request';

const CMS_URL = process.env.CMS_URL ?? '';
const CMS_PROD_TOKEN = process.env.CMS_PROD_TOKEN;

const URL = typeof window === 'undefined' ? CMS_URL : '/api/graphql';

export const createHygraphClient = (preview = false, url?: string) => {
  return new GraphQLClient(url ?? URL, {
    headers: {
      Authorization: `Bearer ${CMS_PROD_TOKEN}`,
      preview: String(preview),
    },
  });
};

export const cmsFetcher = <TData, TVariables>(
  preview: boolean,
  query: RequestDocument,
  variables?: TVariables,
): Promise<TData> => {
  return createHygraphClient(preview).request(query, variables);
};
