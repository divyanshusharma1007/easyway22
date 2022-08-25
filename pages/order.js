import React from 'react'
import Bulk from '../components/order/Bulk'
import TopBar from '../components/order/TopBar'
import axios from 'axios'
export default function OrderSection({data,query}) {
    console.log(query)
console.log(data  , "data arived in order section ")
    return (
        <div className='bg-slate-200'>
            <TopBar data={data}/>
            <button className='border-2 border-red-800 mx-5  py-1 rounded-lg w-1/3 bg-slate-300 font-extrabold'>Proceed</button>
            <hr className='my-1' />
            <Bulk />
        </div>
    )
}


export async function getServerSideProps(context) {
    const options = { method: 'GET', url: 'https://easyway22.herokuapp.com/api/user/displayproducts' };
    let data = await axios.request(options).then(function (response) {
        return response.data.data;
    }).catch(function (error) {
    });
    console.log(data, "files in product.js");
    return { props: { data: data } }
}
