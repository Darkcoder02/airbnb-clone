import Image from 'next/image'
import React from 'react'
import logo from '../assets/pngwing.com.png'
import {MagnifyingGlassIcon, GlobeAsiaAustraliaIcon, Bars3Icon, UserCircleIcon} from '@heroicons/react/24/solid'
function Header() {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4 px-4 md:px-8">
        <div className="relative flex items-center h-14 cursor-pointer my-auto">
            <Image
                src={logo}
                layout='fill'
                objectFit='contain'
                objectPosition='left'
            />
        </div>


        <div className='md:border-2 border-gray-100 flex items-center p-2 rounded-full md:shadow-md'>
            <input
            type="text"
            placeholder='Search Destinations'
            className='flex-grow bg-transparent outline-none'
            />
            <MagnifyingGlassIcon className='bg-orange-600 h-8 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2'/>
        </div>
        

        <div className='flex items-center justify-end space-x-6 cursor-pointer'>
            <p className='hidden md:inline-block'>Airbnb your home</p>
            <GlobeAsiaAustraliaIcon className='h-8'/>
            <div className='flex items-center border-2 p-2 rounded-full '>
                <Bars3Icon className='h-7 text-gray-600'/>
                <UserCircleIcon className='h-7 text-gray-600'/>
            </div>
        </div>


    </div>
    
  )
}

export default Header