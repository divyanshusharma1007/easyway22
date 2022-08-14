import React from 'react'
import Bulk from '../components/order/Bulk'
import TopBar from '../components/order/TopBar'
export default function OrderSection() {

    return (
        <div className='bg-slate-200'>
            <TopBar />
            <button className='border-2 border-red-800 mx-5  py-1 rounded-lg w-1/3 bg-slate-300 font-extrabold'>Proceed</button>
            <hr className='my-1' />
            <Bulk />
        </div>
    )
}