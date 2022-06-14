import React from 'react';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;500;600&family=Noto+Sans+Display:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <div id="portal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
