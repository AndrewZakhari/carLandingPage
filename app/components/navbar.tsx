'use client'
import Link from 'next/link'
import styles from './nav.module.css'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'


export default function Nav() {
    useEffect( () => {
    document.addEventListener('scroll', () => {
        if(window.scrollY > 900){ 
            setUpdateNav(true);
        }
        if(window.scrollY < 900){
            setUpdateNav(false);
        }
    })}, [])
    useEffect(() => {
        const isMobile = window.innerWidth < 850;
        setIsMobile(isMobile)
    },[])
    const [updateNav, setUpdateNav] = useState<boolean>(false);
    const [search , setSearch] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    return (
        <>
        { !isMobile &&
        <>
        {updateNav &&
             <div id="navbar" className={styles.NavmainWhite}>
           <Link scroll={false} href="/"><Image alt="" className={styles.logo} src="/bmw1.png" width="50" height="50"/></Link>
            <p className={styles.text}>Models</p>
            <p className={styles.text}>Build Your Own</p>
            <p className={styles.text}>Shopping &darr;</p>
            <p className={styles.text}>BMW Electric</p>
            <p className={styles.text}>Owners &darr;</p>
            <Image alt="" onClick={ () => setSearch(!search)} className={styles.searchIcon} src='/search1.png' width="30" height="30" />
            {search &&
                <div className={styles.searchBox}><input style={{border: "none"}} placeholder='Search' type='text' /> 
                <Image className={styles.secSearchIcon} alt="" src='/search1.png' width="15" height="15" />
                    </div>
            }
        </div>
        }
        { !updateNav &&
        <div id="navbar" className={styles.Navmain}>
           <Link scroll={false} href="/"><Image alt="" className={styles.logo} src="/bmw1.png" width="50" height="50"/></Link>
            <p className={styles.text}>Models</p>
            <p className={styles.text}>Build Your Own</p>
            <p className={styles.text}>Shopping &darr;</p>
            <p className={styles.text}>BMW Electric</p>
            <p className={styles.text}>Owners &darr;</p>
            <Image alt="" onClick={ () => setSearch(!search)} className={styles.searchIcon} src='/search1.png' width="30" height="30" />
            {search &&
                <div className={styles.searchBox}>
                    <input style={{border: "none"}} placeholder='Search' type='text' /> 
                <Image className={styles.secSearchIcon} alt="" src='/search1.png' width="15" height="15" />
                    </div>
            }
        </div>
}
</>
}{ isMobile && 
        <>
        { !open &&
        <div className={styles.closedNavMobile}>
            <Image onClick={() => setOpen(true)} className={styles.closeLogo} alt="" src="/bmw1.png"  width="50" height="50"/>
            <Image onClick={() => setSearch(!search)} alt="" src="/search1.png" className={styles.searchIcon} width="30" height="30" />
            { search &&
                <div className={styles.searchBox}>                
                    <input style={{border: 'none'}} placeholder='Search' type='text'/>
                    <Image className={styles.secSearchIcon} alt="" src="/search1.png" width="15" height="15" />
                </div>
            }
        </div>
}{open &&
    <div className={styles.openedNavMobile}>
        <Image onClick={() => setOpen(false)} className={styles.openLogo} alt="" src="/bmw1.png"  width="50" height="50"/>
            <Image onClick={() => setSearch(!search)} alt="" src="/search1.png" className={styles.searchIcon} width="30" height="30" />
            <div className={styles.container}>
             <p className={styles.textMob}>Models</p>
            <p className={styles.textMob}>Build Your Own</p>
            <p className={styles.textMob}>Shopping &darr;</p>
            <p className={styles.textMob}>BMW Electric</p>
            <p className={styles.textMob}>Owners &darr;</p>
            </div>
            { search &&
                <div className={styles.searchBox}>                
                    <input style={{border: 'none'}} placeholder='Search' type='text'/>
                    <Image className={styles.secSearchIcon} alt="" src="/search1.png" width="15" height="15" />
                </div>
            }
    </div>
}
        </>
}
        </>
    )
}