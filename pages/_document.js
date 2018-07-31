// ./pages/_document.js
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width,maximum-scale=1, user-scalable=0"/>
          <link rel="stylesheet" href="/_next/static/style.css" />


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}