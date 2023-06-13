import styles from './ownership.module.css'
import Image from 'next/image'

export default function Ownership() {
    return (
        <div className={styles.main}>
            <h1 className={styles.header}>Ownership starts here</h1>
            <div className={styles.container}>
            <div className={styles.preview}>
                <Image src='/tradeIn.png' width='76' height='76' alt=""/>
                <h2>Trade-In Value</h2>
                <p className={styles.paragraph}>Get The latest information on your vehicle&apos;s trade-in value today.</p>
                <p className={styles.link}> Visit Black Book &#8599;</p>
            </div>
            <div className={styles.preview}>
                <Image src='/credit.png' width='76' height='76' alt=""/>
                <h2>Check Your Credit Score</h2>
                <p className={styles.paragraph}>See where you stand on your journey to owning a BMW.</p>
                <p className={styles.link}> Visit Equifox &#8599;</p>
            </div>
            <div className={styles.preview}>
                <Image src='/finance.png' width='76' height='76' alt=""/>
                <h2>Apply for Financing</h2>
                <p className={styles.paragraph}>Own the BMW of your dreams with BMW Financial Services.</p>
                <p className={styles.link}> Get Started &#8599;</p>
            </div>
            <div className={styles.preview}>
                <Image src='/tradeIn.png' width='76' height='76' alt=""/>
                <h2>Stay Connected</h2>
                <p className={styles.paragraph}>Recieve the latest offers, releases, and news from BMW.</p>
                <p className={styles.link}> Sign Up Now</p>
            </div>
            </div>
        </div>
    )
}