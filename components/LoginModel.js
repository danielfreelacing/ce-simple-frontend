import React, { useState } from 'react'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgetPasswordModel from '../components/ForgetPassword/ForgetPasswordModel';
import styles from '../components/ForgetPassword/ForgetPassword.module.css'
import styles2 from '../src/styles/LoginModel.module.css'
import { AiOutlineClose } from 'react-icons/ai';
import AnimatedLoader from './card/AnimatedLoader';



const LoginModel = ({ changeDuration, title }) => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loginTitle, setLoginTitle] = useState(false)
    const [forgetPassword, setForgetPassword] = useState();
    const [loading, setLoading] = useState(false)
    const router = useRouter()


    // show hide forget model
    const HideForgetPasswordModel = () => {
        setForgetPassword(false)
    }

    const ShowForgetPasswordModel = () => {
        setForgetPassword(true)
    }

    const userLogin = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        setLoading(true)

        try {
            const res = await fetch(`https://cesimple.wpengine.com/wp-json/jwt-auth/v1/token`, {
                method: "POST",
                body: formData
            })
            const res2 = await res.json()

            if (res.ok) {
                if (res2.token) {
                    cookie.set('token', res2.token)
                    cookie.set('user', res2.username)
                    router.push(`https://cesimple.wpengine.com/auth.php?token=${res2.token}`)
                    alert('Login Successfully')
                    // toast('Success Notification !', {
                    //     position: toast.POSITION.TOP_RIGHT
                    // });
                    setLoading(false);

                } else {
                    router.push('/')
                    toast.error(res2.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    // router
                }
            }
            else {
                toast.error('Invalid UserName or Password', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setLoading(false);
            }
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER
            });
            // router.push('/')
        }
    }

    const HandleFormTitle = () => {
        setLoginTitle(true);
    }
    const titlefogetpass = 'All done! Try it out!';


    return (
        <>
            <div className='relative'>
                <div className={`${forgetPassword ? styles.modelClose : styles.modelOpen}`}>
                    <div className='flex justify-between '>
                        <h2 className={`font-normal py-2 pb-4 largef ${styles2.title}`}>{loginTitle ? titlefogetpass : title}</h2>
                    </div>
                    <button className='absolute hidden top-4 md:block right-4' onClick={() => { changeDuration(); }}><AiOutlineClose size={25} className='3xl:w-10 3xl:h-10' /></button>
                    <form onSubmit={(e) => userLogin(e)}>
                        <div className={`py-2 ${styles2.main}`}>
                            <label className='font-bold'>
                                username
                            </label>
                            <input className={`block w-full px-4 py-2  mt-2 3xl:py-3 bg-white border border-bordergray focus:outline-none ${styles2.loginmodelInput}`} type="text" placeholder="username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='py-2'>
                            <label className='font-bold'>
                                password
                            </label>
                            <input className={`block w-full px-4 py-2  mt-2 3xl:py-3 bg-white border border-bordergray focus:outline-none ${styles2.loginmodelInput}`} type="password" placeholder="*******"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={`flex justify-between py-3 ${styles2.reminderMe}`}>
                            <div className='flex space-x-[0.5px] items-center'>

                                <div className="form-check">
                                    <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input 3xl:w-8 3xl:h-8 checked:bg-blue-600 checked:border-blue-600 focus:outline-none" type="checkbox" value="" id="flexCheckDefault" />
                                </div>

                                <p className='mediumf'>remember me</p>
                            </div>

                            <button className='font-[600] mediumf hover:text-voilet  ' type="button" onClick={() => ShowForgetPasswordModel()} >forget password</button>
                        </div>

                        <div className={`relative`}>
                            <button
                                className={`w-full px-4 mt-4 py-2 3xl:py-2 tracking-wide text-white transition-colors duration-200 transform bg-black hover:bg-voilet rounded-3xl focus:outline-none 
                            ${styles2.loginBtn}`} type="submit">
                                {loading ? <AnimatedLoader /> : 'login'}
                            </button>
                        </div>
                    </form>

                </div>
                <div className={` absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-5  ${forgetPassword ? styles.modelOpen : styles.modelClose} ${forgetPassword === undefined ? styles.modelHide : ""} `}>
                    <ForgetPasswordModel HideForgetPasswordModel={HideForgetPasswordModel} changeDuration={changeDuration} HandleFormTitle={HandleFormTitle} />
                </div>
            </div>
        </>
    )
}

export default LoginModel