import React, { useState } from 'react'
import Image from 'next/image';
const _ = require('lodash')
import addproduct from '../../actions/admin/addproduct';
import axios from 'axios'
export default function Products({ data }) {
  console.log(data,"data");
  data=data.files;
  const intitialState = {
    name: "",
    price: "",
    img: "",
    discount: "",
  }

  const [formData, setFromData] = useState(intitialState);
  let uploadImage = async (e) => {
    console.log(e)
    const form = new FormData();
    let file = e.target.files[0];
    form.append('file', file);
    form.append('upload_preset', 'skprogrammer')
    alert("your image uploading is processing ,wait till the notification of the uploaded successful arived then submit the form ")
    console.log(form)
    const res = await fetch("http://api.cloudinary.com/v1_1/dboiupu8k/image/upload", {
      method: 'POST',
      body: form
    });
    res = await res.json();
    console.log(res);
    const newState = _.cloneDeep(formData);
    newState['img'] = res.secure_url;
    alert("upload image successfull")
    setFromData(newState);
  }
  const addProduct = async () => {
    addproduct(formData)
  }
  const onChange = (e) => {
    const key = e?.target?.name;
    let newFromState = _.cloneDeep(formData);
    newFromState[key] = e.target.value;
    setFromData(newFromState);
    console.log(formData);
  }
  return (
    <div className='bg-slate-300 sm:px-[5rem] pl-[3rem] md:pl-[30%] lg:pl-[20%] py-3 flex flex-col'>
      <div className='flex flex-col bg-slate-400 p-3 rounded-lg'>
        <form className=' py-3 px-3  flex sm:block justify-center sm:justify-between rounded-lg'>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name" name="name">
                Product Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="name" onChange={onChange} />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                price
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="Number" placeholder="Jane" name="price" onChange={onChange} />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                discount
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="Number" placeholder="Jane" name="discount" onChange={onChange} />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Product Name
              </label>
              <Image src={require('/public/images/basket.png')} height={100} width={150} />
              <input class="w-[100px]" id="grid-first-name" type="file" placeholder="Jane" onChange={uploadImage} />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  PreImage
                </label>
                <select onChange={onChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='img' >
                  {
                    data?.map((e) => <option value={`public/products/${e}`}>{e.split('.')[0]}</option>)
                  }
                </select>
              </div>
              <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Category
                </label>
                <select onChange={onChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" >
                  <option value={"fruits"}>fruits</option>
                  <option value={"vegitable"}>vegitables</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  )
}


export async function getServerSideProps() {
 
  const res = await fetch(`http://localhost:3000/api/admin/files`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

