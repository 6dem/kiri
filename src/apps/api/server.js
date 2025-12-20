import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import nodemailer from "nodemailer"

dotenv.config()

const app = express()

app.use(cors({
  origin: process.env.API_ORIGINS?.split(",") || ["http://localhost:3000"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false
}))

app.use(express.json())

// --- POST /send ---
app.post("/send", async (req, res) => {
  const {
    name, surname, patronymic, age,
    email, tel, goKnowledge, goLevel, message
  } = req.body

  // Проверка обязательных полей
  if (!name || !surname || (!email && !tel)) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.MAIL_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // --- Письмо администратору ---
    const adminMessage = `
📩 Новая запись с сайта
Имя: ${name} ${surname} ${patronymic || ""}
${age && "Возраст:"} ${age}
${email && "Email:"} ${email}
${tel && "Телефон:"} ${tel}
Знакомство с Го: ${goKnowledge}
${goLevel && "Уровень:"} ${goLevel}
${message && "Сообщение:"} ${message}
`
    await transporter.sendMail({
      from: `Школа Го «КИРИ» <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "Новая запись с сайта",
      text: adminMessage
    })

    // --- Автоответ пользователю ---
    email && await transporter.sendMail({
      from: `Школа Го «КИРИ» <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Мы получили вашу заявку",
      text: `Здравствуйте ${name},\n\nСпасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.\n\n— Школа Го "КИРИ"`
    })

    // --- Telegram уведомление ---
    if (process.env.TG_TOKEN && process.env.TG_OWNER_CHAT_ID) {
      await fetch(`https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TG_OWNER_CHAT_ID,
          text: adminMessage
        }),
      })
    }

    res.json({ success: true })

  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Server error" })
  }
})

const PORT = Number(process.env.API_PORT) || 3020
app.listen(PORT, () => {
  console.log(`kiri-go API running on port ${PORT}`)
})
