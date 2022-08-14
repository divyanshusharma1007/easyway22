import React from 'react'

export default function Bulk() {
  return (
    <>
      <h1 className='text-center font-extrabold font-mono text-2xl'>Order Bulk</h1>
      <div className=''>
        <div className="flex justify-center mx-3 p-3 py-10 lg:mx-40">
          <textarea type="text" className='container p-5 rounded-xl shadow-lg shadow-black' name="" id="" placeholder='Enter Your Bulk order List form here you can also place the grocessary order seperate the item by new line, using this you bill will be calcuated at the time of delivery' onChange={(e) => console.log("hello")} />
        </div>
      </div>
      <button className='border-2 border-red-800 mx-5  py-1 rounded-lg w-1/3 bg-slate-300 font-extrabold'>Proceed Bulk</button>
    </>
  )
}