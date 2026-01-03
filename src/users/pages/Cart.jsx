import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import Footer from '@/component/Footer';

function Cart() {
  return (
    <div  style={{ fontFamily: 'Raleway, sans-serif' }} className='md:h-470 h-670' >
                <Header/>
<div className="w-full bg-white ">
  {/* Category buttons */}
  <div className="flex gap-4 px-10 pt-9 md:ms-20 md:text-[12px] text-[10px] text-bold tracking-[0.09em] uppercase md:mt-40 mt-25 ">
    <button className="hover:font-semibold transition cursor-pointer ">
      SHOPPING BAG
    </button>
  <Link to={'/Wishlist'}>
        <button className=" hover:font-semibold transition cursor-pointer ">
          WISHLIST
        </button>
  </Link>
  
  </div>
  {/* alert */}
  <div className="mt-6  md:mx-30 mx-6  bg-gray-100 border w-85 border-gray-200 p-4">
  <p className="text-[10px]  text-gray-700">
    The items in your basket are not reserved until you complete your purchase.
  </p>
</div>
{/* repeat card */}
<div className=" md:px-12 px-3 py-10">
  <div className="grid  md:grid-cols-4 md:gap-5 md:ms-9 ms-8 ">
 <div className="group  md:w-75 w-75  md:mt-7 ">
    
          {/* IMAGE + REMOVE ICON */}
          <div className="relative bg-[#f5f5f5]">
            
            {/* cross icon */}
            <button className="absolute top-3 right-3 z-20 cursor-pointer">
              <RxCross2 className='text-[18px]' />
            </button>
    
            <Link>
              <img
                src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"
                className="w-full md:h-105  object-cover"
                alt="product img"
              />
            </Link>
          </div>
    
          {/* TEXT AREA */}
          <div className="mt-3 text-[12px] tracking-wide">
    
            {/* product name with ... */}
            <p className="uppercase truncate">
              Monogram Tartan Denim Pants
            </p>
    
            {/* size + color */}
            <p className="text-gray-900 mt-1">
              M | BLACK
            </p>
    
            {/* price */}
            <p className="mt-1">
              ₹ 2,20,000.00
            </p>
    
            {/* quantity buttons */}
            <div className="flex items-center gap-6 mt-3">
              <button className="text-lg">−</button>
              <span>1</span>
              <button className="text-lg">+</button>
            </div>
          </div>


      
    </div>
    {/* repeat card */}
<div className="group  md:w-75 w-75  md:mt-7 ">
    
          {/* IMAGE + REMOVE ICON */}
          <div className="relative bg-[#f5f5f5]">
            
            {/* cross icon */}
            <button className="absolute top-3 right-3 z-20 cursor-pointer">
              <RxCross2 className='text-[18px]' />
            </button>
    
            <Link>
              <img
                src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"
                className="w-full md:h-105  object-cover"
                alt="product img"
              />
            </Link>
          </div>
    
          {/* TEXT AREA */}
          <div className="mt-3 text-[12px] tracking-wide">
    
            {/* product name with ... */}
            <p className="uppercase truncate">
              Monogram Tartan Denim Pants
            </p>
    
            {/* size + color */}
            <p className="text-gray-900 mt-1">
              M | BLACK
            </p>
    
            {/* price */}
            <p className="mt-1">
              ₹ 2,20,000.00
            </p>
    
            {/* quantity buttons */}
            <div className="flex items-center gap-6 mt-3">
              <button className="text-lg">−</button>
              <span>1</span>
              <button className="text-lg">+</button>
            </div>
          </div>


      
    </div>
    </div>
</div>
{/* FIXED BOTTOM TOTAL BAR */}
<div className="fixed bottom-0 left-0 w-full md:h-27 bg-white border-t border-gray-200 z-50">

  <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center justify-end  gap-4">

    {/* terms text */}
    {/* <p className="text-[10px] md:text-[11px] leading-relaxed text-gray-700 max-w-3xl">
      By continuing, I declare that I have read and accept the Purchase Conditions and understand Thrifter's Privacy and Cookie Policy.
    </p> */}

    {/* right side: total + button */}
    <div className="flex flex-col  md:items-end gap-2">

      <div className="flex items-center gap-6">
        <p className="text-[11px] tracking-wide uppercase">Total</p>
        <p className="text-[14px]">₹ 34,140.00</p>
      </div>

      <p className="text-[10px] text-gray-600 -mt-1">Including GST</p>
      <p className="text-[10px] text-gray-600 -mt-1">* excl Shipping cost</p>

   

    </div>
       <button className="mt-2 px-10 py-3 bg-black text-white text-[12px] hover:bg-white hover:text-black border border-black uppercase tracking-wide">
        Continue
      </button>
  </div>
</div>


</div>
<Footer/>
    </div>
  )
}

export default Cart