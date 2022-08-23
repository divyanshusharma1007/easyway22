import React from 'react'
import Link from 'next/link'
export default function Tabs() {
    return (
        <>
            <div className="mb-4 border-b border-gray-700 bg-gray-700 rounded-lg">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" >
                    <li className="mx-1 py-3 pr-2 text-gray-200 hover:text-gray-300 " >
                        <Link href="/" className="" >New Product</Link>
                    </li>
                    <li className="mx-1 py-3 pr-2 text-gray-200 hover:text-gray-300 " >
                        <Link href="/" className="" >Avilabe Image</Link>
                    </li>
                    <li className="mx-1 py-3 pr-2 text-gray-200 hover:text-gray-300 " >
                        <Link href="/updateproduct" className="" >Update</Link>
                    </li>
                </ul>
            </div>
           
        </>


    )
}
