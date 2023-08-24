import Image from 'next/image'
import React, { useEffect } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import styles from '../Start/Start.module.css'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import YourInstructor from './DialogCard/YourInstructor'
import AboutCourse from './DialogCard/AboutCourse'
import { useRouter } from 'next/router'
import MobileDrawerRighrt from '../Menu/MobileDrawerRight'
import AddToCart from './AddToCart'
import { getCartItems } from 'utils/addToCart';
import { addToCart } from 'utils/addToCart'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { productCartState } from 'recoil/atoms'
const ResearchComponent = ({
    drowerClose,
    drowerOpen,
    isOpen,
    setIsOpen,
    panel,
    setPanel,
    courseDetail,
    filterAddedCourse,
    setFilterAddedCourse,
    showCourseInfo,
    backtoCourses
}) => {



    const router = useRouter();
    let [Open, setOpen] = useState(false)
    const pathArr = router?.asPath?.split('/');
    const basePath = pathArr[1];
    const [aboutCourse, setAboutCourse] = useState(false);
    const [instructor, setInstructor] = useState(false);
    const [cookieData, setCookieData] = useState([]);
    const [productsRecoil, setProductsRecoil] = useRecoilState(productCartState)

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }
    const courseData = [
        'ncbtmb approved',
        'start course instantly',
        'log in / out anytime',
        'finish with our ‘flunk-proof’ quiz',
        'instant certificate',
    ]
    const addToCartHandler = (product) => {
        addToCart(product, 1);
        setProductsRecoil(getCartItems());

    }

    useEffect(() => {
        setCookieData(getCartItems())
        setProductsRecoil(getCartItems())
        setFilterAddedCourse(getCartItems())
    }, [])


    console.log(showCourseInfo, productsRecoil)
    return (
        <>

            {showCourseInfo.length == 0 ?
                <div className='h-full px-5 pb-16 sm:mt-5 md:mt-1 overflow-y-scroll bg-transparent md:px-0 z-0'>
                    <div className={`py-4 border-b-2 border-bordergray ${styles.authorComMain} `}>

                        <div className='flex items-center justify-start space-x-2'>

                            <div className='max-w-[75%]'>
                                <h2 className={`tracking-wide hidden md:block text-black fourxllargef pb-1 ${styles.lineClampContent} `}>
                                    {productsRecoil[0]?.title}
                                </h2>
                            </div>

                            {/* price component for mobile */}

                            <div className={` relative md:hidden `} onClick={() => { drowerOpen(), setPanel(true) }}>

                                {productsRecoil?.find((item) => showCourseInfo?.id === item?.id) ?

                                    <div className={` relative flex flex-col  justify-start items-center w-max `} onClick={() => addToCart(showCourseInfo, 1)} >
                                        <Image src="/images/newPriceOrange.svg" className={`${styles.selectedCoursepriceBg}`} width={200} height={200} alt="prceBg" />
                                        <div className='absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1'>

                                            <div className='font-[500] text-white smallf'>
                                                {productsRecoil[0]?.price}
                                            </div>
                                        </div>
                                        <div className=' text-center font-bold  mediumf  text-[#FF5C00] '>
                                            +add
                                        </div>
                                    </div>
                                    :
                                    <div className={`relative flex flex-col justify-start items-center w-max`} >
                                        <Image src="/images/newPriceBackground.svg" width={200} height={200} alt="prceBg" className={`${styles.selectedCoursepriceBg} `} />
                                        <div className='absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1'>

                                            <div className='font-[500] text-white smallf'>
                                                {productsRecoil[0]?.price}
                                            </div>
                                        </div>
                                        <div className=' flex justify-center font-bold  largef text-[#FF5C00] '>
                                            <div className='flex items-center justify-center'><AiOutlineCheck className='text-[#AC6CFF]' size={20} /></div>
                                            <div className={`text-[#AC6CFF] smallf font-semibold`}>
                                                added
                                            </div>
                                        </div>
                                    </div>

                                }
                            </div>
                            </div>
                        <div className='hidden mt-2  cursor-pointer md:block '>
                            <div className={` relative `}>

                                {cookieData?.find((item) => showCourseInfo?.id === item?.id) ?

                                    <div className={` relative flex  justify-start items-center w-max `} onClick={() => addToCart(showCourseInfo, 1)} >
                                        <Image src="/start/horizontal_add_button.svg" className={`${styles.selectedCoursepriceBg} max-h-[50px] max-w-[150px] rounded-md`} width={200} height={50} alt="prceBg" />
                                        <div className='absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1'>
                                            <div className=' text-center font-[500] smallf text-white '>
                                                +add
                                            </div>
                                            <div className='font-[500] text-white smallf'>
                                                {productsRecoil[0]?.price}
                                            </div>

                                        </div>
                                    </div>


                                    : <div className={`relative flex  justify-start items-center w-max`} >
                                        <Image src="/start/horizontal_added_button.svg" width={200} height={50} alt="prceBg" className={`${styles.selectedCoursepriceBg} max-h-[50px] max-w-[150px] rounded-md`} />
                                        <div className='absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1'>
                                            <div className=' text-center font-[500] smallf text-white '>
                                                added
                                            </div>
                                            <div className='font-[500] text-white smallf'>
                                                {productsRecoil[0]?.price}
                                            </div>

                                        </div>
                                    </div>

                                }

                            </div>

                            {/* <Image src="/start/horizontal_added_button.svg" width={120} height={50} alt="btn" /> */}
                        </div>



                        <div className={`flex items-center py-2 space-x-5 ${styles.authorCard}`}>
                            <div className='flex items-center space-x-1 cursor-pointer'>
                                <Image src="/images/GaelWood.png" width={55} height={60} alt="author" className={`${styles.authorImage}`} />

                                {/* <h3 className={`${styles.element} border-b border-bordergray leading-4 smallf`} >Geal Wood</h3> */}
                                <button
                                    type="button"
                                    onClick={() => { openModal(), setInstructor(true), setAboutCourse(false) }}
                                    className={`${styles.element} border-b smallf border-bordergray leading-4`}
                                >
                                    Gael Wood
                                </button>
                            </div>
                            <div className='flex space-x-1.5 items-center'>
                                <MdOutlineWatchLater size={20} />
                                <h3 className='font-semibold text-black smallf'>4 Hours</h3>
                            </div>
                        </div>
                        <p className={`py-1 tracking-wide courseDis text-black smallf ${styles.lineClampContent}`} dangerouslySetInnerHTML={{ __html: showCourseInfo?.content?.rendered }}>

                        </p>
                        <button className={`font-semibold border-b smallf ${styles.element} border-black leading-2`}
                            onClick={() => { openModal(), setAboutCourse(true), setInstructor(false) }}
                            type="button"
                        >
                            show more
                        </button>
                    </div>
                    <div className={`py-3 ${styles.refoundpolicyComp}`}>
                        {courseData && courseData.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center space-x-4 py-0.3'>
                                    <AiOutlineCheck size={20} className={`text-[#9747FF] ${styles.checkIcon}`} />
                                    <p className='tracking-wider text-black smallf'>{item}</p>
                                </div>
                            )
                        })}
                        <div className={`pt-2 w-max font-semibold leading-5 border-b border-black smallf text-black ${styles.refoundPcBtn}`}>
                            read our refund policy
                        </div>
                    </div>
                </div>
                :
                <div className='h-full px-5 pb-16 sm:mt-5 md:mt-1 overflow-y-scroll bg-transparent md:px-0 z-0'>
                    <div className={`py-4 border-b-2 border-bordergray ${styles.authorComMain} `}>

                        <div className='flex items-center justify-start space-x-2'>

                            <div className='max-w-[80%]'>
                                <h2 className={`tracking-wide hidden md:block text-black fourxllargef pb-1 ${styles.lineClampContent} `}>
                                    {showCourseInfo?.title?.rendered}
                                </h2>
                            </div>

                            {/* price component for mobile */}

                            <div className={` relative md:hidden w-max `} onClick={() => { drowerOpen(), setPanel(true) }}>
                                
                                {productsRecoil?.find((item) => showCourseInfo?.id === item?.id) ? <div className={`relative flex flex-col justify-start items-center w-max`} >
                                    <Image src="/images/newPriceBackground.svg" width={200} height={200} alt="prceBg" className={`${styles.selectedCoursepriceBg} `} />
                                    <div className='absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1'>

                                        <div className='font-[500] text-white smallf'>
                                            {showCourseInfo?.course_price}
                                        </div>
                                    </div>
                                    <div className=' flex justify-center font-bold  largef text-[#FF5C00] '>
                                        <div className='flex items-center justify-center'><AiOutlineCheck className='text-[#AC6CFF]' size={20} /></div>
                                        <div className={`text-[#AC6CFF] smallf font-semibold`}>
                                            added
                                        </div>
                                    </div>
                                </div> : <div className={` relative flex flex-col  justify-start items-center w-max `} onClick={() => addToCart(showCourseInfo, 1)} >
                                    <Image src="/images/newPriceOrange.svg" className={`${styles.selectedCoursepriceBg}`} width={200} height={200} alt="prceBg" />
                                    <div className='absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1'>

                                        <div className='font-[500] text-white smallf'>
                                            {showCourseInfo?.course_price}
                                        </div>
                                    </div>
                                    <div className=' text-center font-bold  mediumf  text-[#FF5C00] '>
                                        +add
                                    </div>
                                </div>}



                            </div>
                        </div>
                        <div className='hidden mt-2  cursor-pointer md:block '>
                            <div className={` relative `}>

                                {productsRecoil?.find((item) => showCourseInfo?.id === item?.id) ? <div className={`relative flex  justify-start items-center w-max`} onClick={() => addToCartHandler(showCourseInfo)}>
                                    <Image src="/start/horizontal_added_button.svg" width={200} height={50} alt="prceBg" className={`${styles.selectedCoursepriceBg} max-h-[50px] max-w-[150px] rounded-md`} />
                                    <div className='absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1'>
                                        <div className=' text-center font-[500] smallf text-white '>
                                            added
                                        </div>
                                        <div className='font-[500] text-white smallf'>
                                            {showCourseInfo?.course_price}
                                        </div>

                                    </div>
                                </div> : <div className={` relative flex  justify-start items-center w-max `} onClick={() => addToCartHandler(showCourseInfo)} >
                                    <Image src="/start/horizontal_add_button.svg" className={`${styles.selectedCoursepriceBg} max-h-[50px] max-w-[150px] rounded-md`} width={200} height={50} alt="prceBg" />
                                    <div className='absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1'>
                                        <div className=' text-center font-[500] smallf text-white '>
                                            +add
                                        </div>
                                        <div className='font-[500] text-white smallf'>
                                            {showCourseInfo?.course_price}
                                        </div>

                                    </div>
                                </div>}

                            </div>

                            {/* <Image src="/start/horizontal_added_button.svg" width={120} height={50} alt="btn" /> */}
                        </div>
                        <div className={`flex items-center py-2 space-x-5 ${styles.authorCard}`}>
                            <div className='flex items-center space-x-1 cursor-pointer'>
                                <Image src="/images/GaelWood.png" width={55} height={60} alt="author" className={`${styles.authorImage}`} />

                                {/* <h3 className={`${styles.element} border-b border-bordergray leading-4 smallf`} >Geal Wood</h3> */}
                                <button
                                    type="button"
                                    onClick={() => { openModal(), setInstructor(true), setAboutCourse(false) }}
                                    className={`${styles.element} border-b smallf border-bordergray leading-4`}
                                >
                                    Gael Wood
                                </button>
                            </div>
                            <div className='flex space-x-1.5 items-center'>
                                <MdOutlineWatchLater size={20} />
                                <h3 className='font-semibold text-black smallf'>4 Hours</h3>
                            </div>
                        </div>
                        <p className={`py-1 tracking-wide courseDis text-black smallf ${styles.lineClampContent}`} dangerouslySetInnerHTML={{ __html: showCourseInfo?.content?.rendered }}>

                        </p>
                        <button className={`font-semibold border-b smallf ${styles.element} border-black leading-2`}
                            onClick={() => { openModal(), setAboutCourse(true), setInstructor(false) }}
                            type="button"
                        >
                            show more
                        </button>
                    </div>
                    <div className={`py-3 ${styles.refoundpolicyComp}`}>
                        {courseData && courseData.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center space-x-4 py-0.3'>
                                    <AiOutlineCheck size={20} className={`text-[#9747FF] ${styles.checkIcon}`} />
                                    <p className='tracking-wider text-black smallf'>{item}</p>
                                </div>
                            )
                        })}
                        <div className={`pt-2 w-max font-semibold leading-5 border-b border-black smallf text-black ${styles.refoundPcBtn}`}>
                            read our refund policy
                        </div>
                    </div>
                </div>
            }


            {/* model popup */}
            <Transition appear show={Open} as={Fragment}>
                <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full max-w-5xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                                    <div className="flex items-center justify-end ">
                                        <button
                                            type="button"
                                            className="text-3xl"
                                            onClick={closeModal}
                                        >
                                            x
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-center mt-2 md:pb-20'>
                                        {instructor ? <YourInstructor /> : ""}
                                        {aboutCourse ? <AboutCourse title={showCourseInfo?.title?.rendered} content={showCourseInfo?.content?.rendered} /> : ""}
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            {/* checkout form for mobile */}

            <MobileDrawerRighrt isOpen={isOpen} setIsOpen={setIsOpen} basePath={basePath}>
                <div className="z-50 overflow-y-scroll ">
                    <div className="flex flex-col">
                        <Disclosure as="div" className='list-none rounded-full text-gray '>
                            {({ open }) => (
                                <>
                                    <div className={`w-full `}>
                                        <div className={`bg-lightgray relative pt-10 z-50`}>
                                            <div className={`flex items-center justify-between px-5 `}>
                                                <h4 className=' text-left text-black dubblelargef'>simple checkout</h4>
                                                <div onClick={() => { drowerClose(), backtoCourses() }}>
                                                    <div className={`px-2  py-1 text-black  text-[14px] border-2 border-green  boxshadow-2xl bg-white`}>
                                                        add more
                                                        <span className='border-b ml-1 border-black'>course</span>
                                                    </div>
                                                </div>

                                            </div>

                                            <button className='absolute text-black extlargef top-1 right-5' type='btn' onClick={() => { drowerClose() }}>
                                                x
                                            </button>
                                            <AddToCart
                                                courseDetail={courseDetail}
                                                filterAddedCourse={filterAddedCourse}
                                                setFilterAddedCourse={setFilterAddedCourse}
                                            />
                                        </div>
                                    </div>
                                    <Disclosure.Panel className="w-full py-1 text-white ">
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </MobileDrawerRighrt>

            {/* checkout componets  */}
            <div className={`${styles.readyToCheckoutBg} ${panel ? 'block' : 'hidden'} md:mt-3 md:mx-5 cursor-pointer  fixed bottom-0 w-full z-50`} onClick={() => { drowerOpen() }} >

                <div className={`flex justify-between items-center px-6 py-2`}>
                    <div className={`flex space-x-1 items-center `}>
                        <Image src="/start/emptyBasketPrice.svg" width={25} height={27} alt="empty basket" />
                        <p className={`text-white smallf font-semibold tracking-wide  leading-[130%]`}>simple checkout</p>
                    </div>
                    <div className={`flex  justify-center items-center space-x-1`}>
                        <p className='text-white -mb-[5px] font-bold extsmallf'>total</p>
                        <div className='font-thin text-white extlargef' >$40</div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ResearchComponent