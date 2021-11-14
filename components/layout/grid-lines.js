import styles from './styles.module.scss'
import cx from 'classnames'
import { motion } from 'framer-motion'

const top_variants = {
  hidden: { opacity: 0, y: "50vh" },
  enter: { opacity: 1, y: "80px" }
}

const bottom_variants = {
  hidden: { opacity: 0, y: "50vh" },
  enter: { opacity: 1, y: "calc(100vh - 80px)" }
}

const left_variants = {
  hidden: { opacity: 0, x: "50vw" },
  enter: { opacity: 1, x: "calc(100vw/5)" }
}

const right_variants = {
  hidden: { opacity: 0, x: "50vw" },
  enter: { opacity: 1, x: "calc(400vw/5)" }
}

export default function GridLines({home}) {
  return (
    <div className={cx({
      [styles.intro]: home,
      [styles.grid_lines_container]: true
    })}>
      <motion.div 
        variants={top_variants}
        initial="hidden"
        animate="enter"
        transition={{ ease: [.25,.8,.25,1], duration: 3 }}
        className={styles.line_top}
      ></motion.div>
      <motion.div 
        variants={bottom_variants}
        initial="hidden"
        animate="enter"
        transition={{ ease: [.25,.8,.25,1], duration: 3 }}
        className={styles.line_bottom}
      ></motion.div>
      <motion.div 
        variants={left_variants}
        initial="hidden"
        animate="enter"
        transition={{ ease: [.25,.8,.25,1], duration: 3 }}
        className={styles.line_left}
      ></motion.div><motion.div 
      variants={right_variants}
      initial="hidden"
      animate="enter"
      transition={{ ease: [.25,.8,.25,1], duration: 3 }}
      className={styles.line_right}
    ></motion.div>
    </div>
  )
}