import React from 'react'

import CartItem from '../components/cart/CartItem'
export default function Cart() {
    return (
        <>
            <div className='grid grid-flow-row xl:grid-cols-3 md:grid-cols-2 '>
                <CartItem />
                <CartItem />
                <CartItem />


            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded fixed  bottom-3 right-3">
                Check Out
            </button>
            <div className='fixed left-3 bottom-10 mb-3 p-3 bg-green-200 text-black font-bold border-2 shadow-black shadow-xl rounded-md z-50'>
                Total :{34}
            </div>
        </>
    )
}
