import Head from 'next/head'
import HomeComponent from '../components/home'
import Layout from '../components/layout'

export const Home = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeComponent />
  </Layout>
)

export default Home
