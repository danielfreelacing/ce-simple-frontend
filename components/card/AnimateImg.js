import Image from 'next/image'
import React from 'react'

const AnimateImg = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className={` relative  max-h-600px[] w-[600px]`}>
                    <div className={`absolute top-20 left-10`}>
                        <Image src="/images/RectangleWhyUs.png" width="400" height="400" alt="animate img" />
                    </div>
                    <div className={`absolute -bottom-[410px] right-[140px]`}>
                        <Image src="/images/man.png" width="500" height="600" alt="animate img" />
                    </div>
                    <div className='h-[500px] w-[450px] z-20 absolute top-[220px] left-[130px] -rotate-[28.2deg] '  >
                        <svg viewBox="0 0 450 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.659668L0 378L450 378V1.20398C442.38 63.947 388.934 112.555 324.135 112.555L125.93 112.555C60.9436 112.555 7.37568 63.6656 0 0.659668Z" fill="#E6A84B" />
                        </svg>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AnimateImg
