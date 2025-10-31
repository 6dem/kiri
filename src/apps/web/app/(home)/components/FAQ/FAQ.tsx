"use client";

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import styles from "./FAQ.module.scss"

interface FAQItem {
  question: string
  answer: string
}

const faqList: FAQItem[] = [
  {
    question: "Как оформить заказ?",
    answer: "Вы можете оформить заказ через наш сайт, добавив товары в корзину и заполнив форму оформления.",
  },
  {
    question: "Какие способы оплаты доступны?",
    answer: "Мы принимаем оплату банковской картой, через электронные кошельки и по безналичному расчету.",
  },
  {
    question: "Сколько времени занимает доставка?",
    answer: "Срок доставки зависит от региона и обычно составляет от 2 до 5 рабочих дней.",
  },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <h2 className={styles.title}>Часто задаваемые вопросы</h2>
        <div className={styles.list}>
          {faqList.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${activeIndex === index ? styles.active : ""}`}
            >
              <button
                className={styles.question}
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <ChevronDown className={styles.icon} />
              </button>
              <div
                className={styles.answer}
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
