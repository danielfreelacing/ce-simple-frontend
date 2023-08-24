import Image from 'next/image'
import React from 'react'
import styles from '../../src/styles/CoursePage.module.css'

const EmptyBasket = () => {
    return (
        <>
            <div className=' flex justify-center items-center bg-white shadow-2xl py-12 mx-5 '>
                <div className=' flex flex-col justify-center items-center '>
                    <Image src="/start/emptyBasketMain.svg" width={43} height={37} alt="empty basket" />
                    <h2 className={`text-gray pt-3 text-9 leading-[110%] tracking-wider`}>empty basket</h2>
                    <p className={`text-gray pt-2 text-[23px] leading-[110%]`}>is a sad basket</p>

                </div>

            </div>

            <div className={`${styles.emptyBasketTotalAmt} mt-5 mx-5`}>

                <div className={`flex justify-between items-center px-6 py-3`}>
                    <div className={`flex space-x-1 items-center `}>
                        <Image src="/start/emptyBasketPrice.svg" width={25} height={27} alt="empty basket" />
                        <p className={`text-white text-[18px] leading-[130%]`}>your basket is empty</p>
                    </div>
                    <div className={`flex flex-col justify-center items-center`}>
                        <p className='text-white text-[12px] '>total</p>
                        <div className='text-white text-[26px]' >$0</div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default EmptyBasket