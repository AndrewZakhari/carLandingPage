'use client'
import styles from './cars.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Cars() {
    document.addEventListener('scroll', () => {  
        if(window.scrollY > 200){
            setRender(true);
        }
    })
    const [car, setCar] = useState<string>("ix")
   const isMobile = window.innerWidth < 850 ;
    const [render, setRender] = useState<boolean>(false)

    return (
        <div className={styles.main}>
            { render &&
   <> {!isMobile &&
            <div className={styles.container}>
                <h1 className={styles.header}>Our Electric Collection</h1>
            <div className={styles.previewContainer}>
            <div onClick={() => setCar("ix")} className={styles.carContainer}>
            <p className={styles.carModel}>BNW IX</p>
            <Image draggable="false" alt="" src="/../public/bmw-ix-small.png" width='200'  height='150'/>
            </div>
             <div onClick={() => setCar("i7")} className={styles.carContainer}>
            <p className={styles.carModel}>BNW I7</p>
            <Image draggable="false" alt="" src="/../public/bmw-i7-small.png" width='200'  height='150'/>
            </div>
             <div onClick={() => setCar("i4")} className={styles.carContainer}>
            <p className={styles.carModel}>BNW I4</p>
            <Image draggable="false" alt="" src="/../public/bmw-i4-small.png" width='200'  height='150'/>
            </div>
             <div onClick={() => setCar("ix1")} className={styles.carContainer}>
            <p className={styles.carModel}>BNW IX1</p>
            <Image draggable="false" alt="" src="/../public/bmw-ix1-small.png" width='200'  height='150'/>
            </div>
            </div>
            { car === "ix" &&
                <div className={styles.imageContainer}>
                <Image draggable="false" src='/../public/bmw-ix-big.jpg' alt="" width={window.innerWidth} height={window.innerHeight}/>
                </div>
            }
            {car === 'i7' &&
            <div className={styles.imageContainer}>
                <Image draggable="false" src="/../public/bmw-i7-big.jpg" alt="" width={window.innerWidth} height ={window.innerHeight} />
            </div>

            } {car === 'i4' &&
            <div className={styles.imageContainer}>
                <Image draggable="false" src="/../public/bmw-i4-big.jpg" alt="" width={window.innerWidth} height ={window.innerHeight} />
            </div>

            }
             {car === 'ix1' &&
            <div className={styles.imageContainer}>
                <Image draggable="false" src="/../public/bmw-ix1-big.jpg" alt="" width={window.innerWidth} height ={window.innerHeight} />
            </div>

            }
            </div>
}
            </>
}{isMobile && 
        <div id="container" className={styles.mobileContainer}>
                <h1 className={styles.header}>Our Electric Collection</h1>
            <div  className={styles.previewContainer}>
            <div id="ix" onClick={() => {setCar("ix")}} className={styles.carContainer}>
            <p className={styles.carModel}>BNW IX</p>
            <Image draggable="false" alt="" src="/../public/bmw-ix-small.png" width='125'  height='100'/>
            </div>
             <div id="i7" onClick={() => setCar("i7")} className={styles.carContainer}>
            <p className={styles.carModel}>BNW I7</p>
            <Image draggable="false" alt="" src="/../public/bmw-i7-small.png" width='125'  height='100'/>
            </div>
             <div id="i4" onClick={() => setCar("i4")} className={styles.carContainer}>
            <p className={styles.carModel}>BNW I4</p>
            <Image draggable="false" alt="" src="/../public/bmw-i4-small.png" width='125'  height='100'/>
            </div>
             <div id="ix1" onClick={() => {setCar("ix1");}} className={styles.carContainer}>
            <p className={styles.carModel}>BNW IX1</p>
            <Image draggable="false" alt="" src="/../public/bmw-ix1-small.png" width='125'  height='100'/>
            </div>
            </div>
            { car === "ix" &&
                <div className={styles.imageContainer}>
                <Image draggable="false" src='/../public/bmw-ix-big.jpg' alt="" width='1660' height='756'/>
                </div>
            }
            {car === 'i7' &&
            <div className={styles.imageContainer}>
                <Image draggable="false" src="/../public/bmw-i7-big.jpg" alt="" width='1660' height ="756" />
            </div>

            } {car === 'i4' &&
            <div className={styles.imageContainer}>
                <Image draggable="false" src="/../public/bmw-i4-big.jpg" alt="" width='1660' height ="756" />
            </div>

            }
             {car === 'ix1' &&
            <div className={styles.imageContainer}>
                <Image draggable="false" src="/../public/bmw-ix1-big.jpg" alt="" width='1660' height ="756" />
            </div>

            }
            </div>
}
            
        </div>
    )
}