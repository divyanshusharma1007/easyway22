import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import ProductCard from './ProductCard'
export default function Product({ prduc }) {
    let d = Cookies.get('cartData')
    if (typeof (d) === 'undefined') { d = [] } else {
        d = JSON.parse(d);
    }
    const [data, setData] = useState(d)
    useEffect(() => {
        Cookies.set("cartData", JSON.stringify(data));
    }, [data])

    return (
        <div>
            <h1 className='hidden md:block text-center text-slate-500 text-2xl font-medium font-serif m-5'>Products </h1>
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 mt-3 mx-3">
                {prduc?.map(e => <ProductCard product={e} key={e._id} data={data} setData={setData} />)}
            </div>
            {/* <Link href={{pathname:'/cart',query:{data:data}}} className='border-2 border-red-800 mx-5  py-1 rounded-lg w-1/3 bg-slate-300 font-extrabold'>Proceed</Link> */}
        </div>
    )
}