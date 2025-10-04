import Image from "next/image"
import styles from "./Hero.module.scss"

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>Школа Го &quot;КИРИ&quot;</h1>
        <div className={styles.content}>
          <div className={styles.bubble}>Приветствуем всех, кто любит мудрость, стратегию и красоту древней игры Го!</div>
          <Image src="/icons/go-board.svg" alt="Go board" width={300} height={185}/>
          <Image className={`${styles.goBowl} ${styles.goBowl1}`} src="/icons/go-bowl-inverted.svg" alt="Go bowl" width={120} height={75}/>
          <Image className={`${styles.goBowl} ${styles.goBowl2}`} src="/icons/go-bowl.svg" alt="Go bowl" width={120} height={75}/>
        </div>
      </div>
      <div className={styles.divider}></div>
    </section>
  );
}
