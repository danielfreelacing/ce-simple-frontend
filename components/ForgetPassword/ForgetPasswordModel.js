import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BiLeftArrowAlt } from 'react-icons/bi';
import styles from '../ForgetPassword/ForgetPassword.module.css'
import { useForm } from 'react-hook-form';

const ForgetPasswordModel = ({ HideForgetPasswordModel, changeDuration, HandleFormTitle }) => {

    // code for multi step form 

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [allStepDone, setAllStepDone] = useState(false)

    const HandleStep1 = () => {

        setStep2(true)
        setStep1(false)
        setTimeout(() => {

        }, 100);
    }
    const HandleStep2 = () => {

        setStep3(true)
        setStep1(false)
        setStep2(false)
    }
    const HandleBackStep2 = () => {

        setStep3(false)
        setStep1(true)
        setStep2(false)
        setTimeout(() => {
        }, 100);
    }

    const HandleBackStep3 = () => {

        setStep3(false)
        setStep1(false)
        setStep2(true)
        setTimeout(() => {

        }, 100);
    }

    const HandleAllStepDone = () => {

        setStep3(false)
        setStep1(true)
        setStep2(false)
        // setAllStepDone(true)
        HideForgetPasswordModel()

    }

    // react hookForm 

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    return (
        <>
            {step1 ?
                <div>
                    <div className={`flex justify-between ${styles.backBtn} pb-5 `}>
                        <button className=' font-normal py-2 pb-4' onClick={() => HideForgetPasswordModel()}>
                            <div className='flex justify-center items-center space-x-2'>
                                <BiLeftArrowAlt size={25} className='3xl:w-10 3xl:h-10' />
                                <span className='font-semibold '>Back to login</span>
                            </div>
                        </button>
                    </div>

                    <button className='absolute lg:top-7 xl:top-3 top-3 right-3' onClick={() => { changeDuration(); }}><AiOutlineClose size={20} className='3xl:w-10 3xl:h-10' /></button>

                    <div className='flex  items-center space-x-2'>
                        <div className=' border-b-4 text-left w-[33%] mediumf  border-voilet text-voilet'>step1</div>
                        <div className=' border-b-4 text-left w-[33%] mediumf  border-bodergray text-gray'>step2</div>
                        <div className=' border-b-4 text-left w-[33%] mediumf  border-bodergray text-gray'>step3</div>
                    </div>
                    <h2 className={`py-6 extlargef ${styles.title}`}>Simple Password Reset</h2>
                    <form onSubmit={handleSubmit((data) => console.log('data', data))}>
                        <div className={`py-2 ${styles.newPassword}`}>

                            <label className='font-bold '>
                                enter new password
                            </label>
                            <input className="block w-full px-4 py-2 3xl:py-6 mt-2  bg-white border border-bordergray focus:outline-none "
                                required
                                type="password"
                                {...register('password', { required: true })}

                            />
                            {/* {errors.password && <p className=' text-[#D30820]'> <span className='text-[#D30820] border border-[#D30820] rounded-full py-0.4 px-1.5 text-xs' >!</span> oops! password is blank!</p>} */}
                        </div>

                        <button className={`w-full px-4 mt-4 3xl:mt-8 py-2 3xl:py-5  mb-5 tracking-wide text-white transition-colors duration-200 transform bg-black hover:bg-voilet rounded-3xl focus:outline-none ${styles.nextBtn}`} type="submit" onClick={() => { HandleStep1() }}>next

                        </button>
                    </form>
                </div> : ""}

            {step2 ? <div >
                <div className={`flex justify-between pb-5 ${styles.backBtn} `}>
                    <button className=' font-normal py-2 lg:pb-0 xl:pb-4 pb-4' onClick={() => HandleBackStep2()}>
                        <div className='flex justify-center items-center space-x-2'>
                            <BiLeftArrowAlt size={25} className='3xl:w-10 3xl:h-10' />
                            <span className='font-semibold '>go back</span>
                        </div></button>

                </div>

                <button className='absolute lg:top-7 xl:top-3 top-3  right-3' onClick={() => { changeDuration(); }}><AiOutlineClose size={20} className='3xl:w-10 3xl:h-10' /></button>

                <div className='flex  items-center space-x-2'>
                    <div className=' border-b-4 text-left w-[33%]  mediumf border-voilet text-voilet'>step1</div>
                    <div className=' border-b-4 text-left w-[33%]  mediumf border-voilet text-voilet'>step2</div>
                    <div className=' border-b-4 text-left w-[33%]  mediumf border-bodergray text-gray'>step3</div>
                </div>
                <h2 className={`py-6 extlargef ${styles.title}`}>Simple Password Reset</h2>
                <form onSubmit={handleSubmit((data) => console.log('data', data))}>
                    <div className={`py-2 ${styles.newPassword}`}>

                        <label className='font-bold '>
                            enter your account email address
                        </label>
                        <input className="block w-full px-4 py-2 3xl:py-6 mt-2  bg-white border border-bordergray focus:outline-none "
                            required
                            type="email"
                            {...register('email', {
                                required: 'oops! email is blank!', pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'incorrect email format',
                                },
                            },)}


                        />

                    </div>

                    <button className={`w-full px-4 mt-4 3xl:mt-8 py-2 3xl:py-5  mb-5 tracking-wide text-white transition-colors duration-200 transform bg-black hover:bg-voilet rounded-3xl focus:outline-none ${styles.nextBtn}`} type="submit" onClick={() => { HandleStep2() }}>send code

                    </button>


                    {/* {errors.email ? <div className=' text-[#D30820] '> <span className='text-[#D30820] border border-[#D30820] rounded-full py-0.4 px-1.5 text-xs' >!</span> {errors.email.message}</div> : null} */}
                </form>
            </div>

                : ""}

            {step3 ? <div >
                <div className={`flex justify-between pb-5 ${styles.backBtn} `}>
                    <button className=' font-normal py-2 lg:pb-0 xl:pb-4 pb-4' onClick={() => HandleBackStep3()}>
                        <div className='flex justify-center items-center space-x-2'>
                            <BiLeftArrowAlt size={25} className='3xl:w-10 3xl:h-10' />
                            <span className='font-semibold '>go back</span>
                        </div></button>

                </div>

                <button className='absolute lg:top-7 xl:top-3 top-3 right-3' onClick={() => { changeDuration(); }}><AiOutlineClose size={20} className='3xl:w-10 3xl:h-10' /></button>

                <div className='flex  items-center space-x-2'>
                    <div className=' border-b-4 text-left w-[33%]  mediumf border-voilet text-voilet'>step1</div>
                    <div className=' border-b-4 text-left w-[33%]  mediumf border-voilet text-voilet'>step2</div>
                    <div className=' border-b-4 text-left w-[33%]  mediumf border-voilet text-voilet'>step3</div>
                </div>
                <h2 className={`py-6 extlargef ${styles.title}`}>Simple Password Reset</h2>
                <form >
                    <div className={`py-2 ${styles.newPassword}`}>

                        <label className='font-bold '>
                            check your email, enter 4-digit code
                        </label>
                        <input className="block w-full px-4 py-2 3xl:py-6 mt-2  bg-white border border-bordergray focus:outline-none "
                            required
                            type="password"
                        />
                    </div>

                    <button className={`w-full px-4 mt-4 3xl:mt-8 py-2 3xl:py-5  mb-5 tracking-wide text-white transition-colors duration-200 transform bg-black hover:bg-voilet rounded-3xl focus:outline-none ${styles.nextBtn}`} type="submit" onClick={() => { HandleAllStepDone(), HandleFormTitle(); }}>next

                    </button>
                </form>
            </div> : ""}

        </>
    )
}

export default ForgetPasswordModel