import StartComponent from 'components/IwannaTech/StartComponent';
import React, { Children, useCallback, useEffect, useState } from 'react'
import styles from '../styles/MenuComponent.module.css'
import Image from 'next/image';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import MusicCard from 'components/card/MusicCard';
import { useRouter } from 'next/router'
import WhyTech from 'components/IwannaTech/WhyTech';
import WhyUs from 'components/IwannaTech/WhyUs';
import WhyNow from 'components/IwannaTech/WhyNow';
import Needed from 'components/IwannaTech/Needed';
import Ncbtmb from 'components/IwannaTech/Ncbtmb';
import WhyYou from 'components/IwannaTech/WhyYou';
import NowWhat from 'components/IwannaTech/NowWhat';
import Create from 'components/IwannaTech/Create';
import NeverAlone from 'components/IwannaTech/NeverAlone';
import Commission from 'components/IwannaTech/Commission';
import GetStarted from 'components/IwannaTech/GetStarted';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import Link from 'next/link';
import { useRef } from 'react';
import LogoCard from 'components/card/LogoCard';
import { motion } from 'framer-motion';
import TotalCartItems from 'components/card/TotalCartItems';



const Start = () => {

    const router = useRouter();
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [direction, setDirection] = useState('');

    const pointerChange = (index) => {

        if (index > activeTabIndex) {
            setDirection('down')
        } else if (index !== activeTabIndex) {
            setDirection('up')
        }
        setActiveTabIndex(index)
    }

    // console.log('direction', direction)

    const tabsData = [
        {
            id: 1,
            label: "start",
            content: <StartComponent direction={direction} />,
            background: styles.iwannaTechStart
        },
        {
            id: 2,
            label: "why teach",
            content:
                <WhyTech direction={direction} />,
            background: styles.whyTechbg
        },
        {
            id: 3,
            label: "why us",
            content:
                <WhyUs activeTabIndex={activeTabIndex} direction={direction} />,
            background: styles.whyUsbg
        },
        {
            id: 4,
            label: "why now",
            content:
                <WhyNow direction={direction} />,
            background: styles.whyNowbg
        },
        {
            id: 5,
            label: "needed",
            content:
                <Needed direction={direction} />,
            background: styles.neededbg
        },
        {
            id: 6,
            label: "ncbtmb",
            content:
                <Ncbtmb direction={direction} />,
            background: styles.ncbtmbbg
        },
        {
            id: 7,
            label: "why you",
            content:
                <WhyYou activeTabIndex={activeTabIndex} direction={direction} />,
            background: styles.whyyoubg
        },
        {
            id: 8,
            label: "now what",
            content:
                <NowWhat direction={direction} />,
            background: styles.nowwhatbg
        },
        {
            id: 9,
            label: "create",
            content:
                <Create direction={direction} />,
            background: styles.createbg
        },
        {
            id: 10,
            label: "never alone",
            content:
                <NeverAlone direction={direction} />,
            background: styles.neverAlonebg
        },
        {
            id: 11,
            label: "commission",
            content:
                <Commission direction={direction} />,
            background: styles.commissionbg
        },
        {
            id: 12,
            label: "get started",
            content:
                <GetStarted activeTabIndex={activeTabIndex} direction={direction} />,
            background: styles.getstartedbg
        },
    ];

    //animate tab integator pointer move
    const [buttonRefs, setButtonRefs] = useState([])
    useEffect(() => {
        setButtonRefs(prev => prev.slice(0, tabsData.length))
    }, [tabsData.length])

    const navRef = useRef(null)
    const isInitialRender = useRef(true)
    const navRect = navRef.current?.getBoundingClientRect()
    const selectedRect = buttonRefs[activeTabIndex]?.getBoundingClientRect()

    let selectStyles = { opacity: 0 }
    if (navRect && selectedRect) {
        selectStyles.height = selectedRect.height
        selectStyles.transform = `translateY(calc(${(selectedRect.top) -
            navRect.top}px ))`
        selectStyles.opacity = 1
        selectStyles.transition = isInitialRender.current
            ? `opacity 150ms 150ms`
            : `transform 500ms 0ms, opacity 150ms 150ms, height 150ms`

        isInitialRender.current = false
    }



    const updownAnimation = selectStyles.transform;
    //console.log('selectStyles', updownAnimation)

    const movePointerTop = (index) => {
        setActiveTabIndex(activeTabIndex + 1)
        setDirection('down')
    }

    const movePointerBottom = (index) => {
        setActiveTabIndex(activeTabIndex - 1)
        setDirection('up')
    }
    useEffect(() => {

        positionFun()

    }, [activeTabIndex])
    console.log("activeTabIndex", activeTabIndex)
    const [positionTop, setPositionTop] = useState('')
    const positionFun = (() => {
        if (activeTabIndex == 0) {
            setPositionTop('firstPosition')
        }
        else if (activeTabIndex == 1) {
            setPositionTop('secondPosition')
        } else if (activeTabIndex == 2) {
            setPositionTop('thirddPosition')
        }
        else if (activeTabIndex == 3) {
            setPositionTop('fourthPosition')
        }
        else if (activeTabIndex == 4) {
            setPositionTop('fifthPosition')
        }
        else if (activeTabIndex == 5) {
            setPositionTop('sixthPosition')
        }
        else if (activeTabIndex == 6) {
            setPositionTop('seventhPosition')
        }
        else if (activeTabIndex == 7) {
            setPositionTop('eighthPosition')
        }
        else if (activeTabIndex == 8) {
            setPositionTop(' ninthPosition')
        } else if (activeTabIndex == 9) {
            setPositionTop(' tenthPosition')
        }
        else if (activeTabIndex == 10) {
            setPositionTop('eleventhPosition')
        }
        else if (activeTabIndex == 11) {
            setPositionTop('lastPosition')
        }
        else {

        }
    })
    const LogoImage = "/images/WhiteLogo.svg"
    return (
        <>
            <motion.div
                key={router.asPath}
                className={`${styles.onlyIwannaTechfadeIn} `}
            >
                <div className={`relative grid grid-cols-12 md:pl-[2%] ${tabsData[activeTabIndex].background} ${styles.aboutMain} h-screen md:overflow-hidden overflow-y-scroll`}>
                    <div className='z-10 flex flex-col col-span-12 md:col-span-11'>
                        <div className={`flex md:hidden justify-between items-center space-x-5 md:pt-10 cursor-pointer md:bg-transparent bg-black md:px-0 px-3 md:pb-0 pb-5 py-4 w-full `}>
                            {/* <LogoCard LogoImage="/images/WhiteLogo.svg" /> */}

                            <div className=''>
                                <Link href="/">
                                    <Image src={`${LogoImage}`} height='200' width='150' alt='logo' className='' />
                                </Link>
                            </div>
                            <Link href="/">
                                <div className='flex items-center justify-center md:hidden '
                                >
                                    <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                        <p className='font-semibold 3xl:text-[25px] text-white'>Close </p>
                                        <AiOutlineClose size={20} className="text-white 3xl:w-10 3xl:h-10" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className='hidden md:block'>
                            <div className='mt-1 2xl:pl-14 md:pl-14 2xl:mt-2 '>
                                <div className={`flex justify-between items-center space-x-5 cursor-pointer `}>

                                    <LogoCard LogoImage="/images/WhiteLogo.svg" />

                                </div>
                                <button className={`flex items-center space-x-1 bg-black text-white px-5 py-2 3xl:px-3 3xl:py-2.5 hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-1`} onClick={() => { router.push('/') }} >
                                    <BiArrowBack size={20} className="text-white 3xl:w-8 3xl:h-8" /><span className='font-semibold mediumf'>lobby</span></button>
                            </div>
                        </div>

                        <div className='grid grid-cols-12 mt-[4%]  md:pl-2 md:px-0 pl-5 '>
                            <div className=" md:col-span-2 flex -space-x-[3px] ">
                                {/* Loop through tab data and render button for each. */}

                                {/* pointer circle for desktop  */}
                                <div className={` hidden md:block ${styles.pointerPathMain}`}>
                                    <div
                                        className={`${styles.pointerPathInner}
                                 
                                ${styles.transformTopBottomIndicater} `}
                                        style={selectStyles}>

                                        <div className={`${styles.shadow}`}>
                                            <svg className={`h-[20px] `} >
                                                <circle cx="50" cy={9} r="8" stroke="white" stroke-width="2" fill="none">
                                                </circle>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* pointer circle for mobile  */}
                                <div className=' md:hidden block relative w-[0.4px] h-[400px]  mt-4  bg-white'>
                                    <div className={`absolute  -mt-[48px]   left-[-49px] ${positionTop}`} >
                                        <svg>
                                            <circle cx="50" cy={50} r="10" stroke="white" stroke-width="2" fill="none">
                                            </circle>
                                        </svg>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start justify-start '>
                                    {tabsData.map((tab, i) => {
                                        return (
                                            <div key={i} className='flex items-center justify-start '>

                                                {/* for desktop */}
                                                <div className={` hidden md:block  ${styles.dotes} ${i === activeTabIndex
                                                    ? styles.dotsBorder
                                                    : ""
                                                    }}`}
                                                    ref={navRef}
                                                    onClick={() => { setActiveTabIndex(i) }}
                                                >
                                                    <div className='absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                                                        <Image src="/images/iwannaTechdot.svg" width={7} height={7} alt="i wanna tech dot" />
                                                    </div>
                                                    <div
                                                        className={`  
                                                                    ${i === activeTabIndex ? 'opacity-1 transition-all ease-out duration-1000 translate-y-[transformAnimate]' : 'opacity-0'}
                                                                     absolute top-[-30px] left-[-45px] w-full 
                                                                     ${styles.shadow}`}
                                                    >
                                                    </div>
                                                </div>

                                                {/* for mobile */}
                                                <div className={` md:hidden block relative w-6 h-9 ${i === activeTabIndex
                                                    ? styles.dotsBorder
                                                    : ""
                                                    }}`}

                                                    onClick={() => { pointerChange(i) }}
                                                >
                                                    <div className='absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                                                        <Image src="/images/iwannaTechdot.svg" width={7} height={7} alt="i wanna tech dot" />
                                                    </div>
                                                    <div
                                                        className={`  
                                                                    ${i === activeTabIndex ? 'opacity-1 transition-all ease-out duration-1000 translate-y-[transformAnimate]' : 'opacity-0'}
                                                                     absolute top-[-30px] left-[-45px] w-full 
                                                                     ${styles.shadow}
                                                                     `}
                                                    >
                                                    </div>
                                                </div>
                                                <p

                                                    className={` md:block hidden cursor-pointer text-[#ffffff94]  transition-all ease-in-out duration-500 hover:text-white hover:font-bold hover:opacity-[1] ${styles.tabLable}  ${styles.shadowHover}   ${i === activeTabIndex
                                                        ? `font-bold  text-[#ffff] opacity-[1] ${styles.shadow}`
                                                        : ""
                                                        } `}
                                                    // Change the active tab on click.
                                                    onClick={() => pointerChange(i)}
                                                    ref={el => (buttonRefs[i] = el)}
                                                >
                                                    {tab.label}
                                                </p>


                                                {activeTabIndex > 0 ? <div className={` z-[1000] fixed bottom-5 left-1/2  -translate-x-1/2 block md:hidden `} onClick={() => { movePointerBottom(i) }}
                                                >
                                                    <div className={`${styles.vertmoveDown}`}>
                                                        <Image src="/start/SlideUpIcon.svg" width={25} height={25} alt="slideUp" />
                                                    </div>
                                                </div> : ""}


                                                {activeTabIndex < 11 ? <div className={`  rotate-180 fixed top-[72px] left-1/2 -translate-x-1/2 z-[1000]  block md:hidden `} onClick={() => { movePointerTop(i) }} >
                                                    <div className={`${styles.vertmoveDown}`}
                                                    >
                                                        <Image src="/start/SlideUpIcon.svg" width={25} height={25} alt="slide up" />
                                                    </div>
                                                </div> : ""}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div >
                            {/* Show active tab content. */}
                            <div className={`pb-4  col-span-10 md:col-span-10 z-0 sm:pb-5  `}  >
                                <div>{tabsData[activeTabIndex].content}</div>
                            </div >
                        </div >
                    </div >
                    <div className='relative z-50 items-center justify-center hidden w-full h-screen col-span-12 p-4 border-l border-white max-sm:invisible md:col-span-1 md:flex '>
                        <div className='cursor-pointer '>
                            <div className='absolute flex items-center justify-center -translate-x-1/2 top-[3.5%] left-1/2 '
                                onClick={() => { router.push('/') }}>
                                <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                    <p className='font-semibold text-white largef '>Close </p>
                                    <AiOutlineClose className="text-white largef" />
                                </div>
                                {/* cart componet  */}
                                <div className={`absolute cursor-pointer -translate-x-1/2 top-[100%]  left-1/2  ${styles.cartAnimation}`}>
                                    <div className='relative w-full' >
                                        <TotalCartItems />
                                    </div>
                                </div>
                            </div>
                            <div className='absolute -translate-x-1/2 bottom-[3.5%] left-1/2'>
                                <MusicCard textColor="text-white" />
                            </div>
                        </div>
                    </div>




                    {activeTabIndex < 11 ? <div className={`${styles.arrowUpDown} z-[1000] absolute bottom-5 left-1/2 md:block hidden cursor-pointer `} onClick={() => { movePointerTop() }}>
                        <SlArrowDown size={20} className={`${styles.one} text-white`} />
                        <SlArrowDown size={20} className={`${styles.two} text-white`} />
                        <SlArrowDown size={20} className={`${styles.three} text-white`} />
                    </div> : ""}
                    {activeTabIndex > 0 ? <div className={`${styles.arrowUpDown} z-[1000] absolute top-5 left-1/2 md:block hidden cursor-pointer  `} onClick={() => { movePointerBottom() }}>
                        <SlArrowUp size={20} className={`${styles.one} text-white`} />
                        <SlArrowUp size={20} className={`${styles.two} text-white`} />
                        <SlArrowUp size={20} className={`${styles.three} text-white`} />
                    </div> : ""}

                    {/* SHOW MORE SHOW LESSS BUTTON FOR MOBILE */}




                </div >
            </motion.div>

        </>
    )
}

export default Start

