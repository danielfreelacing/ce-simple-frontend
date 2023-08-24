import React, { Fragment, useEffect, useState, useCallback } from 'react'
import { BiArrowBack, BiGift } from 'react-icons/bi'
import { MdOutlineWatchLater } from 'react-icons/md'
import ResearchComponent from './Start/ResearchComponent'
import Image from 'next/image'
import styles from '../src/styles/CoursePage.module.css'
import LogoCard from './card/LogoCard'
import { AiOutlineCheck, AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'
import ScrollBtn from './Start/ScrollBtn'
import AddToCart from './Start/AddToCart'
import { useRouter } from 'next/router'
import { GoGift } from 'react-icons/go'
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import MobileDrawerRighrt from './Menu/MobileDrawerRight'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { addToCart, getCartItems } from 'utils/addToCart'
import { useRecoilState } from 'recoil'
import { productCartState } from 'recoil/atoms'
const SimplyChoose = ({ courseData }) => {
    const [productsRecoil,setProductsRecoil]=useRecoilState(productCartState)

    const [selected, setSelected] = useState(false);
    const [selectedArray, setSelectedArray] = useState([])
    const [hideForm, setHideForm] = useState(false);
    const [panel, setPanel] = useState(true);
    const [addCourse, setAddCourse] = useState([]);
    const [filterAddedCourse, setFilterAddedCourse] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [openDrower, setOpenDrower] = useState(true);
    const [showCourseInfo, setShowCourseInfo] = useState([])
     


    const backtoCourses = () => {
        setOpenDrower(false)
        //router.push('/courses')
        setOpenResearchComp(true)
        setIsOpen(false)
    }

    const handledrower = () => {
        router.push({
            pathname: '/',
            query: { active: 'home' }
        })
    }

    const HandlelobbyClick = () => {
        setTimeout(() => {
            router.push({
                pathname: '/'
            })
        }, 200)

        if (filterAddedCourse == "") {
            setHideForm(false)
            setSelected(false);
        }
    }

    const handleClick = (item) => {
        addToCart(item, 1);
        setFilterAddedCourse(getCartItems());
        setProductsRecoil(getCartItems());
        setHideForm(false)
    };

    const handleAddCourse = (index, item) => {
        setShowCourseInfo(item)
        setHideForm(false)
    }

    // hide addtoCart form 
    const functionHideForm = () => {
        setHideForm(true)
        setSelected(false);
    }
    //   drower for mobile 
    const router = useRouter();

    const [openResearchComp, setOpenResearchComp] = useState(true)

    const handleResearchComp = () => {
        setOpenResearchComp(false)
        setOpenDrower(true)
    }

    // const [isOpenLeft, setIsOpenLeft] = useState(true);
    const pathArr = router?.asPath?.split('/');
    const basePath = pathArr[1];

    const drowerOpen = () => {
        setIsOpen(!isOpen)
    }
    const drowerClose = () => {
        setIsOpen(!isOpen)
    }

    //store data in to array
    var result = [];
    for (var i = 0; i < addCourse.length; i++) {
        // console.log("course data", courseData)
        var index = addCourse[i];
        result.push(courseData[index]);
    }

    const LogoImage = "/images/Logo.svg"
    return (
        <>
            <div className="relative w-full">
                <div className="fixed top-0 left-0 w-screen h-screen transition-all duration-1000 ease-in md:hidden -z-10">
                    <Image
                        className={`${styles.aboutMain}`}
                        src="/images/Picture2.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    />
                </div>

                <div className={` ${styles.fadeAnimation}`}>
                    <div className='relative grid grid-cols-11 overflow-y-scroll'>
                        <div className={` relative md:col-span-6 col-span-12 md:pl-[12%]  md:h-screen overflow-scroll ${styles.hidescrollBar}`}>
                            <div className='hidden md:block'>
                                <LogoCard LogoImage={LogoImage} />
                            </div>
                            <div className='w-max'>

                                <button className={`  hidden  md:flex items-center space-x-1 bg-black text-white px-[30%] py-2  hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4`} onClick={() => { HandlelobbyClick() }} >
                                    <BiArrowBack className="text-white font-semibold minismallf" /><span className='font-semibold minismallf '>lobby</span></button>
                            </div>

                            {/* <div className='hidden md:block -z-50'>
                                <button className={`flex items-center space-x-1 ${styles.submitbtnbg} font-bold  text-white px-5 py-2  rounded-3xl`} onClick={() => { HandlelobbyClick() }}>
                                    <BiArrowBack size={20} className={`text-white ${styles.backIcon}`} /><span className='mediumf'>lobby</span></button>
                            </div> */}

                            <div className={`flex flex-col justify-between  `}>
                                <div className='hidden md:block '>
                                <div className={`hidden md:block px-3 mt-10 md:pt-32 md:px-0 ${styles.titleMain} ${hideForm || (productsRecoil.length==0 && showCourseInfo.length==0) ? styles.show1 : styles.hide1}  `}>
                                    <h2 className='text-black superlargef'>simply choose.</h2>
                                    <p className='py-2 dubblelargef'>smile, you can’t make a bad choice.</p>
                                </div>
                                </div>

                                {/* for mobile  */}

                                {openResearchComp ? <div className={`md:hidden px-3 mt-10 md:pt-32 md:px-0 ${styles.titleMain} `}>
                                    <h2 className='text-black text-[25px] '>simply choose.</h2>
                                    <p className='py-2 text-[19px] '>smile, you can’t make a bad choice.</p>
                                </div> : ""}
                            </div>



                            {/* Selected Courses details of simply choose section on click */}
                            <div className={`  hidden md:grid grid-cols-12 md:grid-cols-9 ${productsRecoil.length==0 && showCourseInfo.length==0 ? styles.hide1 : styles.fadeAnimation}  ${!hideForm ? styles.fadeAnimation : styles.hide1} `}>
                                <button className='absolute top-10 text-2xl left-[90%]' onClick={() => functionHideForm()}><AiOutlineClose /></button>
                                {/* courses details */}
                                <div className='col-span-12 md:col-span-4'>
                                    <ResearchComponent
                                        filterAddedCourse={filterAddedCourse}
                                        setFilterAddedCourse={setFilterAddedCourse}
                                        showCourseInfo={showCourseInfo}
                                      
                                    />
                                </div>
                                {/* course checkout */}
                                <div className={`col-span-12 md:col-span-5 ${styles.addtoCard}`}>
                                    <AddToCart
                                        setFilterAddedCourse={setFilterAddedCourse}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={`md:col-span-5 col-span-12 relative 3xl:border-l border-gray `}>
                            <div className={`grid grid-cols-12  md:h-screen md:overflow-y-scroll no-scrollbar overflow-x-hidden relative ${styles.gridMain} `}>

                                <div className={`relative hidden md:block ${styles.mainDiv} ${styles.mainDivGrid}  ${styles.gridMaincontent} hover:bg-purple bg-transparent md:col-span-6  relative col-span-12 md:border border-t border-bordergray    md:py-5 md:pl-8 md:pr-5  md:mt-0 mt-5  flex flex-col justify-between   `} style={{ height: "33.33vh" }}
                                    //  onClick={() => { { handleGiftComponent(), handleClick() } }}

                                    onClick={() => {
                                        router.push({
                                            pathname: '/giftshoppe'

                                        })
                                    }}
                                >

                                    <div className='flex justify-between'>
                                        <div className='flex items-center justify-center space-x-1'>
                                            {/* <Image src="/images/gift.svg" width={25} height={25} alt='gift' className='3xl:w-[40px] 3xl:h-[40px]' /> */}

                                            <GoGift className='mediumf' />
                                            <div className='font-[500] mediumf'>give ce as a gift</div>
                                        </div>
                                    </div>
                                    <div className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] ${styles.gift} `}>
                                    </div>
                                    <p className={` pt-5 absolute bottom-[10%] dubblelargef ${styles.discriptionAnimation}`}>
                                        gift shoppe
                                    </p>
                                </div>

                                {/* gift shoppe card for mobile */}
                                {openResearchComp ? <div className={` md:hidden block ${styles.mainDiv} ${styles.mainDivGrid}  bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray   p-5 md:mt-0 mt-5  flex flex-col    ${styles.cardBackgroundHover} `}
                                    //  onClick={() => { { setActiveTabIndex(4) } }}
                                    onClick={() => {
                                        router.push({
                                            pathname: '/giftshoppe'

                                        })
                                    }}
                                >
                                    <div className='flex justify-between'>
                                        <div className='flex items-center justify-center space-x-1'>
                                            <Image src="/images/gift.svg" width={25} height={25} alt='gift' />
                                            <p className='font-bold mediumf'>give ce as a gift</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <Image src="/images/homeColor.svg" width={100} height={100} alt='home' />
                                        <p className={`md:pt-0 pt-5 leading-10 font-normal   dubblelargef ${styles.discriptionAnimation}`}>
                                            gift shoppe
                                        </p>
                                    </div>
                                </div> : ""}

                                {/* all course list */}

                                {courseData?.map((item, index) => {
                                    const id = item.id
                                    const checkValue = obj => obj.id === id;
                                    var status = true
                                    if (!productsRecoil.some(checkValue)) {
                                        status = false
                                    }

                                    //console.log(`added status ${index}:`, status)

                                    return (
                                        <Fragment key={item.id} >
                                            {/* for desktop */}
                                            {item?.course_price ? <div className={`hidden md:block ${styles.gridMaincontent} ${styles.mainDivGrid}  relative  h-[33.33vh]  bg-transparent md:col-span-6 col-span-12 md:border border-t  md:block border-bordergray md:py-5 md:pl-8 md:pr-5 md:mt-0 mt-5 justify-between  ${(status || showCourseInfo[index]==index )?"bg-purple":""}`}
                                                // onClick={() => { handleClick(index, item) }}
                                                onClick={() => { handleAddCourse(index, item) }}
                                            >
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <div className='flex items-center justify-center space-x-1 font-[500] mediumf'>
                                                            <MdOutlineWatchLater className='largef' />
                                                            <p className='font-bold mediumf'>
                                                                {/* {item.duration} */}
                                                                4 Hours
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* course price components */}
                                                    <div className={` relative `}
                                                        // onClick={() => { handleAddCourse(index, item) }} 
                                                        onClick={() => { handleClick(item) }}
                                                    >
                                                        <div className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                            <p className='smallfXL leading-[100%] font-semibold text-white'>
                                                                {item?.course_price}
                                                            </p>
                                                        </div>
                                                        {!status ? <p className=' absolute top-[110%] left-[50%] -translate-y-[110%] -translate-x-[50%] font-bold  largef text-[#FF5C00] '>
                                                            +add
                                                        </p> :
                                                            //     <p className=' absolute top-[110%] left-[50%] -translate-y-[110%] -translate-x-[50%] font-bold  largef text-[#FF5C00] '>
                                                            //     +add
                                                            // </p>
                                                            <div className=' flex absolute top-[110%] left-[40%] -translate-y-[110%] -translate-x-[40%] font-bold  largef text-[#FF5C00] '>
                                                                <div className='flex items-center justify-center'><AiOutlineCheck className='text-[#AC6CFF]' size={20} /></div>
                                                                <p className={`text-[#AC6CFF] largef font-semibold`}>
                                                                    added
                                                                </p>
                                                            </div>
                                                        }
                                                        <div className='' >
                                                            {status ?

                                                                <Image src="/images/newPriceBackground.svg" width={100} height={100} alt="prceBg" className={`${styles.priceBack}`} />
                                                                :
                                                                <Image src="/images/newPriceOrange.svg" width={100} height={100} alt="prceBg" className={`${styles.priceBack}`} />}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`absolute bottom-[10%] ${styles.lineClampContent}  font-Barlow dubblelargef   font-normal  ${styles.discriptionAnimation}`}>
                                                    {item?.title?.rendered}
                                                </div>

                                                <div className='hidden md:block'>
                                                    <div className={` absolute bottom-0 right-0  ${status ? 'block' : styles.hide1} ${status === false ? styles.hide1 : ""} `} >
                                                        <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                                    </div>
                                                </div>

                                            </div> : ""}

                                            {/* for mobile */}
                                            {openResearchComp && item?.course_price ? <div className={`md:hidden p-5   bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray    flex flex-col justify-between ${status ? styles.cardBackground : styles.cardBackgroundHover} ${status === false ? styles.cardBackgroundHover : ""}  `} onClick={() => { handleClick(item), handleResearchComp() }}>
                                                <div className='flex justify-between'>
                                                    <div className='flex items-center justify-center space-x-1 font-bold mediumf'>
                                                        <MdOutlineWatchLater size={25} />
                                                        <div><p className='font-[500] mediumf'>
                                                            {/* {item.duration} */}
                                                            4 Hours
                                                        </p>
                                                        </div>
                                                    </div>

                                                    {/* course price components */}

                                                    {item?.course_price ? <div className={` relative `} onClick={() => { setPanel(true), drowerOpen(), handleAddCourse(index, item) }}>
                                                        <div className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                            <p className='font-semibold text-white text-[12px]'>
                                                                {item.course_price}
                                                            </p>
                                                        </div>
                                                        {!status ? <div className=' absolute top-[80%] left-[20%] font-[500]  text-[16px] text-[#FF5C00] '>
                                                            +add
                                                        </div> : <div className=' flex absolute top-[85%] left-[0%] font-[500]  text-[16px] text-[#FF5C00] '>
                                                            <div className='flex items-center justify-center'><AiOutlineCheck className='text-[#AC6CFF]' size={15} /></div>
                                                            <p className={`text-[#AC6CFF] text-[16px] font-[500]`}>
                                                                added
                                                            </p>
                                                        </div>}
                                                        <div className=''>
                                                            {status ?
                                                                <Image src="/images/newPriceBackground.svg" width={70} height={70} alt="prceBg" />
                                                                :
                                                                <Image src="/images/newPriceOrange.svg" width={70} height={70} alt="prceBg" />}
                                                        </div>
                                                    </div> : ''}
                                                </div>
                                                <p className={`md:pt-10 pt-5 leading-8 ${styles.lineClampContent}  font-Barlow    font-[500] text-[20px]  ${styles.discriptionAnimation}`}>
                                                    {item?.title?.rendered}
                                                </p>


                                            </div> : ""}
                                        </Fragment>
                                    )

                                })}

                            </div>
                            <div className={`hidden md:block absolute -bottom-0 left-1/2 -translate-x-1/2  z-[100]`}>
                                <ScrollBtn />
                            </div>

                        </div>

                    </div>
                </div >
                {/* course selected component for mobile when click show  */}
                {!openResearchComp ? <div div className={` z-9 absolute top-0 md:hidden  `}>

                    <MobileDrawerRighrt isOpen={openDrower} setIsOpen={setOpenDrower} basePath={basePath}>
                        <div className="overflow-y-scroll ">
                            <div className="flex flex-col">

                                <Disclosure as="div" className=''>
                                    {({ open }) => (
                                        <>
                                            <div className="flex justify-center w-full ">
                                                <div className={` w-full h-screen  z-10 `}>
                                                    <div className={` fixed top-0 z-10  w-full bg-white`}>
                                                        <div className='flex items-center justify-between px-3 py-4 space-x-5 cursor-pointer'>
                                                            {/* <LogoCard LogoImage={LogoImage} /> */}

                                                            <div className=''>
                                                                <Link href="/">
                                                                    <Image src={`${LogoImage}`} height='200' width='150' alt='logo' className='' />
                                                                </Link>
                                                            </div>
                                                            <div className='lg:hidden'>
                                                                <div className='flex items-center justify-center space-x-2' onClick={() => { handledrower() }}>
                                                                    <p className='font-semibold text-xl '>menu</p>
                                                                    <svg width="24" height="24" className={`   ${styles.animatMenuLine}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0 8.80005H20.8" stroke="black" stroke-width="2" />
                                                                        <path d="M0 14L15.6 14" stroke="black" stroke-width="2" />
                                                                        <path d="M0 19.2L15.6 19.2" stroke="black" stroke-width="2" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className={`  flex items-center space-x-1 bg-black text-white px-5 py-2 w-full justify-center hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold   mt-1`} onClick={() => { backtoCourses() }} >
                                                            <BiArrowBack size={20} className="text-white " />
                                                            <span className='font-semibold text-md 3xl:text-2xl'>Courses </span>
                                                        </button>
                                                    </div>
                                                    <div className='mt-28'>

                                                        <ResearchComponent
                                                            drowerOpen={drowerOpen}
                                                            drowerClose={drowerClose}
                                                            isOpen={isOpen}
                                                            setIsOpen={setIsOpen}
                                                            setPanel={setPanel}
                                                            filterAddedCourse={filterAddedCourse}
                                                            setFilterAddedCourse={setFilterAddedCourse}
                                                            showCourseInfo={showCourseInfo}
                                                            backtoCourses={backtoCourses}
                                                        />
                                                    </div>

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


                </div > : ""}
            </div >




        </>
    )
}

export default SimplyChoose