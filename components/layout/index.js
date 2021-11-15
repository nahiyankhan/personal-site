import Head from 'next/head'
import cx from 'classnames'
import GridLines from './grid-lines'
import styles from './styles.module.scss'
import utilStyles from '../../styles/utils.module.scss'

const siteTitle = 'Nahiyan Khan - Portfolio'

export default function Layout({ left, right, home }) {
  return (
    <>
      <div className={cx({
          [styles.home]: home,
          [styles.container]: true
        })}>
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

        <GridLines home/>

        <div className={styles.container_left}>
          {left}
        </div>
        <div className={styles.container_right}>
          {right}
        </div>
      </div>
    </>
  )
}