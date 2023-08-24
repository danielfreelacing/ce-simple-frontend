import React, { useEffect, useState } from 'react'
import arrow from "../../public/images/Cart_icon_home.svg";
import arrowHover from "../../public/images/Cart_Icon_home_color.svg";
import Image from 'next/image';
import styles from '../../src/styles/NewIndex.module.css'
import { productCartState } from 'recoil/atoms';
import { getCartItems } from 'utils/addToCart';
import { useRecoilState } from 'recoil'
import Link from 'next/link';
const TotalCartItems = () => {

  const [productsRecoil, setProductsRecoil] = useRecoilState(productCartState)
  useEffect(() => {
    setProductsRecoil(getCartItems());
  }, [])

  return (
    <Link href="/courses">
      <div className=" container" >
        <div className={`relative transition-all ease-in duration-1000 w-max`}>
          {/* <Image
            src={isHovering ? arrowHover : arrow} width={80} height={80}
            className={` ${isHovering ? 'transition-all ease duration-2000' : "transition-all ease- duration-2000"}  cartImage`}
          /> */}

          <div className={`${styles.icon} `}>
          </div>
        </div>
        <div className='absolute  right-2 w-5 h-5 lg:h-3.5 lg:w-3.5 xl:h-5 xl:w-5 text-white -translate-x-0 -translate-y-0 rounded-full bg-voilet top-1 z-50' >
          <p className='flex items-center justify-center text-[12px] xl:text-[12px] lg:text-[10px]'>{productsRecoil.length}</p>
        </div>
      </div>
    </Link>
  )
}

export default TotalCartItems


