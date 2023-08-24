
import React, { Fragment, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { MdOutlineWatchLater } from 'react-icons/md'
import Image from 'next/image'
import styles from '../../src/styles/CoursePage.module.css'
import LogoCard from '../../components/card/LogoCard'
import { AiOutlineCheck, AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'
import ScrollBtn from '../../components/Start/ScrollBtn'
import SimpleGiftCard from '../../components/Start/SimpleGiftCard'
import GiftCardBtn from '../../components/Start/GiftCardBtn'
import GiftCardModel from '../../components/Start/DialogCard/GiftCardModel'
import { useRouter } from 'next/router'
import GiftCardPaymentOption from '../../components/giftshop/GiftCardpPaymentOption'
import { GoGift } from 'react-icons/go'
import SideMenu from 'components/SideMenu'
import MobileDrawerRighrt from 'components/Menu/MobileDrawerRight'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import GiftCardMobile from 'components/giftshop/GiftCardMobile'
const GiftShoppe = ({ }) => {
    const [selected, setSelected] = useState(false);
    const [selectedArray, setSelectedArray] = useState([])
    const [hideForm, setHideForm] = useState(true);
    const [activePaymentCard, setActivePaymentCard] = useState(false)
    const showPaymentOpt = () => {
        setActivePaymentCard(true);
    }
    // handle e gift and physical card
    const [activeEgift, setActiveEgift] = useState(false);

    const [activePhysicalGift, setActivePhysicalGift] = useState(false);
    // model for gift dialog form
    const [isOpenD, setIsOpenD] = useState(false)

    function closeModal() {
        setIsOpenD(false)
    }
    function openModal() {
        setIsOpenD(true)
    }
     console.log('isOpenD', isOpenD)

    const data = [
        {
            price: 40,
            duration: "give ce as a gift",
            discription: "gift shoppe"
        },
        {
            price: 40,
            duration: "4  Hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "2 Hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4  Hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "2 Hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4  Hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "2 Hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "2 Hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4  Hours",
            discription: "using research to market your practice"
        },

    ]

    const HandlelobbyClick = () => {
        setTimeout(() => {
            router.push('/');
            // if (router.asPath == '/?active=start') {
            //     startMethodHide();

            // }
            // setOpenTab(0)
        }, 500)
        setActivePaymentCard(false)
        setIsOpenD(false)
        setSelected(false);
    }

    const handleClick = (index, item) => {
        setSelected(index);
        // setSimplyChoose(true)
        const tempArray = [...selectedArray]
        if (tempArray[index] == index) { tempArray[index] = undefined }
        else { tempArray[index] = index }
        setSelectedArray(tempArray)
        setHideForm(false)
    };

    const functionHideForm = () => {
        setHideForm(true);
        setSelected(false);
        // setSimplyChoose(true)
        setActivePaymentCard(false)
        router.push({
            pathname: '/courses'
        })
    }
    //   drower for mobile 
    const router = useRouter();

    // drower for mobile
    const currentPath = router?.query?.active;
    const [isOpen, setIsOpen] = useState(true);
    const [isOpenLeft, setIsOpenLeft] = useState(true);
    const pathArr = router?.asPath?.split('/');
    const basePath = pathArr[1];

    const drowerOpen = () => {
        setIsOpen(!isOpen)
    }
    const drowerClose = () => {
        setIsOpen(!isOpen)
    }

 const backtoHome = () => {
    setIsOpen(!isOpen)
    setIsOpenLeft(isOpenLeft)
  setTimeout(()=>{  router.push({
    pathname:'/'
 })},1000)

 }

//  menu drower mobile
const handledrower = () => {
    router.push({
        pathname: '/',
        query: { active: 'home' }
    })
}

    const LogoImage = "/images/Logo.svg"
    return (
        <>
            <div className="relative w-full">

                <div className="fixed top-0 left-0 w-screen h-screen transition-all duration-1000 ease-in md:hidden -z-10">
                    <Image
                        className={`${styles.aboutMain}`}
                        src="/images/Picture6.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    />
                </div>

                <div className={`bg-[url('/images/Picture6.png')] hidden absolute top-0 bg-cover bg-center bg-no-repeat md:col-span-12 w-full  md:grid grid-cols-12`}>
                    <div className={`col-span-12 md:col-span-11`}>
                        <div className={`${styles.fadeAnimation}`}>
                            <div className='relative grid grid-cols-11 overflow-y-scroll'>
                                <div className={` relative md:col-span-6 col-span-12 md:pl-[12%]  md:h-screen overflow-scroll ${styles.hidescrollBar}`}>
                                    <div className='hidden md:block'>
                                        <LogoCard LogoImage={LogoImage} />
                                    </div>

                                    <div className='w-max  '>

                                        <button className={`  hidden  md:flex items-center space-x-1 bg-black text-white px-[30%] py-2  hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4`} onClick={() => { HandlelobbyClick() }} >
                                            <BiArrowBack className="text-white font-semibold minismallf" /><span className='font-semibold minismallf '>lobby</span></button>

                                    </div>

                                    {/* giftcard  details of simply choose section on click */}

                                    <div className={`md:mt-8 2xl:mt-16  hidden md:grid grid-cols-12 ${styles.fadeAnimation}  `}>
                                        <button className='absolute top-10 text-2xl left-[90%]' onClick={() => functionHideForm()}><AiOutlineClose /></button>
                                        {/* courses details */}
                                        <div className='col-span-12 md:col-span-5'>
                                            <SimpleGiftCard />
                                        </div>
                                        {/* course checkout */}
                                        {!activePaymentCard ? <div className='col-span-12 md:col-span-7'>
                                            <div className='flex flex-col space-y-8'>
                                                <div onClick={() => { openModal(), setActiveEgift(true), setActivePhysicalGift(false) }} >
                                                    <GiftCardBtn animationCss={"ecardRotate"} title="e-gift card" icon="/start/eGift.svg" />
                                                    {/* giftcard button model */}
                                                    <GiftCardModel isOpenD={isOpenD} closeModal={closeModal} activeEgift={activeEgift} activePhysicalGift={activePhysicalGift} showPaymentOpt={showPaymentOpt} />
                                                </div>
                                                <div onClick={() => { openModal(), setActivePhysicalGift(true), setActiveEgift(false) }} >
                                                    <GiftCardBtn animationCss={"ecardImgAni"} title="physical gift card" icon="/start/PhysicalGift.svg" />
                                                </div>
                                            </div>
                                        </div> : ""}

                                        {/* gift card payment detail */}
                                        {activePaymentCard ? <div className='col-span-12 md:col-span-7 -mt-[25%]'>
                                            <GiftCardPaymentOption />
                                        </div> : ""}
                                    </div>
                                </div>

                                <div className={`md:col-span-5 col-span-12 relative 3xl:border-l border-gray `}>
                                    <div className={`grid grid-cols-12  md:h-screen md:overflow-y-scroll no-scrollbar overflow-x-hidden relative`}>

                                        <div className={`relative hidden md:block ${styles.mainDiv} ${styles.mainDivGrid}  bg-transparent md:col-span-6  relative col-span-12 md:border border-t border-bordergray    md:py-5 md:pl-8 md:pr-5  md:mt-0 mt-5  flex flex-col justify-between bg-purple `} style={{ height: "33.33vh" }} onClick={() => { { handleClick() } }} >

                                            <div className='flex justify-between'>
                                                <div className='flex items-center justify-center space-x-1'>
                                                    {/* <Image src="/images/gift.svg" width={25} height={25} alt='gift' className='3xl:w-[40px] 3xl:h-[40px]' /> */}

                                                    <GoGift className='mediumf' />
                                                    <div className='font-[500] mediumf'>{data[0].duration}</div>
                                                </div>
                                            </div>
                                            <div className={` ${styles.activeGiftShoppy}  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%]  `}>
                                            </div>
                                            <p className={` pt-5 absolute bottom-[10%] dubblelargef ${styles.discriptionAnimation}`}>
                                                {data[0].discription}
                                            </p>
                                        </div>

                                        {/* gift shoppe card for mobile */}
                                        <div className={` md:hidden block ${styles.mainDiv} ${styles.mainDivGrid}  bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray   p-5 md:mt-0 mt-5  flex flex-col    ${styles.cardBackground} ${styles.cardBackgroundHover} `}
                                            onClick={() => { { setActiveTabIndex(4) } }}
                                        >
                                            <div className='flex justify-between'>
                                                <div className='flex items-center justify-center space-x-1'>
                                                    <Image src="/images/gift.svg" width={25} height={25} alt='gift' />
                                                    <p className='font-bold mediumf'>{data[0].duration}</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <Image src="/images/homeColor.svg" width={100} height={100} alt='home' />
                                                <p className={`md:pt-0 pt-5 leading-10 font-normal   dubblelargef ${styles.discriptionAnimation}`}>
                                                    {data[0].discription}
                                                </p>
                                            </div>
                                        </div>

                                        {/* all course list */}

                                        {data?.slice(1).map((item, index) => {
                                            return (
                                                <Fragment key={index} >
                                                    {/* for desktop */}
                                                    {/* gift shoppi course card */}
                                                    <div className={`${styles.gridMaincontent} hidden  bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray h-[33.33vh] md:p-10 md:py-5 md:pl-8 md:pr-5 md:mt-0 mt-5  md:flex flex-col justify-between`} >
                                                        <div className='flex justify-between'>
                                                            <div>
                                                                <div className='flex items-center justify-center space-x-1 font-[500] mediumf'>
                                                                    <MdOutlineWatchLater className='largef' />
                                                                    <p className='font-bold mediumf'>{item.duration}</p>
                                                                </div>
                                                            </div>
                                                            <div className={` relative `}>
                                                                <div className='absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                                    <div className='font-semibold text-black mediumf'>
                                                                        ${item.price}
                                                                    </div>
                                                                </div>
                                                                <div className=''>
                                                                    <Image src="/start/giftshoppiPriceBg.svg" width={68} height={69} alt='price' className={`${styles.priceBack}`} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={`absolute bottom-[10%]   font-Barlow dubblelargef   font-normal  ${styles.discriptionAnimation}`}>
                                                            {item.discription}
                                                        </div>
                                                        <div className={`absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} ${selected === false ? styles.hide1 : ""} `} >
                                                            <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                                        </div>

                                                    </div>

                                                    {/* for mobile */}
                                                    <div className={`md:hidden p-5    bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray    flex flex-col justify-between ${selectedArray[index] == index ? styles.cardBackground : styles.cardBackgroundHover} ${selected === false ? styles.cardBackgroundHover : ""}  `} onClick={() => { handleClick(index, item), selectedCourseMethod() }}>
                                                        <div className='flex justify-between'>
                                                            {/* <div className='flex items-center justify-center space-x-1 font-bold mediumf'>
                                                                <MdOutlineWatchLater size={25} />
                                                                <div><p className='font-[500] mediumf'>{item.duration}</p></div>
                                                            </div> */}

                                                            {/* course price components */}

                                                            {/* <div className={` relative `} onClick={() => { setPanel(true), selectedCourseMethod(), drowerOpen() }}>
                                                                <div className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                                    <p className='font-semibold text-white text-[16px]'>
                                                                        ${item.price}
                                                                    </p>
                                                                </div>
                                                                {selectedArray[index] !== index ? <div className=' absolute top-[80%] left-[20%] font-[500]  text-[16px] text-[#FF5C00] '>
                                                                    +add
                                                                </div> : <div className=' flex absolute top-[85%] left-[0%] font-[500]  text-[16px] text-[#FF5C00] '>
                                                                    <div className='flex items-center justify-center'><AiOutlineCheck className='text-[#AC6CFF]' size={15} /></div>
                                                                    <p className={`text-[#AC6CFF] text-[16px] font-[500]`}>
                                                                        added
                                                                    </p>
                                                                </div>}
                                                                <div className=''>
                                                                    {selectedArray[index] == index ?
                                                                        <Image src="/images/newPriceBackground.svg" width={55} height={58} alt="prceBg" />
                                                                        :
                                                                        <Image src="/images/newPriceOrange.svg" width={55} height={58} alt="prceBg" />}
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                        {/* <p className={`md:pt-10 pt-5 leading-8  font-Barlow    font-[500] text-[22px]  ${styles.discriptionAnimation}`}>
                                                            {item.discription}
                                                        </p> */}

                                                        {/* <div className='hidden md:block'>
                                                            <div className={` absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} ${selected === false ? styles.hide1 : ""} `} >
                                                                <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                                            </div>
                                                        </div> */}
                                                    </div>
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
                        {/* <div div className={` z-9 absolute top-0 md:hidden ${selectedCourse ? styles.fadeAnimation : styles.hide1} `}>
                    <ResearchComponent drowerOpen={drowerOpen} drowerClose={drowerClose} isOpen={isOpen} setIsOpen={setIsOpen} panel={panel} setPanel={setPanel} />
                </div > */}
                    </div >
                    <div className={`col-span-12 p-4 max-sm:invisible md:col-span-1 hidden md:flex items-center relative h-screen w-full border-l border-bodergray`}>
                        <SideMenu />
                    </div>
                </div>


                <div className="md:hidden">
                    <MobileDrawerRighrt isOpen={isOpen} setIsOpen={setIsOpen} basePath={basePath}>
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
                                                        <button className={`  flex items-center space-x-1 bg-black text-white px-5 py-2 w-full justify-center hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold   mt-1`} onClick={() => { backtoHome() }} >
                                                            <BiArrowBack size={20} className="text-white " /><span className='font-semibold text-md 3xl:text-2xl'> lobby </span></button>
                                                    </div>
                                                    <div className={`text-black mt-[120px] px-5 `}>
                                                    <GiftCardMobile closeModal={closeModal} openModal={openModal} isOpenD={isOpenD}/>
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
                </div>

            </div>


        </>
    )
}

export default GiftShoppe