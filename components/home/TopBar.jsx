import React from 'react'
import Image from 'next/image'
import basket from '../../public/Images/vehicle.png'
export default function TopBar() {
    return (
        <div className=" hidden  bg-green-50 items-center sm:justify-around border rounded-br-[49%] sm:rounded-br-full  ">
            {/* make it flex */}
            <div className=" px-5 sm:px-10 w-2/4 ">
                <h2 className=' text-3xl sm:text-3xl font-bold mb-5'>Easy Way</h2>
                <p className='pt-2 text-sm sm:text-lg'>Easiest way to get the vegitable at your home, at your rate</p>
                <p className='pt-2 text-sm sm:text-lg'>Fastest Delivery in the Town.</p>
                <p className='pt-2 text-sm sm:text-lg'>The Soul of the Freshness .</p>
                <p className='pt-2 text-sm sm:text-lg'>Special Deals , on your meals</p>
            </div>
            <div className='mt-60 sm:mt-24 w-2/4 '>
                <Image src={basket}   className=' relative sm:bottom-0 w-14' ></Image>
            </div>
        </div>
    )
}
