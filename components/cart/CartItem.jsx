import React from 'react'
import Image from 'next/image'
export default function CartItem() {
    return (
        <div>
            <div className="p-2  w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={require('../../public/Vegitable/cabage.webp')} height={84} width={84} />
                    <div className="flex-grow w-1/3">
                        <h2 className="text-gray-900 title-font font-medium mx-2 ">Cabage</h2>
                        <input placeholder={'amoutn in kg'} value={`${'5'} kg`} className='py-1 mx-2 w-[50%]' />
                        <input placeholder={'amoutn in price'} value={`${'5'} kg`} className='py-1 mx-2 w-[50%]' />
                    </div>
                    <div>
         
                        <h2 className=' text-normal font-extrabold text-teal-500'>Total Amount</h2>
                        <h2 className='text-rose-500 text-extrabold'>50 Rs</h2>
                    </div>
                    <div className='relative right-[0px] mt-[-90px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    )
}
