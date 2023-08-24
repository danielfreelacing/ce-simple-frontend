import React from 'react'
import Image from 'next/image'
import ScrollBtn from 'components/Start/ScrollBtn'
import styles from '../../src/styles/MenuComponent.module.css'

const Instructors = () => {

    const InstructorData = [
        {
            name: "Laura Allen",
            image: "/images/LauraAllen.png",
            discription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling."
        },
        {
            name: "Gael Wood",
            image: "/images/GaelWood.png",
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            name: "Laura Allen",
            image: "/images/LauraAllen.png",
            discription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling."
        },
        {
            name: "Gael Wood",
            image: "/images/GaelWood.png",
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
    ]

    return (
        <>
            <div className='mb-96 2xl:pr-28'>
                {InstructorData && InstructorData?.map((item, index) => {
                    return (
                        <div key={index} className='bg-transparent grid grid-cols-12 border-b instructorBorder mb-10 pt-2 pb-4 lg:gap-5 gap-3 2xl:gap-0  '>

                            <div className='md:col-span-4 col-span-12 md:py-0 py-5  '>
                                <Image src={item.image} width={500} height={500} alt="instructor image" className={`md:w-[200px] md:h-[200px] w-[120px] h-[120px] ${styles.instructorImg}`} />
                            </div>
                            <div className='md:col-span-8 col-span-12 '>
                                <h3 className='  text-left font-normal fourxllargef  text-white py-3'>{item.name}</h3>
                                <p className='pb-5  text-left text-gray mediumf'>{item.discription}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>



        </>
    )
}

export default Instructors