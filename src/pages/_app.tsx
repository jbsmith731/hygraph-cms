import { PreviewModeControls } from '@components/common/PreviewModeControls/PreviewModeControls';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
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
      <Component key={asPath} {...pageProps} />
      <PreviewModeControls />
    </>
  );
}

const NO_INDEX = process.env.NEXT_PUBLIC_NO_INDEX === 'true';

export default MyApp;
