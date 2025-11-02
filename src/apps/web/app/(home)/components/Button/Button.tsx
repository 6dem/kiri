import cn from "classnames"
import styles from "./Button.module.scss"

interface IButtonProps {
  onClick?: () => void
  isDisabled?: boolean
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "outline"
  href?: string
}

export function Button({ onClick, isDisabled = false, children, className, variant = "primary", href }: IButtonProps) {
  const Tag = href ? "a" : "button"

  return (
    <Tag
      href={href}
      onClick={onClick}
      disabled={Tag === "button" ? isDisabled : undefined}
      className={cn(styles.Button, styles[variant], className)}
    >
      {children}
    </Tag>
  )
}

