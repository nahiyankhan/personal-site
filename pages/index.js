import Head from 'next/head'
import { Layout, Hero, Projects, Section, Grid } from '../components'

export default function Home() {
  const siteTitle = 'Nahiyan Khan - Portfolio'

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Section
        left={
          <Hero />
        }
      >
        <Grid />
      </Section>

      <Section
        left={
          <Projects />
        }
      >

      </Section>


    </Layout>
  )
}