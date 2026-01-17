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


  const { wishlist, removeFromWishlist, fetchWishlist } = useContext(wishlistContext)

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
<Footer/>
    </div>
  )
}

export default Wishlist