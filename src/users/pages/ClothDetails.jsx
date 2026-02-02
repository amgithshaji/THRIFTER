import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import Footer from '@/component/Footer'
import { getClothDetailsAPI, viewClothAPI } from '@/services/allAPI'
import serverURL from '@/services/serverURL'
import ShinyText from '@/components/ShinyText'
import { IoHeartOutline,IoHeart } from "react-icons/io5";
import { wishlistContext } from '@/contextAPI/WishlistContext'
import { cartContext } from '@/contextAPI/CartContext'
import { addToCartAPI } from '@/services/allAPI'








function ClothDetails() {
    const { wishlist, addToWishlist, removeFromWishlist } = useContext(wishlistContext)
  
    const{id} = useParams()
    // console.log(id);
    const { fetchCart } = useContext(cartContext)


      const [token,setToken] = useState("")
    
      useEffect(()=>{
      if (sessionStorage.getItem("token")){
        const usertoken = sessionStorage.getItem("token")
        setToken(usertoken)
        getClothDetails()
        getClothDetailsCloth()
      }
    
    },[id])

    useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}, [id])

      
    const [clothDetailsCloth,setClothDetailsCloth]= useState([])
    console.log(clothDetailsCloth);
    
     

    const [cloth,setCloth] = useState({})
    // console.log(cloth);

    const images = cloth?.uploadimages || []


    // useEffect=(()=>{
    // getClothDetails()
    // },[])

    const getClothDetails = async ()=>{
    const token = sessionStorage.getItem("token")
     if (token) {
          const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      const result = await viewClothAPI(reqHeader,id)
      if (result.status==200) {
        setCloth(result.data)
        
      }else{
        console.log(result);
        
      }

     }
    }
    

    const  getClothDetailsCloth = async ()=>{
    const token = sessionStorage.getItem("token")
    if (token) {
         const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      const result = await getClothDetailsAPI(reqHeader,id)
      if (result.status==200) {
        setClothDetailsCloth(result.data)
        
      }else{
      console.log(result);
      
      }
    }
   
    }
   const handleAddToCart = async () => {
  const token = sessionStorage.getItem("token")

  if (token) {
       const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      
  try {
    await addToCartAPI(reqHeader, cloth?._id)
    fetchCart() 
    alert("Item added to cart")
  } catch (err) {
    console.log(err)
  }
}
  }

 



    return (
        <div>
            <Header/>
        {
            token?

                <div style={{ fontFamily: 'Raleway, sans-serif' }}>
                {/* card 1 */}
                <div className='grid md:grid-cols-2 grid-cols-1 h-screen md:ms-55 ms-4 gap-30' >
                    <div>
                        <img className=' me-30 md:mt-1 mt-25  md:h-210 h-130 md:w-143 w-89 object-cover object-top relative ' src={images[1] ? `${serverURL}/uploads/${images[1]}` : ""} alt="no img" />
                    </div>
                    <div>
                        <div className=' md:mt-50  md:me-45 me-5'>
                            <div>
                            <div className="mt-4 text-[18px] uppercase font-light">

  {/* name + heart */}
  <div className="flex items-center justify-between mb-1">
    <p className="truncate">{cloth?.clothname}</p>

    <button
      onClick={(e) => {
        e.stopPropagation()

        const isWishlisted = wishlist.some(
          item => item.clothId?._id === cloth._id
        )

        isWishlisted
          ? removeFromWishlist(cloth._id)
          : addToWishlist(cloth._id)
      }}
      className="cursor-pointer"
    >
      {
        wishlist.some(item => item.clothId?._id === cloth._id)
          ? <IoHeart className="text-red-500 text-[18px]" />
          : <IoHeartOutline className="text-[18px]" />
      }
    </button>
  </div>

  <p className="text-[18px] font-light uppercase">₹ {cloth?.price}</p>
</div>
{/* 
                                <p className='text-[18px] font-light uppercase' >{cloth?.clothname}</p>
                                <p className='text-[18px] font-light uppercase' >₹ {cloth?.price}</p> */}
                                <p className='text-[10px] font-light mt-1 tracking-[1px] uppercase' >MRP INCL. ALL TAXES</p>
                                <hr className='mt-10  border-black' />
                                <p className='text-[11px] font-base mt-9 uppercase' >{cloth?.clothcolor} | {cloth?.productid} </p>
                                <button onClick={handleAddToCart} className="w-full border mt-8 border-black py-3 text-xs tracking-widest uppercase hover:text-gray-700 transition cursor-pointer">
                                    ADD
                                </button>

                                <p className="mt-8 text-[13px] tracking-widest uppercase leading-relaxed">
                                    {cloth?.clothdetails}
                                </p>
                                <p className=" text-[13px] mt-6 leading-relaxed">
                                   {cloth?.clothdescription}
                                </p>
                                <div className="space-y-4 text-xs tracking-widest uppercase mt-6">
                                    <p>Product size available</p>
                                    <p className='font-semibold text-[13px]  ' >{cloth?.size}</p>
                                    <p>Exchange,return available</p>
                                    <Link to={`/seller/${cloth?.sellermail}/details`} className="relative z-50" >
                                        <p className='uppercase cursor-pointer ' >seller details</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* grid 2 */}
                <div className='grid md:grid-cols-2 grid-cols-1 mt-5  md:ms-7 ms-4 md:gap-30 gap-1' >
                    <div className=' md:mt-50 mt-100  md:me-45 me-5'>
                        <div className="md:ms-25 text-[11px] tracking-widest  md:mt-180 mt-10">
                            <p className='uppercase' >Outershell</p>
                            <p className='uppercase' >main fabric</p>
                            <p className='' >{cloth?.mainfabric}</p>
                            {/* <p className='' >5% elastane</p> */}

                            <p className='uppercase' >secondary fabric</p>
                            <p className='' >{cloth?.secondaryfabric}</p>
                        </div>
                    </div>
                    {/* img */}
                    <img className=' md:me-70 me-80 md:mt-50   md:h-210 h-134 md:w-143  object-cover object-top relative ' src={images[1] ? `${serverURL}/uploads/${images[2]}` : "https://static.zara.net/assets/public/6ced/a7fb/ee4f4e068ddb/ba204696d866/03548264716-p/03548264716-p.jpg?ts=1766507794276&w=1024"} alt="no img" />
                </div>
                {/* grid 3 */}
                <div className='grid md:grid-cols-2 grid-cols-1   mt-5 ms-4 md:gap-0 gap-5' >
                    <div className=''>
                        <img className=' md:ms-20 me-80 md:mt-50   md:h-210 h-134 md:w-143  object-cover object-top relative ' src={images[1] ? `${serverURL}/uploads/${images[3]}` : "https://static.zara.net/assets/public/6ced/a7fb/ee4f4e068ddb/ba204696d866/03548264716-p/03548264716-p.jpg?ts=1766507794276&w=1024"} alt="no img" />
                    </div>
                    {/* img */}
                    <img className=' md:ms-5 me-80 md:mt-50  md:h-210 h-134 md:w-143  object-cover object-top relative ' src={images[1] ? `${serverURL}/uploads/${images[4]}` : "https://static.zara.net/assets/public/6ced/a7fb/ee4f4e068ddb/ba204696d866/03548264716-p/03548264716-p.jpg?ts=1766507794276&w=1024"}
 alt="no img" />
                </div>
                {/* grid-4 */}
                <div className='grid md:grid-cols-2 grid-cols-1    ms-4 md:gap-0 gap-5' >
                    <div className=''>
                        <img className=' md:ms-20 me-80 md:mt-30 mt-5   md:h-210 h-134 md:w-143  object-cover object-top relative ' src={images[1] ? `${serverURL}/uploads/${images[5]}` : "https://static.zara.net/assets/public/6ced/a7fb/ee4f4e068ddb/ba204696d866/03548264716-p/03548264716-p.jpg?ts=1766507794276&w=1024"}alt="no img" />
                    </div>
                    {/* img */}
                    <img className=' md:ms-5 me-80 md:mt-30  md:h-210 h-134 md:w-143  object-cover object-top relative ' src={images[1] ? `${serverURL}/uploads/${images[6]}` : "https://static.zara.net/assets/public/6ced/a7fb/ee4f4e068ddb/ba204696d866/03548264716-p/03548264716-p.jpg?ts=1766507794276&w=1024"} alt="no img" />
                </div>
                {/* grid 5 */}
                <div className='grid md:grid-cols-2 grid-cols-1    ms-4 md:gap-0 gap-5' >
                    <div className=''>
                        <img className=' md:ms-20 me-80 md:mt-30 mt-5  md:h-210 h-134 md:w-143  object-cover object-top relative ' src={images[1] ? `${serverURL}/uploads/${images[0]}` : "https://static.zara.net/assets/public/6ced/a7fb/ee4f4e068ddb/ba204696d866/03548264716-p/03548264716-p.jpg?ts=1766507794276&w=1024"} alt="no img" />
                    </div>
                    {/* img */}

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
                        COLLECTIONS <br /> 
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
                    {/* section 4 */}
                    
  <div style={{ fontFamily: 'Raleway, sans-serif' }} className='ms-20 mt-10  text-[16px] font-light ' >
                <div>
                    <ShinyText
                        text="you may be interested in"
                        speed={3}
                        className='custom-class uppercase'
                    />
                </div>

            </div>
{/* cards */}
<div className=" md:px-12 py-10">
  <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-3 md:gap-y-16">

       {/* Card */}
    {
      clothDetailsCloth?.length>0?
      clothDetailsCloth?.map(cloth=>(
         <div key={cloth?._id} className="group" hidden={cloth?.status!='approved'}>
        <div  className="relative bg-[#f5f5f5]">
          {/* <button className="absolute top-4 right-4 z-20 cursor-pointer">
        <span className="text-lg filter drop-shadow-sm"> <IoHeartOutline /></span>
      </button> */}
       <button
  onClick={(e) => {
    e.stopPropagation()

    const isWishlisted = wishlist.some(
      item => item.clothId?._id === cloth._id
    )

    isWishlisted
      ? removeFromWishlist(cloth._id) // ❤️ → 🤍 (DB delete)
      : addToWishlist(cloth._id)      // 🤍 → ❤️ (DB add)
  }}
  className="absolute top-4 right-4 z-20 cursor-pointer"
>
  {
    wishlist.some(item => item.clothId?._id === cloth._id)
      ? <IoHeart className="text-red-500" />
      : <IoHeartOutline />
  }
</button>
          
         <Link to={`/cloth/${cloth?._id}/details`}>
              <img key={cloth} src={cloth?.uploadimages?.length>0?`${serverURL}/uploads/${cloth.uploadimages[0]}`:"https://static.zara.net/assets/public/04a8/bba9/e2594c11bf63/bdd8182b57c9/05536259737-a3/05536259737-a3.jpg?ts=1767082163651&w=877"} alt={cloth?.clothname} className="w-full md:h-105 h-80 object-cover" />
         </Link>
        </div>
  
        <div className="mt-4 text-[12px] tracking-wide">
          <p className="mb-1">{cloth?.clothname}</p>
          <p className="font-medium">₹ {cloth?.price}</p>
        </div>
      </div>
      ))
      :
      
      <>
{/* Minimalist Empty State */}
<div className="flex flex-col items-center justify-center w-full py-20 text-center border-t border-neutral-100 mt-10" style={{ gridColumn: '1 / -1' }}>
  <div className="space-y-4">
    <p className="text-xs tracking-widest uppercase text-neutral-400 font-bold">
      Selection Unavailable
    </p>
    
    <h3 className="text-2xl font-light tracking-tight text-neutral-800">
      The curated list is currently empty.
    </h3>
    
    <div className="w-8 h-px bg-neutral-300 mx-auto mt-4"></div>
    
    <p className="text-xs tracking-widest uppercase text-neutral-400 mt-4">
      Please check back later for new arrivals
    </p>
  </div>
</div>
      </>

    }
  

 

  </div>
</div>
            <Footer/>
        </div>
    )
}

export default ClothDetails