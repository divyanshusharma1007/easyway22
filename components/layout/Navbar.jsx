import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <header className="text-slate-300 body-font bg-gray-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          Logo here
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white font-extrabold flex">

            <Link href="/">Home </Link></a>
          <a className="mr-5 hover:text-white font-extrabold"><Link href="/order">Order</Link></a>
          <a className="mr-5 hover:text-white font-extrabold"><Link href="/about">About</Link></a>
          <a className="mr-5 hover:text-white font-extrabold flex cursor-pointer">

            <Link href="/cart">
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart
              </>
            </Link></a>
          <button className='mr-5 hover:text-white font-extrabold flex cursor-pointer'>
            <Link href="/login">
              Login
            </Link>
          </button>
        </nav>
      </div>
    </header>
  )
}