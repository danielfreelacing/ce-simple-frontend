import SideMenu from 'components/SideMenu'
import LogoCard from 'components/card/LogoCard'
import React from 'react'
import {useRouter} from 'next/router'
import { BiArrowBack } from 'react-icons/bi'

const StudentLogin = () => {


  const router = useRouter()

 const  HandlelobbyClick =()=>{
  router.replace('/')

  }

  const LogoImage = "/images/Logo.svg"
  return (
    <div className={`bg-[url('/images/start-bg.png')] absolute top-0 bg-cover bg-center bg-no-repeat md:col-span-12 w-full  md:grid grid-cols-12 hidden`}>
      <div className={`col-span-12 md:col-span-11 md:pl-[8%]`}>
        <div className='hidden md:block'>
          <LogoCard LogoImage={LogoImage} />
        </div>
        <div className='w-max'>

          <button className={`  hidden  md:flex items-center space-x-1 bg-black text-white px-[30%] py-2  hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4`} onClick={() => { HandlelobbyClick() }} >
            <BiArrowBack className="text-white font-semibold minismallf" /><span className='font-semibold minismallf '>lobby</span></button>
        </div>
<div className='flex justify-center mt-[15%] w-full supermediumf  items-center'><h1>Welcome to student dashboard</h1></div>

      </div>
      <div className={`col-span-12 p-4   max-sm:invisible md:col-span-1 md:flex items-center relative h-screen w-full border-l border-bodergray`}>
        <SideMenu />
      </div>
    </div>
  )
}

export default StudentLogin