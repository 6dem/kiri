import styles from "./Hero.module.scss"

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1>Го — древняя игра, развивающая мышление</h1>
      <p>Узнайте, почему миллионы людей по всему миру занимаются Го.</p>
    </section>
  );
}
