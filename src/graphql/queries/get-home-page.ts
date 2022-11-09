import { cmsFetcher } from '@graphql/client';
import {
  GetHomePage,
  GetHomePageQuery,
} from '@graphql/generated/types.generated';
import { useQuery } from '@tanstack/react-query';

const HOME_QUERY_KEY = 'home';

const fetchHomePage = async (preview = false): Promise<GetHomePageQuery> => {
  return cmsFetcher(preview, GetHomePage);
};

const useHomePageQuery = (preview?: boolean) => {
  return useQuery([HOME_QUERY_KEY], () => fetchHomePage(preview));
};

export { fetchHomePage, useHomePageQuery, HOME_QUERY_KEY };
