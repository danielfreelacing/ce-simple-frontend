import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

import styles from '../../Start/Start.module.css'

const Congratulation = () => {

    const congrateData = [
        'come and go  as you please',
        'stress free quiz at the end',
        'questions ? contact our concierge any time',
    ]
    return (
        <>

            {/* for desktop */}
            <div className='md:mx-10 md:px-0 px-5 md:h-auto hidden md:block '>
                <h3 className={`text-center hidden md:block tracking-wider supermediumf  leading-tight md:pb-8 text-black ${styles.congrateTitle}`}>congratulations! <br></br> your course has begun!</h3>
                {/* title for mobile */}
                <h3 className='text-center md:hidden  tracking-wider dubblelargef leading-tight md:pb-12 text-black'>congratulations! your course has begun!</h3>

                <div className="md:flex md:space-x-5 justify-between">
                    {congrateData && congrateData.map((item, index) => {
                        return (<>
                            <div key={index} className=" md:px-10 md:block flex justify-start md:items-start items-center md:space-y-0 space-x-2  space-y-3" >
                                <div className='md:flex justify-center items-center'>
                                    <AiOutlineCheck size={15} className='text-[#9747FF] checkIcon ' />
                                </div>
                                <div className='md:flex justify-center items-center' >
                                    <p className='md:text-center smallf text-black '>{item}</p>
                                </div>
                            </div>
                        </>)
                    })}
                </div>

                <div className={`flex justify-center items-center pt-10 pb-5  ${styles.congfrateContinueBtn}`}>
                    <button className={` px-10 mt-4 py-2 tracking-wide text-white ${styles.submitbtnbg} rounded-3xl minismallf traking-[0.02em] focus:outline-none`} type="submit">continue to course
                    </button>
                </div>
                <div className='flex justify-center items-center'>
                    <button className={`font-semibold border-b text-voilet  border-voilet leading-4 text-center`}>
                        go to my apartment
                    </button>
                </div>
            </div>

            {/* for mobile */}

            <div className=' px-5  h-screen md:hidden'>
                
                {/* title for mobile */}
                <h3 className='text-center md:hidden  tracking-wider text-[30px] leading-[110%] md:pb-12 text-black'>Congratulations! Your course has begun!</h3>

                <div className="md:flex md:space-x-3 justify-between  mx-auto">
                    {congrateData && congrateData.map((item, index) => {
                        return (<>
                            <div key={index} className="  md:block flex justify-start  items-center  space-x-2 px-3 " >
                                <div className='mt-3'>
                                    <AiOutlineCheck width={11} height={5} className='text-[#9747FF] checkIcon ' />
                                </div>
                                <div className='mt-3' >
                                    <p className='md:text-center text-[19px] leading-[130%] text-black '>{item}</p>
                                </div>
                            </div>
                        </>)
                    })}
                </div>

                <div className={`flex justify-center w-max items-center pt-8 pb-5 mx-auto  ${styles.congfrateContinueBtn}`}>
                    <button className={` px-10  mt-4 py-3 tracking-wide text-white ${styles.submitbtnbg} rounded-3xl text-[17px] traking-[0.02em] focus:outline-none`} type="submit">continue to course
                    </button>
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button className={`font-semibold border-b text-voilet text-[17px]  border-voilet leading-4 text-center`}>
                        go to my apartment
                    </button>
                </div>
            </div>

        </>
    )
}

export default Congratulation