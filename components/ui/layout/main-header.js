import Link from 'next/link'
import styles from './main-header.module.scss'

function MainHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href='/'>
                        <img src='./images/logo.png' alt='logo' />
                    </Link>
                </div>
                <nav className={styles.navigation}>
                    <div className={styles.toggles}>
                        <div className={styles.languageBtn}>
                            change language
                        </div>
                        <div className={styles.theme}>change theme</div>
                    </div>
                    <div></div>
                    <ul>
                        <li
                            className={`${styles.item} ${styles.lightbluegreen}`}
                        >
                            <Link href='/'>Home</Link>
                            <div
                                className={`${styles.underscore} ${styles.lightbluegreen}`}
                            ></div>
                        </li>
                        <li className={`${styles.item} ${styles.paleblue}`}>
                            <Link href='/about'>About</Link>
                            <div
                                className={`${styles.underscore} ${styles.paleblue}`}
                            ></div>
                        </li>
                        <li className={`${styles.item} ${styles.purple}`}>
                            <Link href='/portfolio'>Portfolio</Link>
                            <div
                                className={`${styles.underscore} ${styles.purple}`}
                            ></div>
                        </li>
                        <li className={`${styles.item} ${styles.darkpurple}`}>
                            <Link href='/contact'>Contact</Link>
                            <div
                                className={`${styles.underscore} ${styles.darkpurple}`}
                            ></div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default MainHeader
