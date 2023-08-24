import Image from 'next/image'
import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Congratulation from "./DialogCard/Congratulation";
import styles from '../Start/Start.module.css'

const PaypalPayment = () => {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <div className='flex items-center justify-center'>

                <div>
                    <div className={`flex flex-col items-center justify-center py-8 ${styles.paypalPaymentsuccess}`}>

                        <Image src="/start/PayPalLogo.png" width={152} height={40} alt="paypal" className={`${styles.paypalLogo}`} />

                        <p className='extlargef pt-3 text-center text-black leading-[107%]'>$40 payment successful!</p>
                    </div>
                    <div className={`relative ${styles.passwordInput}`} >
                        {/* <label className="mt-8 mb-1.5 text-xs leading-4 font-bold ">create Password</label> */}
                        <input className="w-full bg-white leading-4 border smallf border-bordergray md:p-2 p-1" type="password" placeholder="create password" />
                        <div className="absolute cursor-pointer top-2 right-2">
                            <Image src="/images/eyeIcon.svg" width={22} height={15} className={`${styles.passEyeIcon}`} alt="show hide password icon" />
                        </div>
                    </div>

                    <button type="button"
                        onClick={() => { openModal() }}
                        className={`w-full px-4 mb-10 mt-5 py-2 tracking-wide text-white    ${styles.submitbtnbg} rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >start course!<span className='ml-1 border-b'>$40</span>
                    </button>
                </div>
            </div>

            {/* model popup */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                                    <div className="flex items-center justify-end ">
                                        <button
                                            type="button"
                                            className="text-3xl"
                                            onClick={closeModal}
                                        >
                                            x
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-center pb-10 mt-2'>
                                        <Congratulation />
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

export default PaypalPayment