import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const GiftBalance = () => {

    const [count, setCount] = useState(0)

    const counter = (max, min) => {
        for (let count = min; count <= max; count++) {

            setTimeout(() => {
                setCount({ count })
            }, 100);
        }

    }

    return (
        <>
            <div className={`px-48`}>
                {/* <h4 className={`triplelargefXL text-center pb-8 font-normal`}>
                    enter gift card account #to check balance
                </h4> */}
                <Image src="/start/GiftCard3D.svg" width={300} height={200} alt='gift card' />

                <div className='flex justify-center items-center'>
                    <div>
                        <div className='smallf y py-1 text-center mb-4'>
                            balance for xxxx-xxx
                        </div>

                        {/* gift balance counter */}

                        <div className={``}>
                            {count}
                        </div>


                        <p className='smallf y py-1 text-center mb-4'>
                            expiration date: 04/04/24
                        </p>
                        <div className={`bg-black text-white text-center font-[500] rounded-3xl px-3 py-2 mt-6`}>
                            check balance
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GiftBalance