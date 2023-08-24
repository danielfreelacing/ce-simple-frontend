import Image from 'next/image'
import React from 'react'
import styles from '../../Start/Start.module.css'

const PaymentByPaypal = ({ giftCardDetail, setPaypalPayment, openModal, setCreditCardPayment }) => {
    return (
        <div>
            <div className='mx-5'>
                {/* gift card */}

                <div className='hidden md:block'>
                    <div className='flex  space-x-5 items-center justify-center'>
                        <div className='hidden md:block'>
                            <Image src={giftCardDetail.image} width={149} height={221} className={`${styles.paypalImage}`} alt="gift card" />
                        </div>
                        <div className='md:hidden'>
                            <Image src={giftCardDetail.image} width={100} height={100} alt="gift card" />
                        </div>

                        <div >
                            <h2 className=' fourxllargef tracking-wide md:leading-[107%] text-black leading-tight'>{giftCardDetail.title}</h2>
                            <p className=' dubblelargef text-voilet font-semibold   md:leading-[150%] leading-tight hidden md:block'><span className='border-b border-voilet'>{giftCardDetail.DueBalance}</span></p>

                        </div>
                    </div>

                </div>
                {/* for moblile */}
                <div className='md:hidden '>
                    <div className='flex  space-x-5 items-center justify-center'>
                        <div className=''>
                            <Image src={giftCardDetail.image} width={100} height={80} alt="gift card" />
                        </div>

                        <div >
                            <h2 className=' text-[22px] tracking-wide  text-black leading-tight'>{giftCardDetail.title}</h2>
                        </div>
                    </div>
                    {/* title for mobile */}
                    <div className=' mb-10'>
                        <p className={`extlargef text-voilet text-center underline  leading-tight `}>{giftCardDetail.DueBalance}</p>
                    </div>
                </div>
                {/* credit card detail  */}

                <div className='md:px-48'>
                    <div className={`mt-14 flex flex-col justify-center space-y-5 ${styles.paypalsuccessMain}`}>

                        <div className={` p-5 bg-purple flex flex-col justify-center items-center space-y-3 ${styles.paypalsuccessInner}`}>

                            <Image src="/start/PayPalsuccessfull.svg" width={260} height={70} alt="paypal logo" />
                            <p className='md:text-[35px] text-black extlargef md:mt-0 mt-5 md:text-left text-center tracking-wide '>$20 payment successful!</p>

                        </div>

                        <div className={` mx-auto mt-16 w-max`}>
                            <button type="button"
                                onClick={() => { setPaypalPayment() }}
                                className={`md:px-16 px-28  py-2 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >continue

                            </button>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default PaymentByPaypal