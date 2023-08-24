// import Image from "next/image";
import React from "react";
import { MdClose } from 'react-icons/md'
import styles from '../../src/styles/MenuComponent.module.css'

export default function MobileDrawerRighrt({ children, isOpen, setIsOpen, basePath }) {
    return (
        <main
            className={
                " fixed overflow-hidden z-40   bg-opacity-25 inset-0 top-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 +translate-x-0"
                    : " transition-all delay-1000 opacity-0 translate-x-full")
            }
        >
            <section
                className={
                    " w-full right-0 absolute rounded-tr-lg  h-full shadow-xl delay-400 duration-1000 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className={`relative flex mobilemenu flex-col h-full w-full `}>
                    <div className="relative flex justify-center ">
                    </div>
                    {children}
                </article>
            </section>

        </main>
    );
}
