import '../styles/globals.scss'
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <AnimatePresence
        exitBeforeEnter
        //initial={false}
        onExitComplete={() =>
          typeof window !== "undefined" && window.scrollTo(0, 0)
        }
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ParallaxProvider>
  )
}

export default MyApp
