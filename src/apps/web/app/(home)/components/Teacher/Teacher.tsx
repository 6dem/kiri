'use client'

import Image from "next/image"
import { useState } from "react"
import styles from './Teacher.module.scss'

export type TeacherProps = {
    avatarUrl: string
    name: string
    position: string
    experienceYears?: number
    comment?: string
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
            <div className={styles.avatar}>
                {imgError ? (
                    <svg viewBox="0 0 96 96" fill="none">
                        <defs>
                            <clipPath id="half-ellipse">
                            <rect x="0" y="0" width="100" height="88" />
                            </clipPath>
                        </defs>
                        <circle cx="48" cy="43" r="24" fill="#E0E0E0" />
                        <ellipse
                            cx="48"
                            cy="87"
                            rx="35"
                            ry="18"
                            fill="#E0E0E0"
                            clipPath="url(#half-ellipse)"
                        />
                    </svg>
                    ) : (
                    <Image
                        src={avatarUrl}
                        alt={name}
                        className={styles.image}
                        fill
                        priority
                        onError={() => setImgError(true)}
                    />
                    )}
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.position}>{position}</p>
                {experienceYears && (
                    <p className={styles.experience}>
                        Опыт: {experienceYears}{" "}
                        {experienceYears === 1
                        ? "год"
                        : experienceYears < 5
                        ? "года"
                        : "лет"}
                    </p>
                    )}
            </div>
            {comment && <blockquote className={styles.comment}>{comment}</blockquote>}
        </div>
    )
}
