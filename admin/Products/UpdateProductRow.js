import React, { useState } from 'react'
import Image from 'next/image'
const _ =require('lodash')
export default function Row({ e }) {
    console.log(e, "e is here")

    const [formData, setFromData] = useState(e);
    const onChange = (e) => {
        const key = e?.target?.name;
        let newFromState = _.cloneDeep(formData);
        newFromState[key] = e.target.value;
        setFromData(newFromState);
        console.log(formData);
    }
    const update = () => {
        alert("updating your product")
        console.log(formData)
    }
    return (

        <tr className="bg-gray-800  hover:bg-gray-900 text-gray-300 dark:text-gray-400">
            <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                    <div>
                        <Image src={require(`/public/products/${e.img}`)} height={30} width={50} />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <input type="text" className='w-[100%] px-2 rounded-lg text-black' placeholder='name' value={e.name} onChange={onChange}/>
                </div>
            </td>
            <td>
                <div className='pl-3'>
                    <input type="text" className='w-[100%] px-2 rounded-lg text-black' placeholder='price' value={e.price} onChange={onChange} />
                </div>
            </td>
            <td>
                <div className='pl-3' >
                    <select className='rounded-lg text-black' value={e.active} onChange={onChange}>
                        <option className='text-black' value={true}>
                            true
                        </option>
                        <option className='text-black' value={false}>
                            false
                        </option>
                    </select>
                </div>
            </td>
            <td>
                <div className='pl-3'>
                    <input type="text" className='w-[100%] px-2 rounded-lg  bg-green-200 text-black' value={e.discount} placeholder='discount' onChange={onChange}/>
                </div>
            </td>
            <td className="px-4 py-3 text-sm">
                <button onClick={update} className="bg-slate-400 text-black rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
                    </svg>
                </button>
            </td>
        </tr>

    )
}
