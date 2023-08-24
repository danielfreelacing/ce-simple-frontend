import Image from 'next/image'
import React from 'react'
import styles from '../../Start/Start.module.css'
const PaymentByCreditCard = ({ giftCardDetail, setCreditCardPayment, }) => {
    return (
        <>

            <div className='mx-5'>
                {/* gift card */}

                {/* for desktop */}
                <div className='md:block hidden'>
                    <div className='flex  space-x-5 items-center'>
                        <div className=''>
                            <Image src={giftCardDetail.image} width={349} height={221} className={`${styles.creditCardImage}`} alt="gift card" />
                        </div>

                        <div >
                            <h2 className=' fourxllargef tracking-wide md:leading-[107%] leading-tight'>{giftCardDetail.title}</h2>
                            <p className='md:text-[32px] dubblelargf  md:leading-[107%] leading-tight '><span className='border-b border-voilet text-voilet'>{giftCardDetail.DueBalance}</span></p>

                        </div>
                    </div>
                </div>

                {/* for mobile */}
                <div className='md:hidden'>
                    <div className='flex  space-x-5 items-center'>
                        <div className='md:hidden'>
                            <Image src={giftCardDetail.image} width={150} height={200} alt="gift card" />
                        </div>
                        <div >
                            <h2 className='text-[22px]  tracking-wide  leading-tight'>{giftCardDetail.title}</h2>
                        </div>
                    </div>
                    {/* title for mobile */}
                    <div className='md:hidden mb-10'>
                        <p className={` text-[30px] underline tracking-tight text-voilet text-center md:leading-[107%] leading-tight `}>{giftCardDetail.DueBalance}</p>
                    </div>
                </div>
                {/* credit card detail  */}
                <div className={`md:px-48  ${styles.splitPaymentForm} mt-10`}>
                    <div className={``}>
                        <label className="mt-5 mb-1.5  font-bold  leading-4 smallf ">credit card info</label>
                        <div className="flex justify-between mb-3 ">
                            <div className="max-w-[48%]">
                                <input className="border bg-white border-bordergray md:p-2 p-1  w-full  leading-3" type="text" placeholder="first name" />
                            </div>
                            <div className="max-w-[48%]">
                                <input className="border bg-white border-bordergray md:p-2 p-1  w-full  leading-3" type="text" placeholder="last name" />
                            </div>
                        </div>
                        <div>
                            <input className="border bg-white  border-bordergray md:p-2 p-1 w-full  leading-3" type="number" placeholder="**** **** **** *****" />
                        </div>
                        <div className="flex-row flex mt-3 space-x-2">
                            <input className="border bg-white  border-bordergray md:p-2 p-1 w-full minismallf   leading-3  " type="email" placeholder="MM/YY" />
                            <input className="border bg-white border-bordergray md:p-2 p-1 w-full  leading-3 text-gray-600 minismallf " type="email" placeholder="CVC" />
                            <input className="border bg-white border-bordergray md:p-2 p-1 w-full  leading-3 minismallf  " type="text" placeholder="zip" />
                        </div>
                    </div>

                    <div className={`flex items-center space-x-1 py-3 mt-2`}>
                        <Image src="/images/savePassword.svg" width={19} height={19} alt="password icon" />
                        <p className={` smallf `}>save payment for future purchases?</p>
                    </div>

                    <div className={`mt-10 ${styles.creditCardbtn} flex flex-col justify-center space-y-2`}>
                        <div className='mediumf font-[500] text-center '>apply <span className='text-voilet border-b'>$20 payment</span> to credit card</div>

                        <div className={` mx-auto`}>
                            <button type="button"
                                onClick={() => { setCreditCardPayment() }}
                                className={`md:px-16 px-24 py-2 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl smallf  font-semibold traking-[0.02em] focus:outline-none`}  >continue
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentByCreditCard