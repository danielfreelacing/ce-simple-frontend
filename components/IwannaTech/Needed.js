import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Needed = ({ direction }) => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${direction == "up" ? styles.fadeAnimation : styles.fadeAnimationDown}`}>

                <div className='flex items-start justify-center col-span-12 md:hidden md:col-span-7'>
                    <div className={`${styles.shadow} ${styles.imgRotate}  `}>
                        <Image src='/images/needed.png' width={350} height={350} alt="wanna tech png" className={``} />
                    </div>
                </div>
                <div className='sm:pl-[30%] pl-[10%] md:pl-0  flex justify-center md:justify-start col-span-12 md:col-span-5 items-strat'>
                    <div>
                        <h2 className={`text-white md:font-semibold font-[500] leading-[100%] fivexllargef ${styles.shadow}  tracking-wide`}>what’s needed?</h2>

                        <p className='py-5 lg:py-8 md:font-semibold font-[500]  leading-[130%] 2xl:leading-[120%] xl:max-w-[90%] text-white lowercase largef'> Both you AND your course need to already be approved by NCBTMB
                            <br></br><br></br>  Also, your course cannot teach Massage Technique, or Soft Tissue Manipulation.</p>
                        <h4 className='py-4 md:font-semibold font-[500] text-black  dubblelargef'>cool! glad you’re here!!</h4>

                    </div>
                </div>
                {/* <div className='items-start justify-center hidden col-span-12 -mt-16 md:col-span-7 md:flex xl:-mt-16 lg:-mt-10'>
                    <div className={`${styles.shadow} ${styles.imgRotate} ${styles.imgbox} `}>
                        <Image src='/images/needed.png' width={550} height={550} alt="wanna tech png" className={`3xl:w-[700px] 3xl:h-[700px]
                        4xl:w-[900px] 4xl:h-[900px]`} />
                    </div>
                </div> */}

                <div className={`${styles.shadow} ${styles.imgRotate}  ${styles.imgbox} mt-[-15%]  col-span-12 md:col-span-6 md:flex hidden justify-center items-start  `}>
                    <Image src='/images/needed.png' width={600} height={600} alt="wanna tech png" className={``} />
                </div>

            </div>
        </>
    )
}

export default Needed