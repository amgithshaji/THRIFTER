import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link} from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import Footer from '@/component/Footer';
import { cartContext } from '@/contextAPI/CartContext';
import serverURL from '@/services/serverURL';
import { addToCartAPI, decreaseCartAPI, purchaseClothAPI, removeCartAPI } from '@/services/allAPI'
import {loadStripe} from '@stripe/stripe-js';









function Cart() {
  const { cartItems, fetchCart } = useContext(cartContext)
  const[token,setToken] = useState("")
  // console.log(token);
  
  
  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      const usertoken = sessionStorage.getItem("token")
      setToken(usertoken)
      
    }
    

  },[])
  


useEffect(() => {
  fetchCart()
}, [])

   useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}, [])  
// delete cart item
const handleRemove = async (clothId) => {
  const token = sessionStorage.getItem("token")

     const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }

  try {
    await removeCartAPI(reqHeader, clothId)
    fetchCart() // 🔥 refresh cart after delete
  } catch (err) {
    console.log(err)
  }
}
// const totalPrice = cartItems.reduce(
//   (sum, item) => sum + item.clothId.price * item.quantity,
//   0
// )

const totalPrice = cartItems.reduce((sum, item) => {
  if (!item?.clothId?.price) return sum
  return sum + item.clothId.price * item.quantity
}, 0)


// increase quantity (+)
const handleIncrease = async (clothId) => {
  const token = sessionStorage.getItem("token")

    const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }

  try {
    await addToCartAPI(reqHeader, clothId)
    fetchCart()
  } catch (err) {
    console.log(err)
  }
}

// decrease quantity (-)
const handleDecrease = async (clothId, quantity) => {
  const token = sessionStorage.getItem("token")

    const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }

  try {
    if (quantity > 1) {
      await decreaseCartAPI(reqHeader, clothId)
    } else {
      // quantity === 1 → remove item
      await removeCartAPI(reqHeader, clothId)
    }
    fetchCart()
  } catch (err) {
    console.log(err)
  }
}

// const makePayment = async ()=>{
// // to view stripe payment window in browser
// const stripe = await loadStripe('pk_test_51SkJCxAYqik1Z0w0Z9ozfyHlnSr76lwAR7N237eM4zUXI2Y6TV8jKqd4sNcZQaP9UAsFRRjhReOyFY5F1QwDrruU00vCHwonzC');
// // api call for checkout
// const token = sessionStorage.getItem("token")
// if (token) {
//   const reqHeader ={
//    "Authorization" : `Bearer ${token}`
//   }
//   const result = await purchaseClothAPI(id,reqHeader)
//   if (result.status==200) {
//     const {checkoutURL} = result.data
//     window.location.href = checkoutURL
    
//   }else{
//     console.log(result);
    
//   }
  
// }
// }

const makePayment = async () => {
  // load stripe
  const stripe = await loadStripe(
    'pk_test_51SkJCxAYqik1Z0w0Z9ozfyHlnSr76lwAR7N237eM4zUXI2Y6TV8jKqd4sNcZQaP9UAsFRRjhReOyFY5F1QwDrruU00vCHwonzC'
  )

  const token = sessionStorage.getItem("token")
  if (!token) return

  const reqHeader = {
    "Authorization": `Bearer ${token}`
  }

  try {
    // ✅ NO id here
    const result = await purchaseClothAPI(reqHeader)

    if (result.status === 200) {
      const { checkoutURL } = result.data
      window.location.href = checkoutURL
    } else {
      console.log(result)
    }
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div  style={{ fontFamily: 'Raleway, sans-serif' }} className='md:h-470 h-530 ' >
                <Header/>
{
  token?
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
{/*  card */}
<div className=" md:px-12 px-3 py-10">
  <div className="grid  md:grid-cols-4 md:gap-5 md:ms-9 ms-8 ">
 {
  cartItems?.length>0?
  cartItems.map(item=>(
    <div key={item._id} className="group  md:w-75 w-75  md:mt-7 ">
    
          {/* IMAGE + REMOVE ICON */}
          <div className="relative bg-[#f5f5f5]">
            
            {/* cross icon */}
            <button onClick={() => handleRemove(item.clothId._id)}
 className="absolute top-3 right-3 z-20 cursor-pointer">
              <RxCross2 className='text-[18px]' />
            </button>
    
            <Link>
              <img
                src={ item.clothId?.uploadimages?.length > 0
                      ? `${serverURL}/uploads/${item.clothId.uploadimages[0]}`:"https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"}
                className="w-full md:h-105  object-cover"
                alt="product img"
              />
            </Link>
          </div>
    
          {/* TEXT AREA */}
          <div className="mt-3 text-[12px] tracking-wide">
    
            {/* product name with ... */}
            <p className="uppercase truncate">
              {item.clothId?.clothname}
            </p>
    
            {/* size + color */}
            <p className="text-gray-900 mt-1 uppercase">
           {item.clothId?.size} | {item.clothId?.clothcolor}

            </p>
    
            {/* price */}
            <p className="mt-1">
              ₹ {item.clothId?.price}
            </p>
    
            {/* quantity buttons */}
            <div className="flex items-center gap-6 mt-3">
              <button onClick={() => handleDecrease(item.clothId._id, item.quantity)} className="text-lg">−</button>
              <span>{item.quantity}</span>
              <button  onClick={() => handleIncrease(item.clothId._id)} className="text-lg">+</button>
            </div>
          </div>


      
    </div>
  ))
  :
            <p className="text-center text-sm tracking-widest mt-20">
          YOUR CART IS EMPTY
        </p>

 }

    </div>
</div>
{/* FIXED BOTTOM TOTAL BAR */}
<div className="fixed bottom-0 left-0 w-full md:h-27 bg-white border-t border-gray-200 z-50 ">

  <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center justify-end  gap-4 ">

    {/* terms text */}
    {/* <p className="text-[10px] md:text-[11px] leading-relaxed text-gray-700 max-w-3xl">
      By continuing, I declare that I have read and accept the Purchase Conditions and understand Thrifter's Privacy and Cookie Policy.
    </p> */}

    {/* right side: total + button */}
    <div className="flex flex-col  md:items-end gap-2">

      <div className="flex items-center gap-6">
        <p className="text-[11px] tracking-wide uppercase">Total</p>
        <p className="text-[14px]">₹ {totalPrice}</p>
      </div>

      <p className="text-[10px] text-gray-600 -mt-1">Including GST</p>
      <p className="text-[10px] text-gray-600 -mt-1">* excl Shipping cost</p>

   

    </div>
       <button onClick={makePayment} className="mt-2 px-10 py-3 bg-black text-white text-[12px] hover:bg-white hover:text-black border border-black uppercase tracking-wide">
        Continue
      </button>
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
          CART <br /> 
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

export default Cart