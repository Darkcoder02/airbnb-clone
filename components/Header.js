'use client'
import Image from 'next/image'
import React, { useState, useCallback } from 'react'
import logo from '../assets/pngwing.com.png'
import {MagnifyingGlassIcon, GlobeAsiaAustraliaIcon, Bars3Icon, UserCircleIcon, UserIcon} from '@heroicons/react/24/solid';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

function Header() {
    const searchParams = useSearchParams();
    const pathname = '/search';
    const[search, setSearch] = useState("");
    const[startDate, setStartDate] = useState(new Date());
    const[endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:'selection'
    }

    const createQueryString = useCallback(
        (location, startdate, enddate, noofguests) => {
          const params = new URLSearchParams(searchParams);
          params.set(location, startdate, enddate, noofguests)
     
          return params.toString()
        },
        [searchParams]
    )

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setSearch("");
    }
    return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4 px-4 md:px-8">
        <div 
        onClick={()=>router.push("/")}
        className="relative flex items-center h-10 md:h-14 cursor-pointer my-auto">
            <Image
                src={logo}
                layout='fill'
                objectFit='contain'
                objectPosition='left'
            />
        </div>


        <div className='md:border-2 border-gray-100 flex items-center py-2 rounded-full md:shadow-md'>
            <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder='Search Destinations'
            className='flex-grow bg-transparent text-sm outline-none p-1 sm:pl-5'
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

        {search && 
        <div className='flex flex-col col-span-3 mx-auto mt-4'>
            <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FF5A5F"]}
            onChange={handleSelect}
            />
            <div className='flex items-center border-b pb-4'>
                <h2 className='text-2xl flex-grow font-semibold'>Number of People</h2>
                <UserIcon className='h-6'/>
                <input
                type='number'
                value={noOfGuests}
                onChange={(e)=>setNoOfGuests(e.target.value)}
                min={1}
                className='w-12 pl-2 outline-none text-lg'/>
            </div>
            <div className='flex items-center mt-2'>
                <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                <button onClick={()=>router.push(pathname+'?'+createQueryString(search,startDate.toISOString(),endDate.toISOString(),noOfGuests))} className='flex-grow text-red-500'>Search</button>
            </div>
        </div>
        }
    </div>
    
  )
}

export default Header