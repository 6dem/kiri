import { Teacher, TeacherProps } from "@components/Teacher/Teacher"
import Image from "next/image"
import styles from './TeacherList.module.scss'

const teachers: TeacherProps[] = [
    {
        avatarUrl: '/images/teacher1.jpg',
        name: 'Иванов Сергей',
        position: 'создатель школы',
    },
    {
        avatarUrl: '/images/teacher2.jpg',
        name: 'Лазарев Дмитрий',
        position: 'инструктор с большим опытом',
    },
    {
        avatarUrl: '/images/teacher3.jpg',
        name: 'Константин Зятенков',
        position: 'младший инструктор',
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
                  <Image className={styles.paperLantern} src="/icons/paper-lantern.svg" alt="paper lantern icon" width={150} height={150} />
                  <div className={styles.bubble}>
                    Наши преподаватели — опытные мастера и настоящие энтузиасты, которые помогут вам полюбить Го и раскрыть свой потенциал в игре.
                  </div>
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
