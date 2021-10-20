import styles from './social-list.module.scss'
import Link from 'next/link'
function SocialList() {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link href='https://github.com/samazevedo' target='_blank'>
                    <h3>git</h3>
                </Link>
            </li>
            <li className={styles.item}>
                <Link
                    href='https://www.linkedin.com/in/samuel-azevedo-santos-908a5b53/'
                    target='_blank'
                >
                    <h3>linkedin</h3>
                </Link>
            </li>
            <li className={styles.item}>
                <Link href='https://twitter.com/SamAzevedo4' target='_blank'>
                    <h3>Twitter</h3>
                </Link>
            </li>
            <li className={styles.item}>
                <Link href='https://twitter.com/SamAzevedo4' target='_blank'>
                    <h3>Instagram</h3>
                </Link>
            </li>
        </ul>
    )
}
export default SocialList
