import Image from "next/image"
import styles from './AboutGo.module.scss'

export function AboutGo() {
    return <section id="about" className={styles.About}> 
      <div className="container">
        <h2 className={styles.title}>Что такое Го?</h2>
        <blockquote className={styles.quote}>«Игра, которая учит мыслить на десятилетия вперед»</blockquote>
        <div className={styles.content}>
          <Image className={styles.image} src="/images/aboutGo.jpg" alt="Main image" width={450} height={300} />
          <div className={styles.text}>
            <p>Го — древнейшая стратегическая настольная игра, возникшая более 2500 лет назад в Китае.</p>
            <p>Главная цель — получить территориальное преимущество.</p>
            <p>Го развивает оба полушария мозга, задействуя области как логики и расчёта, так и, интуиции и творчества.</p>
          </div>
        </div>
        <div className={styles.rulesBlock}>
          <div className={styles.rulesText}>
              <blockquote className={styles.quote}>
                  «Игра Го — самая сложная игра, с самыми простыми правилами»
              </blockquote>
              <p className={styles.rulesIntro}>
                  Мы подготовили для вас удобные материалы.  
                  В учебнике собраны ключевые основы игры:
              </p>

              <ul className={styles.rulesList}>
                  <li>Объяснение правил.</li>
                  <li>Примеры партий для начинающих.</li>
                  <li>Этика Го.</li>
              </ul>

              <p className={styles.rulesFooter}>
                  Получить учебник и начать обучение можно в нашем Telegram-боте:
              </p>
          </div>

          <div className={styles.linkWrapper}>
              <Image
                  src="/images/qr-KiriBot.png"
                  alt="QR код на Telegram-бота"
                  width={200}
                  height={200}
                  className={styles.qr}
              />
              <a
                  href="https://t.me/schoolgo_kiribot"
                  className={styles.botLink}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Открыть бота и получить правила
              </a>
          </div>
        </div>
      </div>
    </section>
}
