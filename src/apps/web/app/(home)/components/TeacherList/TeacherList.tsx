import { Teacher, TeacherProps } from "@components/Teacher/Teacher"
import Image from "next/image"
import styles from './TeacherList.module.scss'

const teachers: TeacherProps[] = [
    {
        avatarUrl: '/images/teacher1.jpg',
        name: 'Иванов Сергей',
        position: 'Основатель школы Го',
    },
    {
        avatarUrl: '/images/teacher2.jpg',
        name: 'Лазарев Дмитрий',
        position: 'Инструктор с большим опытом',
    },
    {
        avatarUrl: '/images/teacher3.jpg',
        name: 'Зятенков Константин',
        position: 'Младший инструктор',
        comment: '«Ошибки в Го не стираются, как и в жизни. Но они могут стать основой для твоей будущей победы»'
    },
]

export function TeacherList() {
    return (
        <section id="teachers" className={styles.TeacherListSection}>
          <div className="container">
            <div className={styles.twoCols}>
              <div className={styles.stickyHalf}>
                <h2 className={styles.title}>
                  Наши преподаватели
                </h2>
                <div className={styles.content}>
                  <div className={styles.bubble}>
                    Наши преподаватели — опытные мастера и настоящие энтузиасты, которые помогут вам полюбить Го и раскрыть свой потенциал в игре.
                  </div>
                  <Image className={styles.thinGoBoard} src="/icons/thin-go-board.svg" alt="icon" width={300} height={300} />
                </div>
              </div>
              <div className={styles.cardsScroll}>
                  {teachers.map((teacher, idx) => (
                      <Teacher key={teacher.name + idx} {...teacher} />
                  ))}
              </div>
            </div>
          </div>
        </section>
    )
}
