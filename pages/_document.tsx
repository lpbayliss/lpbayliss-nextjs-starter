import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CSSReset } from '../components';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Amaranth&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <CSSReset />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
