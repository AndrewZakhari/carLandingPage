import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
            <h1 className={styles.header}>Summer Offers</h1>
            <p className={styles.paragraph}>Exclusive offers on select models</p>
            <button className={styles.button}>Learn more</button>
            </div>
        </div>
    )
}