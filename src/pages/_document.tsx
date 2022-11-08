import { FONTS } from '@utils/constants/fonts.constants';
import { BASE_PATH } from '@utils/constants/path.constants';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href={`${BASE_PATH}/fonts/untitled-sans-regular.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: FONTS,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
