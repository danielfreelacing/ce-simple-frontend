import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const WhyNow = ({ direction }) => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${direction == "up" ? styles.fadeAnimation : styles.fadeAnimationDown}`}>
                {/* for mobile */}
                <div className='flex items-start justify-center col-span-12 md:hidden md:col-span-7'>
                    <div className={`${styles.shadow} ${styles.scaleAnimation} mt-10 `}>
                        <Image src='/images/whyNow.png' width={250} height={250} alt="wanna tech png" className={``} />
                    </div>
                </div>

                {/* for desktop */}
                <div className=' sm:pl-[30%] md:pl-0   flex justify-center md:justify-start col-span-12 md:col-span-5 items-strat'>
                    <div>
                        <h2 className={`text-white md:font-semibold font-[500]  fivexllargef ${styles.shadow}    tracking-wide `}>why now?</h2>
                        <h4 className='pt-3 pb-2 font-bold leading-[100%] fourxllargef 2xl:pt-6'>we ve been <br></br> here 15 years !</h4>
                        <p className='font-[500] lowercase leading-[130%] 2xl:leading-[120%] text-white  xl:max-w-[90%] largef md:pt-5'>But it seems just over the last few years, Online Continuing Education has exploded thanks to improved tech, and increased concerns for social distancing!
                            <br></br><br></br>
                            We want to help you succeed and we have created a nice e-learning platform to do it!</p>
                    </div>
                </div>
                {/* <div className='items-start justify-center hidden col-span-12 md:col-span-7 md:flex'>
                    <div className={`${styles.shadow} ${styles.scaleAnimation} ${styles.imgbox} -mt-10 `}>
                        <Image src='/images/whyNow.png' width={500} height={500} alt="wanna tech png" className={`3xl:w-[700px] 3xl:h-[700px]
                        4xl:w-[900px] 4xl:h-[900px]`} />
                    </div>
                </div> */}

                {/* image for desktop */}
                <div className={`${styles.shadow} ${styles.scaleAnimation}  ${styles.imgbox}  col-span-12 md:col-span-6 md:flex hidden justify-center items-start 2xl:-mt-16 lg:-mt-10  `}>
                    <Image src='/images/whyNow.png' width={600} height={600} alt="wanna tech png" className={``} />
                </div>


            </div>
        </>
    )
}

export default WhyNow