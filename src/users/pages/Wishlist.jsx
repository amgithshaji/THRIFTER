import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import Footer from '@/component/Footer';
function Wishlist() {
  return (
      <div style={{ fontFamily: 'Raleway, sans-serif' }}>
                <Header/>
<div className="w-full bg-white">
  {/* Category buttons */}
  <div className="flex gap-4 px-10 pt-9 md:ms-20 md:text-[12px] text-[10px] text-bold tracking-[0.09em] uppercase md:mt-40 mt-25 ">
   <Link to={'/Cart'}>
        <button className="hover:font-semibold transition cursor-pointer ">
          SHOPPING BAG
        </button>
   </Link>
  <Link to={'/Wishlist'}>
        <button className=" hover:font-semibold transition cursor-pointer ">
          WISHLIST
        </button>
  </Link>
  
  </div>
    {/* alert */}
  <div className="mt-6  md:mx-25 mx-6  w-85 p-4">
  <p className="text-[12px] uppercase font-bold">
    amgith's List
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
            {/* <p className="text-gray-900 mt-1">
              M | BLACK
            </p> */}
    
            {/* price */}
            <p className="mt-1">
              ₹ 2,20,000.00
            </p>
    
          </div>

  <button className="mt-2 px-15 py-2 bg-white text-black text-[12px] hover:bg-black hover:text-white border border-black uppercase tracking-wide">
        add
      </button>
      
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
            {/* <p className="text-gray-900 mt-1">
              M | BLACK
            </p> */}
    
            {/* price */}
            <p className="mt-1">
              ₹ 2,20,000.00
            </p>
    
          </div>

  <button className="mt-2 px-15 py-2 bg-white text-black text-[12px] hover:bg-black hover:text-white border border-black uppercase tracking-wide">
        add
      </button>
      
    </div>  
    </div>
</div>



</div>
<Footer/>
    </div>
  )
}

export default Wishlist