import React from 'react'
import Styles from '../../components/card/animatedDoor/Door.module.css';
import Image from 'next/image'

const Door = () => {
    return (
        <div className='flex justify-center '>
            <div className={` hidden md:block ${Styles.imageDiv}`}>
                <Image
                    src="/images/doorframe.svg"
                    width={300} height={200}
                    className=" doorFrame"
                    alt="door"
                />
                <div className={`${Styles.child} doorGateMainDiv `}>
                    <Image
                        className=" doorGate"
                        src="/images/doorgate.svg"
                        width={300}
                        height={200}
                        alt="door" />

                    <div
                        className='gateHandleMainDiv'>
                        <Image src="/images/doorHandle.svg" width={10} height={10} alt="door" />
                    </div>

                </div>

            </div>

            {/* for small device tablet */}
            <div className={`${Styles.child}  md:hidden`}>
                <Image className={``} src="/images/start.png" width={180} height={150} alt="door" />
            </div>
        </div>
    )
}

export default Door