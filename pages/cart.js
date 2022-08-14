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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded fixed  right-0">
                Check Out
            </button>
        </>
    )
}
