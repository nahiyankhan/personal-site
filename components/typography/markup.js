import styles from './styles.module.scss'
import { motion } from 'framer-motion'

export default function Markup({h}) {
  return (
    <motion.div 
      className={styles.markup} 
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    >
      {`h${h}`}
    </motion.div>
  )
}