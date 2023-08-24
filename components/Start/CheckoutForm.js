import Image from "next/image";
import React, { useState } from "react";
import styles from '../Start/Start.module.css'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Congratulation from "./DialogCard/Congratulation";
import { MdLock } from "react-icons/md";

const CheckoutForm = () => {
    const countries = ["China", "Russia", "UK"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("United States");

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };


    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex items-center justify-center ">
                <div className="flex flex-col items-start justify-start ">
                    <div className="flex flex-col justify-center w-full space-y-6 xl:flex-row xl:justify-between xl:space-y-0 xl:space-x-6">
                        <div className="flex flex-col lg:w-full">
                            <div className={`flex-col mt-2 ${styles.checkoutFormMain}`}>
                                <div className={`${styles.formbg} p-2`}>
                                    <div className={` mb-2  font-bold text-black leading-4 smallf ${styles.formTitle}`}>credit card info
                                    </div>
                                    <div className={`flex justify-between mb-2 ${styles.namelastnameInput}`}>
                                        <div className="max-w-[48%]">
                                            <input className="w-full p-1 leading-3 bg-white border smallf border-bordergray md:p-2" type="text" placeholder="first name" />
                                        </div>
                                        <div className="max-w-[48%]">
                                            <input className="w-full p-1 leading-3 bg-white border smallf border-bordergray md:p-2" type="text" placeholder="last name" />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input className="w-full p-1 leading-3 bg-white border smallf border-bordergray md:p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" placeholder="**** **** **** *****" />
                                        <MdLock className="mediumf absolute top-[30%] right-[2%]" />
                                    </div>
                                    <div className={`flex flex-row mt-2 space-x-2 ${styles.cardDetailForm}`}>
                                        <div>
                                            <input className="w-full p-1 leading-3 bg-white border smallf border-bordergray md:p-2 " type="text" placeholder="mm/yy" />
                                        </div>
                                        <div>
                                            <input className="w-full p-1 leading-3 text-gray-600 bg-white border smallf border-bordergray md:p-2 " type="text" placeholder="cvc" />
                                        </div>
                                        <div>
                                            <input className="w-full p-1 leading-3 bg-white border smallf border-bordergray md:p-2 " type="text" placeholder="zip" />
                                        </div>
                                    </div>
                                </div>

                                <div className={`flex items-center py-2 ${styles.checkoutFormPassword}`}>
                                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-black border-gray-300 cursor-pointer" />
                                    {/* </div> */}
                                    <label Htmlfor="link-checkbox" className={`text-black smallf ml-2 cursor-pointer`}>save payment for future purchases?</label>
                                </div>

                                <div className={`relative ${styles.passwordInput}`}>
                                    <input className="w-full p-1 mb-2 leading-3 bg-white border border-gray smallf md:p-2" type="password" placeholder="create password" />
                                    {/* <div className="absolute cursor-pointer top-2 right-2">
                                        <Image src="/images/eyeIcon.svg" width={22} height={15} className={`${styles.passEyeIcon}`} alt="show hide password icon" />
                                    </div> */}
                                </div>

                            </div>

                            <button type="button"
                                onClick={openModal} className={`w-full px-4 mt-4 py-2 mb-5 tracking-wide text-white    ${styles.submitbtnbg} rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >start course! $40.00
                            </button>
                        </div>
                    </div>

                </div>
            </div >

            {/* model popup */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 " onClose={closeModal}>
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

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-4xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white">
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
            </Transition >
        </>
    );
};

export default CheckoutForm;
