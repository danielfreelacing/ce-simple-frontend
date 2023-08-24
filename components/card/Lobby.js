import React from 'react'

import { BiArrowBack } from 'react-icons/bi'

const Lobby = ({ parentToChild }) => {
    return (
        <button className='flex items-center space-x-1 bg-black text-white px-3 py-1.5 rounded-3xl my-5' onClick={() => parentToChild()}>
            <BiArrowBack size={20} className="text-white bg-black" /><span className='text-sm'>lobby</span></button>
    )
}

export default Lobby