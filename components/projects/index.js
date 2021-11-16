import Header from '../typography/header'
import styles from './styles.module.scss'

export default function() {
  return (
    <>
      <Header 
        h="2" 
        label={'Projects'} 
        size="XL"
      />

      <div className={styles.project_container}>
        <div className={styles.project}>
          <div className={styles.hero_image}>

          </div>
          <Header 
            h="3" 
            label={'Design System Implementation'} 
            size="2XL"
          />
        </div>

        <div className={styles.project}>
          <div className={styles.hero_image}>
            
          </div>
          <Header 
            h="3" 
            label={'Design System Website'} 
            size="2XL"
          />
        </div>

        <div className={styles.project}>
          <div className={styles.hero_image}>
            
          </div>
          <Header 
            h="3" 
            label={'Color Palette'} 
            size="2XL"
          />
        </div>
      </div>
    </>
  )
}