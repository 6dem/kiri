'use client'

import Image from "next/image"
import { useState } from "react"
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
    const [imgError, setImgError] = useState(false)

    return (
        <div className={styles.Teacher}>
            {imgError ? (
                <div className={styles.avatar}>
                    <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
                        <circle cx="48" cy="43" r="24" fill="#E0E0E0"/>
                        <ellipse cx="48" cy="85" rx="28" ry="16" fill="#E0E0E0"/>
                    </svg>
                </div>
            ) : (
                <Image
                    src={avatarUrl}
                    alt={name}
                    className={styles.avatar}
                    width={96}
                    height={96}
                    priority
                    onError={() => setImgError(true)}
                />
            )}
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
