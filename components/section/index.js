import cx from 'classnames'
import styles from './styles.module.scss'

export default function Section({children, left, right}) {
  return (
    <section className={cx({
      [styles.home]: true,
      [styles.container]: true
    })}>

      {children}

      <div className={styles.container_left}>
        {left}
      </div>
      <div className={styles.container_right}>
        {right}
      </div>
    </section>
  )
}