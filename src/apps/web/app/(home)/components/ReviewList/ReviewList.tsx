import { Review, ReviewProps } from '@components/Review'
import Image from "next/image"
import styles from './ReviewList.module.scss'

const reviews: ReviewProps[] = [
  { name: 'Эдем', text: 'Отличная школа!' },
  { name: 'Гирай', text: 'Очень доволен работой.' },
  { name: 'Руслан', text: 'Рекомендую всем!' },
  { name: 'лишний отзыв', text: '---не должно быть видно---!' },
]

export function ReviewList() {
  return (
    <section id="reviews" className={styles.ReviewList}>
      <div className="container">
        <Image className={styles.brush} src="/icons/brush.svg" alt="brush icon" width={100} height={100}/>
        <h2 className={styles.stickyTitle}>Что о нас говорят</h2>
        <div className={styles.list}>
          {reviews.slice(0, 3).map((review, idx) => (
            <Review key={idx} {...review} />
          ))}
        </div>
          <Image className={styles.origami} src="/icons/origami.svg" alt="origami icon" width={100} height={100}/>
      </div>
    </section>
  )
}