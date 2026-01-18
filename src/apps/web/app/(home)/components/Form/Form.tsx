import { X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import styles from "./Form.module.scss"

interface IFormProps {
  onClose: () => void
}

type Status = "idle" | "loading" | "success" | "error"

interface FormState {
  name: string
  age: string
  email: string
  tel: string
  goKnowledge: string
  goLevel: string
  message: string
}

const initialForm: FormState = {
  name: "",
  age: "",
  email: "",
  tel: "",
  goKnowledge: "",
  goLevel: "",
  message: "",
}

export function Form({ onClose }: IFormProps) {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<Status>("idle")
  const [contactError, setContactError] = useState("")
  const [goError, setGoError] = useState("")

  const errorTimeoutRef = useRef<number | null>(null)
  const successTimeoutRef = useRef<number | null>(null)
  const ERROR_DISPLAY_MS = 4000
  const API_URL = process.env.NEXT_PUBLIC_API_URL_SEND

  const isKnownGo = form.goKnowledge === "Да"

  const clearErrorTimeout = () => {
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current)
      errorTimeoutRef.current = null
    }
  }
  
  const clearSuccessTimeout = () => {
    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current)
      successTimeoutRef.current = null
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setForm((prev) => ({ ...prev, [name]: value }))

    if (name === "email" || name === "tel") {
      setContactError("")
    }

    if (name === "goKnowledge" || name === "goLevel") {
      setGoError("")
    }

    if (status === "error") {
      setStatus("idle")
      clearErrorTimeout()
    }
    
    if (status === "success") {
      setStatus("idle")
      clearSuccessTimeout()
    }

    if (name === "goKnowledge" && value === "no") {
      setForm((prev) => ({ ...prev, goLevel: "" }))
    }
  }

  const validateContacts = (email: string, tel: string): string | null => {
    if (!email && !tel) {
      return "Укажите хотя бы один контакт: email или телефон."
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email && !emailRegex.test(email)) {
      return "Введите корректный email."
    }

    const telDigits = tel.replace(/\D/g, "")
    if (tel && telDigits.length < 10) {
      return "Введите корректный номер телефона."
    }

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const email = form.email.trim()
    const tel = form.tel.trim()

    // --- Контакты ---
    const contactValidationError = validateContacts(email, tel)
    if (contactValidationError) {
      setContactError(contactValidationError)
      return
    }
    setContactError("")

    if (form.goKnowledge === "Да" && !form.goLevel) {
      setGoError("Укажите ваш уровень игры в Го.")
      return
    }

    setGoError("")

    setStatus("loading")

    try {
      const res = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()

      setStatus("success")
      clearErrorTimeout()
      successTimeoutRef.current = window.setTimeout(() => {
        setStatus("idle")
        successTimeoutRef.current = null
      }, ERROR_DISPLAY_MS)
      setForm(initialForm)
    } catch {
      setStatus("error")
      clearErrorTimeout()
      errorTimeoutRef.current = window.setTimeout(() => {
        setStatus("idle")
        errorTimeoutRef.current = null
      }, ERROR_DISPLAY_MS)
    }
  }


  useEffect(() => {
    return () => clearErrorTimeout()
  }, [])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h4 className={styles.formTitle}>Запись на занятие</h4>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          <X />
        </button>
      </div>

      <div className={styles.inputGroup}>
        {/* Имя */}
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            required
            className={styles.input}
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* Возраст */}
        <div className={styles.inputWrapper}>
          <input
            type="number"
            min={0}
            max={116}
            name="age"
            placeholder="Ваш возраст"
            className={styles.input}
            value={form.age}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className={styles.inputWrapper}>
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            className={styles.input}
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Телефон */}
        <div className={styles.inputWrapper}>
          <input
            type="tel"
            name="tel"
            placeholder="Ваш номер телефона"
            className={styles.input}
            value={form.tel}
            onChange={handleChange}
          />
        </div>

        {/* Знание Го */}
        <div className={styles.inputWrapper}>
          <select
            name="goKnowledge"
            value={form.goKnowledge}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Знакомы ли вы с игрой Го?</option>
            <option value="Да">Да</option>
            <option value="Нет">Нет</option>
          </select>
        </div>

        {/* Уровень Го */}
        {isKnownGo && (
          <div className={styles.inputWrapper}>
            <select
              name="goLevel"
              value={form.goLevel}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Выберите ваш уровень</option>
              <option value="Начинающий">
                Начинающий (играл несколько партий | до 15 кю)
              </option>
              <option value="Средний">Средний (от 15 кю)</option>
              <option value="Продвинутый">Продвинутый (от 5 кю)</option>
              <option value="Дан">Дан-уровень (1 дан и выше)</option>
            </select>
          </div>
        )}

        {/* Сообщение */}
        <div className={styles.textareaWrapper}>
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            className={styles.textarea}
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <button type="submit" className={styles.submitButton} disabled={status === "loading"}>
        {status === "loading" ? "Отправка..." : "Записаться"}
      </button>

      {contactError && <p className={styles.statusMessage}>{contactError}</p>}
      {goError && <p className={styles.statusMessage}>{goError}</p>}
      {status === "success" && <p className={styles.statusMessage}>Спасибо за запись!</p>}
      {status === "error" && <p className={styles.statusMessage}>Возникла ошибка. Попробуйте позже.</p>}
    </form>
  )
}
