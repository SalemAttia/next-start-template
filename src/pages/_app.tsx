import axios from 'axios';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { SWRConfig } from 'swr';
import * as Sentry from '@sentry/node';


if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
      enabled: process.env.NODE_ENV === 'production',
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN
    });
  }

export default class MyApp extends App {
  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('here we go');
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Template main title</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
          <SWRConfig
            value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
          >
              <div>
                <Component {...pageProps} />
              </div>
          </SWRConfig>
      </>
    );
  }
}
