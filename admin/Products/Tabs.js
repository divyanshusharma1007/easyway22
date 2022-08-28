import React from 'react'
import Link from 'next/link'
export default function Tabs() {
    return (
        <>
            <div className="mb-4 border-b border-gray-700 bg-gray-700 rounded-lg mt-16 mx-3">
                <ul className="flex flex-wrap -mb-px text-sm font-medium justify-evenly px-3" >
                <li className="mx-1 py-3 pr-2 text-gray-200 hover:text-gray-300 items-center flex flex-col " >
                        <Link href="/admin/products" className="" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                        New
                    </li>
                    <li className="mx-1 py-3 pr-2 text-gray-200 hover:text-gray-300 items-center flex flex-col " >
                        <Link href="/admin/allproducts" className="" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </Link>
                        Images
                    </li>
                    <li className="mx-1 py-3 pr-2 text-gray-200 hover:text-gray-300 items-center flex flex-col " >
                        <Link href="/admin/updateproduct" className="" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                            </svg>
                        </Link>
                        update
                    </li>
                </ul>
            </div>

        </>


    )
}
