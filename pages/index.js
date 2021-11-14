import Head from 'next/head'
import { Layout } from '../components'
import cx from 'classnames'
import { motion } from 'framer-motion'
import utils from '../styles/utils.module.scss'

const siteTitle = 'Nahiyan Khan - Portfolio'
const name = 'Nahiyan Khan'
const tagline = 'UX Engineer | Design Systems'
const intro = 'I am passionate about creating inclusive, engaging, and enjoyable team environments that allow designers, engineers, and product managers to do their best work together.'

const anim_variants = {
  hidden: { opacity: 0, scale: 0.95, x: -10 },
  enter: { opacity: 1, scale: 1, x: 0 }
}

export default function Home() {
  return (
    <Layout 
      home
      left={
        <motion.div
          variants={anim_variants}
          initial="hidden"
          animate="enter"
          transition={{ ease: [.25,.8,.25,1], duration: 2, delay: 2 }}
          className={cx({
            [utils.vertical_align_center]: true,
            [utils.pb_5]: true
          })}
        > 
          <h1 className={utils.heading3Xl}>{name}</h1>
          <h2 className={utils.heading2Xl}>{tagline}</h2>

          <p className={utils.paragraphXL}>{intro}</p>

          <p className={utils.paragraphXL}>Say hello at nahiyan.khan@gmail.com</p>
        </motion.div>
      }>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
}