import React from 'react'
import { FaMobileAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import styles from '../../src/styles/MenuComponent.module.css'

const Contact = () => {
    return (
        <>
            <div className='bg-transparent'>
                <div className='text-white text-left  largef font-normal font-Barlow py-2 '>
                    1234 address here<br></br>
                    city, state placeholder text
                </div>

                <div className={`flex bg-transparent py-1 mt-10 items-center space-x-2 ${styles.mobileNum}`}>
                    <FaMobileAlt size={30} className={`text-white 3xl:w-10 3xl:h-10 ${styles.contactIcon}`} />
                    <div className='text-white largef'>
                        123-456-7890
                    </div>

                </div>
                <div className='flex bg-transparent py-1 items-center space-x-2'>
                    <AiOutlineMail size={30} fill='white' className={`text-black 3xl:w-10 3xl:h-10 ${styles.contactIcon}`} />
                    <div className='text-white  largef '>
                        email@cesimple.com
                    </div>

                </div>

                <div className={`flex space-x-5 bg-transparent py-5 md:mt-16 items-center ${styles.socialIconComp}`}>
                    <FaFacebookF size={35}
                        className={`rounded-full p-1.5 text-white bg-dakgray ${styles.socialIcon} `}
                    />
                    <FaTwitter size={35}
                        className={`rounded-full p-1.5 text-white bg-dakgray ${styles.socialIcon} `}
                    />
                    <FaLinkedinIn size={35}
                        className={`rounded-full p-1.5 text-white bg-dakgray ${styles.socialIcon} `}
                    />
                </div>

            </div>
        </>
    )
}

export default Contact