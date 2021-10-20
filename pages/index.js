import SocialList from '../components/socials/social-list'
import styles from '../styles/Home.module.scss'
function HomePage() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div>
                    <h1 className={styles.title}>Sam Azevedo</h1>
                    <p className={styles.description}>Web Developer | Design</p>
                </div>
                <SocialList />
            </main>
        </div>
    )
}
export default HomePage
