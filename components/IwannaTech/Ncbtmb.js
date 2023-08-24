import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Ncbtmb = ({ direction }) => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${direction == "up" ? styles.fadeAnimation : styles.fadeAnimationDown}`}>

                <div className='flex items-start justify-center col-span-12 md:col-span-7 md:hidden '>
                    <div className={`${styles.shadow} ${styles.imgRotate} `}>
                        <Image src='/images/ncbtmbOrange.png' width={250} height={250} alt="wanna tech png" className={``} />
                    </div>
                </div>
                <div className=' sm:pl-[30%] pl-[10%] md:pl-0  flex justify-center md:justify-start col-span-12 md:col-span-5 items-strat'>
                    <div>
                        <h2 className={`text-white md:font-[600] font-[500] leading-[100%] fivexllargef ${styles.shadow}  tracking-wide`}>are both you<br /> <span className='md:border-b-4 border-b-2'>and</span> your<br /> course ncbtmb approved?</h2>
                        <button className=' cursor-pointer mt-5 rounded-3xl border xl:border-2 border-white px-7 py-2.5 text-white font-normal mediumf  hover:text-black  hover:bg-white transition-all ease-in-out duration-1000'>
                            if not, click here!
                        </button>
                        <h4 className='pt-5 font-semibold fourxllargef 2xl:pt-10 '>that’s kind of a big deal</h4>
                        <p className='md:font-semibold font-[500]  text-white leading-[130%] 2xl:leading-[120%] lowercase largef lg:pt-0 '> Compliance requires both Provider and Course to be pre-approved.</p>

                    </div>
                </div>
                {/* <div className='items-start justify-center hidden col-span-12 -mt-10 md:col-span-7 md:flex xl:-mt-16 lg:-mt-10 '>
                    <div className={`${styles.shadow} ${styles.imgRotate} ${styles.imgbox}`}>
                        <Image src='/images/ncbtmbOrange.png' width={550} height={550} alt="wanna tech png" className={`3xl:w-[700px] 3xl:h-[700px]
                        4xl:w-[900px] 4xl:h-[900px]`} />
                    </div>
                </div> */}
                <div className={`${styles.shadow} ${styles.imgRotate}  ${styles.imgbox}  col-span-12 md:col-span-6 md:flex hidden justify-center items-start 2xl:-mt-16 lg:-mt-0  `}>
                    <Image src='/images/ncbtmbOrange.png' width={600} height={600} alt="wanna tech png" className={``} />
                </div>


            </div>
        </>
    )
}

export default Ncbtmb