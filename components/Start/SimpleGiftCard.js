import Image from 'next/image'
import styles from '../Start/GiftCard.module.css'
import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import GiftCardFaq from './giftForm/GiftCardFaq'
import CheckCardBalance from '../Start/giftForm/CheckCardBalance'
import GiftBalance from './giftForm/GiftBalance'

const SimpleGiftCard = () => {

    const [giftFaq, setGiftFaq] = useState(false);
    const [checkBalance, setCheckBalance] = useState(false);

    const handleBalance = () => {
        setCheckBalance(true);
        setGiftFaq(false)
    }

    const handleFaq = () => {
        setCheckBalance(false);
        setGiftFaq(true)
    }

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <div className='bg-transparent '>
                <div className=''>
                    <Image className={`max-w-[335px] -ml-[16%] ${styles.giftCardImage}`} src="/start/GiftCard3D.svg" width={500} height={314} alt="gift" />
                </div>
                <div className='pl-5'>
                    <h3 className='pb-3 text-black dubblelargef'>ce as a gift? yep!</h3>
                    <p className={`mb-5 leading-7 smallf text-blck ${styles.giftCardContent}`}>be a superhero in 3 minutes! have a beautifully crafted cesimple gift card instantly emailed to a lucky recipient or physically delivered within 5 days!

                    </p>

                    <p className={`mb-5 leading-7 smallf text-blck ${styles.giftCardContent}`}>

                        you’ll receive an email confirmation too! gift cards are valid for 5 years! <span className='font-bold text-black '>simple!</span></p>

                    <div className='md-4'>
                        <button className='text-black smallf font-bold border-b leading-[100%]'
                            onClick={() => { openModal(), handleFaq() }}
                        >
                            gift card faq
                        </button>
                    </div>

                    <div className=''>
                        <button className='text-black smallf font-bold border-b leading-[100%' onClick={() => { openModal(), handleBalance() }}>
                            check gift card balance
                        </button>
                    </div>
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
                                <Dialog.Panel className="w-full max-w-5xl p-6  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
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
                                        {giftFaq ? <GiftCardFaq /> : ""}
                                        {checkBalance ? <CheckCardBalance /> : ""}
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

export default SimpleGiftCard