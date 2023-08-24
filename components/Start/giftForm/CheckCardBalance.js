import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '../../../src/styles/CoursePage.module.css'


const CheckCardBalance = () => {

    const [count, setCount] = useState(0);
    const [showBalaence, setShowBalance] = useState(false);

    const counter = (max, min) => {
        for (let count = min; count <= max; count++) {

            setTimeout(() => {
                setCount([count])
            }, 1000);
        }

    }

    // handle counter

    const handleCounter = () => {

        setTimeout(() => {

            setShowBalance(true)


        }, 10);

    }

    useEffect(() => {
        counter(0, 10000)
    }, [count])

    return (
        <>
            <div className={`md:px-48 h-screen`}>
                {!showBalaence ? <div>
                    <h4 className={`triplelargefXL text-[36px] text-center pb-8 font-normal`}>
                        enter gift card account #to check balance
                    </h4>
                    <div className='flex justify-center items-center'>
                        <div>
                            <div className='smallf border border-lightgray text-gray py-1 text-center mb-4'>
                                gift card account number
                            </div>
                            <Image src="/start/recaptcha.svg" width={300} height={200} alt="captcha" />
                            <div className={`bg-black text-white text-center font-[500] rounded-3xl px-3 py-2 mt-6`}
                                onClick={() => { handleCounter() }}
                            >
                                check balance
                            </div>
                        </div>
                    </div>
                </div> : ""}

                {showBalaence ? <div className={``}>
                    <Image src="/start/GiftCard3D.svg" width={235} height={235} className={`w-[335px]`} alt="balance" />

                    <div className='flex justify-center items-center'>
                        <div>
                            <div className='mediumf y py-1 text-center mb-4'>
                                balance for xxxx-xxx
                            </div>

                            {/* gift balance counter */}

                            <div key={count} className={` flex justify-center items-center  ${styles.counterMain}`}>

                                <div className={`w-full  ${styles.counterInner} bg-white`}>

                                    <div className={`grid grid-cols-12 `}>

                                        <div className={`col-span-3 text-[53px] flex justify-center items-center  ${styles.counterNumberEle} `}>$</div>
                                        <div className={`col-span-3 text-[53px] flex justify-center items-center  ${styles.counterNumberEle} `}>7</div>
                                        <div className={`col-span-3 text-[53px] flex justify-center items-center  ${styles.counterNumberEle} `}>2</div>
                                        <div className={`col-span-3 text-[53px] flex justify-center items-center  ${styles.counterNumberEle} `}></div>

                                    </div>

                                </div>
                                {/* {count} */}


                            </div>


                            <p className='smallf y py-1 text-center mb-4'>
                                expiration date: 04/04/24
                            </p>
                            <div className={`bg-black text-white text-center font-[500] rounded-3xl px-3 py-2 mt-6 cursor-pointer`}
                                onClick={() => { setShowBalance(false) }}
                            >
                                check balance
                            </div>
                        </div>
                    </div>
                </div> : ""}

            </div>
        </>
    )
}

export default CheckCardBalance