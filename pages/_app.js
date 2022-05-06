import Head from 'next/head'
import '../styles/globals.scss'
import Link from 'next/link'
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import ThemeProvider from "../components/themeProvider"
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
      <ParallaxProvider>
        <ThemeProvider>
          <AnimatePresence
            exitBeforeEnter
            //initial={false}
            onExitComplete={() =>
              typeof window !== "undefined" && window.scrollTo(0, 0)
            }
          >
            <PrismicPreview repositoryName={repositoryName}>
              <Component {...pageProps} />
            </PrismicPreview>
          </AnimatePresence>
        </ThemeProvider>
      </ParallaxProvider>
    </PrismicProvider>
  )
}

export default MyApp
