import { Review, ReviewProps } from '@components/Review'
import styles from './ReviewList.module.scss'

const reviews: ReviewProps[] = [
  { name: 'Эдем', text: 'Отличная школа!' },
  { name: 'Гирай', text: 'Очень доволен работой.' },
  { name: 'Руслан', text: 'Рекомендую всем!' },
  { name: 'лишний отзыв', text: '---не должно быть видно---!' },
]

export function ReviewList() {
  return (
    <section className={styles.ReviewList}>
      <div id="reviews" className="container">
        <h2 className={styles.stickyTitle}>Что о нас говорят</h2>
        <div className={styles.list}>
          {reviews.slice(0, 3).map((review, idx) => (
            <Review key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}