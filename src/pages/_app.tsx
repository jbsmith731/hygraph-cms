import { PreviewModeControls } from '@components/common/PreviewModeControls/PreviewModeControls';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as React from 'react';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      }),
  );
  const { asPath } = useRouter();

  return (
    <>
      <DefaultSeo
        defaultTitle="Next.js Starter"
        titleTemplate="%s | Next.js Starter"
        description="Default description goes here"
        dangerouslySetAllPagesToNoIndex={NO_INDEX}
        dangerouslySetAllPagesToNoFollow={NO_INDEX}
      />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component key={asPath} {...pageProps} />
          <PreviewModeControls />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

const NO_INDEX = process.env.NEXT_PUBLIC_NO_INDEX === 'true';

export default MyApp;
