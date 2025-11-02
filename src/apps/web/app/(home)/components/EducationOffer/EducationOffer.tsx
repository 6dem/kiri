import { Button } from "@components/Button"
import styles from './EducationOffer.module.scss'

export function EducationOffer() {
    return <section id="education" className={styles.EducationOffer}> 
      <div className="container">
        <h2 className={styles.title}>Обучение в школе &quot;КИРИ&quot;</h2>
        <p className={styles.subtitle}>
          Мы обучаем игре Го с нуля и помогаем совершенствовать мастерство.
        </p>

        <div className={styles.formats}>
          <div className={styles.card}>
            <h3>Индивидуальные занятия</h3>
            <p>Персональный подход для максимального результата.</p>
          </div>
          <div className={styles.card}>
            <h3>Групповые тренировки</h3>
            <p>Обучение в дружеской атмосфере и командном духе.</p>
          </div>
          <div className={styles.card}>
            <h3>Онлайн и офлайн</h3>
            <p>Выбирайте удобный формат и время.</p>
          </div>
        </div>

        <Button href="#contacts">
          Записаться на занятие
        </Button>

      </div>
    </section>
}
