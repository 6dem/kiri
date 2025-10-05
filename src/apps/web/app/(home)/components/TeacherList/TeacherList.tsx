import { Teacher, TeacherProps } from "@components/Teacher/Teacher"
import styles from './TeacherList.module.scss'

const teachers: TeacherProps[] = [
    {
        avatarUrl: '/images/teacher1.jpg',
        name: 'Сергей Иванов',
        position: 'Крутейший препод',
        experienceYears: 15,
        comment: 'Люблю объяснять сложные темы простым языком.',
    },
    {
        avatarUrl: '/images/teacher2.jpg',
        name: 'Несергей Иванов',
        position: 'Просто препод',
        experienceYears: 2,
        comment: 'Главное — заинтересовать ученика!',
    },
    {
        avatarUrl: '/images/teacher3.jpg',
        name: 'Еще кто-то',
        position: 'препод',
        experienceYears: 1,
        comment: 'Современные технологии — ключ к успеху.',
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
