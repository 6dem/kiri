import styles from "./Footer.module.scss"

export function Footer() {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const years = startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.copy}>
            <p>© {years} Школа Го &quot;КИРИ&quot;</p>
            <p>
              Разработка —{" "}
              <a
                href="https://6dem.ru"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.author}
              >
                6dem
              </a>
            </p>
          </div>
          <nav className={styles.nav}>
            <a href="#hero">Главная</a>
            <a href="#about">О Го</a>
            <a href="#education">Обучение</a>
            <a href="#teachers">Преподаватели</a>
            <a href="#reviews">Отзывы</a>
            <a href="#faq">ЧаВо</a>
          </nav>

        </div>
      </div>
    </footer>
  );
}
