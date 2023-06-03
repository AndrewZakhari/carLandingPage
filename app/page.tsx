import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar'
import Header from './components/header'

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar /> 
      <Header />
    </div>
  )
}
