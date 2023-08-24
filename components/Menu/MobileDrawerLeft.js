// import Image from "next/image";
import React from "react";
import { MdClose } from 'react-icons/md'
import styles from '../../src/styles/MenuComponent.module.css'

export default function MobileDrawerLeft({ children, isOpen, setIsOpen, basePath }) {

    //console.log('children', children);

    return (
        <main
            className={
                " fixed overflow-hidden z-40  bg-opacity-25 inset-0 top-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-700 -translate-x-0"
                    : " -transition-all delay-500 opacity-0 -translate-x-full")
            }
        >
            <section
                className={
                    " w-full left-0 absolute rounded-tr-lg bg-red h-full shadow-xl delay-400 duration-700 ease-in-out transition-all transform  " +
                    (isOpen ? " -translate-x-0 " : " -translate-x-full ")
                }
            >
                <article className="relative flex flex-col h-full mobilemenu bg-navyblue ">
                    <div className="relative flex justify-center ">


                    </div>
                    {children}
                </article>
            </section>

        </main>
    );
}