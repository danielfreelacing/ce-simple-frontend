import Image from 'next/image'
import React, { useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { HiOutlineSearch } from 'react-icons/hi'
import { RiDeleteBin6Line } from 'react-icons/ri'

import styles from '../../Start/Start.module.css'

const RadeemCardDetail = ({ giftCardDetail, addGiftCard, closeModal }) => {

    // manage state for gift card detail for mobile device

    const cardData = [

        {
            cardId: 1,
            giftSrNo: 'xxxx xxxx xxxx xxxx',
            giftSrNoDcript: 'E75P  TL96  DPDD  D667',
            balance: '$40.00',
            expires: 'Jan 15, 2025',
            redeemHowMuch: '20'
        },

        {
            cardId: 2,
            giftSrNo: 'xxxx xxxx xxxx xxxx',
            giftSrNoDcript: 'E75P  TL96  DPDD  D667',
            balance: '$40.00',
            expires: 'Jan 15, 2025',
            redeemHowMuch: '20'
        },
        {
            cardId: 3,
            giftSrNo: 'xxxx xxxx xxxx xxxx',
            giftSrNoDcript: 'E75P  TL96  DPDD  D667',
            balance: '$40.00',
            expires: 'Jan 15, 2025',
            redeemHowMuch: '20'
        },
        {
            cardId: 4,
            giftSrNo: 'xxxx xxxx xxxx xxxx',
            giftSrNoDcript: 'E75P  TL96  DPDD  D667',
            balance: '$40.00',
            expires: 'Jan 15, 2025',
            redeemHowMuch: '20'
        },
    ]

    const [showGiftCardDetail, setShowGiftCardDetail] = useState(false);
    const [showGiftCardDetail2, setShowGiftCardDetail2] = useState(false);
    const [showGiftCardDetail3, setShowGiftCardDetail3] = useState(false);
    const [showGiftCardDetail4, setShowGiftCardDetail4] = useState(false);

    return (
        <>
            <div className='md:mx-5 md:p-0 p-4
             md:mb-0 '>
                {/* gift card */}

                {/* for desktop */}
                <div className='hidden md:block'>
                    <div className='flex  md:space-x-5 space-x-2 items-center'>
                        <Image src={giftCardDetail.image} width={349} height={221} alt="redeem card" className={` ${styles.redeemCardImage} `} />

                        <div >
                            <h2 className='fourxllargef  tracking-wide md:leading-[107%] leading-tight text-black '>{giftCardDetail.title}</h2>
                            <p className='md:block hidden dubblelargef text-black  leading-tight md:leading-[107%]'>{giftCardDetail.DueBalance}</p>
                        </div>
                    </div>
                </div>

                {/* for mobile */}

                <div className='md:hidden '>
                    <div className='flex  md:space-x-5 space-x-2 items-center'>
                        <Image src={giftCardDetail.image} width={200} height={200} alt="redeem card" className={`  `} />

                        <div >
                            <h2 className='text-[24px] leading-[24px] py-1 tracking-wide '>{giftCardDetail.title}</h2>
                            <p className=' text-[16px]   '>{giftCardDetail.DueBalance}</p>
                        </div>
                    </div>

                    {/* <p className=' text-center md:hidden  text-voilet largef font-bold py-2 leading-tight '>{giftCardDetail.DueBalance}</p> */}
                </div>


                {/* card detail  */}

                <div className=' grid  grid-cols-12 gap-2 '>
                    <div className=' md:col-span-5 col-span-12'>
                        <p className='px-9 mb-3 text-black font-semibold mediumf'>gift card #</p>

                        <div className='flex items-center space-x-2 mb-4'>
                            <p className='bg-purple text-black px-3 py-0.5 mediumf rounded-full'>{cardData[0].cardId}</p>
                            <div className='flex justify-between items-center w-full border border-gray p-1' onClick={() => { setShowGiftCardDetail(true) }}>
                                <div className={`mediumf leading-[130%] ${showGiftCardDetail ? 'text-black' : 'text-gray'}`}>
                                    {showGiftCardDetail ? (cardData[0].giftSrNoDcript) : (cardData[0].giftSrNo)}
                                </div>
                                <div className='bg-voilet p-1'><HiOutlineSearch size={18} className="text-white" /></div>
                            </div>
                        </div>
                        {showGiftCardDetail ? <div className=' md:hidden grid grid-cols-8 gap-2 md:ml-0 ml-10'>
                            <div className='col-span-4'>

                                <div className='smallf font-semibold text-black'>
                                    balnce
                                </div>
                                <div className='  p-1.5 bg-lightgray text-black smallf'>
                                    {cardData[0].balance}
                                </div>
                            </div>

                            <div className='col-span-4'>
                                <div className='smallf font-semibold text-black'>
                                    expires
                                </div>
                                <div className=' p-1.5 bg-lightgray smallf text-black'>
                                    {cardData[0].expires}
                                </div>
                            </div>

                            <div className=' col-span-8'>
                                <div className='smallf text-black font-semibold'>
                                    redeem how much
                                </div>
                                <div className=' flex justify-between items-center p-1.5 border border-gray'>
                                    <div className='smallf'>$ {cardData[0].redeemHowMuch}</div>
                                    <BsCheck2 className='text-green' size={19} />
                                </div>
                            </div>
                            <div className=' md:block hidden col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div> : ""}

                        <div className='flex items-center space-x-2 mb-4 md:mt-0 mt-4'>
                            <p className='bg-purple text-black px-3 py-0.5 mediumf rounded-full'>{cardData[1].cardId}</p>
                            <div className='flex justify-between items-center w-full border border-gray p-1' onClick={() => { setShowGiftCardDetail2(true) }}>
                                <div className={`mediumf leading-[130%] ${showGiftCardDetail2 ? 'text-black' : 'text-gray'}`}>
                                    {showGiftCardDetail2 ? (cardData[1].giftSrNoDcript) : (cardData[1].giftSrNo)}
                                </div>
                                <div className='bg-voilet p-1'><HiOutlineSearch size={18} className="text-white" /></div>
                            </div>
                        </div>
                        {showGiftCardDetail2 ? <div className=' md:hidden grid grid-cols-8 gap-2 md:ml-0 ml-10'>
                            <div className='col-span-4'>

                                <div className='smallf text-black font-semibold'>
                                    balnce
                                </div>
                                <div className='  p-1.5 bg-lightgray smallf text-black'>
                                    {cardData[1].balance}
                                </div>
                            </div>

                            <div className='col-span-4'>
                                <div className='smallf text-black font-semibold'>
                                    expires
                                </div>
                                <div className=' p-1.5 bg-lightgray smallf text-black'>
                                    {cardData[1].expires}
                                </div>
                            </div>

                            <div className=' col-span-8'>

                                <div className='smallf text-black font-semibold'>
                                    redeem how much
                                </div>
                                <div className=' flex justify-between items-center p-1.5 border border-gray'>
                                    <div className='smallf'>$ {cardData[1].redeemHowMuch}</div>
                                    <BsCheck2 className='text-green' size={19} />
                                </div>
                            </div>
                            <div className=' md:block hidden col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div> : ""}

                        <div className='flex items-center space-x-2 mb-4 md:mt-0 mt-4'>
                            <p className='bg-purple text-black px-3 py-0.5 mediumf rounded-full'>{cardData[2].cardId}</p>
                            <div className='flex justify-between items-center w-full border border-gray p-1' onClick={() => { setShowGiftCardDetail3(true) }}>
                                <div className={`mediumf leading-[130%] ${showGiftCardDetail3 ? 'text-black' : 'text-gray'}`}>
                                    {showGiftCardDetail3 ? (cardData[2].giftSrNoDcript) : (cardData[2].giftSrNo)}
                                </div>
                                <div className='bg-voilet p-1'><HiOutlineSearch size={18} className="text-white" /></div>
                            </div>
                        </div>
                        {showGiftCardDetail3 ? <div className=' md:hidden grid grid-cols-8 gap-2 md:ml-0 ml-10'>
                            <div className='col-span-4'>

                                <div className='smallf text-black font-semibold'>
                                    balnce
                                </div>
                                <div className='  p-1.5 bg-lightgray smallf text-black'>
                                    {cardData[2].balance}
                                </div>
                            </div>

                            <div className='col-span-4'>
                                <div className='smallf text-black font-semibold'>
                                    expires
                                </div>
                                <div className=' p-1.5 bg-lightgray smallf'>
                                    {cardData[2].expires}
                                </div>
                            </div>

                            <div className=' col-span-8'>

                                <div className='smallf text-black font-semibold'>
                                    redeem how much
                                </div>
                                <div className=' flex justify-between items-center p-1.5 border border-gray'>
                                    <div className='smallf'>$ {cardData[2].redeemHowMuch}</div>
                                    <BsCheck2 className='text-green' size={19} />
                                </div>
                            </div>
                            <div className=' md:block hidden col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div> : ""}

                        <div className='flex items-center space-x-2 mb-4 md:mt-0 mt-4'>
                            <p className='bg-purple text-black px-3 py-0.5 mediumf rounded-full'>{cardData[3].cardId}</p>
                            <div className='flex justify-between items-center w-full border border-gray p-1' onClick={() => { setShowGiftCardDetail4(true) }}>
                                <div className={`mediumf leading-[130%] ${showGiftCardDetail4 ? 'text-black' : 'text-gray'}`}>
                                    {showGiftCardDetail4 ? (cardData[3].giftSrNoDcript) : (cardData[3].giftSrNo)}
                                </div>
                                <div className='bg-voilet p-1'><HiOutlineSearch size={18} className="text-white" /></div>
                            </div>
                        </div>
                        {showGiftCardDetail4 ? <div className=' md:hidden grid grid-cols-8 gap-2 md:ml-0 ml-10'>
                            <div className='col-span-4'>

                                <div className='smallf font-semibold'>
                                    balnce
                                </div>
                                <div className='  p-1.5 bg-lightgray smallf'>
                                    {cardData[3].balance}
                                </div>
                            </div>

                            <div className='col-span-4'>
                                <div className='smallf font-semibold'>
                                    expires
                                </div>
                                <div className=' p-1.5 bg-lightgray smallf'>
                                    {cardData[3].expires}
                                </div>
                            </div>

                            <div className=' col-span-8'>

                                <div className='smallf font-semibold'>
                                    redeem how much
                                </div>
                                <div className=' flex justify-between items-center p-1.5 border border-gray'>
                                    <div className='smallf'>$ {cardData[3].redeemHowMuch}</div>
                                    <BsCheck2 className='text-green' size={19} />
                                </div>
                            </div>
                            <div className=' md:block hidden col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div> : ""}
                        {/* card detail card for mobile */}
                    </div>

                    <div className=' md:col-span-7 col-span-12 relative'>
                        {/* gift detail card for desktop */}
                        <div className='  hidden md:grid md:grid-cols-7 grid-cols-8 mb-3'>
                            <div className='smallf md:col-span-2 col-span-4 font-semibold text-black'>
                                balnce
                            </div>
                            <div className='smallf md:col-span-2 col-span-4 font-semibold text-black'>
                                expires
                            </div>
                            <div className='smallf md:col-span-2 col-span-8 font-semibold text-black'>
                                redeem how much
                            </div>
                        </div>

                        <div className=' hidden md:grid md:grid-cols-7 grid-cols-8 gap-2'>
                            <div className=' md:col-span-2 col-span-4 p-1.5 bg-lightgray text-black font-semibold smallf'>
                                $40.00
                            </div>
                            <div className=' md:col-span-2 col-span-4 p-1.5 bg-lightgray smallf text-black font-semibold '>
                                jan 15 ,2025
                            </div>
                            <div className=' md:col-span-2 col-span-8 flex justify-between items-center p-1.5 border border-gray'>
                                <div className='smallf text-black font-semibold '>$ 20</div>
                                <BsCheck2 className='text-green' size={19} />
                            </div>

                            <div className=' md:block hidden col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div>

                        {/* gift detail card for desktop end */}

                        {/* continue button */}

                        <div className=' absolute md:bottom-0 -bottom-24 left-1/2 -translate-x-1/2 w-full  '>
                            <div className='md:flex md:space-x-2  md:space-y-0 space-y-5 justify-end pb-2'>
                                {showGiftCardDetail ?
                                    <div className='mediumf text-center '>redeem
                                        <span className='text-voilet border-b'>1 gift card</span>
                                        for <span className='text-voilet border-b'>$20</span>
                                    </div>
                                    : ""}

                                <div className={``}>
                                    <button type="button"
                                        onClick={() => { addGiftCard(), closeModal() }}
                                        className={`w-full px-16  py-2 tracking-[0.02em] text-white   ${showGiftCardDetail ? styles.paymentbyGiftCardBtn : 'bg-gray opacity-[0.5]'}  rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >continue
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>



            </div>
        </>
    )
}

export default RadeemCardDetail