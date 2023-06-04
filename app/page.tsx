import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar'
import Header from './components/header'
import Cars from './components/cars'

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar /> 
      <Header />
      <Cars />
    </div>
  )
}
