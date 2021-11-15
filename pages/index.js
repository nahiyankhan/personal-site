import Head from 'next/head'
import { Layout, Hero } from '../components'

export default function Home() {
  const siteTitle = 'Nahiyan Khan - Portfolio'

  return (
    <Layout 
      home
      left={
        <Hero />
      }
      >
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
}