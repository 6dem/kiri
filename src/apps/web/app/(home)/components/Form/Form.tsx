import { X } from "lucide-react"
import { useState } from "react"
import styles from "./Form.module.scss"

interface IFormProps {
  onClose: () => void;
}

export function Form({onClose} : IFormProps) {
  const [isKnownGo, setIsKnownGo] = useState<boolean>(false);
  const [goLevel, setGoLevel] = useState<string>("");

  const handleGoKnowledgeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsKnownGo(e.target.value === "yes");
    if (e.target.value === "no") {
      setGoLevel("");
    }
  };

  const handleGoLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGoLevel(e.target.value);
  };

  return (
    <form className={styles.form}>
      <div className={styles.formHeader}>
        <h4 className={styles.formTitle}>Запись на занятие</h4>
        <button className={styles.closeButton} onClick={onClose}>
          <X />
        </button>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          name="surname"
          placeholder="Ваша фамилия"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          name="patronymic"
          placeholder="Ваше отчество"
          className={styles.input}
        />
      </div>

      <div className={styles.inputWrapper}>
        <input
          type="number"
          name="age"
          placeholder="Ваш возраст"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.inputWrapper}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.inputWrapper}>
        <input
          type="tel"
          name="tel"
          placeholder="Ваш номер телефона"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.inputWrapper}>
        <select
          name="goKnowledge"
          onChange={handleGoKnowledgeChange}
          className={styles.select}
        >
          <option value="">Знакомы ли вы с игрой Го?</option>
          <option value="yes">Да</option>
          <option value="no">Нет</option>
        </select>
      </div>

      {isKnownGo && (
        <div className={styles.inputWrapper}>
          <select
            name="goLevel"
            value={goLevel}
            onChange={handleGoLevelChange}
            className={styles.select}
          >
            <option value="">Выберите ваш уровень</option>
            <option value="beginner">
              Начинающий (играл несколько партий | до 15 кю)
            </option>
            <option value="intermediate">Средний (от 15 кю)</option>
          </select>
        </div>
      )}

      <div className={styles.textareaWrapper}>
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          className={styles.textarea}
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>
        Записаться
      </button>
    </form>
  );
}
