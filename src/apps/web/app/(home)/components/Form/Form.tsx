import styles from "./Form.module.scss"

export function Form() {
  return (
    <form className={styles.form}>
      <input type="text" name="name" placeholder="Ваше имя" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Ваше сообщение"></textarea>
      <button type="submit">Записаться</button>
    </form>
  );
}
