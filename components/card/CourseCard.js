
import React, { useState } from 'react'
import { MdOutlineWatchLater } from 'react-icons/md'
import styles from '../../src/styles/CoursePage.module.css'

import Image from 'next/image'


const CourseCard = () => {

    const [selected, setSelected] = useState(false);
    const [selectedArray, setSelectedArray] = useState([])

    const data = [
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },

    ]

    const handleClick = (index) => {
        setSelected(index);

        const tempArray = [...selectedArray]
        if (tempArray[index] == index) { tempArray[index] = undefined }
        else { tempArray[index] = index }

        setSelectedArray(tempArray)
    };

    //  console.log('selectedArray', selectedArray)

    return (
        <>
            <div className='grid grid-cols-12 h-screen overflow-y-scroll no-scrollbar overflow-x-hidden '>
                {data?.map((item, index) => {

                    return (<div key={index} className={`bg-transparent md:col-span-6 relative col-span-12 border border-bordergray  p-10 flex flex-col justify-between ${selectedArray[index] == index ? styles.cardBackground : styles.cardBackgroundHover}`} onClick={() => handleClick(index, item)}>
                        <div className='flex justify-between'>
                            <div className='flex justify-center items-center space-x-1'>
                                <MdOutlineWatchLater />
                                <div>{item.duration}</div>
                            </div>
                            <div className='text-[33px]'>
                                ${item.price}
                            </div>
                        </div>
                        <div className='pt-24 text-[33px]'>
                            {item.discription}
                        </div>
                        <div className={`absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} `} >
                            <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                        </div>

                    </div>)

                })}

            </div>
        </>
    )
}

export default CourseCard