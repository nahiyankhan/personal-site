import Head from 'next/head'
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../prismicio";

import Layout from '../components/layout'
import Intro from '../components/intro'
import Projects from '../components/projects'
import About from '../components/about'
import Contact from '../components/contact'

const Home = ({ page }) => {
  const siteTitle = 'Nahiyan Khan - Portfolio'

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <p>{prismicH.asText(page.data.tagline)}</p>

      <Intro />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Home

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("homepage", "homepage", { lang: locale });

  return {
    props: {
      page
    },
  };
}