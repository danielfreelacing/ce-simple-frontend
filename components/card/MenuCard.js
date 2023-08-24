import React, { useState } from 'react'
import Image from 'next/image'
import { GrClose } from 'react-icons/gr'

const MenuCard = ({ HideMenuMethod, ShowMenuMethod, On }) => {

    // const [On, setOn] = useState(true);
    return (
        <>
            {/* <div className='flex items-center justify-center space-x-2' onClick={() => ShowMenuMethod()}>
                <p className='font-semibold'>menu</p>
                <Image src="/images/menuIcon.png" width={25} height={25} alt="menu" />
            </div> */}

            {/* {!On ? <div className={`flex items-center justify-center space-x-2 ${On ? text - white : ""}`} onClick={() => HideMenuMethod()}>
                <p className='font-semibold'>Close</p>
                <GrClose />
            </div> : ""} */}
        </>
    )
}

export default MenuCard