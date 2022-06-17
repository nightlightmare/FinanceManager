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
    // Если надо что-то поменять в дефолтных пропсах
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          {/* Порталы рендерятся здесь при использования HOC/Portal */}
          <div id="portal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
