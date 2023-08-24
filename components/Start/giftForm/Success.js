import Image from 'next/image'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import styles from '../../../src/styles/CoursePage.module.css'

const Success = () => {

    const OrderList = [

        {
            giftImage: "/start/PhysicalGift.svg",
            giftType: 'physical',
            name: "Susan smith",
            address: " 6801 Tennyson Dr. Suite 1234, Townsville, TX ",
            price: '40',

        },
        {
            giftImage: "/start/PhysicalGift.svg",
            giftType: 'physical',
            name: "John Williams",
            address: "7654 Valley Mills Blvd., Apt 13B, City Burg, TX",
            price: '40',

        },


        {
            giftImage: "/start/eGift.svg",
            giftType: 'e-gift',
            name: "Theodore Robinson",
            address: "trobinson@gmail.com                             ",
            price: '10',

        }
    ]
    return (
        <>

            <div className={` md:h-auto h-screen  overflow-y-auto pb-40 md:pb-0 ${styles.successScrollHide}`}>
                {/* for desktop */}
                <div className={`md:flex flex-col hidden `}>
                    <div className={`flex justify-center items-center`}>
                        <div>
                            <Image src="/start/GiftCard3D.svg" width="235" height="235" alt='gift card' />
                            <h4 className='text-center triplelargefXL'>Success</h4>
                            <p className='text-center mediumf mb-4'>gift card have been sent to :</p>
                        </div>
                    </div>

                    <div className={`  p-3 border-b border-t border-lightgray  ${styles.giftAddedList}`}>

                        {OrderList?.map((item, key) => {
                            return (
                                <>
                                    <div key={key} className={`flex justify-between items-center `}>
                                        <div className={` grid grid-cols-12  w-full gap-2 `}>

                                            <div className=' col-span-1 w-full'>
                                                <Image src={item.giftImage} width={25} height={25} alt="gift" />
                                            </div>
                                            <div className='  col-span-1 w-full'>
                                                <p className={` text-black extsmallf font-semibold leading-[130%]`}>{item.giftType} </p>
                                            </div>
                                            <div className=' col-span-3 w-full'>
                                                <p className={` minismallf  leading-[130%]`}>{item.name} </p>
                                            </div>

                                            <div className=' col-span-5 w-full '>
                                                <p className={`minismallf  leading-[130%]`}>{item.address} </p>
                                            </div>
                                            <div className=' col-span-1 w-full'>
                                                <p className=' text-black minismallf' >${item.price} </p>
                                            </div>
                                            <div className=' col-span-1 w-full'>
                                                <RiDeleteBin6Line size={15} />
                                            </div>
                                        </div>

                                    </div>

                                </>
                            )
                        })}
                    </div>

                    <div className={`grid grid-cols-12 py-2 mt-3`}>
                        <div className={` col-span-3  col-start-3 `}>
                            <p className={`text-voilet minismallf font-bold leading-[130%]`}> free delivery </p>
                        </div>
                        <div className={`col-span-1 col-start-11 `}>
                            <div className=' minismallf text-voilet font-bold' >$ 2 </div>
                        </div>
                    </div>

                    <div className={`grid grid-cols-12 py-2`}>
                        <div className={` col-span-5  col-start-3 `}>
                            <p className={`text-black minismallf font-bold leading-[130%]`}> receipt emailed to: you123@hotmail.com </p>
                        </div>
                        <div className={`col-span-2 col-start-11  `}>
                            <div className=' minismallf text-black font-bold' >total $ 92 </div>
                        </div>
                    </div>



                    <div className={`flex justify-center items-center space-x-5`}>
                        <div className={`bg-black text-white text-center font-[500] rounded-3xl px-5 py-2 mt-6 cursor-pointer`}
                        // onClick={() => { setShowBalance(false) }}
                        >
                            back to lobby
                        </div>

                        <div className={` border text-voilet border-voilet text-center font-[500] rounded-3xl px-5 py-2 mt-6 cursor-pointer`}
                        // onClick={() => { setShowBalance(false) }}
                        >
                            view or print receipt
                        </div>
                    </div>

                </div>

                {/* for mobile */}

                <div className={`flex flex-col md:hidden `}>
                    <div className={`flex justify-center items-center`}>
                        <div >
                            <Image src="/start/GiftCard3D.svg" width="200" height="200" alt='gift card' />
                            <h4 className='text-center text-[45px] '>Success</h4>
                            <p className='text-center text-[22px] mb-4'>gift card have been sent to :</p>
                        </div>
                    </div>

                    <div className={`  p-3  ${styles.giftAddedList}`}>

                        {OrderList?.map((item, key) => {
                            return (
                                <>
                                    <div key={key} className={`flex justify-between items-center mt-3   border-t border-lightgray`}>
                                        <div className={` w-full `}>

                                            <div className={`flex items-center justify-between mb-[6px]`}>
                                                <div className='flex items-center justify-start space-x-3  w-full'>
                                                    <Image src={item.giftImage} width={42} height={36} alt="gift" />
                                                    <p className={` text-4 font-semibold `}>{item.giftType} </p>
                                                </div>

                                                <div className='w-full flex justify-end items-center'>
                                                    <p className='text-[17px] font-semibold'>${item.price} </p>
                                                </div>
                                            </div>

                                            <div className='  w-full'>
                                                <p className={``}>{item.name} </p>
                                            </div>

                                            <div className='w-full '>
                                                <p className={`text-[17px] leading-[125%]`}>{item.address} </p>
                                            </div>

                                            {/* <div className='w-full'>
                                            <RiDeleteBin6Line size={15} />
                                        </div> */}
                                        </div>

                                    </div>

                                </>
                            )
                        })}
                    </div>

                    <div className={` py-2 mt-3  flex justify-between items-center p-3`}>
                        <div className={``}>
                            <p className={`text-voilet text-[17px] font-bold `}> free delivery </p>
                        </div>
                        <div className={`col-span-1 col-start-11 `}>
                            <div className=' text-voilet text-[17px] font-bold' >$ 2 </div>
                        </div>
                    </div>

                    <div className={`flex justify-between space-x-5 items-center py-2 p-3`}>
                        <div className={`  `}>
                            <p className={`text-black text-[17px] font-bold leading-[130%]`}> receipt emailed to: you123@hotmail.com </p>
                        </div>
                        <div className={``}>
                            <div className=' text-[17px] text-black font-bold' >total $ 92 </div>
                        </div>
                    </div>



                    <div className={`md:flex justify-center items-center md:space-x-5 p-3`}>
                        <div className={`bg-black text-white text-center text-[20px] font-[500] rounded-3xl px-5 py-2 mt-6 cursor-pointer`}
                        // onClick={() => { setShowBalance(false) }}
                        >
                            back to lobby
                        </div>

                        <div className={` border text-voilet border-voilet text-[20px] text-center font-[500] rounded-3xl px-5 py-2 mt-6 cursor-pointer`}
                        // onClick={() => { setShowBalance(false) }}
                        >
                            view or print receipt
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Success