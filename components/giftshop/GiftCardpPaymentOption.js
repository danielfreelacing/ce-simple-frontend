import React, { useState } from 'react'
import styles from '../../src/styles/CoursePage.module.css'
import Image from 'next/image'

import { RiDeleteBin6Line } from 'react-icons/ri'
import { MdArrowDropDown, MdKeyboardArrowDown } from 'react-icons/md'
import { BsToggleOff } from 'react-icons/bs'
import CheckoutForm from 'components/Start/CheckoutForm'
import PaypalPayment from 'components/Start/PaypalPayment'
import PaymentGiftCard from 'components/Start/PaymentGiftCard'
import SplitPayment from 'components/Start/SplitPayment'
import CheckOutFormMobile from 'components/Start/giftForm/CheckOutFormMobile'

const GiftCardPaymentOption = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [ShowPaymentOption, setShowPaymentOption] = useState(false)
    const [lessMoreBtn, setLessMoreBtn] = useState("view more")


    const paymentCart = [
        {
            icon: "/start/credit.svg",
            content: <CheckOutFormMobile />,
            cardTooltips: "pay with credit card"
        },
        {
            icon: "/start/paypal.svg",
            content: <PaypalPayment />,
            cardTooltips: "pay with paypal"
        },

    ]
    const HandlePaymentOption = () => {

        if (!ShowPaymentOption) setShowPaymentOption(true);
        else setShowPaymentOption(false);
    }
    const OrderList = [

        {
            giftType: "/start/PhysicalGift.svg",
            name: "Susan smith",
            price: "40",

        },
        {
            giftType: "/start/PhysicalGift.svg",
            name: "John Williams",
            price: "40",

        },
        {
            giftType: "/start/eGift.svg",
            name: "Theodore Robinson",
            price: "10",

        }
    ]
    return (
        <>
            {/* selected items componets  */}

            <div className={` relative grid grid-cols-9 bg-white my-5  shadow-2xl md:mx-5   p-3 md:p-4 ${styles.addGiftMain} `}>

                <div className={`col-span-9 ${styles.giftListBg} p-3 h-[95px] overflow-y-scroll ${styles.giftAddedList}`}>

                    {OrderList?.map((item, key) => {
                        return (
                            <>
                                <div key={key} className={`flex justify-between items-center`}>
                                    <div className={`flex space-x-5 items-center `}>

                                        <Image src={item.giftType} width={30} height={30} alt="gift" />

                                        <p className={`text-black smallf font-semibold leading-[130%]`}>{item.name} </p>
                                    </div>
                                    <div className={`flex space-x-3 items-center`}>
                                        <div className='text-black smallf' >${item.price} </div>
                                        <RiDeleteBin6Line size={15} />
                                    </div>
                                </div>
                                <div className='w-full my-2 border-b-[1px] border-gray '></div>
                            </>
                        )
                    })}


                    <div className={`flex justify-between items-center ml-3 px-8`}>
                        <div className={`flex space-x-8 items-center `}>
                            <p className={`text-voilet minismallf font-bold leading-[130%]`}> free delivery </p>
                        </div>
                        <div className={`flex space-x-3 items-center`}>
                            <div className=' minismallf text-voilet font-bold' >$ 2 </div>
                        </div>
                    </div>

                </div>

                {/* edit gift detail */}

                <div className='  col-span-9 grid grid-cols-12 gap-4 mt-2'>

                    <div className=' col-span-6 flex items-center space-x-5'>
                        <div className={`${styles.giftListBg} relative ${styles.giftCountMain}`}>
                            <Image src="/start/eGift.svg" width={50} height={50} alt="gift" className={`${styles.giftCountImg}`} />
                            <div className={`absolute w-5 h-5 text-white rounded-full left-12 md:left-10   -top-[6px] bg-voilet ${styles.counterComp}`}>
                                <p className='flex items-center extsmallf justify-center'>1</p>
                            </div>
                        </div>
                        <div className={`${styles.giftListBg} relative ${styles.giftCountMain}`}>
                            <Image src="/start/PhysicalGift.svg" width={50} height={50} alt="gift" className={`${styles.giftCountImg}`} />
                            <div className={`absolute w-5 h-5 text-white rounded-full left-12 md:left-10  -top-[6px] bg-voilet ${styles.counterComp}`}>

                                <p className='flex extsmallf items-center justify-center'>2</p>
                            </div>
                        </div>
                    </div>

                    <div className={`col-span-6 rounded-3xl border border-voilet  py-1 my-3 flex justify-center space-x-3 items-center w-full ${styles.editComp}`}>

                        <Image src="/start/edit.svg" width={25} height={25} alt="edit" className={`${styles.editIcon}`} />
                        <div className='text-voilet smallf font-bold'>edit</div>

                    </div>
                </div>
            </div>



            {/* checkout componets  */}
            <div className={`${styles.readyToCheckoutBg} mt-3 mx-5 cursor-pointer relative `} onClick={() => { HandlePaymentOption() }}>

                <div className={`flex justify-between items-center px-6 py-2 ${styles.readyToCheckoutBgInner}`}>
                    <div>
                        <p className={`text-white smallf font-thin tracking-wide  leading-[130%]`}>simple checkout</p>

                        <p className={`text-white smallf font-semibold tracking-wide  leading-[130%]`}>{OrderList.length} gift cards</p>
                    </div>
                    <div className={`flex flex-col justify-end items-end`}>
                        {/* <p className='text-white -mb-[5px] font-bold text-[10px]'>total</p> */}
                        <div className='font-[500] text-white triplelargef' >$90</div>
                    </div>

                </div>

                <div className={`hidden md:block rounded-full bg-black w-5 h-5 absolute -bottom-2  left-1/2 -translate-x-1/2 ${ShowPaymentOption ? styles.toggleOn : styles.toggleOff} `}>
                    <MdKeyboardArrowDown className='text-white' size={20} />
                </div>

            </div>

            {/* payment option componet desktop  */}

            <div className={` hidden md:block mx-5 bg-white shadow-2xl pb-4 ${styles.paymentOptionMain} ${ShowPaymentOption ? 'transition-all ease-in duration-1000' : "hidden"}`}>

                <div className='px-3'>

                    <input type="email" placeholder='your email' className={`w-full px-5 py-[6px] bg-white smallf mt-4 mb-2 font-[500] border border-gray ${styles.emailspaing}`} />

                    <div className='flex items-center justify-center space-x-2'>
                        {paymentCart?.map((item, id) => {
                            return (

                                <>
                                    <div key={id} className={`tooltip cursor-pointer p-[2.5px] rounded-md  ${activeIndex == id ? styles.coursePriceSelectedBg : ""}`} onClick={() => { setActiveIndex(id) }}>
                                        <div className={`${!activeIndex && styles.image_wrapper, styles.shine} `}>
                                            <Image className={`rounded-md  ${styles.paymentIcongiftShoppe}   `} src={item.icon} width={80} height={80} alt="empty basket" />
                                        </div>
                                        <div className="tooltiptext text-[12px] z-10">
                                            <div className='relative'>
                                                <span>{item.cardTooltips}</span>
                                                <MdArrowDropDown className='absolute right-[40%] text-black -bottom-[16px] ' size={22} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    {/* credit card info  */}

                    <div className='h-auto duration-1000 transation-all ease'>{paymentCart[activeIndex].content}</div>

                </div>

            </div>
            {/* payment option componet mobile  */}
            <div className={`mx-5 bg-white shadow-2xl pb-4 md:hidden`}>

                <div className='px-3'>

                    {/* <input type="email" placeholder='your email' className='w-full px-5 py-[6px] smallf mt-4 mb-2 border border-gray' /> */}

                    <div className='flex items-center justify-center space-x-3'>
                        {paymentCart?.map((item, id) => {
                            return (

                                <>
                                    <div key={id} className={`tooltip cursor-pointer p-[2.5px] rounded-md mt-2  ${activeIndex == id ? styles.coursePriceSelectedBg : ""}`} onClick={() => { setActiveIndex(id) }}>
                                        <div className={`${!activeIndex && styles.image_wrapper, styles.shine} `}>
                                            <Image className={`rounded-md   `} src={item.icon} width={60} height={60} alt="empty basket" />
                                        </div>
                                        <div className="tooltiptext text-[12px] z-10">
                                            <div className='relative'>
                                                <span>{item.cardTooltips}</span>
                                                <MdArrowDropDown className='absolute right-[40%] text-black -bottom-[16px] ' size={22} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    {/* credit card info  */}

                    <div className='h-auto duration-1000 transation-all ease'>{paymentCart[activeIndex].content}</div>

                </div>

            </div>



        </>
    )
}

export default GiftCardPaymentOption