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
    question: "Сложно ли научиться играть в Го?",
    answer: "Правила очень просты и осваиваются за 10-15 минут. Однако Го известна своей невероятной глубиной. Понимание стратегии и тактики может занимать всю жизнь. Это легко начать, но трудно мастерски овладеть.",
  },
  {
    question: "Чем Го отличается от шахмат?",
    answer: "Если шахматы — это сражение с уничтожением конкретной фигуры (короля), то Го — это стратегическая война за территорию. Здесь нет иерархии фигур, все камни равны, а их сила определяется лишь их позицией на доске.",
  },
  {
    question: "Сколько длится партия?",
    answer: "Партия может длиться от 15 минут (быстрая игра) до нескольких часов. Турнирные партии часто длятся 1-2 часа на игрока.",
  },
  {
    question: "Правда ли, что Го развивает мышление?",
    answer: "Абсолютно. Игра развивает стратегическое мышление, пространственное воображение, терпение, умение читать намерения противника и принимать решения в условиях неопределенности. Её даже используют в бизнес-тренингах.",
  },
]


// 2) 
// 
// 3) 
// 
// 4) 
// 

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
