import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Create = ({ direction }) => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${direction == "up" ? styles.fadeAnimation : styles.fadeAnimationDown}`}>

                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.vertmove} md:hidden col-span-12 md:col-span-7 flex justify-center items-start mt-5`} >
                    <Image src='/images/create.png' width={250} height={250} alt="wanna tech png" className={``} />
                </div>
                <div className='sm:pl-[30%] md:pl-0 flex justify-center md:justify-start col-span-12 md:col-span-5 items-strat md:mb-0 mb-10'>
                    <div>
                        <h2 className={`text-white md:font-semibold font-[500]  fivexllargef ${styles.shadow} leading-[100%]  tracking-wide`}>start creating
                        </h2>
                        <p className='pt-5 md:font-[450] font-[500]  lowercase leading-[130%] 2xl:leading-[120%] text-white 2xl:pt-10 2xl:tracking-wide  largef'>follow our easy step-by-step template to get your course organized for proper online structuring. then jump in and create your masterpiece!</p>
                        <p className='pt-5 font-[450] lowercase leading-[130%] 2xl:leading-[120%] text-white 2xl:pt-10 2xl:tracking-wide  largef'>once we’ve reviewed and approved your course it’s time to go live and make money!</p>
                        <p className='pt-5 font-[450] lowercase leading-[130%] 2xl:leading-[120%] text-white 2xl:pt-10 2xl:tracking-wide  largef'>then create your next masterpiece! simple!
                        </p>

                    </div>
                </div>

                <div className={`${styles.shadow}   ${styles.vertmove}  ${styles.imgbox}  col-span-12 md:col-span-6 md:flex hidden justify-center items-start 2xl:-mt-16 lg:-mt-0  `}>
                    <Image src='/images/create.png' width={700} height={700} alt="wanna tech png" className={``} />
                </div>

            </div>
        </>
    )
}

export default Create