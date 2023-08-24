import Drawer from 'components/Drawer'
import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai';

import {useRouter} from 'next/router'
import Link from 'next/link';

const Test = () => {

    const router = useRouter()
    return (
        <>
            {/* <Drawer>

        drawer
    </Drawer> */}

            <div>
                <ul
                    className={`flex items-end mb-0 list-none flex-wrap xl:pt-3 xl:pb-4 flex-col md:col-span-4 col-span-12  `}
                    role="tablist"
                >
                   <Link href='/blog'>
                   <li className={` text-white xl:my-4 my-2 dubblelargef  text-right flex cursor-pointer  justify-end items-center `}
                        // onClick={e => {
                        //     e.preventDefault();
                        //     router.push('/blog');
                        // }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"
                    >

                        <span className={`text-black`}>blog central</span>
                        <div className={`pl-2 triplelargef `}><AiOutlineMinus /></div>
                    </li>
                   </Link>
                    <li className={` text-white xl:my-4 my-2 dubblelargef  cursor-pointer text-right flex justify-end items-center`}
                        onClick={e => {
                            e.preventDefault();
                            router.push('/iwanna-teach');
                        }}
                        data-toggle="tab"
                        href="#link4"
                        role="tablist"
                    >
                        <span className={`text-black`}>  i wanna teach!</span>

                        <div className={`pl-2 triplelargef `}><AiOutlineMinus /></div>
                    </li>
                </ul>
            </div>


        </>
    )
}

export default Test