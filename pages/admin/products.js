import React, { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import _ from 'lodash'
import serverurl from '../../serverurl'
import addproduct from '../../actions/admin/addproduct'
export default function Products({ data }) {
    console.log(data, "data is here ")
    const intitialState = {
        name: "",
        price: "",
        img: "",
        discount: "",
    }
    const [formData, setFromData] = useState(intitialState);
    const onChange = (e) => {
        const key = e?.target?.name;
        let newFromState = _.cloneDeep(formData);
        newFromState[key] = e.target.value;
        setFromData(newFromState);
        console.log(formData);
    }

    const [img, setimg] = useState(0)
    const addProduct = async () => {
        alert("adding your product ")
        alert(formData)
        console.log(formData);
        addproduct(formData)
        alert("product added successfully")
    }
    return (
        <div className=' pt-[8%] bg-slate-300 sm:px-[5rem] pl-[3rem] md:pl-[30%] lg:pl-[20%] py-3 flex flex-col'>
            <div className='flex flex-col bg-slate-400 p-3 rounded-lg'>
                <form className=' py-3 px-3  flex sm:block justify-center sm:justify-between rounded-lg'>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name" name="name">
                                Product Display Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="name" onChange={onChange} />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Product Price
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="Number" placeholder="Price" name="price" onChange={onChange} />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Discount on Product
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="Number" placeholder="discount" name="discount" onChange={onChange} />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Image of Product
                                </label>
                                <select onChange={onChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='img' >
                                    {
                                        data?.map((e) => {
                                            return (<option value={e} key={e}><div> {e.split('.')[0]} </div></option>)
                                        })
                                    }
                                </select>
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Category
                                </label>
                                <select onChange={onChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="category" id="grid-last-name" >
                                    <option value={"fruits"} >fruits</option>
                                    <option value={"vegitable"}>vegitables</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addProduct}>
                    Add Product
                </button>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const options = { method: 'GET', url: `https://easyway22.herokuapp.com/api/admin/files` };
    let data = await axios.request(options).then(function (response) {
        return response.data.files;
    }).catch(function (error) {
    });
    console.log(data, "files in product.js");
    return { props: { data: data } }
}

