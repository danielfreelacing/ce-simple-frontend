
import Image from 'next/image'
import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import styles from '../../Start/DialogCard/GiftCardModel.module.css'
import { Tab } from '@headlessui/react'
import EGiftForm from '../giftForm/EGiftForm'
import PhysicalGiftCardForm from '../giftForm/PhysicalGiftCardForm'

const GiftCardModel = ({ isOpenD, closeModal, activePhysicalGift, activeEgift, showPaymentOpt }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            {/* model popup */}
            <Transition appear show={isOpenD} as={Fragment}>
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
                        <div className="fixed inset-0  bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto ">
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
                                <Dialog.Panel className="relative md:-mt-[40px] pt-[40px] w-[100%]   md:w-[72%] md:p-6 p-2 overflow-hidden text-left align-middle transition-all transform  max-w-7xl">
                                    <div className="absolute z-50 text-white md:text-black right-2 -top-0 md:top-24 md:right-10">
                                        <div
                                            type="button"
                                            className="text-3xl"
                                            onClick={() => { closeModal() }}
                                           //onClick={()=>{alert('model')}}
                                        >
                                            x
                                        </div>
                                    </div>


                                    <Tab.Group>

                                        <Tab.List className="flex w-full max-w-[50rem] sm:px-0">

                                            <Tab
                                                className={({ selected }) =>
                                                    classNames(
                                                        'w-full pt-1.5 text-sm  leading-5 text-black font-bold',
                                                        selected
                                                            ? ' text-black giftCardBg'
                                                            : 'text-black  giftCardActive mt-[8px] imgGray'
                                                    )
                                                }
                                            >
                                                <div className={` flex ecardBtn md:px-9 items-center space-x-3`}>
                                                    <div className='ecardRotate ecardImgBox'>
                                                        <Image src="/start/eGift.svg" width={71} height={60} alt="gift" className={`${styles.giftImg}`} />
                                                    </div>
                                                    <div className='flex items-center md:items-start'>
                                                        <p className='font-semibold mediumf'>
                                                            e-gift cards
                                                        </p>
                                                        <div className={`bg-black mx-2  flex items-center justify-center rounded-full w-6 h-6 text-white smallf text-center`}>
                                                            0
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab
                                                className={({ selected }) =>
                                                    classNames(
                                                        'w-full pt-1.5 text-sm  leading-5 text-black font-bold',
                                                        selected
                                                            ? ' text-black giftCardBg '
                                                            : 'text-black  giftCardActive boxShadow mt-[8px] imgGray'
                                                    )
                                                }
                                            >
                                                <div className={` flex ecardBtn justify-between md:px-9 w-100 items-center space-x-3`}>
                                                    <div className='ecardImgAni ecardImgBox'>
                                                        <Image src="/start/PhysicalGift.svg" width={71} height={60} alt="gift" className={`${styles.giftImg}`} />
                                                    </div>
                                                    <div className='relative '>
                                                        <div className='flex items-center md:items-start'>
                                                            <p className='font-semibold px-2 mediumf'>
                                                                physical gift cards
                                                            </p>
                                                            <div className={`bg-black ml-2 mr-2 rounded-full w-6 h-6 text-white text-center smallf flex items-center justify-center  `}>
                                                                99
                                                            </div>
                                                        </div>
                                                        <p className='hidden md:block absolute giftShipping '>$1 shipping anywhere in the us!</p>
                                                    </div>
                                                </div>
                                            </Tab>
                                        </Tab.List>
                                        <Tab.Panels className="">
                                            <Tab.Panel
                                                className={classNames(
                                                    ' bg-white md:px-3',
                                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                                )}
                                            >
                                                <EGiftForm showPaymentOpt={showPaymentOpt} />

                                            </Tab.Panel>
                                            <Tab.Panel
                                                className={classNames(
                                                    ' bg-white md:px-3',
                                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                                )}
                                            >
                                                <PhysicalGiftCardForm showPaymentOpt={showPaymentOpt} />
                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default GiftCardModel