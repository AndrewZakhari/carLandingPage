'use client'
import Link from 'next/link'
import styles from './nav.module.css'
import Image from 'next/image'
import { useState } from 'react'


export default function Nav() {
    
    document.addEventListener('scroll', () => {
        if(window.scrollY > 1000){ 
            setUpdateNav(true);
        }
        if(window.scrollY < 1000){
            setUpdateNav(false);
        }
    })
    const [updateNav, setUpdateNav] = useState<boolean>(false);
    const [search , setSearch] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const isMobile = window.innerWidth < 850 


    return (
        <>
        { !isMobile &&
        <>
        {updateNav &&
             <div id="navbar" className={styles.NavmainWhite}>
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
        }
        { !updateNav &&
        <div id="navbar" className={styles.Navmain}>
           <Link scroll={false} href="/"><Image alt="" className={styles.logo} src="/../public/bmw1.png" width="50" height="50"/></Link>
            <p className={styles.text}>Models</p>
            <p className={styles.text}>Build Your Own</p>
            <p className={styles.text}>Shopping &darr;</p>
            <p className={styles.text}>BMW Electric</p>
            <p className={styles.text}>Owners &darr;</p>
            <Image alt="" onClick={ () => setSearch(!search)} className={styles.searchIcon} src='/../public/search1.png' width="30" height="30" />
            {search &&
                <div className={styles.searchBox}>
                    <input style={{border: "none"}} placeholder='Search' type='text' /> 
                <Image className={styles.secSearchIcon} alt="" src='/../public/search1.png' width="15" height="15" />
                    </div>
            }
        </div>
}
</>
}{ isMobile && 
        <>
        { !open &&
        <div className={styles.closedNavMobile}>
            <Image onClick={() => setOpen(true)} className={styles.closeLogo} alt="" src="/../public/bmw1.png"  width="50" height="50"/>
            <Image onClick={() => setSearch(!search)} alt="" src="/../public/search1.png" className={styles.searchIcon} width="30" height="30" />
            { search &&
                <div className={styles.searchBox}>                
                    <input style={{border: 'none'}} placeholder='Search' type='text'/>
                    <Image className={styles.secSearchIcon} alt="" src="/../public/search1.png" width="15" height="15" />
                </div>
            }
        </div>
}{open &&
    <div className={styles.openedNavMobile}>
        <Image onClick={() => setOpen(false)} className={styles.openLogo} alt="" src="/../public/bmw1.png"  width="50" height="50"/>
            <Image onClick={() => setSearch(!search)} alt="" src="/../public/search1.png" className={styles.searchIcon} width="30" height="30" />
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
                    <Image className={styles.secSearchIcon} alt="" src="/../public/search1.png" width="15" height="15" />
                </div>
            }
    </div>
}
        </>
}
        </>
    )
}