import React from 'react'
import Image from 'next/image'
export default function Header() {
    return (
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0  ">
            <div class="fixed w-full flex items-center justify-between h-14 bg-gray-900 p-3" style={{ backgroundColor: 'rgb(17 ,24 ,39 ,0.8' }}>
                <div class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14  border-none ">
                    <Image class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src={require('../../public/Images/basket.png')} width={50} height={50} />
                    <span class="hidden md:block text-white">ADMIN</span>
                </div>
                <div class="flex justify-between items-center h-14 " style={{backgroun:'rgb(17 ,24 ,39 ,0.4'}}>
                    <ul class="flex items-center">
                        <li>
                            <a href="/" class="flex items-center text-white hover:text-yellow-200">
                                <span class="inline-flex mr-1">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                </span>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
