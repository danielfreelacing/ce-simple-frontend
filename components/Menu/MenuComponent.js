import React, { useEffect, useState } from 'react'
import MusicCard from 'components/card/MusicCard'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import Contact from '../Menu/Contact'
import { BiArrowBack } from 'react-icons/bi'
import styles from '../../src/styles/MenuComponent.module.css'
import LogoCard from 'components/card/LogoCard'
import About from '../About/About'
import { AiOutlineMinus } from 'react-icons/ai'
import Instructors from '../Instructor/Instructors'
import BlogListing from 'components/BlogListing'
import { FiArrowDown } from 'react-icons/fi'
import stylesScrollBtn from '../Start/Start.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import TotalCartItems from '../../components/card/TotalCartItems'
import LogoutBtn from 'components/card/LogoutBtn'

const MenuComponent = ({ HideMenuMethod, On, drowerClose }) => {
    const [show, setShow] = useState(false);
    const [showLogo, setShowLogo] = useState(false)
    const [openTab, setOpenTab] = React.useState(0);
    //  query params 
    const router = useRouter();
    const currentPath = router?.query?.active;
    //handle close
    const HandleCloseBtn = () => {
        setTimeout(() => {

            if (router.asPath == '/?active=home') {
                HideMenuMethod();
                router.push('/');
            }

        }, 500)
        // setTimeout(() => { setActiveTabIndex(0) }, 500)
    }

    if (On === true) {
        setTimeout(() => {
            setShow(true)
        }, 1500)

        setTimeout(() => {
            setShowLogo(true)
        }, 50)

    }

    if (On === false) {
        setTimeout(() => {
            setShow(false)
            setShowLogo(false)
            setOpenTab(false)
        }, 50)
    }

    const handleClickLobby = () => {
        router.push({
            pathname: '/',
            query: { active: 'home' }
        })
        HideMenuMethod()
    }

    const textColor = "text-white"
    const LogoImage = "/images/WhiteLogo.svg";
    //  menu for mobile

    const [openMobTab, setOpenMobTab] = useState('')
    //  console.log('openMobTab', openMobTab);
    return (
        <>
            <div
                className={`
                relative
                hidden
                cursor-default
            md:grid grid-cols-12 md:h-screen  bg-cover bg-center bg-no-repeat md:overflow-y-hidden overflow-x-hidden
              
            ${openTab === 4 ? styles.iwannaTechStart : ""} 
             `}>

                <div className="absolute top-0 left-0 w-screen h-screen transition-all duration-1000 ease-in -z-10">
                    <Image
                        className={`${styles.aboutMain}`}
                        src="/images/menu-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    />
                    {openTab === 1 ? <Image
                        className={`${styles.aboutMain}`}
                        src="/images/about-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    /> : ""}
                    {openTab === 2 ? <Image
                        className={`${styles.aboutMain}`}
                        src="/images/instructor-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    /> : ""}
                    {openTab === 3 ? <Image
                        className={`${styles.aboutMain}`}
                        src="/images/blog-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    /> : ""}
                </div>

                <div className='flex flex-col col-span-12 pr-10 md:space-y-5 md:col-span-11 md:pl-[7%] '>
                    <div>
                        <div className={`flex justify-between items-center space-x-5 cursor-pointer ${!showLogo ? styles.hide : styles.aboutMain}`}>
                            <LogoCard LogoImage={LogoImage} />
                        </div>
                        {On ?
                            <div className='w-max  '>
                                <Link href="/" >
                                    <button className={`  hidden  md:flex items-center space-x-1 bg-dakgray text-white px-[30%] py-2  hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4`} onClick={() => { HandleCloseBtn(), drowerClose() }} >
                                        <BiArrowBack className="text-white font-semibold minismallf" /><span className='font-semibold minismallf '>lobby</span></button>
                                </Link>
                            </div>

                            : ""}
                    </div>



                    {On ? <div className={`grid grid-cols-12 mt-0 gap-0 md:gap-10  ${!show ? styles.hide : styles.aboutMain} pb-5 md:pt-10 `} >
                        <div className={` col-span-12  bg-transparent ${(openTab === 4 || openTab === 3 || currentPath == 'blog') ? "col-span-12" : "md:col-span-8"}`}>
                            <div className="">
                                <div className="tab-content tab-space ">
                                    <div className={`${(openTab > 0 || currentPath == 'blog') ? "hidden" : "block"} ${router.asPath === '/?active=home' ? 'block' : 'hidden'} `}>
                                        <Contact />
                                    </div>
                                    <div className={`${openTab === 1 ? "block" : "hidden"} ${openTab == 1 ? styles.fadeAnimation : ""} ${styles.hidescrollBar} md:h-screen  md:overflow-y-scroll `} id="link1">
                                        <About />
                                    </div>
                                    <div className={`${openTab === 2 ? "block" : "hidden"} ${openTab == 2 ? styles.fadeAnimation : ""} ${styles.hidescrollBar} md:h-screen  md:overflow-y-scroll  `} id="link2">
                                        <Instructors />
                                        <div className={` absolute bottom-5 left-5 z-[100]  flex justify-center items-center`}>
                                            <FiArrowDown size={25} className={`text-white ${stylesScrollBtn.UpDownAnimation} 3xl:w-14 3xl:h-14`} />
                                        </div>
                                    </div>
                                    <div className={` ${(openTab === 3 || currentPath == 'blog') ? "block" : "hidden"} ${openTab == 3 ? styles.fadeAnimation : ""} ${styles.hidescrollBar} ${currentPath == "home" ? 'hidden' : 'block'}  md:h-screen  overflow-y-scroll`} id="link3">
                                        <BlogListing />
                                        <div className={` absolute bottom-5 left-5 z-[100]  flex justify-center items-center`}>
                                            <FiArrowDown size={25} className={`text-white ${stylesScrollBtn.UpDownAnimation} `} />
                                        </div>
                                    </div>
                                    <div className={`${openTab === 4 ? "block" : "hidden"}`} id="link4">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul
                            className={`flex items-end mb-0 list-none flex-wrap xl:pt-3 xl:pb-4 flex-col md:col-span-4 col-span-12  ${openTab === 4 || openTab === 3 ? 'hidden' : 'block'} ${router.asPath === '/?active=home' ? 'block' : 'hidden'}  `}
                            role="tablist"
                        >
                            <li className={`${styles.navli} w-max text-white xl:my-4 lg:my-1  md:my-2 dubblelargef   text-right flex cursor-pointer justify-end items-center ${openTab === 1 ? styles.active : ""}`
                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                <span className={`${styles.navlitext}`}>about</span>
                                <div className={`pl-2 triplelargef ${openTab === 1 ? styles.activeShowLine : styles.hide} `}><AiOutlineMinus /></div>
                            </li>

                            <li className={`${styles.navli} text-white xl:my-4 my-2 dubblelargef  text-right flex cursor-pointer  justify-end items-center ${openTab === 2 ? styles.active : ""}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                <span className={`${styles.navlitext}`}>our instructors</span>
                                <div className={`pl-2 triplelargef  ${openTab === 2 ? styles.activeShowLine : styles.hide} `}><AiOutlineMinus /></div>
                            </li>

                            <li className={`${styles.navli} text-white xl:my-4 my-2 dubblelargef  text-right flex cursor-pointer  justify-end items-center ${(openTab === 3) ? styles.active : ""}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);

                                    router.push('/blog');
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                <span className={`${styles.navlitext}`}>blog central</span>
                                <div className={`pl-2 triplelargef  ${openTab === 3 ? styles.activeShowLine : styles.hide}`}><AiOutlineMinus /></div>
                            </li>

                            <li className={`${styles.navli} text-white xl:my-4 my-2 dubblelargef  cursor-pointer text-right flex justify-end items-center ${openTab === 4 ? styles.active : ""}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                    router.push('/iwanna-teach');
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >
                                <span className={`${styles.navlitext}`}>  i wanna teach!</span>
                                <div className={`pl-2 triplelargef ${openTab === 4 ? styles.activeShowLine : styles.hide}`}><AiOutlineMinus /></div>
                            </li>

                        </ul>
                    </div> : ""}
                </div>
                <div className='relative flex items-center justify-center w-full h-screen col-span-12 px-4 border-l border-white max-sm:invisible md:col-span-1 '>
                    <div className='cursor-pointer '>
                        <div className='absolute -translate-x-1/2 top-[3.5%] left-1/2 '
                            onClick={() => { HandleCloseBtn(), drowerClose() }}>
                            <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                <p className='font-semibold text-white largef'>Close </p>
                                <AiOutlineClose className="text-white largef " />
                            </div>
                        </div>
                        {/* cart componet  */}
                        <div className={`absolute cursor-pointer -translate-x-1/2 top-[10%]  left-1/2  ${styles.cartAnimation}`}>
                            <div className='relative w-full' >
                                <TotalCartItems />
                            </div>
                        </div>
                        <div className='absolute -translate-x-1/2 bottom-[3.5%] left-1/2'>
                            <MusicCard textColor={textColor} />
                        </div>
                    </div>
                </div>
            </div>
            {/* menu for mobile devices */}
            <div className={`md:hidden  relative z-20`}>
                <div className=" transition-all ease-in duration-1000 w-screen h-[100vh] -z-10">
                    <Image
                        className={`${styles.aboutMain}`}
                        src="/images/menu-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    />
                    {openMobTab === 1 ? <Image
                        className={`${styles.aboutMain}`}
                        src="/images/about-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    /> : ""}
                    {openMobTab === 2 ? <Image
                        className={`${styles.aboutMain}`}
                        src="/images/instructor-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    /> : ""}
                    {openMobTab === 3 ? <Image
                        className={`${styles.aboutMain}`}
                        src="/images/blog-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    /> : ""}
                </div>

                <div className='absolute top-0 w-full '>
                    <div className='relative'>
                        <div className={`${openMobTab > 0 ? ' -translate-x-full transition-all ease-in-out duration-1000' : 'translate-x-0 transition-all ease-in-out duration-1000'} md:bg-transparent ${styles.bgMenuMob}`}>
                            <div className={` flex px-3 justify-between items-center space-x-5 cursor-pointer py-4 ${!showLogo ? styles.hide : styles.aboutMain}`}>
                                <div className=''>
                                    <Link href="/">
                                        <Image src={`${LogoImage}`} height='200' width='150' alt='logo' className='' />
                                    </Link>
                                </div>

                                <div className='flex items-center '
                                    onClick={() => { HandleCloseBtn(), drowerClose() }}>
                                    <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                        <p className='font-semibold text-white'>Close </p>
                                        <AiOutlineClose size={20} className="text-white 3xl:w-10 3xl:h-10" />
                                    </div>
                                </div>

                            </div>
                            <ul
                                className={`flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col md:col-span-4 col-span-12     `}
                                role="tablist"
                            >
                                <li className={`${styles.navli} text-white  lg:my-1 xl:my-2  2xl:my-4  py-2 dubblelargef   text-right flex cursor-pointer justify-end items-center ${openMobTab === 1 ? styles.active : ""}`
                                }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenMobTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    about
                                    <div className={`pl-2 triplelargef ${openMobTab === 1 ? styles.activeShowLine : styles.hide} `}><AiOutlineMinus /></div>
                                </li>
                                <li className={`${styles.navli} text-white lg:my-1 xl:my-2  2xl:my-4 py-2 dubblelargef  text-right flex cursor-pointer  justify-end items-center ${openMobTab === 2 ? styles.active : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenMobTab(2);;
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    our instructors
                                    <div className={`pl-2 triplelargef  ${openMobTab === 2 ? styles.activeShowLine : styles.hide} `}><AiOutlineMinus /></div>
                                </li>
                                <li className={`${styles.navli} text-white lg:my-1 xl:my-2  2xl:my-4 py-2 dubblelargef  text-right flex cursor-pointer  justify-end items-center ${(openMobTab === 3) ? styles.active : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenMobTab(3);;

                                        router.push('/blog');
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    blog central
                                    <div className={`pl-2 triplelargef  ${openMobTab === 3 ? styles.activeShowLine : styles.hide}`}><AiOutlineMinus /></div>
                                </li>
                                <li className={`${styles.navli} text-white lg:my-1  2xl:my-4 py-2 dubblelargef  cursor-pointer text-right flex justify-end items-center ${openMobTab === 4 ? styles.active : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenMobTab(4);
                                        router.push('/iwanna-teach');
                                    }}
                                    data-toggle="tab"
                                    href="#link4"
                                    role="tablist"
                                >
                                    i wanna teach!
                                    <div className={`pl-2 triplelargef ${openMobTab === 4 ? styles.activeShowLine : styles.hide}`}><AiOutlineMinus /></div>
                                </li>
                            </ul>
                            {/* logout btn  */}
                            <div className={`w-max mx-auto mt-5`}>
                                <LogoutBtn />
                            </div>

                            <div className='pl-5 mt-10 border-t border-gray'>
                                <div className='mt-5'>
                                    <Contact />
                                </div>
                            </div>
                        </div>

                        <div className={`absolute top-0 left-0 w-full h-screen overflow-y-scroll ${openMobTab == "" ? ' translate-x-full transition-all ease-in-out duration-1000' : ''}  `}>

                            <div className={` flex px-3 justify-between items-center space-x-5 cursor-pointer py-4 ${!showLogo ? styles.hide : styles.aboutMain}`}>
                                <div className=''>
                                    <Link href="/">
                                        <Image src={`${LogoImage}`} height='200' width='150' alt='logo' className='' />
                                    </Link>
                                </div>

                                <div className='flex items-center '
                                    onClick={() => { HandleCloseBtn(), drowerClose() }}>
                                    <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                        <p className='font-semibold text-white'>Close </p>
                                        <AiOutlineClose size={20} className="text-white 3xl:w-10 3xl:h-10" />
                                    </div>
                                </div>

                            </div>
                            <div className={`flex items-center space-x-1 bg-gray text-white px-5 py-2 w-full justify-center hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold   mt-1`} onClick={() => { setOpenMobTab('') }} >
                                <BiArrowBack size={20} className="text-white " /><span className='font-semibold text-md '>Menu</span>
                            </div>
                            <div className="px-5 tab-content tab-space">

                                <div className={`${openMobTab === 1 ? "block" : "hidden"} ${openMobTab == 1 ? styles.zoomAnimation : ""} ${styles.hidescrollBar} md:h-screen  md:overflow-y-scroll `} id="link1">
                                    <About />
                                </div>
                                <div className={`${openMobTab === 2 ? "block" : 'hidden'} ${openMobTab == 2 ? styles.zoomAnimation : ""} ${styles.hidescrollBar} md:h-screen  md:overflow-y-scroll  `} id="link2">
                                    <Instructors />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuComponent


