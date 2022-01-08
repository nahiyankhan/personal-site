import Head from 'next/head'
import '../styles/globals.scss'
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import ThemeProvider from "../components/themeProvider"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ParallaxProvider>
      <ThemeProvider>
        <AnimatePresence
          exitBeforeEnter
          //initial={false}
          onExitComplete={() =>
            typeof window !== "undefined" && window.scrollTo(0, 0)
          }
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </ParallaxProvider>
    </>
  )
}

export default MyApp
