import Image from "next/image"
import styles from "./Contacts.module.scss"

const contacts = {
    email: {link: "mailto:ivanovserezha04@gmail.com", content: "ivanovserezha04@gmail.com", label: "Email"},
    number: {link: "tel:+79788702341", content: "+7 (978) 870-23-41", label: "Номер телефона"},
    tg: {link: "https://t.me/schoolgo_kiribot", content: "KiriBot", label: "Телеграм бот"},
    vk: {link: "https://vk.com/school_go_kiri", content: 'Школа Го "КИРИ"', label: "Сообщество ВКонтакте"},
    address: {link: "https://yandex.ru/maps/geo/sevastopol/1443782471", content: "г. Севастополь, ул. ---, --", label: "Адрес"}
}



export function Contacts() {
  return (
    <section id="contacts" className={styles.contacts}>
      <div className="container">
        <h2 className={styles.title}>Будем на связи</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Наши контакты</h3>
            <ul className={styles.contactsList}>
              {Object.entries(contacts).map(([key, {link, content, label}]) => (
              <li className={styles.contact} key={key}>
                <a
                  className={styles.contactLink}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <b>{label}</b>: {content}
                </a>
              </li>
            ))}
              </ul>
          </div>
          <div className={`${styles.card} ${styles.cardLesson}`}>
            <h3>Записаться на занятие</h3>
            <Image className={styles.clock} src="/icons/clock.svg" alt="icon" width={300} height={150}/>
            <button className={styles.button}>Записаться</button>
          </div>
        </div>
      </div>
    </section>
  );
}
