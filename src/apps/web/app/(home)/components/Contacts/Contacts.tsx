import { Form } from "../Form"
import styles from "./Contacts.module.scss"

export function Contacts() {
  return (
    <section id="contacts" className={styles.contacts}>
      <h2>Контакты</h2>
      <p>Оставьте заявку на занятие — мы свяжемся с вами.</p>
      <Form />
    </section>
  );
}
