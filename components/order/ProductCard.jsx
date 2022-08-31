import React, { useState } from 'react'
import Image from 'next/image'
import Cookies from 'js-cookie'
const _ = require('lodash')
// import Cookies from 'js-cookie'
export default function ProductCard({ product, data, setData }) {
    const initialstate = {
        ...product,
        amount: 'price',
        quantity: "1000",
    }
    const [formData, setFormData] = useState(initialstate)
    const [word, setword] = useState("Add")
    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newState = _.cloneDeep(formData)
        newState[key] = value;
        setFormData(newState);
    }
    const addToCart = async () => {
        // need to update it
        if (word === 'Add') {
            const newState = _.cloneDeep(data)
            newState.push(formData)
            setword("del")
            setData(newState);
        } else {
            let data = await JSON.parse(Cookies.get('cartData'));
            const newState = _.cloneDeep(data)
            data = data.filter(e => e._id !== formData.id)
            setData(data)
            setword("Add")
        }
    }
    return (
        <div className='  mx-3 my-2 flex sm:flex-col sm:ml-10 border-2 border-black rounded-lg shadow-sm shadow-blue-900'>
            <Image src={require(`/public/products/${product.img}`)} height={120} width={170} />
            <div className='mx-2'>
                <div>
                    <h2>{product.name}</h2>
                    <h2>Price: <span>{product.price}/KG</span></h2>
                </div>
                <div className='flex justify-between flex-row w-[45vw] sm:w-auto items-end' >
                    <div>
                        <select name="amount" id="" defaultValue={formData?.amount} onChange={onChange}>
                            <option value="gram"> kilo gram</option>
                            <option value="price"> Price</option>
                        </select>
                        <input type="text" className='w-[100%] px-2 rounded-lg text-black' placeholder='quantity' value={`${formData.quantity}`} onChange={onChange} name="quantity" />
                    </div>
                    <div>
                        <button className='border-2 border-lime-800 px-5 my-3 py-1 font-extrabold font-sans rounded-md bg-lime-200 hover:bg-gray-200' onClick={addToCart}>{word}</button>
                    </div>
                </div>
            </div>
        </div >
    )
}