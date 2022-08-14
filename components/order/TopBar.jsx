import React from 'react'
import Product from './Product'
import Catagories from './Catagories'

export default function TopBar() {
  return (
    <div className='flex flex-col md:flex-row'>
    <Catagories />
    <Product />
</div>
  )
}