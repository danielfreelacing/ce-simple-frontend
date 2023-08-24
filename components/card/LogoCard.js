import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LogoCard = ({ LogoImage }) => {
    return (
        <div className='w-max'>
            <Link Link href="/" >
                <Image src={`${LogoImage}`} height='300' width='250' alt='logo' className='logoImg' />
            </Link >
        </div >
    )
}

export default LogoCard