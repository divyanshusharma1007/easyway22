import React from 'react'
import Tabs from '../admin/Products/Tabs'
import axios from 'axios'
export default function updateproduct({data}) {
    console.log(data)
    console.log(data.filter((e)=>e.category==='vegitables'),"here is all vegitables")

    return (
        <div className='bg-slate-300 sm:px-[5rem] pl-[3rem] md:pl-[30%] lg:pl-[20%]'>
            <Tabs />
            <div className="mt-4 mx-4 py-4">
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full h-[50vh]">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700  text-gray-400 bg-gray-800">
                                    <th>Image</th>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3">Discount</th>
                                    <th className="px-4 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-gray-700 bg-gray-800">

                                <tr className="bg-gray-800  hover:bg-gray-900 text-gray-300 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Hans Burger</p>
                                                <p className="text-xs text-gray-400">10x Developer</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <h2>Radha Kunj Colony </h2>
                                            <h3>Maheshwar {451224}</h3>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">$855.85</td>
                                    <td className="px-4 py-3 text-xs">
                                        <span className="px-2 py-1 font-semibold leading-tight  rounded-full bg-green-700 text-green-100"> Approved </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">15-01-2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const options = { method: 'GET', url: `http://localhost:3000/api/admin/allproducts` };
    let data = await axios.request(options).then(function (response) {
        return response.data.data;
    }).catch(function (error) {
    });
    console.log(data ,"here is our data")
    return { props: { data: data } }
}

