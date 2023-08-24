import GiftCardModel from 'components/Start/DialogCard/GiftCardModel'
import GiftCardBtn from 'components/Start/GiftCardBtn'
import Image from 'next/image'
import React, { useState } from 'react'
import GiftCardPaymentOption from './GiftCardpPaymentOption'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import GiftCardFaq from '../Start/giftForm/GiftCardFaq'
import CheckCardBalance from '../Start/giftForm/CheckCardBalance'

const GiftCardMobile = ({closeModal,isOpenD,openModal}) => {
    const [activeEgift, setActiveEgift] = useState(false);
    const [activePhysicalGift, setActivePhysicalGift] = useState(false);

    const [activePaymentCard, setActivePaymentCard] = useState(false)
    console.log("activePaymentCard", activePaymentCard)
    const showPaymentOpt = () => {
        setActivePaymentCard(true);
    }


    // let [isOpenD, setIsOpenD] = useState(false)

    // function closeModal() {
    //     setIsOpenD(false)
    // }

    // function openModal() {
    //     setIsOpenD(true)
    // }

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

    function closeModalBalInq() {
        setIsOpen(false)
    }
    function openModalBalInq() {
        setIsOpen(true)
    }

    return (
        <>
            <div className='-z-[100] pb-5 md:pb-0'>
                <div className='flex items-center px-3 py-5 space-x-5'>
                    <Image alt='start' src="/images/homeColor.svg" height='80' width='80' />
                    <h3 className='mt-4 text-black dubblelargef '>gift shoppe</h3>
                </div>
                <div className='bg-transparent'>
                    <div className=''>
                        <Image className='w-full' src="/start/GiftCard3D.svg" width={500} height={314} alt='gift' />
                    </div>
                    <div>
                        <h3 className='pb-3 text-black dubblelargef'>ce as a gift? yep!</h3>
                        <p className='mb-6 leading-7 smallf text-blck'>be a superhero in 3 minutes! have a beautifully crafted cesimple gift card instantly emailed to a lucky recipient or physically delivered within 5 days!
                            you’ll receive an email confirmation too! gift cards are valid for 5 years! <span className='font-bold text-black '>simple!</span></p>


                    </div>
                    {/* course checkout */}
                    {!activePaymentCard ? <div className='col-span-12 md:col-span-7'>
                        <div className='flex flex-col space-y-8'>
                            <div className='w-full' onClick={() => { openModal(), setActiveEgift(true), setActivePhysicalGift(false) }} >
                                <GiftCardBtn animationCss={"ecardRotate"} title="e-gift card" icon="/start/eGift.svg" />
                                {/* giftcard button model */}


                                <GiftCardModel isOpenD={isOpenD} closeModal={closeModal} activeEgift={activeEgift} activePhysicalGift={activePhysicalGift} showPaymentOpt={showPaymentOpt} />
                            </div>
                            <div className='w-full' onClick={() => { openModal(), setActivePhysicalGift(true), setActiveEgift(false) }} >
                                <GiftCardBtn animationCss={"ecardImgAni"} title="physical gift card" icon="/start/PhysicalGift.svg" />
                            </div>
                        </div>
                    </div> : ""}

                    {/* gift card payment detail */}

                    {activePaymentCard ? <div className=''>
                        <GiftCardPaymentOption />
                    </div> : ""}

                    {/* giftcard faq section  */}
                    <div className='my-10'>
                        <div className='flex justify-center md-4' onClick={() => { openModalBalInq(), handleFaq() }}>
                            <button className='text-black mediumf my-2 font-bold border-b leading-[100%]'>
                                gift card faq
                            </button>
                        </div>

                        <div className='flex justify-center md-3' onClick={() => { openModalBalInq(), handleBalance() }}>
                            <button className='text-black mediumf my-2 font-bold border-b leading-[100%]'>check gift card balance</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* model popup */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModalBalInq}>
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

                    <div className="fixed md:inset-0 z-50 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-5xl p-6  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                                    <div className="flex items-center justify-end ">
                                        <button
                                            type="button"
                                            className="text-3xl"
                                            onClick={closeModalBalInq}
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

export default GiftCardMobile