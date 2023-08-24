import React from 'react'
import { FiArrowDown } from 'react-icons/fi'
import styles from '../Start/Start.module.css'

const ScrollBtn = () => {
    return (
        <>

            <button className={`bg-voilet py-2 px-2 flex justify-center items-center `}>

                <FiArrowDown size={30} className={`text-white ${styles.UpDownAnimation} `} />


            </button>

        </>
    )
}

export default ScrollBtn