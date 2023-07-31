import React from 'react'
import {MdOutlineShoppingCart, MdPerson3} from 'react-icons/md'

export const Navbar = () => {
  return (
    <div className=' absolute z-10 w-full h-24 flex justify-between items-center px-16 '>
            
            <h1 className='text-2xl font-bold flex flex-col cursor-pointer'>M.A AND <span className='text-sm font-normal'>SONS RUGS</span></h1>
            <ul className='flex items-center gap-6  '>
                <li className='hover:text-[#db8114] hover:text-lg hover:duration-200 cursor-pointer'>HOME</li>
                <li className='hover:text-[#db8114] hover:text-lg hover:duration-200 cursor-pointer'>SHOP ALL</li>
                <li className='hover:text-[#db8114] hover:text-lg hover:duration-200 cursor-pointer'>OFFICE</li>
                <li className='hover:text-[#db8114] hover:text-lg hover:duration-200 cursor-pointer'>LIVING ROOM</li>
                <li className='hover:text-[#db8114] hover:text-lg hover:duration-200 cursor-pointer'>BEDROOM</li>
            </ul>
            <ul className='flex gap-4 items-center'>
                <li>CONTACT</li>
                <li><button >Log In</button></li>
                <li><MdOutlineShoppingCart/></li>
                <li><div className='rounded-full w-8 h-8 bg-contain' style={{backgroundImage: `url(${<MdPerson3/>})`}}></div></li>
            </ul>
        </div>
  )
}
