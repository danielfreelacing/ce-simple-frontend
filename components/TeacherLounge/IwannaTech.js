
import React, { useState } from 'react'
import styles from '../TeacherLounge/TeacherLounge.module.css'
import Image from 'next/image';

const IwannaTech = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    // const onMouseLeave = () => setIsHovered(false);
    return (
        <div className={`  
        
         `}>
            {/* ${styles.iwannatech}  h-[120px] w-[120px] flex justify-center items-center rounded-full shadow-lg overflow-hidden */}
            {/* <MyLink href="/"> */}
            {/* {isHovering ? (
                <Image onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} src="/images/i-wanna-teach-CTA-Hover.svg" width={205} height={77} alt="logo" />

            ) : ( */}
            <Image className='cursor-pointer opacity-95 hover:opacity-100 md:w-[160px] 2xl:h-[auto] 2xl:w-[auto] md:h-[160px]' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} src="/images/i-wanna-teach-CTA.svg" width={200} height={77} alt="logo" />
            {/* )} */}
            {/* </MyLink> */}

            {/* <p className='text-white xl:mx-10 text-center lg:text-[20px] '>I wanna teach!</p> */}
        </div>
    )
}

export default IwannaTech