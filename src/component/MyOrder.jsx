import Header from '@/users/components/Header'
import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function MyOrder() {
  return (
    <>
    <Header/>
<div className="px-4 md:px-12 py-10 mt-16">

  {/* Page Title */}
  <h1 className="text-xl tracking-widest uppercase mb-12">
    Purchase History
  </h1>

  {/* Orders */}
  <div className="space-y-10">

    {/* Order Row */}
    <div className="border border-black py-6 flex flex-col md:flex-row gap-6">

      {/* Image */}
      <div className="w-full md:w-56 h-72 bg-gray-50 flex items-center justify-center">
        <img
          src="https://static.zara.net/assets/public/04a8/bba9/e2594c11bf63/bdd8182b57c9/05536259737-a3/05536259737-a3.jpg"
          alt="Product"
          className="h-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between ms-3">

        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm uppercase tracking-widest">
              Vintage Denim Jacket
            </p>
            <span className="text-xs uppercase tracking-widest me-3">
              Delivered
            </span>
          </div>

          <p className="text-lg font-light uppercase">
            ₹ 1,499
          </p>

          <div className="mt-4 space-y-2 text-xs tracking-widest uppercase text-gray-600">
            <p>Blue · Size M</p>
            <p>Cloth ID: THRFT-09231</p>
            <p>Ordered on: 12 Jan 2026</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-xs tracking-widest uppercase">
            Delivered. Loved once, re-loved.
          </p>

          <button className="border me-3 border-black px-6 py-2 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition">
            View Order
          </button>
        </div>

      </div>
    </div>

    {/* Empty State */}
    <div className="flex flex-col items-center justify-center py-28 border-t border-b border-black">
      <p className="text-sm tracking-widest uppercase mb-2">
        No purchases yet
      </p>

      <p className="text-xs tracking-widest uppercase text-gray-500 mb-6 text-center max-w-xs">
        Your fashion history will appear here. Start thrifting something timeless.
      </p>

    <Link to={'/cloth'}>
          <button className="border border-black px-6 py-2 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition">
            Start Thrifting
          </button>
    </Link>
    </div>

  </div>
</div>

    <Footer/>
    </>
  )
}

export default MyOrder