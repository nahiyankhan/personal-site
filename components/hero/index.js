import { useRef } from 'react'
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from "framer-motion";
import cx from 'classnames'
import utils from '../../styles/utils.module.scss'
import Header from '../typography/header'

export default function Hero() {
  const name = 'Nahiyan Khan'
  const tagline = 'UX Engineer | Design Systems'
  const intro = 'I am passionate about design systems, and creating inclusive team environments where everyone is able to do their best work together.'

  // Vertical scroll distance in pixels.
  const { scrollY } = useViewportScroll();
  // Transforms scroll and image height values to opacity values
  const yRange = useTransform(scrollY, [300, 0], [0, 1]);
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });

  const containerMotion = {
    hidden: { 
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2,
        ease: [.25,.8,.25,1]
      },
    },
  }

  const childMotion = {
    hidden: { opacity: 0, scale: 0.90, x: 5 },
    show: { 
      opacity: 1, 
      scale: 1, x: 0,
      transition: {
        duration: 2,
        ease: [.25,.8,.25,1]
      }
    }
  }

  return (
    <motion.div
      variants={containerMotion}
      initial="hidden"
      animate="show"
      className={cx({
        [utils.vertical_align_center]: true,
        [utils.pb_5]: true
      })}

      style={opacity}
    >
      <motion.div variants={childMotion}>
        <Header 
          h="1" 
          label={name} 
          size="3XL"
        />
      </motion.div>

      <motion.div variants={childMotion}>
        <Header 
          h="2" 
          label={tagline} 
          size="2XL"
        />
      </motion.div>

      <motion.p 
        className={utils.paragraphXL}
        variants={childMotion}
      >
        {intro}
      </motion.p>
      <motion.p 
        className={utils.paragraphXL}
        variants={childMotion}
      >
        Say hello at nahiyan.khan@gmail.com
      </motion.p>
    </motion.div>
  )
}