import React from 'react'
import Bulk from '../components/order/Bulk'
import TopBar from '../components/order/TopBar'
import axios from 'axios'
export default function OrderSection({ data, query }) {
    return (
        <div className='bg-slate-200'>
            <TopBar data={data} />
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
