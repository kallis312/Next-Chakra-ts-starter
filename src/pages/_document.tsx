import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import createEmotionServer from '@emotion/server/create-instance';

import emotionCache from '@/lib/emotion';

// TODO:
// 1. Generate your favicon on sites like https://www.favicon-generator.org/ then replace /public/favicon folder with yours
// 2. Change information on /public/manifest.json

const { extractCritical } = createEmotionServer(emotionCache);
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key='emotion-css'
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(' ')}
        />,
      ],
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='/favicon/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='/favicon/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='/favicon/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/favicon/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/favicon/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/favicon/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/favicon/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/favicon/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/favicon/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/favicon/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <meta
            name='msapplication-TileImage'
            content='/favicon/ms-icon-144x144.png'
          />
          {/* TODO: Change these two colors with your brand color */}
          <meta name='msapplication-TileColor' content='#171923' />
          <meta name='theme-color' content='#171923' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
