import React ,{useState} from 'react'
import Row from '../../admin/Products/UpdateProductRow'
import axios from 'axios'
export default function Updateproduct({ data }) {
  const vegis = data.filter((e) => e.category === 'vegitable')
  const fruits = data.filter((e) => e.category === 'fruits')
  return (
    <div className='bg-slate-300 sm:px-[5rem] pl-[3rem] md:pl-[30%] lg:pl-[20%]'>
      <div className='pt-16 relative '>
        <h2 className='mx-3 text-lg font-bold'>Vegitables</h2>
        <div className="mt-4 mx-4 py-4">
          <div className="w-full overflow-auto rounded-lg shadow-xs h-[30vh]">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700  text-gray-400 bg-gray-800">
                    <th className="px-4 py-3">Image</th>
                    <th className="px-4 py-3">name</th>
                    <th className="px-4 py-3">price</th>
                    <th className="px-4 py-3">display</th>
                    <th className="px-4 py-3">discount</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-gray-700 bg-gray-800">
                  {vegis.map(e=><Row e={e} key={e._id}/>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h2 className='mx-3 text-lg font-bold'> Fruits</h2>
        <div className="mt-4 mx-4 py-4">
          <div className="w-full overflow-auto rounded-lg shadow-xs h-[30vh]">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700  text-gray-400 bg-gray-800">
                    <th className="px-4 py-3">Image</th>
                    <th className="px-4 py-3">name</th>
                    <th className="px-4 py-3">price</th>
                    <th className="px-4 py-3">display</th>
                    <th className="px-4 py-3">discount</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-gray-700 bg-gray-800">
                {fruits.map(e=><Row e={e} key={e._id}/>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const options = { method: 'GET', url: 'https://easyway22.herokuapp.com/api/admin/allproducts' };
  let data = await axios.request(options).then(function (response) {
    return response.data.data;
  }).catch(function (error) {
  });
  console.log(data, "data in product.js");
  return { props: { data: data } }
}


