"use client"
import { Button } from "@components/Button"
import { Form } from "@components/Form"
import { contacts } from "@data/contacts"
import Image from "next/image"
import { useState } from "react"
import styles from "./Contacts.module.scss"

export function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="contacts" className={styles.contacts}>
      <div className="container">
        <h2 className={styles.title}>Будем на связи</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Наши контакты</h3>
            <ul className={styles.contactsList}>
              {Object.entries(contacts).map(([key, {link, content, label, icon: Icon}]) => (
                <li className={styles.contactItem} key={key}>
                  <div className={styles.contactIcon} title={label}>
                    {typeof Icon === 'string' ? <img src={Icon} alt={label} width={24} height={24} /> : <Icon size={24} />}
                  </div>
                  <a
                    className={styles.contactLink}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    {content}
                  </a>
                </li>
              ))}
              </ul>
          </div>
          <div className={`${styles.card} ${styles.cardLesson}`} onClick={openModal}>
            <h3>Записаться на занятие</h3>
            <Image className={styles.clock} src="/icons/clock.svg" alt="icon" width={300} height={150}/>
            <Button onClick={openModal} className={styles.button}>
              Записаться
            </Button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Form onClose={closeModal}/>
          </div>
        </div>
      )}
    </section>
  );
}
