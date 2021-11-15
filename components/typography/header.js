import Markup from './markup'
import styles from './styles.module.scss'
import utils from '../../styles/utils.module.scss'

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
    <div className={styles.typography_header}>
      <Markup h={h} />
      <Tag className={style(size)}>
        {label}
      </Tag>
    </div>
  )
}