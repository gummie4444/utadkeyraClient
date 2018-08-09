// ./pages/_document.js
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/png" href="static/images/favicon-32x32.png" sizes="32x32" />
          <title>Út að keyra</title>
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