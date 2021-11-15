import { motion } from 'framer-motion'
import cx from 'classnames'
import utils from '../../styles/utils.module.scss'

export default function Hero() {
  const name = 'Nahiyan Khan'
  const tagline = 'UX Engineer | Design Systems'
  const intro = 'I am passionate about design systems, and creating inclusive team environments where everyone is able to do their best work together.'

  const variants = {
    start: { opacity: 0, scale: 0.90, x: 10 },
    end: { opacity: 1, scale: 1, x: 0 }
  }

  return (
    <motion.div
      variants={variants}
      initial="start"
      animate="end"
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
  )
}