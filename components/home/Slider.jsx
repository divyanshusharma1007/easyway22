import React from 'react'
import img from '/public/Images/slide1.jpg'
import Image from 'next/image'
import Styles from '../../styles/Slider.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
  console.log(Carousel)
  return (
    <div className=''>
      <Carousel infiniteLoop={true} autoPlay={true} stopOnHover={true} autoFocus={true}  showArrows={true} showStatus={false}  showThumbs={false} showIndicators={true}  className='bg-rose-100 rounded-3xl'>
        <div className='my-5 '>
          <Image src={img} alt="image1" />
          <h1 className=' text-4xl font-extrabold relative top-[-50px] text-white text-right mx-10 2xl:mr-90 left-6 sm:mr-16 md:mr-32 lg:mr-64 xl:mr-96 2xl:mr-[37rem]'>50%off </h1>
        </div>
        <div className='my-5 '>
          <Image src={img} alt="image1" />
          <h1 className=' text-4xl font-extrabold relative top-[-50px] text-white text-right mx-10 2xl:mr-90 left-6 sm:mr-16 md:mr-32 lg:mr-64 xl:mr-96 2xl:mr-[37rem]'>50%off </h1>
        </div>
        <div className='my-5 '>
          <Image src={img} alt="image1" />
          <h1 className=' text-4xl font-extrabold relative top-[-50px] text-white text-right mx-10 2xl:mr-90 left-6 sm:mr-16 md:mr-32 lg:mr-64 xl:mr-96 2xl:mr-[37rem]'>50%off </h1>
        </div>
      </Carousel>
    </div>
  )
}

