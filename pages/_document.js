// ./pages/_document.js
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/png" href="static/images/favicon-32x32.png" sizes="32x32" />
          <title>Út að keyra</title>
          <meta property="og:title" content="Út að keyra" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.utadkeyra.is/" />
          <meta httpEquiv="Content-Language" content="en" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width,maximum-scale=1" />
          <meta name="og:description " content="Út að keyra makes carpooling easier in Iceland, post a ride or search for drivers to get around Iceland" />
          <meta name="description" content="Út að keyra makes carpooling easier in Iceland, post a ride or search for drivers to get around Iceland" />
          <meta name="keywords" content="carpool,travel,driving,ride,passenger,car,rideshare" />
          <meta name="author" content="Guðmundur Egill" />

          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
