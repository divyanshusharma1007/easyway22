import React from 'react'
import Image from 'next/image'
import Styles from '../../styles/Slider.module.css'
import Link from 'next/link'
export default function SpecialProducts() {
  return (
    <section className="text-gray-600 body-font bg-purple-50 py-3 ">
      <h1 className="text-center text-3xl font-mono font-bold mt-10"> Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-3 mx-9">
        <Link href='/order'>
          <div className='grid place-items-center border-0 border-black rounded-xl bg-lime-50 mx-5 shadow-md shadow-gray-800'>
            <Image src={require('../../public/Vegitable/cabage.webp')} height={100} width={100} />
            <h2 className='text-center font-mono font-semibold'> Vegitables</h2>
          </div>
        </Link>
        <Link href='/order' query={"hello"}>
          <div className='grid place-items-center border-0 border-black rounded-xl bg-lime-50 mx-5 shadow-md shadow-gray-800'>
            <Image src={require('/public/products/aam.png')} height={100} width={100} />
            <h2 className='text-center font-mono font-semibold'>Fruits</h2>
          </div>
        </Link>
        
      </div>
    </section>
  )
}
