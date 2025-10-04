import Image from "next/image"
import styles from './Logo.module.scss'

export function Logo() {
    return <div className={styles.Logo}> 
      <Image src="/icons/main-logo.svg" alt="Logo" width={120} height={120}/>
    </div>
}
