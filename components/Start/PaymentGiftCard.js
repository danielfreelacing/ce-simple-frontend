import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../Start/Start.module.css'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import RadeemCardDetail from './DialogCard/RadeemCardDetail'
import { FiArrowLeft } from 'react-icons/fi'
import Congratulation from './DialogCard/Congratulation'

const PaymentGiftCard = () => {
    // card detail
    const giftCardDetail = {
        image: "/start/GiftCard3D.svg",
        title: "redeem gift cards",
        DueBalance: "(maximum 4)"
    }

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // add gift 
    const [addGift, setAddGift] = useState(false)

    const addGiftCard = () => {
        setAddGift(true);
    }
    // open congrate model
    const [cograteModel, setCongrateModel] = useState(false);


    //  console.log('addGift', addGift);
    return (
        <>
            {/* widthout selected */}
            {!addGift ? <div className='flex items-center justify-center space-between'>
                <div >
                    <div className='flex items-center justify-center pt-5'>

                        <Image className={`${styles.giftCardLogo}`} src="/start/GiftCard3D.svg" width={150} height={100} alt="gift card" />

                        <p className='dubblelargef pt-3 text-black leading-[107%]'>due: $40</p>
                    </div>

                    <div className={`max-w-[80%] mx-auto mb-6`}>
                        <button type="button"
                            onClick={() => { openModal() }}
                            className={`w-full px-4 mt-4 py-3 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >redeem gift card

                        </button>
                    </div>
                </div>
            </div > : ""}

            {/* with selected gift */}

            {addGift ? <div className='flex items-center justify-center space-between mt-1'>
                <div >
                    <div className=' md:pt-8 flex flex-col justify-center items-center'>

                        <Image className='md:-ml-8  ' src="/start/GiftCard3D.svg" width={150} height={100} alt="gift card" />

                        <p className='dubblelargef pt-3 leading-[107%]'>due: $40</p>
                    </div>
                    <div className=' bg-purple flex justify-center items-center space-x-2 px-3 py-1 mt-1'>

                        <p className=''>
                            1 gift cards applied:
                        </p>

                        <p className=''>
                            $20
                        </p>

                        <Image src='/start/edit.svg' width={25} height={25} alt="image" />

                    </div>

                    <div className={`relative mt-6`}>
                        <input className="w-full leading-4 border border-bordergray md:p-2 p-1" type="password" placeholder="create password" />
                        <div className="absolute cursor-pointer top-2 right-2">
                            <Image src="/images/eyeIcon.svg" width={20} height={13} className={`${styles.passEyeIcon}`} alt="show hide password icon" />
                        </div>
                    </div>
                    <button type="button"
                        onClick={() => { openModal(), setCongrateModel(true) }}
                        className={`w-full px-4 mt-3 py-2 tracking-wide text-white    ${styles.submitbtnbg} rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >start course! $40.00
                    </button>

                    <button type="button"
                        className={`w-full px-4 mt-2 py-2 tracking-wide text-voilet rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >keep shopping!
                    </button>

                </div>
            </div > : ""}

            {/* model popup */}
            < Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative md:z-10 z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed md:inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className={`fixed sm:inset-0 md:inset-0 overflow-y-auto `}>
                        <div className="flex items-center justify-center min-h-full md:p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={`w-full md:max-w-[900px] md:p-6  text-left align-middle transition-all transform bg-white shadow-xl ${styles.paymentDialog}`}>
                                    <div className={`flex items-center  md:justify-end  ${cograteModel ? ' justify-end' : 'justify-between'}`}>
                                        <div className={`md:hidden flex space-x-2 justify-center items-center pl-5 ${cograteModel ? 'hidden' : ""}`}>
                                            <FiArrowLeft size={25} />
                                            <h4>simple checkout</h4>
                                        </div>
                                        <button
                                            type="button"
                                            className="text-3xl md:pr-0 pr-5 text-black"
                                            onClick={closeModal}
                                        >
                                            x
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-center   overflow-y-scroll md:pt-0 '>
                                        {!cograteModel ? <RadeemCardDetail giftCardDetail={giftCardDetail} addGiftCard={addGiftCard} closeModal={closeModal} /> : ""}

                                        {cograteModel ? <Congratulation /> : ""}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}

export default PaymentGiftCard