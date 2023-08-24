import Image from 'next/image'
import React from 'react'
import styles from '../../components/Start/GiftCard.module.css'

const GiftCardBtn = ({ title, icon, animationCss }) => {
    return (
        <>
            <button className={` py-3 relative ecardBtn duration-1000 transition px-5 min-w-[100%] md:min-w-[85%] md:mx-10 flex items-center space-x-5 ${styles.eGiftbg}`}>
                <div className={`${animationCss} ecardImgBox`}>
                    <Image className={`${styles.giftIcon}`} src={icon} width={70} height={70} alt="btn" />
                </div>

                <p className='largef text-white '>{title}</p>

            </button>
        </>
    )
}

export default GiftCardBtn