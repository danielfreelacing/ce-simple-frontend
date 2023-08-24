import React, { useEffect, useState } from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const GetStarted = ({ activeTabIndex, direction }) => {

    const [loading, setLoading] = useState(false)
    //console.log('res', loading, activeTabIndex)

    setTimeout(() => {
        if (activeTabIndex === 11) {
            setLoading(true);
        }

        else {
            setLoading(false);
        }
    }, 1000)


    return (
        <>
            <div className={`bg-transparent grid grid-cols-12  ${direction == "up" ? styles.fadeAnimation : styles.fadeAnimationDown} `}>

                {/* for mobile */}
                <div className={`relative  col-span-12 md:col-span-8  2xl:hidden md:hidden ${loading ? styles.tranatationNone : 'opacity-0'} -mt-2  ${styles.imgcenter}`}>

                    <div className={` relative  flex  sm:mr-[40%] `}>
                        <div className='relative overflow-hidden w-full h-[260px]  '>
                            <div className={`w-[175px] absolute bottom-[40px] right-[20px]`}>

                                <Image src='/images/getStartedRectangle.png' width={400} height={400} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[26deg] absolute top-[140px] -right-[24.5px]  z-10 `}>
                                <Image src='/images/SubtractHotpink.png' width={400} height={300} alt="wanna tech png" className={` w-[200px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[30px]  right-[19px] ${styles.imgRotate} w-[210px]`}>
                            <Image src='/images/getStartedMan.png' width={500} height={350} alt="wanna tech png" className={` `} />
                        </div>
                    </div>
                </div>

                <div className='flex justify-center col-span-12 md:col-span-5 items-strat'>
                    <div>
                        <h2 className={`text-white md:font-semibold font-[500] fivexllargef ${styles.shadow} leading-[100%] tracking-wide`}>ready to get started?
                        </h2>
                        <button className=' mt-5 rounded-3xl border xl:border-2 border-white px-7 py-2.5 text-white font-normal largef  hover:text-black hover:bg-white transition-all ease-in-out duration-1000'>
                            click here!
                        </button>
                        <p className='pt-5 md:font-semibold font-[500] xl:max-w-[90%] text-white lowercase largef'> Your time has come! Make it happen!</p>

                    </div>
                </div>

                {/* for desktop  */}

                <div className={`relative mr-[5%] col-span-12 md:col-span-7 h-[100vh] 2xl:block 3xl:hidden md:hidden hidden ${loading ? styles.tranatationNone : 'opacity-0'} mt-7 `}>
                    <div className={` relative  flex  mr-20 2xl:mr-16`}>
                        <div className='relative  w-full h-[426px]  '>
                            <div className={`w-[500px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/getStartedRectangle.png' width={1000} height={600} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[30deg] absolute -bottom-[170px] -right-[80.5px]  z-10  `}>
                                <Image src='/images/SubtractHotpink.png' width={1000} height={600} alt="wanna tech png" className={` w-[530px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[27px]  right-[60px] ${styles.imgRotate}    w-[560px]`}>
                            <Image src='/images/getStartedMan.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                    </div>
                </div>


                {/* for extra large device */}

                <div className={`relative mr-[5%] col-span-12 md:col-span-7 h-[100vh] 3xl:block 2xl:hidden md:hidden hidden ${loading ? styles.tranatationNone : 'opacity-0'} mt-5 `}>
                    <div className={` relative  flex 2xl:mr-20  mr-`}>
                        <div className='relative  w-full h-[450px]  '>
                            <div className={`w-[600px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/getStartedRectangle.png' width={1000} height={600} alt="wanna tech png" className={` w-[600px]`} />
                            </div>
                            <div className={`-rotate-[28deg] absolute -bottom-[233px] -right-[100.5px]  z-10  `}>
                                <Image src='/images/SubtractHotpink.png' width={1000} height={600} alt="wanna tech png" className={` w-[650px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[17px]  right-[55px] ${styles.imgRotate}    w-[670px]`}>
                            <Image src='/images/getStartedMan.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                    </div>
                </div>

                {/* for destop small device */}

                <div className={`relative col-span-12 md:col-span-7 h-[100vh] 2xl:hidden md:block hidden ${loading ? styles.tranatationNone : 'opacity-0'} bottom-12 `}>

                    <div className={` relative  flex mr-8 ${styles.getStarted}`}>
                        <div className={`${styles.getstartedCompMain}`}>
                            <div className={`${styles.getStartedRactComp}`}>

                                <Image src='/images/getStartedRectangle.png' width={1000} height={600} alt="wanna tech png" className={`${styles.getStartedRactImage}`} />
                            </div>
                            <div className={`${styles.getStartedYellowBgComp} `}>
                                <Image src='/images/SubtractHotpink.png' width={1000} height={600} alt="wanna tech png" className={`${styles.getStartedYellowBgImage}`} />

                            </div>
                        </div>
                        <div className={` ${styles.getStartedMainObjImageComp} ${styles.animateGetStartedMan} `}>
                            <Image src='/images/getStartedMan.png' width={800} height={500} alt="wanna tech png" className={`${styles.getStartedManImage} `} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GetStarted