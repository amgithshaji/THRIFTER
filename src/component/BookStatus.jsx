import Header from '@/users/components/Header'
import React from 'react'
import Footer from './Footer'

function BookStatus() {
  return (
    <>
      <Header />

      {/* Page Wrapper */}
      <div className="px-4 md:px-12 py-10 mt-16">
        
        {/* Page Title */}
        <h1 className="text-xl tracking-widest uppercase mb-10">
          My Uploaded Clothes
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

         {/* Card 1 */}
<div className="border border-black p-4">
  <div className="w-full h-64 overflow-hidden bg-gray-50">
    <img
      src="https://static.zara.net/assets/public/9439/bc2c/9828427087f6/82c76bce19ac/02141683700-e1/02141683700-e1.jpg?ts=1767961678527&w=750"
      alt="cloth"
      className="w-full h-full object-contain"
    />
  </div>

  <div className="flex items-center justify-between mt-4">
    <p className="text-sm uppercase tracking-widest truncate">
      Oversized Denim Jacket
    </p>
    <span className="text-xs px-2 py-0.5 border border-black uppercase tracking-widest">
      Pending
    </span>
  </div>

  <p className="text-[18px] font-light uppercase mt-2">₹ 1,499</p>
  <p className="text-[10px] tracking-widest uppercase mt-1">
    MRP incl. all taxes
  </p>

  <hr className="border-black my-4" />

  <div className="space-y-2 text-[11px] tracking-widest uppercase">
    <p>Blue | TRF-23984</p>
    <p>Size: <span className="font-semibold">M</span></p>
  </div>

  <p className="mt-4 text-[11px] tracking-widest uppercase">
    Waiting for admin approval
  </p>

  {/* Delete Button */}
  <button className="w-full mt-6 border border-black py-2 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition">
    Delete
  </button>
</div>


       

        </div>
      </div>

      <Footer />
    </>
  )
}

export default BookStatus
