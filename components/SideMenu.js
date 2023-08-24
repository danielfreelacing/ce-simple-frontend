import React from 'react'
import Image from 'next/image'
import MusicCard from './card/MusicCard'
import styles from '../src/styles/NewIndex.module.css'
import { useRouter } from 'next/router'
import TotalCartItems from './card/TotalCartItems'
import LogoutBtn from './card/LogoutBtn'



const SideMenu = () => {
    const router = useRouter();
    const handledrower = () => {
        router.push({
            pathname: '/',
            query: { active: 'home' }
        })
    }
    const textColor = 'text-black'
    return (
        <>
            <div className='cursor-pointer '>
                <div className='flex items-center  space-x-2  absolute top-[2.7%] left-1/2 -translate-x-1/2'>
                    <div className='flex items-center justify-center space-x-2' onClick={() => { handledrower() }}>
                        <p className='font-semibold largef'>menu</p>
                        <svg width="24" height="24" className={`${styles.animatMenuLine}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.80005H20.8" stroke="black" stroke-width="2" />
                            <path d="M0 14L15.6 14" stroke="black" stroke-width="2" />
                            <path d="M0 19.2L15.6 19.2" stroke="black" stroke-width="2" />
                        </svg>
                    </div>
                </div>

                {/* logout btn  */}
                <div className={`absolute cursor-pointer -translate-x-1/2 top-[15%] left-1/2 z-50 `}>
                    <div className='relative w-max' >
                        <LogoutBtn />
                    </div>
                </div>
                <div className='absolute bottom-[3.5%] left-1/2 -translate-x-1/2'>
                    <MusicCard textColor={textColor} />
                </div>
            </div>
        </>
    )
}

export default SideMenu