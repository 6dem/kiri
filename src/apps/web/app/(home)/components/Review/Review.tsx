import styles from './Review.module.scss'

export interface ReviewProps {
  name: string
  text: string
  // rating?: number
  // date?: string
}

export function Review({name, text}: ReviewProps) {
    return <div className={styles.Review}> 
      <div className={styles.name}>{name}</div>
      <div className={styles.text}>{text}</div>
    </div>
}
