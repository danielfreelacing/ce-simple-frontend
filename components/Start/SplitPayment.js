
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../Start/Start.module.css'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import SplitPayMethod from './DialogCard/SplitPayMethod'
import { FiArrowLeft } from 'react-icons/fi'
import Congratulation from './DialogCard/Congratulation'

const SplitPayment = () => {

    const [addPayment, setAddpayment] = useState(false)

    const addSplitPayment = () => {
        setAddpayment(true)
    }

    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }

    const [successModel, setSuccessModel] = useState(false);


    return (
        <>
            <div className='flex items-center justify-center'>
                {!addPayment ? <div>
                    <div className='flex items-center justify-center pt-8'>

                        <Image src="/start/splitPayment.png" width={100} height={100} className={`${styles.splitPaymentLogo}`} alt="split payment" />

                        <p className='triplelargef pt-3 text-black leading-[107%]'>due: $40</p>
                    </div>

                    <div className={`max-w-[100%] mx-auto mb-6`}>
                        <button type="button"

                            onClick={() => { openModal() }}
                            className={`w-full px-4 mt-4 py-3 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >split payment method

                        </button>
                    </div>
                </div> : ""}


                {addPayment ? <div className='  flex items-center justify-center space-between'>
                    <div >
                        <div className=' md:pt-8 flex  justify-center items-center'>

                            <Image src="/start/splitPayment.png" width={100} height={100} alt="gift card" className={`${styles.splitPaymentLogo} md:-ml-8 `} />

                            <p className='dubblelargef pt-3 leading-[107%]'>due: $40</p>
                        </div>
                        <div className=' bg-purple flex justify-center items-center space-x-2 px-3 py-1'>
                            <p className='smallf'>
                                1 gift cards applied:
                            </p>
                            <p className='mediumf'>
                                $20
                            </p>
                            <Image src='/start/edit.svg' width={25} height={25} alt="image" />
                        </div>

                        <div className={`relative mt-6`}>
                            <input className="w-full smallf leading-4 border border-bordergray md:p-2 p-1" type="password" placeholder="create password" />
                            <div className="absolute cursor-pointer top-2 right-2">
                                <Image src="/images/eyeIcon.svg" width={20} height={13} alt="show hide password icon" />
                            </div>
                        </div>
                        <button type="button"
                            onClick={() => { openModal(), setSuccessModel(true) }}
                            className={`w-full px-4 mt-3 py-2 tracking-wide text-white    ${styles.submitbtnbg} rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >start course! $40.00
                        </button>

                        <button type="button"
                            className={`w-full px-4 mt-3 py-2 tracking-wide text-voilet rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >keep shopping!
                        </button>

                    </div>
                </div > : ''}

            </div>

            {/* model popup */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative md:z-50 z-50 " onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed md:inset-0  bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed md:inset-0 top-0 md:h-auto h-screen overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full  text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={`w-full max-w-[900px] bg-bglightGray transform overflow-hidden  md:p-6 text-left align-middle shadow-xl transition-all h-screen md:h-auto overflow-y-scroll ${styles.paymentDialog} `}>
                                    <div className="flex items-center md:justify-end justify-between ">
                                        <div className='md:hidden flex space-x-2 justify-center items-center pl-5'>
                                            <FiArrowLeft size={25} />
                                            <h4>simple checkout</h4>
                                        </div>
                                        <button
                                            type="button"
                                            className="text-3xl md:pr-0 pr-5 z-[1000]"
                                            onClick={closeModal}
                                        >
                                            x
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        {!successModel ? <SplitPayMethod openModal={openModal} addSplitPayment={addSplitPayment} closeModal={closeModal} /> : ""}

                                        {successModel ? <Congratulation /> : ""}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}

export default SplitPayment