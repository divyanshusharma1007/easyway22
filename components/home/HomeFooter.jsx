import React from 'react'

export default function HomeFooter() {
    return (
<>
<hr className='my-3'/>
        <div className='flex justify-between items-center py-5 px-5 bg-gray-200 flex-col sm:flex-row'>
            <div className='text-2xl font-bold my-5 sm:my-0'>
                Download For
            </div>
            <div className='flex justify-between'>
            <button className='mx-3  text-white bg-gray-400 py-2 rounded-2xl text-xl w-32 cursor-pointer hover:bg-pink-400'>Mac</button>
            <button className='mx-3  text-white bg-gray-400 py-2 rounded-2xl text-xl w-32 cursor-pointer hover:bg-pink-400'>Android</button>
            </div>
        </div>
</>
    )
}
