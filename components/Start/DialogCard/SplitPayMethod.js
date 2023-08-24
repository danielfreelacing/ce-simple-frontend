import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../Start/Start.module.css'
import styles2 from '../../Start/PaymentMothod.module.css'
import PaymentByCreditCard from './PaymentByCreditCard'
import PaymentByPaypal from './PaymentByPaypal'
import SplitPaymentWithGiftCard from '../SplitPayment/SplitPaymentWithGiftCard'

const SplitPayMethod = ({ openModal, addSplitPayment, closeModal }) => {
    const [showSplitPayment, setShowSplitPayment] = useState(false);
    const [CreditCardPayment, setCreditCardPayment] = useState(false);
    const [PaypalPayment, setPaypalPayment] = useState(false);

    const [active, setActive] = useState(false);

    const handleMouseOver = () => {
        setActive(true);
    };

    const handleMouseOut = () => {
        setActive(false);
    };

    // paypal disabled 

    const ShowPaymentOptionWithGiftCard = () => {
        setShowSplitPayment(true)
    }
    const PaymentWithCreditCard = () => {

        setCreditCardPayment(true)
    }
    const PaymentWithPaypal = () => {

        setPaypalPayment(true);
    }
    const giftCardDetail = {
        image: "/start/GiftCard3D.svg",
        title: "split payment with gift card(s)",
        DueBalance: "remaining due: $40"
    }

    const creditCardDetail = {
        image: "/start/creditCardShadow.svg",
        title: "split payment with credit card",
        DueBalance: "remaining due: $20"
    }

    const paypalCardDetail = {
        image: "/start/PayPalLogo.svg",
        title: "split payment with paypal",
        DueBalance: "remaining due: $20"
    }
    // payment options data 
    // console.log('PaypalPayment', PaypalPayment, CreditCardPayment);

    return (
        <>
            <div className=' md:h-auto  md:mb-0 mb-20 overflow-y-scroll '>
                <div className={`relative  ${showSplitPayment || CreditCardPayment || PaypalPayment ? styles2.hidebgComp : ""} `}>

                    <div className='md:px-16 md:block hidden'>
                        <div className='flex justify-between items-center space-x-3'>
                            <Image src="/start/splitPayment.png" width={250} height={165} className={`${styles.splitPaymentMethod}`} alt="split card" />
                            <div>
                                <h2 className='fourxllargef tracking-wide leading-[107%]'>split payment methods</h2>
                                <p className='extlargef  font-Barlow  tracking-wide leading-[107%] md:mt-3'>use up to 4 gift cards plus one (1) additional payment method (simply click on an icon to pay)</p>
                            </div>
                        </div>

                        <p className=' dubblelargef text-[14px] py-3 text-center text-black font-normal'><span className='border-black border-b font-semibold'>total cost: $40</span></p>
                    </div>
                    {/* card header for mpobile */}

                    <div className='md:hidden px-5 mt-3'>
                        <div className='md:flex justify-between items-center space-x-3'>
                            <div className='flex justify-center items-center '>
                                <Image src="/start/splitPayment.png" width={80} height={60} alt="split card" />
                                <h2 className=' text-[25px] font-[400] tracking-wide leading-[107%]'>split payment methods</h2>
                            </div>
                            <div>
                                <p className='text-[18px]  text-center font-Barlow  tracking-wide leading-[107%] md:mt-3'>use up to 4 gift cards plus one (1) additional payment method (simply click on an icon to pay)</p>

                            </div>
                        </div>
                    </div>

                    {/* payment options */}

                    <div className={`grid grid-cols-12 md:mx-16 2xl:mx-20 relative md:mb-5 mb-5 md:px-0 px-5 ${styles.splitPaymentCardMain}`}>
                        {/* add gift payment card */}
                        <div className=' md:col-span-5 col-span-12 md:flex items-center justify-between mx-7'>
                            <div className={`${styles2.mainDiv} relative  cursor-pointer`} onClick={() => { ShowPaymentOptionWithGiftCard() }}>
                                <p className='smallf font-semibold  tracking-wide md:py-3 pt-4 pb-1 text-center leading-[107%]'>+ add gift card(s)</p>
                                <div className=' flex justify-center'>
                                    <div
                                        className={`${styles.image_wrapper, styles.shine} ${styles2.mainDiv} hover:shadow-2xl xl:hover:shadow-xl lg:hover:shadow-xl md:hover:shadow-sm hover:shadow-zinc-600 hover:rounded-xl transition-all ease-in-out duration-500 `}

                                    >
                                        <div className={`${styles2.gift}  ${showSplitPayment == undefined ? 'hidden' : ''}  `}>
                                        </div>

                                    </div>
                                    {showSplitPayment == undefined ? <div className='relative shadow-2xl shadow-zinc-600 rounded-xl transition-all ease-in-out duration-500'>
                                        <Image src={`/start/giftCardSelcted.svg`} width={300} height={200} alt="gift card" className='md:w-auto md:h-auto w-[213px] h-[150px]' />
                                        <div className={`absolute -top-2 -right-2`}>
                                            <Image src="/start/splitEdit.svg" width={30} height={30} alt="credit card" className='' />
                                        </div>
                                    </div> : ""}
                                </div>
                                <p className={`dubblelargef   text-center leading-[121%] tracking-wider ${showSplitPayment == undefined ? 'text-voilet md:mt-5 mt-2  font-semibold' : 'text-gray md:mt-5 mt-2 '}`}> {showSplitPayment == undefined ? '$20 applied' : '$0 applied'} </p>
                            </div>
                            <div className='flex justify-center mx-2 mt-2 md:mt-0'>
                                <p className='bg-black text-white px-3 md:py-0.5 max-w-[38px] min-w-[30px] md:w-full  text-[24px] rounded-full'>+</p>
                            </div>
                        </div>

                        <div className=' md:col-span-7 col-span-12  '>
                            <div className='grid grid-cols-12'>
                                {/* add credit card payment */}
                                <div className={`col-span-6 ${PaypalPayment == undefined ? 'opacity-[0.5]  disabled cursor-not-allowed' : ''}`} onClick={() => { PaymentWithCreditCard() }}>
                                    <p className='smallf font-semibold py-3 text-center leading-[107%]'>+ add credit card(s)</p>
                                    <div className='flex justify-center items-center relative'>
                                        <div className={`${styles.image_wrapper, styles.shine} ${styles2.mainDiv} hover:shadow-2xl hover:shadow-zinc-600 hover:rounded-xl transition-all ease-in-out duration-500 `}>
                                            <div className={`${styles2.creditCard}  ${CreditCardPayment == undefined ? 'hidden' : ''} `}>
                                            </div>
                                        </div>

                                        {CreditCardPayment == undefined ?
                                            <div className='relative shadow-2xl shadow-zinc-600 rounded-xl transition-all ease-in-out duration-500'>
                                                <Image src={`/start/creditCardSeleted.svg`} width={300} height={200} alt="gift card" className={`md:w-auto md:h-auto w-[146px] h-[150px] ${styles2.creditCardSelected}`}
                                                />
                                                <div className={`absolute -top-2 -right-2`}>
                                                    <Image src="/start/splitEdit.svg" width={30} height={30} alt="credit card" className=''
                                                    />
                                                </div>
                                            </div> : ""}
                                    </div>

                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className=' text-black font-bold text-[21px] mt-10'>or</p>
                                </div>

                                {/* add paypal payment */}
                                <div className={`col-span-5 ${CreditCardPayment == undefined ? 'opacity-[0.5]  disabled cursor-not-allowed' : ''}`} onClick={() => { PaymentWithPaypal() }}>
                                    <p className='smallf font-semibold tracking-wide text-center py-3 leading-[107%]'>+ add paypal</p>
                                    <div className='flex justify-center items-center relative'>

                                        <div className={`${styles.image_wrapper, styles.shine}`}>
                                            {/* <Image src={`/start/AddPaypal.svg`} width={146} height={150} alt="credit card" className={`md:w-auto md:h-auto w-[80px] h-[70px] ${PaypalPayment == undefined ? 'hidden' : ''}`} /> */}
                                        </div>


                                        <div className={`${styles.image_wrapper, styles.shine} ${styles2.mainDiv} hover:shadow-2xl hover:shadow-zinc-600 hover:rounded-xl transition-all ease-in-out duration-500 `}>
                                            <div className={`${styles2.paypalPayment} w-[146px] h-[150px] ${PaypalPayment == undefined ? 'hidden' : ''} `}>
                                            </div>
                                        </div>
                                        {PaypalPayment == undefined ? <div className='relative shadow-2xl shadow-zinc-600 rounded-xl transition-all ease-in-out duration-500'>
                                            <Image src={`/start/paypalSelected.svg`} width={300} height={200} alt="gift card" className={`md:w-auto md:h-auto w-[146px] h-[150px] ${styles2.paypalSelected}`} />
                                            <div className={`absolute -top-2 -right-2`}>
                                                <Image src="/start/splitEdit.svg" width={30} height={30} alt="credit card" className='' />
                                            </div>
                                        </div> : ""}
                                    </div>

                                </div>
                            </div>

                            <p className={`dubblelargef   text-center leading-[121%] tracking-wider ${(PaypalPayment == undefined) || (CreditCardPayment == undefined) ? 'text-voilet md:mt-5 mt-2  font-semibold' : 'text-gray md:mt-5 mt-2 '}`}> {(PaypalPayment == undefined) || (CreditCardPayment == undefined) ? '$20 applied' : '$0 applied'} </p>
                        </div>

                    </div>


                    <div className={`${styles2.shadowbtnContinue}   py-5 flex justify-between md:justify-end items-center space-x-5 px-5 md:px-0`}>
                        <p className=' minismallf text-[14px] text-center text-voilet font-normal'><span className='border-voilet border-b font-semibold'>remaining due: $40</span></p>

                        <div className={` mx-auto`}>
                            <button type="button"
                                onClick={() => { addSplitPayment(), closeModal() }}
                                className={`w-full md:px-16 px-10  py-2 tracking-[0.02em] text-white   ${(showSplitPayment == undefined && CreditCardPayment == undefined) || (showSplitPayment == undefined && PaypalPayment == undefined) ? 'bg-voilet opacity-1' : styles.btnDesabledBg}  rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >continue
                            </button>
                        </div>
                    </div>

                </div>
                {/* add gift card payment  */}
                <div className={`${showSplitPayment ? 'block transition-all ease-in duration-1000' : 'hidden'} w-full absolute top-10 left-0`}>
                    <SplitPaymentWithGiftCard giftCardDetail={giftCardDetail} openModal={openModal} setShowSplitPayment={setShowSplitPayment} />
                </div>

                {/* add credit card payment */}

                <div className={`${CreditCardPayment ? 'block transition-all ease-in duration-1000' : 'hidden'} w-full absolute top-10 left-0`}>
                    <PaymentByCreditCard giftCardDetail={creditCardDetail} setCreditCardPayment={setCreditCardPayment} openModal={openModal} />
                </div>


                <div className={`${PaypalPayment ? 'block transition-all ease-in duration-1000' : 'hidden'} w-full absolute top-10 left-0`}>
                    <PaymentByPaypal giftCardDetail={paypalCardDetail} setPaypalPayment={setPaypalPayment} openModal={openModal} />
                </div>

            </div>

        </>
    )
}

export default SplitPayMethod