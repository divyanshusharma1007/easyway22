import React,{useState} from 'react'
import Product from './Product'
import Catagories from './Catagories'

export default function TopBar({data}) {
  const vegis=data.filter((e)=>e.category==='vegitable')
  const fruits=data.filter((e)=>e.category==='fruits')
  console.log(vegis,"vegis here ",fruits)
  const [displayProducts,setDisplayProducts]=useState(vegis)
  console.log(displayProducts)
  return (
    <div className='flex flex-col md:flex-row'>
    <Catagories setDisplayProducts={setDisplayProducts} vegis={vegis} fruits={fruits} />
    <Product prduc={displayProducts} />
</div>
  )
}