import React, { useState } from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const WhyYou = ({ activeTabIndex, direction }) => {
    const [loading, setLoading] = useState(false)
    //console.log('res', loading, activeTabIndex)

    setTimeout(() => {
        if (activeTabIndex === 6) {
            setLoading(true);
        }

        else {
            setLoading(false);
        }
    }, 1000)

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${direction == "up" ? styles.fadeAnimation : styles.fadeAnimationDown}`}>

                {/* for mobile */}
                <div className={`relative  col-span-12 md:col-span-8  2xl:hidden md:hidden ${loading ? styles.tranatationNone : 'opacity-0'} -mt-2 ${styles.imgcenter} `}>

                    <div className={` relative  flex sm:mr-[35%] mr-10`}>
                        <div className='relative overflow-hidden w-full h-[260px]  '>
                            <div className={`w-[175px] absolute bottom-[46px] right-[0px]`}>

                                <Image src='/images/WhyYouRectangle.png' width={400} height={400} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[28deg] absolute top-[130px] -right-[50.5px]  z-10 `}>
                                <Image src='/images/SubtractBrown.png' width={400} height={300} alt="wanna tech png" className={` w-[200px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[40px]  -right-[10px] ${styles.fadeAnimationInfinite} w-[210px]`}>
                            <Image src='/images/dog.png' width={500} height={350} alt="wanna tech png" className={` `} />
                        </div>
                        {/* bottom text */}
                        <div className='absolute bottom-0 z-50 left-3 md:left-3 sm:left-[11.35rem]'>
                            <p className='text-white 3xl:text-[24px]'>(her name is bubbless!)</p>
                        </div>

                    </div>
                </div>
                <div className='sm:pl-[30%] md:pl-0  flex justify-center md:justify-start col-span-12 md:col-span-4 items-strat'>
                    <div>
                        <h2 className={`text-white md:font-semibold font-[500]  leading-[100%]    fivexllargef  ${styles.shadow}   tracking-wide `}>why you?</h2>
                        <h4 className='py-2 font-semibold leading-[107%] text-black fourxllargef xl:pt-4 lg:py-0'>tell us about <br></br> your pedigre
                        </h4>
                        <p className=' text-white md:font-[450] font-[500] leading-[130%] 2xl:leading-[120%] lowercase largef lg:pt-2 '>In our introductory questionnaire you can tell us about yourself, describe your course, what the student can expect to learn, and why you are qualified to teach it!
                            <br></br><br></br>
                            If we determine your course is a good fit, we’ll let you into our clubhouse! From there you start creating!</p>
                    </div>
                </div>
                {/* for desktop */}
                <div className={`relative col-span-12 md:col-span-7 h-[100vh] 2xl:block 3xl:hidden md:hidden hidden ${loading ? styles.tranatationNone : 'opacity-0'}  `}>

                    <div className={` relative  flex ml-10 `}>
                        <div className='relative overflow-hidden w-full h-[500px]  '>
                            <div className={`w-[500px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/WhyYouRectangle.png' width={1000} height={600} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[30deg] absolute -bottom-[170px] -right-[80.5px]  z-10  `}>
                                <Image src='/images/SubtractBrown.png' width={1000} height={600} alt="wanna tech png" className={` w-[530px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[30px]  right-[60px] ${styles.fadeAnimationInfinite}    w-[560px]`}>
                            <Image src='/images/dog.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                        <div className={`z-50 absolute bottom-[0%] ${styles.bottomContent}    left-[45%]`}>
                            <p className='text-white'>(her name is bubbless!)</p>
                        </div>
                    </div>
                </div>

                {/* for extra large device */}
                <div className={`relative col-span-12 md:col-span-7 h-[100vh] 3xl:block 2xl:hidden md:hidden hidden ${loading ? styles.tranatationNone : 'opacity-0'}  `}>
                    <div className={` relative  flex ml-10 `}>
                        <div className='relative overflow-hidden w-full h-[600px]  '>
                            <div className={`w-[600px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/WhyYouRectangle.png' width={1000} height={600} alt="wanna tech png" className={` w-[600px]`} />
                            </div>
                            <div className={`-rotate-[27deg] absolute -bottom-[233px] -right-[100.5px]  z-10  `}>
                                <Image src='/images/SubtractBrown.png' width={1000} height={600} alt="wanna tech png" className={` w-[650px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[27px]  right-[60px] ${styles.fadeAnimationInfinite}    w-[670px]`}>
                            <Image src='/images/dog.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                        <div className={`z-50 absolute bottom-[0%] left-[45%] ${styles.bottomContent}  `}>
                            <p className='text-white 3xl:text-[24px]'>(her name is bubbless!)</p>
                        </div>
                    </div>
                </div>

                {/* for samll device */}
                <div className={`relative col-span-12 md:col-span-7 h-[100vh] 2xl:hidden md:block hidden ${loading ? styles.tranatationNone : 'opacity-0'} -mt-20  `}>

                    <div className={` relative  flex ml-10  `}>
                        <div className={`${styles.imageCompMain}`}>
                            <div className={`${styles.whyUsRactComp}`}>

                                <Image src='/images/WhyYouRectangle.png' width={1000} height={600} alt="wanna tech png" className={` ${styles.whyUsRactImage}`} />
                            </div>
                            <div className={`${styles.whyUsYellowBgComp}`}>
                                <Image src='/images/SubtractBrown.png' width={1000} height={600} alt="wanna tech png" className={` md:w-[450px] w-[332px] ${styles.whyUsYellowBgImage} `} />

                            </div>
                        </div>
                        <div className={` ${styles.whyUsMainObjImageComp} ${styles.fadeAnimationInfinite} `}>
                            <Image src='/images/dog.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                        <div className={`z-50 absolute bottom-[0%] left-[45%] ${styles.bottomContent} `}>
                            <p className='text-white'>(her name is bubbless!)</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default WhyYou