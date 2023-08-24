import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Commission = ({ direction }) => {

    return (
        <>
            {/* for mobile and tablet  */}
            <div className={`bg-transparent grid grid-cols-12 xl:gap-20 lg:gap-10 md:hidden mb-10 ${direction == "up" ? styles.fadeAnimation : styles.fadeAnimationDown}`}>
                <div className=' sm:px-[30%] md:pl-0 flex justify-center col-span-12 md:col-span-6 items-strat'>
                    <div className='mt-5 md:ml-20 md:mt-0'>
                        <h2 className={`text-white md:font-semibold font-[500]  fivexllargef ${styles.shadow} leading-[100%]  tracking-wide`}>commission
                        </h2>

                        <div className={`${styles.vertmove} sm:mt-7  md:mt-16 flex justify-center items-center`}>
                            <Image src="/images/money.png" width="250" height="200" alt="tech logo" className={` `} />
                        </div>

                        <p className={`pt-5 md:font-semibold font-[500] xl:max-w-[90%] text-white lowercase largef `}>earning are split 50/50 and you are paid once a month, forever!</p>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-6 sm:px-[30%] md:pl-0 '>
                    <div className={`${styles.shadow} ${styles.imgRotate}    flex justify-center items-start`}>
                        <Image src='/images/commissionBanner.png' width={200} height={200} alt="wanna tech png" className={`3`} />
                    </div>
                    <p className={`sm:text-center pt-5 md:font-semibold font-[500] xl:max-w-[90%]  text-white lowercase largef `}>…And you can check on your course’s progress and edit your course anytime on our realtime dashboard!</p>
                </div>
            </div>


            {/* for desktop and laptop  */}
            <div className={`bg-transparent ${direction == "up" ? styles.fadeAnimation : styles.fadeAnimationDown} hidden md:block`}>
                <h2 className={`text-white font-semibold md:mb-16  fivexllargef ${styles.shadow} leading-[100%] tracking-wide`}>commission
                </h2>
                <div className={`grid grid-cols-12 `}>
                    <div className='col-span-12 md:col-span-6 pr-[30%]'>
                        <div className='mt-5 md:mt-0'>

                            <div className={`${styles.shadow} ${styles.vertmove}  ${styles.imgboxcommi} flex justify-center items-center`}>
                                <Image src="/images/money.png" width="250" height="250" alt="tech logo" className={``} />
                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 md:col-span-6 -mt-[15%]  xl:-mt-[15%] pr-[30%]'>

                        <div className={`${styles.shadow} ${styles.imgRotate}  ${styles.imgboxcommi} flex justify-center items-start`}>
                            <Image src='/images/commissionBanner.png' width="400" height="400" alt="tech logo" className="" />
                        </div>
                    </div>
                </div>

                <div className={`grid grid-cols-12 -mt-[2%] 2xl:-mt-[2%]`}>
                    <div className='flex justify-start col-span-12 md:col-span-6   w-[80%] '>

                        <p className={`pt-5 font-[450] leading-[130%] 2xl:leading-[120%] xl:max-w-[90%] text-white lowercase largef `}>earning are split 50/50 and you are paid once a month, forever!</p>
                    </div>

                    <div className='col-span-12 md:col-span-6  w-[80%] flex justify-center '>
                        <p className={`pt-5  font-[450] leading-[130%] 2xl:leading-[120%] xl:max-w-[90%] text-white lowercase largef `}>…And you can check on your course’s progress and edit your course anytime on our realtime dashboard!</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Commission