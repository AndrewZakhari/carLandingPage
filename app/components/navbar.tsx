'use client'
import Link from 'next/link'
import styles from './nav.module.css'
import Image from 'next/image'
import { useState } from 'react'


export default function Nav() {
    const [search , setSearch] = useState<boolean>(false);
    return (
        <div className={styles.main}>
           <Link scroll={false} href="/"><Image alt="" className={styles.logo} src="/../public/bmw1.png" width="50" height="50"/></Link>
            <p className={styles.text}>Models</p>
            <p className={styles.text}>Build Your Own</p>
            <p className={styles.text}>Shopping &darr;</p>
            <p className={styles.text}>BMW Electric</p>
            <p className={styles.text}>Owners &darr;</p>
            <Image alt="" onClick={ () => setSearch(!search)} className={styles.searchIcon} src='/../public/search1.png' width="30" height="30" />
            {search &&
                <div className={styles.searchBox}><input style={{border: "none"}} placeholder='Search' type='text' /> 
                <Image className={styles.secSearchIcon} alt="" src='/../public/search1.png' width="15" height="15" />
                    </div>
            }
        </div>
    )
}