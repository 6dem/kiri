import Image from "next/image"
import styles from './AboutGo.module.scss'

export function AboutGo() {
    return <section id="about" className={styles.About}> 
      <div className="container">
        <h2 className={styles.title}>Что такое Го?</h2>
        <blockquote className={styles.quote}>«Игра, которая учит мыслить на десятилетия вперед»</blockquote>
        <div className={styles.content}>
          <Image className={styles.image} src="/aboutGo_img.png" alt="Main image" width={450} height={300} />
          <div className={styles.text}>
            <p>Го — древнейшая стратегическая настольная игра, возникшая более 2500 лет назад в Китае.</p>
            <p>Главная цель — гармония между захватом пространства и балансом.</p>
            <p>Го развивает стратегическое мышление, внимание и терпение.</p>
          </div>
        </div>
      </div>
    </section>
}
