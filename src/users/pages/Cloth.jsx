import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '@/component/Footer'

function Cloth() {
  return (
    <div  style={{ fontFamily: 'Raleway, sans-serif' }}>
        <Header/>
<div className="w-full bg-white">
  {/* Category buttons */}
  <div className="flex gap-4 px-10 pt-9 md:ms-20 text-[12px] text-bold tracking-[0.09em] uppercase md:mt-40 mt-25 ">
    <button className="hover:font-semibold transition cursor-pointer ">
      WOMAN
    </button>
    <button className=" hover:font-semibold transition cursor-pointer ">
      MAN
    </button>
  
  </div>

  {/* Search bar */}
  <div className="h-[20vh] flex items-center justify-center">
    <div className="w-full max-w-2xl px-8">
      <input type="text" placeholder="WHAT ARE YOU LOOKING FOR?" className="w-full text-center bg-transparent outline-none text-[11px] tracking-[0.2em] uppercase placeholder-black"/>
      <div className="mt-3 h-px w-full bg-gray-300"></div>
    </div>
  </div>
</div>
{/* section */}
<div className=" md:px-12 py-10">
  <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-3 md:gap-y-16">

    {/* Card */}
   <div className="group">
      <div className="relative bg-[#f5f5f5]">
       <Link to={'/clothdetails'}>
            <img
              src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"
              alt=""
              className="w-full md:h-105 h-80 object-cover"
            />
       </Link>
      </div>

      <div className="mt-4 text-[12px] tracking-wide">
        <p className="mb-1">Monogram Tartan Denim Pants</p>
        <p className="font-medium">₹ 2,20,000.00</p>
      </div>
    </div>

    {/* Repeat Card */}
    <div className="group">
      <div className="relative bg-[#f5f5f5]">
       <Link to={'/clothdetails'}>
            <img
              src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"
              alt=""
              className="w-full md:h-105 h-80 object-cover"
            />
       </Link>
      </div>

      <div className="mt-4 text-[12px] tracking-wide">
        <p className="mb-1">Monogram Tartan Denim Pants</p>
        <p className="font-medium">₹ 2,20,000.00</p>
      </div>
    </div>

    {/* Card */}
     <div className="group">
      <div className="relative bg-[#f5f5f5]">
       <Link to={'/clothdetails'}>
            <img
              src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"
              alt=""
              className="w-full md:h-105 h-80 object-cover"
            />
       </Link>
      </div>

      <div className="mt-4 text-[12px] tracking-wide">
        <p className="mb-1">Monogram Tartan Denim Pants</p>
        <p className="font-medium">₹ 2,20,000.00</p>
      </div>
    </div>

    {/* Card */}
     <div className="group">
      <div className="relative bg-[#f5f5f5]">
       <Link to={'/clothdetails'}>
            <img
              src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"
              alt=""
              className="w-full md:h-105 h-80 object-cover"
            />
       </Link>
      </div>

      <div className="mt-4 text-[12px] tracking-wide">
        <p className="mb-1">Monogram Tartan Denim Pants</p>
        <p className="font-medium">₹ 2,20,000.00</p>
      </div>
    </div>

  </div>
</div>
<Footer/>
    </div>
  )
}

export default Cloth