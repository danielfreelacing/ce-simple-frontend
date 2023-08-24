import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const WhyTech = ({ direction }) => {

    const data = [
        {
            title: "so you wanna teach? ",
            content: "There’s no denying it! That’s why you’re here!"
        },
        {
            title: "passive income",
            content: "create the course once,get paid forever!"
        },
        {
            title: "zero investment",
            content: "Not one penny! Your only investment is time to craft your course!"
        },
        {
            title: "self-service",
            content: "Create & edit your course with our simple e-learning platform!"
        },
        {
            title: "customer service, every step of the way!",
            content: "We’re with you! Contact us anytime for assistance with anything! Simple!"
        },
    ]
    return (
        <>
            <div className={` bg-transparent grid grid-cols-12 ${direction == "up" ? styles.fadeAnimation : styles.fadeAnimationDown}`}>

                <div className={`${styles.shadow}  ${styles.imgRotate}  col-span-12 md:col-span-6 flex justify-center items-start  md:hidden`}>
                    <Image src='/images/whyTech.png' width={200} height={200} alt="wanna tech png" className={``} />
                </div>

                <div className='sm:px-[20%] md:px-0 flex justify-center  md:justify-start col-span-12 md:col-span-6 items-start'>
                    <div className={``}>
                        <h2 className={`text-white font-[500]  sm:text-center  fivexllargef ${styles.shadow} tracking-wide`}>Why teach?</h2>
                        {
                            data?.map((item, id) => {
                                return (<>
                                    <div key={id} className='py-1 2xl:py-2'>
                                        <div className='flex items-center space-x-2'>
                                            <div className='p-1.5 rounded-full bg-white'>
                                                <FaCheck className='font-bold mediumf' />
                                            </div>
                                            <p className='font-semibold extlargef leading-[107% sm:pb-2] dubblelargefXXL'>{item.title}</p>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <div className='px-1.5 xl:py-1.5 py-0 opacity-0 rounded-full bg-white'>
                                                <FaCheck className='font-bold mediumf ' />
                                            </div>
                                            <p className='font-[500] leading-[107%] tracking-wider text-white 2xl:tracking-normal   mediumf'>{item.content}</p>
                                        </div>
                                    </div>
                                </>)
                            })
                        }

                    </div>
                </div>

                <div className={`${styles.shadow}  ${styles.imgRotate} ${styles.imgbox}  col-span-12 md:col-span-6 md:flex justify-center items-start 2xl:-mt-20   hidden `}>
                    <Image src='/images/whyTech.png' width={600} height={600} alt="wanna tech png" className={``} />
                </div>

            </div>
        </>
    )
}

export default WhyTech