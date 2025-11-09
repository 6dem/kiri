"use client";

import burgerIcon from "@icons/burger.svg"
import closeIcon from "@icons/close.svg"
import Image from "next/image"
import styles from "./BurgerButton.module.scss"

interface BurgerButtonProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function BurgerButton({ isOpen, setIsOpen }: BurgerButtonProps) {
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.burgerWrapper}>
      <button
        className={styles.burgerButton}
        onClick={toggle}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        <Image src={isOpen ? closeIcon : burgerIcon} alt="Burger Menu" width={30} height={30} />
      </button>
    </div>
  );
}
