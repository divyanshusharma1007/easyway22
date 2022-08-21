import React from 'react'
import axios from 'axios'
import Image from 'next/image';
export default function allproducts({ data }) {
    return (
        <div className=' pt-[8%] bg-slate-300 sm:px-[5rem] pl-[3rem] md:pl-[30%] lg:pl-[20%] py-3 flex flex-col'>
            <div className='grid grid-flow-row grid-cols-5'>
                {data.map((e) =>
                (
                    <div className='shadow-lg shadow-black flex justify-center flex-col m-3 rounded-lg pt-3'>
                        <Image src={require(`/public/products/${e}`)} height={84} width={84} />
                        <h2 className='text-center'> {e.split('.')[0]}</h2>
                    </div>
                )
                )}
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
