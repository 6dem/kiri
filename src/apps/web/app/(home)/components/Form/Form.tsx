import { X } from "lucide-react"
import { useState } from "react"
import styles from "./Form.module.scss"

interface IFormProps {
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error"

export function Form({ onClose }: IFormProps) {
  const [isKnownGo, setIsKnownGo] = useState<boolean>(false)
  const [goLevel, setGoLevel] = useState<string>("")
  const [form, setForm] = useState({
    name: "",
    surname: "",
    patronymic: "",
    age: "",
    email: "",
    tel: "",
    goKnowledge: "",
    goLevel: "",
    message: ""
  })
  const [status, setStatus] = useState<Status>("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (name === "goKnowledge") {
      setIsKnownGo(value === "yes")
      if (value === "no") setGoLevel("")
    }
    if (name === "goLevel") setGoLevel(value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("https://api.kiri-go.ru/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error("Failed request")
      setStatus("success")
      setForm({
        name: "",
        surname: "",
        patronymic: "",
        age: "",
        email: "",
        tel: "",
        goKnowledge: "",
        goLevel: "",
        message: ""
      })
      setIsKnownGo(false)
      setGoLevel("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h4 className={styles.formTitle}>Запись на занятие</h4>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          <X />
        </button>
      </div>

      <div className={styles.inputWrapper}>
        <input type="text" name="name" placeholder="Ваше имя" required className={styles.input} value={form.name} onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" name="surname" placeholder="Ваша фамилия" required className={styles.input} value={form.surname} onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" name="patronymic" placeholder="Ваше отчество" className={styles.input} value={form.patronymic} onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <input type="number" name="age" placeholder="Ваш возраст" required className={styles.input} value={form.age} onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <input type="email" name="email" placeholder="Email" required className={styles.input} value={form.email} onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <input type="tel" name="tel" placeholder="Ваш номер телефона" required className={styles.input} value={form.tel} onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <select name="goKnowledge" value={form.goKnowledge} onChange={handleChange} className={styles.select}>
          <option value="">Знакомы ли вы с игрой Го?</option>
          <option value="yes">Да</option>
          <option value="no">Нет</option>
        </select>
      </div>

      {isKnownGo && (
        <div className={styles.inputWrapper}>
          <select name="goLevel" value={form.goLevel} onChange={handleChange} className={styles.select}>
            <option value="">Выберите ваш уровень</option>
            <option value="beginner">Начинающий (играл несколько партий | до 15 кю)</option>
            <option value="intermediate">Средний (от 15 кю)</option>
          </select>
        </div>
      )}

      <div className={styles.textareaWrapper}>
        <textarea name="message" placeholder="Ваше сообщение" className={styles.textarea} value={form.message} onChange={handleChange}></textarea>
      </div>

      <button type="submit" className={styles.submitButton} disabled={status === "loading"}>
        {status === "loading" ? "Отправка..." : "Записаться"}
      </button>

      {status === "success" && <p className={styles.statusMessage}>Спасибо за запись!</p>}
      {status === "error" && <p className={styles.statusMessage}>Возникла ошибка. Попробуйте позже.</p>}
    </form>
  )
}
