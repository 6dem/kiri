import styles from "./MobileMenu.module.scss"

interface MenuItem {
  id: string
  label: string
}

interface MobileMenuProps {
  open: boolean
  menuItems: MenuItem[]
  active: string
  onMenuItemClick: (id: string) => void
}

export function MobileMenu({ open, menuItems, active, onMenuItemClick }: MobileMenuProps) {
  return (
    <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
      <nav className={styles.menuList}>
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${styles.menuItem} ${active === item.id ? styles.active : ""}`}
            onClick={() => onMenuItemClick(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}