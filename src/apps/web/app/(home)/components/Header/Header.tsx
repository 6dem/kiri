import styles from "./Header.module.scss"

export function Header() {
  return (
    <header className={styles.header}>
      <div className="header__logo">Школа Го &quot;КИРИ&quot;</div>
      <nav className="header__nav">
        <a href="#hero">О Го</a>
        <a href="#offer">Обучение</a>
        <a href="#contacts">Контакты</a>
      </nav>
    </header>
  );
}
