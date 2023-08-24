import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../../../src/styles/MenuComponent.module.css';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import { TfiMenuAlt } from 'react-icons/tfi'
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import MusicCard from 'components/card/MusicCard';
import LogoCard from 'components/card/LogoCard';
import { BiArrowBack } from 'react-icons/bi';
import { FiArrowDown } from 'react-icons/fi';
import stylesScrollBtn from '../../../components/Start/Start.module.css'
import { getPostPerPage, getSinglePostBySlug } from '../../../apis/AllPostApi'
import moment from 'moment/moment';
import Link from 'next/link'
import { motion } from "framer-motion"
import TotalCartItems from 'components/card/TotalCartItems';

const Blog = ({ postDataPerPage, singlePostData }) => {

    const [currentPostId, setCurrentPostId] = useState(singlePostData?.id);
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter()
    const textColor = "text-white"
    const LogoImage = "/images/WhiteLogo.svg";
    const handlelobby = () => {
        router.replace('/')
    }

    useEffect(() => {
        const index = postDataPerPage.findIndex(x => x.id === currentPostId);
        setCurrentIndex(index);
        router.push(`/blog/${postDataPerPage[index]?.slug}`)
    }, [currentPostId])

    // get next post 
    const getNextPost = () => {
        if (postDataPerPage[currentIndex + 1]?.id) {
            setCurrentPostId(postDataPerPage[currentIndex + 1]?.id)
            setCurrentIndex(currentIndex + 1)
        }
    }

    // get Privious post 
    const getPriviousPost = () => {
        if (currentIndex > 0) {
            setCurrentPostId(postDataPerPage[currentIndex - 1]?.id)
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <>
            <div className={` relative   h-screen overflow-hidden  w-screen`}>
                <div className="absolute top-0 left-0 w-screen h-screen -z-10">
                    <Image
                        src="/images/blog-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    />
                </div>

                <div className='grid grid-cols-12'>
                    <div className={`col-span-12 md:col-span-11  md:pl-[7%] max-h-screen ${styles.onlyfadeIn}`}>

                        <div className={`flex justify-between items-center space-x-5  cursor-pointer md:bg-transparent  md:px-0 px-3 md:pb-0 pb-5 py-4 md:py-0`}>
                            <div className='hidden md:block'>
                                <LogoCard LogoImage={LogoImage} />
                            </div>
                            <div className='block md:hidden'>
                                <Link href="/">
                                    <Image src={`${LogoImage}`} height='200' width='150' alt='logo' className='' />
                                </Link>
                            </div>
                            <Link href="/blog">
                                <div className='flex items-center justify-center md:hidden '
                                >
                                    <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                        <p className='font-semibold minismallf text-white'>Close </p>

                                        <AiOutlineClose className="text-white font-semibold minismallf" />

                                    </div>
                                </div>
                            </Link>
                        </div>



                        {/* view all post button for mobile  */}
                        <div className='flex items-center justify-between px-3 pt-5 md:mr-5 md:hidden'>
                            <Link href="/blog">
                                <div
                                    className='text-white bg-[#3A3A3A] md:py-3 py-2 md:px-6 px-3  rounded-3xl flex space-x-3 items-center hover:bg-voilet transition-all ease-in-out duration-500 extsmallf ' onClick={() => { }} >
                                    <TfiMenuAlt size={14} />
                                    <div className=' font-[600]'>view all posts</div>
                                </div>
                            </Link>
                            <div className='flex space-x-2'>
                                {currentIndex > 0 ? <div
                                    onClick={() => { getPriviousPost() }}
                                    className='text-white flex space-x-1 items-center md:py-1.5 md:px-2.5 px-2 py-1  border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '>
                                    <HiOutlineArrowSmLeft size={15} className='' />
                                    <div className='pr-1 minismallf '> back</div>
                                </div> : ""}
                                {postDataPerPage[currentIndex + 1]?.id ? <div
                                    onClick={() => { getNextPost() }}
                                    className='text-white flex space-x-1 items-center md:py-1.5 md:px-2.5 px-2 py-1  border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '>
                                    <div className='pl-1 minismallf' >next</div>
                                    <HiOutlineArrowSmRight size={15} className='' />
                                </div> : ""}
                            </div>
                        </div>



                        <div className='w-max'>
                            <button className={`md:flex hidden items-center space-x-1 bg-dakgray text-white px-[30%]  py-2 hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4  `} onClick={() => { handlelobby() }} >
                                <BiArrowBack className="text-white minismallf" />
                                <span className='font-semibold minismallf '>lobby</span>
                            </button>
                        </div>


                        {singlePostData ? <div className={`grid max-h-screen grid-cols-12 gap-4 px-3 mt-2 md:pt-10 md:px-0 ${singlePostData ? styles.onlyfadeIn : ""}`}>
                            <motion.div
                                key={router.asPath}
                                className={`${styles.onlyfadeIn} md:col-span-8 col-span-12`}
                            >
                                <div className={`bg-transparent md:pb-96   h-screen overflow-y-scroll ${styles.hidescrollBar}`}>

                                    <div className="mb-10 border-b border-bordergray md:max-w-[85%] ">
                                        <h2 className='tracking-wide cursor-default text-white transition-all duration-500 ease-in-out fourxllargef '>{singlePostData?.title.rendered}
                                        </h2>

                                        <div className='flex justify-start  items-center flex-wrap'>
                                            <div className='text-white pr-3 md:py-2 smallf font-[700]   leading-[207%]'>Laura Allen</div>
                                            <div className='text-white md:py-2 mediumf   leading-[207%]'>| <span className='pl-1 font-[300]  leading-[120%]'>{moment(singlePostData?.date).format("MMMM  DD YYYY")}</span></div>
                                        </div>

                                        <div className={`py-4 tracking-wider text-gray md:py-8 smallf ${styles.singlePostContent}`} dangerouslySetInnerHTML={{ __html: singlePostData?.content.rendered }}>

                                        </div>

                                        {/* <Image src="/images/blogBanner1.png" width="800" height="450" className={`md:w-[850px] md:h-[350px] w-[500px] h-[250px] ${styles.blogBannerImg}`} alt="Banner Image" /> */}

                                        {/* <h4 className='py-3 pt-10 font-normal tracking-wide text-white mediumf'>{item.subHeaderTitle}</h4>

<p className='tracking-wider text-gray md:py-8 minismallf '>{item.subDiscription}</p> */}

                                    </div>
                                </div>
                            </motion.div>;

                            <div className='flex justify-center col-span-12 bg-transparent md:col-span-3  md:mr-10'>
                                <div className=''>

                                    <Link href="/blog">
                                        <button className='text-white bg-[#3A3A3A] py-3 px-6 lg:px-7 rounded-3xl flex space-x-3 items-center hover:bg-voilet transition-all ease-in-out duration-500 ' onClick={() => { }} >
                                            <TfiMenuAlt size={25} />
                                            <div className='mediumf font-[600]'>view all posts</div>
                                        </button>
                                    </Link>
                                    <div className='flex pt-7 md:space-x-4 2xl:space-x-10'>
                                        {/* back btn */}
                                        {currentIndex > 0 ? <button onClick={() => { getPriviousPost() }} className='text-white flex space-x-1 items-center py-1.5 px-2.5  border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '> <HiOutlineArrowSmLeft size={20} className='' />
                                            <div className='pr-1 mediumf '> back</div>
                                        </button> : ""}

                                        {/* next btn  */}
                                        {postDataPerPage[currentIndex + 1]?.id ? <button onClick={() => { getNextPost() }} className='text-white flex space-x-1 items-center py-1.5 px-2.5  border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '>
                                            <div className='pl-1 mediumf' >next</div>
                                            <HiOutlineArrowSmRight size={20} className='' />
                                        </button> : ""}
                                    </div>

                                </div>
                            </div>
                        </div> : <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-full ${styles.blogBackground}`}> loading...</div>}


                    </div>
                    <div className='relative hidden max-h-screen col-span-12 border-l border-white md:col-span-1 md:block '>
                        <div className=''>
                            <div className='cursor-pointer '>
                                <Link href="/blog">
                                    <div className='  absolute top-[3.5%] left-1/2 -translate-x-1/2  '
                                        onClick={() => { }}>
                                        <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                            <p className='font-semibold text-white largef '>Close </p>
                                            <AiOutlineClose className="text-white largef" />
                                        </div>

                                    </div>
                                </Link>

                                {/* cart componet  */}
                                <div className={`absolute cursor-pointer -translate-x-1/2 top-[10%]  left-1/2  ${styles.cartAnimation}`}>
                                    <div className='relative w-full' >
                                        <TotalCartItems />
                                    </div>
                                </div>
                                <div className=' absolute bottom-[3.5%] left-1/2 -translate-x-1/2'>
                                    <MusicCard textColor={textColor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` absolute bottom-5 left-5 z-[100]  md:flex hidden justify-center items-center`}>
                    <FiArrowDown size={25} className={`text-white  ${stylesScrollBtn.UpDownAnimation} `} />

                </div>
            </div>
        </>
    )
}

export default Blog


export async function getServerSideProps(context) {
    const slug = context.params.slug;

    const [postDataPerPage, singlePostData] = await Promise.all([
        getPostPerPage(),
        getSinglePostBySlug(slug)
    ])


    return {
        props: {

            postDataPerPage,
            singlePostData,
        },
    }
}


