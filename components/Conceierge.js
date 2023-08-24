import React, { useState } from 'react'
import styles from '../src/styles/Conceierge.module.css'
import { BiArrowBack } from 'react-icons/bi'
import { useForm } from 'react-hook-form';

const Conceierge = ({ conceiergeHide }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <div className=' bg-transparent md:pl-[12%]'>

                {/* <div className='w-max md:mt-[80px] '>

                    <button className={`  hidden  md:flex items-center space-x-1 bg-black text-white px-[30%] py-2  hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4`} onClick={() => { HandlelobbyClick() }} >
                        <BiArrowBack className="text-white font-semibold minismallf" /><span className='font-semibold minismallf '>lobby</span></button>

                </div> */}

                <button className={`md:flex hidden items-center space-x-1  md:mt-[80px] bg-black text-white font-bold  ${styles.lobby} px-5 py-2 rounded-3xl  ${styles.concorgemtTop} `} type='button' onClick={() => conceiergeHide()}  >
                    <BiArrowBack size={20} className="text-white" />
                    <span className='mediumf'>lobby</span>
                </button>

                <h2 className=' my-5 fourxllargef text-black leading-tight'>ok, deep breath.<br></br>how can we help?
                </h2>

                <form onSubmit={handleSubmit((data) => console.log('data', data))}
                    className={'max-[768px]:max-w-xs min-[992px]:max-w-md max-w-lg 2xl:max-w-lg 3xl:max-w-3xl'} >
                    <div className=''>
                        <label className='text-black mediumf font-[500]' >
                            your email
                        </label>
                        <input className={`block w-full xl:w-full lg:w-[80%] md:w-[75%] px-4 py-2  mt-2  bg-white border border-bordergray outline-red-500 ${styles.inputHeight}`}
                            {...register('email', {
                                required: 'oops! email is blank!', pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'incorrect email format',
                                },
                            },)}
                        />

                        {errors.email ? <div className=' text-[#D30820] mt-1'> <span className='text-[#D30820] border border-[#D30820] rounded-full py-0.4 px-1.5 extsmallf' >!</span> {errors.email.message}</div> : null}
                    </div>
                    <div className='flex flex-col py-2 space-y-2 2xl:py-4'>
                        <label className='text-black mediumf font-[500]'>
                            ask away

                        </label>
                        <textarea name="postContent" rows={6} className={`w-full xl:w-full lg:w-[80%] md:w-[75%] 
                            border border-bordergray outline-[#D30820] bg-white ${styles.textAreaHeight} `} {...register('message', { required: true })} />
                        {errors.message && <p className=' text-[#D30820]'> <span className='text-[#D30820] border border-[#D30820] rounded-full py-0.4 px-1.5 extsmallf' >!</span> oops! message is blank!</p>}


                    </div>

                    <div className='flex items-center space-x-4'>
                        <button className={`${styles.lobby} px-12  mt-5 ${styles.marginTopsendBtn}  py-2 tracking-wide text-white bg-black rounded-3xl focus:outline-none smallf`} type="submit">send

                        </button>
                        <p className={`pt-3 largef text-black ${styles.paddingTopsendBtn} `}>response in 24 hours or less</p>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Conceierge