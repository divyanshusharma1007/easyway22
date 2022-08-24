import React from 'react'

import ProductCard from './ProductCard'
export default function Product({prduc}) {
    return (
        <div>
            <h1 className='hidden md:block text-center text-slate-500 text-2xl font-medium font-serif m-5'>Products </h1>
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 mt-3 mx-3">
                {prduc?.map(e=><ProductCard product={e}/>)}
            </div>

        </div>
    )
}