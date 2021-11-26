import Head from 'next/head'
import Layout from '../components/layout'
import Intro from '../components/intro'
import Projects from '../components/projects'
import About from '../components/about'
import Contact from '../components/contact'

export default function Home() {
  const siteTitle = 'Nahiyan Khan - Portfolio'

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Intro />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}