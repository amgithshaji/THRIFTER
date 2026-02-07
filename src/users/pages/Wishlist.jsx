import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import Footer from '@/component/Footer';
import { wishlistContext } from '@/contextAPI/WishlistContext';
import serverURL from '@/services/serverURL';
import { cartContext } from '@/contextAPI/CartContext';
import { addToCartAPI } from '@/services/allAPI';





function Wishlist() {
  const { fetchCart } = useContext(cartContext)
  const [token,setToken] = useState("")
  console.log(token);
  


  const { wishlist, removeFromWishlist, fetchWishlist } = useContext(wishlistContext)

useEffect(()=>{
  if (sessionStorage.getItem("token")) {
    const userToken = sessionStorage.getItem("token")
    setToken(userToken)
    
  }

},[])

    useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}, [])  

useEffect(() => {
  fetchWishlist()
}, [])


const [userName,setUserName] = useState("")
useEffect(()=>{
  if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserName(user?.username)
  }

},[])

const handleAddToCartFromWishlist = async (clothId) => {
  const token = sessionStorage.getItem("token")

  if (token) {
        const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
  
  try {
    // 1️⃣ add item to cart
    await addToCartAPI(reqHeader, clothId)

    // 2️⃣ remove item from wishlist
    await removeFromWishlist(clothId)

    // 3️⃣ refresh cart badge / cart page
    fetchCart()
  } catch (err) {
    console.log(err)
  }
  }

 

}


  return (
      <div style={{ fontFamily: 'Raleway, sans-serif' }}>
                <Header/>
{
  token?
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
    {userName}'s List
  </p>
</div>

{/* repeat card */}
<div className="md:px-12 px-3 py-10 ">
  <div className="grid md:grid-cols-4 md:gap-5 md:ms-9 ms-8 ">

    {
      wishlist.length > 0 ? wishlist.map(item => (
        <div key={item._id} className="group md:w-75 w-75 md:mt-7">

          {/* IMAGE + REMOVE ICON */}
          <div className="relative bg-[#f5f5f5]">

            {/* ❌ REMOVE */}
         <button
  onClick={() => removeFromWishlist(item.clothId._id)}
  className="absolute top-3 right-3 z-20 cursor-pointer"
>
  <RxCross2 className="text-[18px]" />
</button>


            <Link to={`/cloth/${item.clothId._id}/details`}>
            <img
  src={
    item.clothId?.uploadimages?.length > 0
      ? `${serverURL}/uploads/${item.clothId.uploadimages[0]}`
      : "https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"
  }
  className="w-full md:h-105 object-cover"
  alt={item.clothId?.clothname}
/>

            </Link>
          </div>

          {/* TEXT AREA */}
          <div className="mt-3 text-[12px] tracking-wide">
            <p className="uppercase truncate">{item.clothId?.clothname}</p>
            <p className="mt-1">₹ {item.clothId?.price}</p>
          </div>

          <button onClick={() => handleAddToCartFromWishlist(item.clothId._id)} className="mt-2 mb-4 px-15 py-2 bg-white text-black text-[12px] hover:bg-black hover:text-white border border-black uppercase tracking-wide">
            add
          </button>

        </div>
      )) : (
        <p className="text-center text-sm tracking-widest mt-20">
          YOUR WISHLIST IS EMPTY
        </p>
      )
    }

  </div>
</div>




</div>
  :
       <div className="min-h-screen w-full flex items-center justify-center bg-white text-black antialiased">
    <div className="w-full max-w-lg px-6">
      {/* Minimalist Top Border Decoration */}
      <div className="w-12 h-px bg-black mx-auto mb-12"></div>
  
      <div className="text-center">
        {/* Editorial Header */}
        <h1 className="text-[10px] tracking-[0.4em] font-bold uppercase mb-4 text-neutral-400">
          Authentication Required
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-extralight tracking-tighter leading-none mb-8">
          WISHLIST <br /> 
          <span className="italic font-serif">Restricted Access</span>
        </h2>
  
        {/* Editorial Description */}
        <p className="text-[11px] uppercase tracking-[0.2em] leading-relaxed max-w-xs mx-auto mb-12 text-neutral-500">
          Please sign in to access the <span className="text-black font-semibold">members-only</span> thrift environment and view the current season.
        </p>
  
        {/* Zara-Style Action Stack */}
        <div className="flex flex-col space-y-3">
          <Link to="/login" className="w-full">
            <button className="w-full bg-black text-white py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#1a1a1a] transition-colors duration-500">
              Log In
            </button>
          </Link>
          
          <Link to="/" className="w-full">
            <button className="w-full border border-neutral-200 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:border-black transition-colors duration-500">
              Back to Home
            </button>
          </Link>
        </div>
  
        {/* Footer Branding */}
        <div className="mt-24">
          <p className="text-[10px] tracking-[0.5em] font-light uppercase opacity-30">
            Thrifter Studio © 2024
          </p>
        </div>
      </div>
    </div>
  </div>
}
<Footer/>
    </div>
  )
}

export default Wishlist