import React from 'react'
import Image from 'next/image'
export default function ProductCard({product}) {
    return (
        <div className='  mx-3 my-2 flex sm:flex-col sm:ml-10 border-2 border-black rounded-lg shadow-sm shadow-blue-900'> 
            <Image src={require(`/public/products/${product.img}`)} height={120} width={84} />
            <div className='mx-2'>
                <div>
                    <h2>{product.name}</h2>
                    <h2>Price: <span>{product.price}/KG</span></h2>
                </div>
                <div className='flex justify-between flex-row w-[45vw] sm:w-auto items-end'>
                    <div>
                        <select name="amount" id="">
                            <option value="kilogram"> Kilogram</option>
                            <option value="price"> Price</option>
                        </select>
                        <input type="text" className='w-[70%] my-3 px-2 border pt-1 border-red-500 bg-rose-300' placeholder='Amount' />
                    </div>
                    <div>
                        <button className='border-2 border-lime-800 px-5 my-3 py-1 font-extrabold font-sans rounded-md bg-lime-200 hover:bg-gray-200'>add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}