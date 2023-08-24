import Image from 'next/image';
import React from 'react'
import { useState } from "react";

import styles from '../../components/IwannaTech/IwanntTech.module.css';

const StartComponent = ({ direction }) => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${direction == "up" ? styles.fadeAnimation : styles.fadeAnimationDown} `}>
                {/* image for mobile */}
                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.vertmove}  col-span-12 md:col-span-6 flex  md:hidden justify-center items-start   `}>
                    <Image src='/images/iwannatech.png' width={200} height={200} alt="wanna tech png" className={``} />
                </div>

                <div className='flex justify-center md:justify-start col-span-12 md:col-span-5 items-strat'>
                    <div>
                        <h2 className={`text-white  md:font-semibold leading-[100%] fivexllargef font-[500] ${styles.shadow} tracking-wide`}>so you wanna <br /> teach?</h2>
                        <p className='mt-2 font-[500] text-white md:mt-2 lg:mt-4 dubblelargef'>cool! glad you’re here!</p>
                        <p className='mt-[4%] font-[600]  triplelargef '>look around!</p>
                    </div>
                </div>

                {/* image for desktop */}
                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.vertmove} ${styles.imgbox} mr-[10%] col-span-12 md:col-span-7 md:flex hidden justify-center items-start 2xl:-mt-16 lg:-mt-0  `}>
                    <Image src='/images/iwannatech.png' width={650} height={650} alt="wanna tech png" className={``} />
                </div>
            </div>
        </>
    )
}

export default StartComponent






