import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import utils from '../../styles/utils.module.scss'

const markupMotion = {
  rest: { 
    opacity: 0, 
    ease: "easeOut", 
    duration: 0.2, 
    type: "tween" 
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn"
    }
  }
}

const textMotion = {
  rest: {
    textShadow: '0px 0px 0px rgba(255, 255, 255, 1)'
  },
  hover: {
    textShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 1
    }
  }
}

export default function Header({h, label, size}) {
  const Tag = `h${h}`
  const style = size => {
    switch(size) {
      case '3XL':
        return utils.heading3Xl
      case '2XL':
        return utils.heading2Xl
      default:
        return ''
    }
  }

  return (
    <>
      <motion.div className={styles.typography_header} initial="rest" whileHover="hover" animate="rest">
        <motion.div 
          className={styles.markup} 
          variants={markupMotion}
        >
          {`h${h}`}
        </motion.div>
        <motion.div
          variants={textMotion}
        >
          <Tag 
            className={style(size)}
          >
            {label}
          </Tag>
        </motion.div>
      </motion.div>
    </>
  )
}