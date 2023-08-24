import { getCourses } from "apis/AllPostApi";
import MobileDrawerRighrt from "components/Menu/MobileDrawerRight";
import SideMenu from "components/SideMenu"
import SimplyChoose from "components/SimplyChoose"
import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import Link from 'next/link'
import styles from '../styles/NewIndex.module.css'
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import Head from "next/head";

const Courses = (props) => {

    const router = useRouter();
    //code for mobile drower
    const [isOpen, setIsOpen] = useState(true);
    const [isOpenLeft, setIsOpenLeft] = useState(true);
    const pathArr = router?.asPath?.split('/');
    const basePath = pathArr[1];
    const LogoImage = "/images/Logo.svg"

    // console.log('isOpen', isOpen)
    const backtoHome = () => {
        setIsOpen(!isOpen)
        setIsOpenLeft(isOpenLeft)
        setTimeout(() => {
            router.push({
                pathname: '/'
            })
        }, 500)
    }

    const handledrower = () => {
        router.push({
            pathname: '/',
            query: { active: 'home' }
        })
    }

    const courseData = props.allCourse;
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head>
            <div className={`bg-[url('/images/Picture2.png')] absolute top-0 bg-cover bg-center bg-no-repeat md:col-span-12 w-full  md:grid grid-cols-12 hidden`}>
                <div className={`col-span-12 md:col-span-11`}>
                    <SimplyChoose courseData={courseData} />
                </div>
                <div className={`col-span-12 p-4   max-sm:invisible md:col-span-1 md:flex items-center relative h-screen w-full border-l border-bodergray`}>
                    <SideMenu />
                </div>
            </div>
            {/* for mobile componets with drower  */}


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
                                                        <BiArrowBack size={20} className="text-white " />
                                                        <span className='font-semibold text-md 3xl:text-2xl'>lobby </span>
                                                    </button>
                                                </div>

                                                <div className={`text-black mt-[120px] `}>
                                                    <SimplyChoose courseData={courseData} />
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
        </>
    )
}

export default Courses

export async function getServerSideProps() {
    const [allCourse] = await Promise.all([
        getCourses()
    ])
    return {
        props: {
            allCourse,

        }
    }
}