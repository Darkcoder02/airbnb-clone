import React from 'react'
import Image from 'next/image'
import banner from '../assets/banner.jpg'
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[700px] 2xl-[900px] shadow-md">
        <Image
            src={banner}
            layout='fill'
            objectFit='cover'
        />
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-xl font-bold text-white">Not sure where to go? Perfect.</p>
            <button className="text-orange-600 bg-white px-10 py-4 shadow-md rounded-xl font-bold my-2 hover:shadow-2xl active:scale-90 transition duration-400"> Find your Destination </button>
        </div>
    </div>
  )
}

export default Banner