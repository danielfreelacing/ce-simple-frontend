import React, { Fragment, useEffect, useState } from 'react'
import styles from '../../src/styles/CoursePage.module.css'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri'
import CheckoutForm from './CheckoutForm'
import PaypalPayment from './PaypalPayment'
import PaymentGiftCard from './PaymentGiftCard'
import SplitPayment from './SplitPayment'
import { MdArrowDropDown, MdKeyboardArrowDown } from 'react-icons/md'
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import { getCartItems, removeFromCart } from 'utils/addToCart'
import { productCartState } from 'recoil/atoms'
import { useRecoilState } from 'recoil'

import { motion } from "framer-motion"
import { duration } from 'moment'

const variants = {
    open: { opacity: 1, y: 10 },
    closed: { opacity: 0, y: "-100%" },
    transition: {
        times: [0, 0.4, 0.6, 1]
    }
}

const AddToCart = ({ setFilterAddedCourse }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [ShowPaymentOption, setShowPaymentOption] = useState(false);
    const [lessMoreBtn, setLessMoreBtn] = useState("view more");
    const [addedListData, setAddedListData] = useState(false)
    const [productsRecoil, setProductsRecoil] = useRecoilState(productCartState)

    const paymentCart = [
        {
            icon: "/start/credit.svg",
            content: <CheckoutForm />,
            cardTooltips: "pay with credit card"
        },
        {
            icon: "/start/paypal.svg",
            content: <PaypalPayment />,
            cardTooltips: "pay with paypal"
        },
        {
            icon: "/start/giftcard.svg",
            content: <PaymentGiftCard />,
            cardTooltips: "use gift card"
        },
        {
            icon: "/start/split.svg",
            content: <SplitPayment />,
            cardTooltips: "split payment method"
        },
    ]
    const HandlePaymentOption = () => {
        if (!ShowPaymentOption) setShowPaymentOption(true);
        else setShowPaymentOption(false);

        if (ShowPaymentOption) {
            setAddedListData(true)
        }
        else {
            setAddedListData(false)
        }
    }

    const HandleMoreLessBTn = () => {
        if (lessMoreBtn == 'view more') {
            setLessMoreBtn('view less')
            setAddedListData(true)
        } else {
            setLessMoreBtn('view more')
            setAddedListData(false)
        }
    }

    const removeCart = (productId) => {
        removeFromCart(productId)
        setFilterAddedCourse(getCartItems())
        setProductsRecoil(getCartItems())
    };

    var total_price = 0;
    productsRecoil.map((cartProduct, id) => {
        total_price += parseInt((cartProduct?.price)?.replace("$", ""));
    })

    return (
        <>
            {/* empty basket  */}

            {productsRecoil < [0] ?
                <div className={`${styles.emptyBasketBg} mt-[30%]  bg-white my-4 mx-5 shadow-2xl  mx-5 cursor-pointer relative `}>

                    <div className={`flex justify-between items-center w-full space-x-5  px-6 py-1 `}>
                        <div className={`flex space-x-1 items-center`}>
                            <Image src="/start/empt_basket_Icon.svg" width={30} height={27} alt="empty basket" className={`${styles.checkoutIcon}`} />
                            <p className={`text-white smallf font-semibold tracking-wide  leading-[130%]`}>empty basket = sad basket</p>
                        </div>
                        <div className={`flex flex-col justify-end items-end`}>
                            <p className='text-white -mb-[5px] font-bold smallf'>total</p>
                            <div className='font-thin text-white largef' >$0</div>
                        </div>
                    </div>
                </div> : ""}

            {productsRecoil > [0] ? <div>
                {/* selected items componets  */}
                <div className={` relative grid grid-cols-9 bg-white my-4 mx-5 shadow-2xl  p-3 md:p-4 ${styles.addedItemList}`}>

                    <div className={`col-span-1 relative flex items-start justify-start w-[30px] h-[30px]`}>
                        <Image src="/start/cart.svg" width={40} height={40} className={`  ${styles.cartIcon}`} alt="empty basket" />
                        <div className='absolute  -right-2 w-4 h-4 text-white -translate-x-0 -translate-y-0 rounded-full bg-voilet -top-1'>
                            <p className='flex items-center justify-center text-[10px]'>{productsRecoil.length}</p>
                        </div>
                    </div>

                    {addedListData ? <div className='col-span-8 pl-4'>
                        {
                            productsRecoil?.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className={`flex justify-between items-center`}>
                                            <div className={`flex space-x-5 items-center `}>
                                                <p className={`text-black smallf font-bold leading-[130%]`}>{item?.title}</p>
                                            </div>
                                            <div className={`flex space-x-3 items-center`}>
                                                <div className='text-black extlargef' >{item?.price}</div>
                                                <RiDeleteBin6Line size={24} className={`${styles.deleteIcon}`} onClick={() => removeCart(item.id)} />
                                            </div>
                                        </div>
                                        <div className='w-full my-1 border-b-[2px] border-lightgray'></div>
                                    </Fragment>
                                )
                            })

                        }

                    </div> :
                        <div className='col-span-8 pl-4'>
                            {
                                productsRecoil?.slice(0, 2)?.map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <div className={`flex justify-between items-center`}>
                                                <div className={`flex space-x-5 items-center `}>
                                                    <p className={`text-black smallf font-bold leading-[130%]`}>{item?.title}</p>
                                                </div>
                                                <div className={`flex space-x-3 items-center`}>
                                                    <div className='text-black extlargef' >{item?.price}</div>
                                                    <RiDeleteBin6Line size={24} className={`${styles.deleteIcon}`} onClick={() => removeCart(item.id)} />
                                                </div>
                                            </div>
                                            <div className='w-full my-1 border-b-[2px] border-lightgray'></div>
                                        </Fragment>
                                    )
                                })

                            }

                        </div>}




                    <div onClick={() => HandleMoreLessBTn()} className={`item-center transition duration-[1000ms] ease-in-out cursor-pointer rounded-full bg-black w-max h-max absolute md:-bottom-2 -bottom-[15px] flex px-2  left-1/2 -translate-x-1/2  `}>
                        {/* ${ShowPaymentOption ? styles.toggleOn : styles.toggleOff} `}> */}
                        <div className={` ${lessMoreBtn == 'view more' ? styles.toggleOff : styles.toggleOn} `}>
                            <MdKeyboardArrowDown className={`text-white ${styles.viewMoreIcon}`} size={25} />
                        </div>
                        <p className={`text-white smallf  pr-1 font-thin`}>{lessMoreBtn}
                        </p>

                    </div>
                </div>



                {/* checkout componets  */}
                <div className={`${styles.readyToCheckoutBg}   mt-[5%] mx-5 cursor-pointer relative `} onClick={() => { HandlePaymentOption() }}>

                    <div className={`flex justify-between items-center px-6 py-1  ${styles.addedItemList}`}>
                        <div className={`flex space-x-1 items-center  `}>
                            <Image src="/start/emptyBasketPrice.svg" width={25} height={27} alt="empty basket" className={`${styles.checkoutIcon}`} />
                            <p className={`text-white smallf font-semibold tracking-wide  leading-[130%]`}>simple checkout</p>
                        </div>
                        <div className={`flex flex-col justify-end items-end`}>
                            <p className='text-white mb-[5px] font-bold smallf'>total</p>
                            <div className='font-thin text-white largef' >${total_price}</div>
                        </div>
                    </div>

                    <div className={`hidden md:block rounded-full bg-black w-5 h-5 absolute -bottom-2  left-1/2 -translate-x-1/2 ${ShowPaymentOption ? styles.toggleOn : styles.toggleOff} `}>
                        <MdKeyboardArrowDown className='text-white' size={20} />
                    </div>
                </div>

                <motion.div
                    animate={ShowPaymentOption ? "open" : "closed"}
                    variants={variants}
                // transition={{ delay: 0.8 }}
                >


                    {/* payment option componet desktop  */}
                    <div className={` hidden md:block mx-5 bg-white shadow-2xl  ${ShowPaymentOption ? styles.paymentCardShow : styles.paymentCardHide}`}>

                        <div className='px-3'>
                            <input type="email" placeholder='your email' className={`w-full   mt-4 mb-2 border border-gray bg-white leading-3  smallf p-1  md:p-2 ${styles.emailspaing}`} />

                            <div className='flex items-center justify-between'>
                                {paymentCart?.map((item, id) => {
                                    return (
                                        <>
                                            <div key={id} className={`tooltip cursor-pointer p-[2.5px] rounded-md  ${activeIndex == id ? styles.coursePriceSelectedBg : ""}`} onClick={() => { setActiveIndex(id) }}>
                                                <div className={`${!activeIndex && styles.image_wrapper, styles.shine} `}>
                                                    <Image className={`rounded-md ${styles.paymentIcon} `} src={item.icon} width={200} height={60} alt="empty basket" />
                                                </div>
                                                <div className="z-10 tooltiptext extsmallf">
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
                </motion.div>


                {/* payment option componet mobile  */}
                <div className={`mx-5 bg-white shadow-2xl pb-14 md:hidden`}>

                    <div className='px-3'>

                        <input type="email" placeholder='your email' className='w-full px-5 py-[6px] smallf mt-4 mb-2 border border-gray' />

                        <div className='flex items-center justify-between'>
                            {paymentCart?.map((item, id) => {
                                return (
                                    <>
                                        <div key={id} className={`tooltip cursor-pointer p-[2.5px] rounded-md  ${activeIndex == id ? styles.coursePriceSelectedBg : ""}`} onClick={() => { setActiveIndex(id) }}>
                                            <div className={`${!activeIndex && styles.image_wrapper, styles.shine} `}>
                                                <Image className={`rounded-md ${styles.PaymentIconMob}`} src={item.icon} width={200} height={60} alt="empty basket" />
                                            </div>
                                            <div className="z-10 tooltiptext extsmallf">
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
            </div> : ""}

        </>
    )
}

export default AddToCart