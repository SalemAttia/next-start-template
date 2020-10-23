import axios from 'axios'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { SWRConfig } from 'swr'
import * as Sentry from '@sentry/node'
import * as gtag from '../../scripts/gtag'
import { Router } from 'next/dist/client/router'

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV === 'production',
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  })
}

const App = ({ Component, pageProps }) => {
  const isProduction = process.env.NODE_ENV === 'production'
  // google analitc configration
  if (isProduction) {
    useEffect(() => {
      const handleRouteChange = (url) => {
        gtag.pageview(url)
      }
      Router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        Router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [])
  }

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
  )
}

export default App
