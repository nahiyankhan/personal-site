import Head from 'next/head'
import Container from './container'
// import Cursor from './cursor'
import Header from './header'
import GridLines from './gridLines'

const siteTitle = 'Nahiyan Khan - Portfolio'

export default function Layout({ home, children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Nahiyan Khan - Portfolio"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* <Cursor /> */}
      <Header />

      <GridLines />

      <Container>
        {children}
      </Container>
    </>
  )
}