import React, { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { colourOptions } from "../components/Data.js";
import styles from '../src/styles/MenuComponent.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useRouter } from 'next/router'


const BlogListing = () => {

    const router = useRouter();

    const [toggleOn, setToggleOn] = useState(false)
    const [currentData, setCurrentData] = useState(false);

    // manage state for next and previous

    const [next, setNext] = useState(currentData)
    const [back, setBack] = useState(currentData)


    const blogData = [

        {

            title: "observing confidentiality",
            name: "Laura Allen",
            date: "June-3-2022",
            discription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            subHeaderTitle: 'blog subheader example',
            subDiscription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            image: "/images/blogBanner.png",

        },
        {

            title: "observing confidentiality",
            name: "Laura Allen",
            date: "June-3-2022",
            discription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            subHeaderTitle: 'blog subheader example',
            subDiscription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            image: "/images/blogBanner.png",
            image: "/images/blogBanner.png",
        },
        {

            title: "observing confidentiality",
            name: "Laura Allen",
            date: "June-3-2022",
            discription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            subHeaderTitle: 'blog subheader example',
            subDiscription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            image: "/images/blogBanner.png",
            image: "/images/blogBanner.png",
        },
    ]



    //handle click blog listing

    const handleClick = (item, index) => {

        setCurrentData(item, index)
        router.push('/blog/slug')

    }



    const textColor = "text-white"
    const LogoImage = "/images/WhiteLogo.svg";

    ///check box toggle 

    const handleClickTogle = () => {

        setToggleOn(!toggleOn)
    }

    const handleChange = (e) => {

        const { name, checked } = e.target;
    }




    return (
        <>
            {!currentData ? <div className='grid grid-cols-12 gap-4 '>
                <div className={`bg-transparent md:pb-40  md:col-span-9 col-span-12 h-screen overflow-y-scroll ${styles.hidescrollBar}`}>


                    {
                        blogData && blogData?.map((item, index) => {
                            return (
                                // <Link key={index} href={`/blog/${index + 1}`}>
                                <div key={index} className="mb-10 border-b border-bordergray md:max-w-[90%] ">
                                    <h2 className='text-white font-normal  text-[49px] leading-[207%] tracking-wide hover:text-voilet transition-all ease-in-out duration-500'>{item.title}</h2>
                                    <div className='flex  flex-wrap'>
                                        <div className='text-white pr-1 text-[22px] leading-[207%]'>{item.name}</div>
                                        <div className='text-gray text-[22px] leading-[207%]'>| {item.date}</div>
                                    </div>
                                    <p className='text-gray py-8  text-[20px] tracking-wider '>{item.discription}</p>


                                    <button className='text-white flex space-x-1 items-center border border-white rounded-3xl px-3 hover:border-black py-1 mt-2 mb-14 hover:bg-voilet transition-all ease-in-out duration-500'
                                        onClick={() => { handleClick(item, index) }}

                                    >
                                        <span className='md:text-[20px] ml-1'>read more</span>
                                        <BsArrowRightShort className='text-white' size={25} />
                                    </button>


                                </div>
                                //     </Link>
                            )
                        })
                    }


                </div>
                <div className=' bg-transparent md:col-span-3 col-span-12 '>

                    <div className='border border-white 2xl:max-w-[75%]   pb-2  ' >
                        <button className={`text-white text-[20px] px-5 py-3 flex items-center 2xl:space-x-10 space-x-20 `} type="btn" onClick={() => { handleClickTogle() }} ><div className='2xl:text-xl xl:text-[20px] sm:text-[12px] '>blog categories</div> <div className={`${toggleOn ? styles.toggleAnimation : styles.toggleAnimationOff}`}><MdKeyboardArrowDown size={20} /></div> </button>
                        {colourOptions?.map((item, index) => {

                            return (
                                <>
                                    {toggleOn && <div className={`px-5 py-0.5 ${toggleOn === true ? styles.selectOptionOpen : ""} ${toggleOn === false ? styles.selectOptionClose : ""}`} key={index}>

                                        <input className="form-check-input appearance-none h-4 w-4  border-2   rounded-sm bg-white checked:bg-voilet checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name={item.label} onChange={handleChange} id="flexCheckDefault" />
                                        <label className="text-gray text-[16px] ml-0.2">{item.label}</label>
                                    </div>}
                                </>
                            )
                        })}
                    </div>

                </div>


            </div> : ""}


        </>
    )
}

export default BlogListing