import Image from "next/image"
import styles from './Teacher.module.scss'

export type TeacherProps = {
    avatarUrl: string
    name: string
    position: string
    experienceYears: number
    comment: string
}

export function Teacher({
    avatarUrl,
    name,
    position,
    experienceYears,
    comment,
}: TeacherProps) {
    return (
        <div className={styles.Teacher}>
            <Image
                src={avatarUrl}
                alt={name}
                className={styles.avatar}
                width={96}
                height={96}
                priority
            />
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.position}>{position}</p>
                <p className={styles.experience}>
                    Опыт: {experienceYears} {experienceYears === 1 ? 'год' : experienceYears < 5 ? 'года' : 'лет'}
                </p>
                <blockquote className={styles.comment}>{comment}</blockquote>
            </div>
        </div>
    )
}
