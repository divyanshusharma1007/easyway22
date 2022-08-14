import React from 'react'
import Image from 'next/image'
export default function Catagories() {
    return (
        <div>
            <h1 className=' hidden md:block m-3 text-2xl font-medium text-lime-600 underline underline-offset-4 decoration-slate-700'>Category</h1>
            <div className='overflow-auto grid grid-flow-col grid-rows-1 md:h-[85%] md:mt-auto border-b-slate-800 border-2 mx-5'>
                <div className="flex w-full justify-evenly md:flex-col ">
                    <a className='w-[35%] md:w-auto mx-3 px-3 pt-2 pb-1 shadow-xl border-2 my-2  rounded-lg cursor-pointer hover:border-b-slate-800'>
                        <h1 className='text-center font-bold text-sm'>Fruits</h1>
                    </a>
                    <a className='w-[35%] md:w-auto mx-3 px-3 pt-2 pb-1 shadow-xl border-2 my-2  rounded-lg cursor-pointer hover:border-b-slate-800'>
                        <h1 className='text-center font-bold text-sm'>Fruits</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}