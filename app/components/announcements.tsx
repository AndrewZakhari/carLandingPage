import styles from './announcements.module.css';

export default function Announcements() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.header}>THE NEW BMW <br/> ACCESSORY CENTER</h1>
                <p className={styles.paragraph}>Customize your SUV before delivery.</p>
                <button className={styles.button}>Learn more</button>
            </div>
        </div>
    )
}