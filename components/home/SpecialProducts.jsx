import React from 'react'
import Image from 'next/image'
import Styles from '../../styles/Slider.module.css'
export default function SpecialProducts() {
  return (
    <section className="text-gray-600 body-font bg-purple-100 py-3 ">
      <h1 className="text-center text-3xl font-mono font-bold mt-10">Top Products</h1>
      <div className="grid sm:grid-cols-3 mt-3 mx-9">
        <div className='flex  flex-col  justify-between border-2 m-3 p-3 border-black rounded-xl shadow-2xl shadow-slate-500 bg-slate-100'>
          <Image src={require('../../public/Images/basket.png')} height={200}  />
          <h2 className='text-2xl font-bold text-blue-800 '> <span className='text-green-500 '>Fresh :</span>  Onions</h2>
          <h1 className='float-left text-lg text-red-800 font-bold'><span>Rs :</span> 50/kg</h1>
        </div>
        <div className='flex  flex-col  justify-between border-2 m-3 p-3 border-black rounded-xl shadow-2xl shadow-slate-500 bg-slate-100'>
          <Image src={require('../../public/Images/basket.png')} height={200}  />
          <h2 className='text-2xl font-bold text-blue-800 '> <span className='text-green-500 '>Fresh :</span>  Onions</h2>
          <h1 className='float-left text-lg text-red-800 font-bold'><span>Rs :</span> 50/kg</h1>
        </div>
        <div className='flex  flex-col  justify-between border-2 m-3 p-3 border-black rounded-xl shadow-2xl shadow-slate-500 bg-slate-100'>
          <Image src={require('../../public/Images/basket.png')} height={200}  />
          <h2 className='text-2xl font-bold text-blue-800 '> <span className='text-green-500 '>Fresh :</span>  Onions</h2>
          <h1 className='float-left text-lg text-red-800 font-bold'><span>Rs :</span> 50/kg</h1>
        </div>
        <div className='flex  flex-col  justify-between border-2 m-3 p-3 border-black rounded-xl shadow-2xl shadow-slate-500 bg-slate-100'>
          <Image src={require('../../public/Images/basket.png')} height={200}  />
          <h2 className='text-2xl font-bold text-blue-800 '> <span className='text-green-500 '>Fresh :</span>  Onions</h2>
          <h1 className='float-left text-lg text-red-800 font-bold'><span>Rs :</span> 50/kg</h1>
        </div>
        <div className='flex  flex-col  justify-between border-2 m-3 p-3 border-black rounded-xl shadow-2xl shadow-slate-500 bg-slate-100'>
          <Image src={require('../../public/Images/basket.png')} height={200}  />
          <h2 className='text-2xl font-bold text-blue-800 '> <span className='text-green-500 '>Fresh :</span>  Onions</h2>
          <h1 className='float-left text-lg text-red-800 font-bold'><span>Rs :</span> 50/kg</h1>
        </div>
        <div className='flex  flex-col  justify-between border-2 m-3 p-3 border-black rounded-xl shadow-2xl shadow-slate-500 bg-slate-100'>
          <Image src={require('../../public/Images/basket.png')} height={200}  />
          <h2 className='text-2xl font-bold text-blue-800 '> <span className='text-green-500 '>Fresh :</span>  Onions</h2>
          <h1 className='float-left text-lg text-red-800 font-bold'><span>Rs :</span> 50/kg</h1>
        </div>
      </div>
    </section>
  )
}
