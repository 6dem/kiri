"use client"
import { BurgerButton } from "@components/BurgerButton"
import { Logo } from "@components/Logo"
import { MobileMenu } from "@components/MobileMenu"
import { useState } from "react"
import styles from "./Header.module.scss"

export function Header() {
  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { id: "about", label: "О Го" },
    { id: "education", label: "Обучение" },
    { id: "teachers", label: "Преподаватели" },
    { id: "reviews", label: "Отзывы" },
    { id: "contacts", label: "Контакты" },
    { id: "faq", label: "ЧаВо" },
  ];

  const handleMenuItemClick = (id: string) => {
    setActive(id)
    setMenuOpen(false)
  }

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
        <BurgerButton isOpen={menuOpen} setIsOpen={setMenuOpen} />
      </nav>
      <MobileMenu
        open={menuOpen}
        menuItems={menuItems}
        active={active}
        onMenuItemClick={handleMenuItemClick}
      />
    </header>
  );
}
