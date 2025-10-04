"use client"
import { BurgerButton } from "@components/BurgerButton"
import { Logo } from "@components/Logo"
import { useState } from "react"
import styles from "./Header.module.scss"

export function Header() {
  const [active, setActive] = useState("")

  const menuItems = [
      { id: "hero", label: "О Го" },
      { id: "offer", label: "Обучение" },
      { id: "teachers", label: "Преподаватели" },
      { id: "reviews", label: "Отзывы" },
      { id: "contacts", label: "Контакты" },
      { id: "faq", label: "FAQ" },
    ];

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.menu}>
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${styles.item} ${
              active === item.id ? styles.active : ""
            }`}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </a>
        ))}
        <BurgerButton />
      </nav>
    </header>
  );
}
