import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '@/component/Footer'
import { IoHeartOutline,IoHeart } from "react-icons/io5";
import { getClothAPI } from '@/services/allAPI';
import serverURL from '@/services/serverURL';
import { searchContext } from '@/contextAPI/ShareContext';
import { wishlistContext } from '@/contextAPI/WishlistContext';


function Cloth() {
  const [selectedGender, setSelectedGender] = useState("all")

  const { searchKey, setSearchkey } = useContext(searchContext)
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(wishlistContext)

  const [token,setToken] = useState("")
  const [allClothes,setAllClothes] = useState([])
  console.log(allClothes);

const filteredClothes =
  selectedGender === "all"? allClothes: allClothes.filter(cloth => cloth.gender?.toLowerCase() === selectedGender)


  useEffect(()=>{
  if (sessionStorage.getItem("token")){
    const usertoken = sessionStorage.getItem("token")
    setToken(usertoken)
    getAllClothes(usertoken)
    
  }

},[searchKey])

const getAllClothes = async (token)=>{
  const reqHeader = {
  "Authorization" : `Bearer ${token}`
}
const result = await getClothAPI(reqHeader,searchKey)
if (result.status==200){
  setAllClothes(result.data)

}else{
  console.log(result);
  
  
}


}






  return (
    
   <>
           <Header insideclothsearch={true} />

      {
        token?
        <div  style={{ fontFamily: 'Raleway, sans-serif' }}>
  <div className="w-full bg-white">
    {/* Category buttons */}
    {/* <div className="flex gap-4 px-10 pt-9 md:ms-20 text-[12px] text-bold tracking-[0.09em] uppercase md:mt-40 mt-25 ">
      <button className="hover:font-semibold transition cursor-pointer ">
        WOMAN
      </button>
      <button className=" hover:font-semibold transition cursor-pointer ">
        MAN
      </button>
    
    </div> */}
    <div className="flex gap-4 px-10 pt-9 md:ms-20 text-[12px] tracking-[0.09em] uppercase md:mt-40 mt-25">

  <button
    onClick={() => setSelectedGender("women")}
    className={`cursor-pointer hover:font-semibold transition ${
      selectedGender === "women" ? "font-semibold " : ""
    }`}
  >
    WOMAN
  </button>

  <button
    onClick={() => setSelectedGender("men")}
    className={`cursor-pointer hover:font-semibold transition ${
      selectedGender === "men" ? "font-semibold " : ""
    }`}
  >
    MAN
  </button>

  <button
    onClick={() => setSelectedGender("all")}
    className={`cursor-pointer hover:font-semibold transition ${
      selectedGender === "all" ? "font-semibold " : ""
    }`}
  >
    ALL
  </button>

</div>

  
    {/* Search bar */}
    <div className="h-[20vh] flex items-center justify-center">
      <div className="w-full max-w-2xl px-8">
        <input value={searchKey} onChange={e=>setSearchkey(e.target.value)} type="text" placeholder="WHAT ARE YOU LOOKING FOR?" className="w-full text-center bg-transparent outline-none text-[11px] tracking-[0.2em] uppercase placeholder-black"/>
        <div className="mt-3 h-px w-full bg-gray-300"></div>
      </div>
    </div>
  </div>
  {/* section */}
  <div className=" md:px-12 py-10">
    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-3 md:gap-y-16">
  
      {/* Card */}
    {
      filteredClothes?.length>0?
      filteredClothes?.map(cloth=>(
         <div key={cloth?._id} className="group" hidden={cloth?.status!='approved'}>
        <div  className="relative bg-[#f5f5f5]">
   

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
              <img key={cloth} src={cloth?.uploadimages?.length>0?`${serverURL}/uploads/${cloth.uploadimages[0]}`:"https://static.zara.net/assets/public/04a8/bba9/e2594c11bf63/bdd8182b57c9/05536259737-a3/05536259737-a3.jpg?ts=1767082163651&w=877"} alt={cloth?.clothname} className="w-full md:h-105 h-80 object-cover"/>
         </Link>
        </div>
  
        <div className="mt-4 text-[12px] tracking-wide uppercase">
          <p className="mb-1">{cloth?.clothname}</p>
          <p className="font-medium">₹ {cloth?.price}</p>
        </div>
      </div>
      ))
      :
<div className="col-span-full w-full min-h-[60vh] flex flex-col justify-center items-center text-center">
  <p className="text-xs tracking-[0.3em] text-gray-400 mb-3">NO RESULTS</p>
  <h1 className="text-3xl font-light tracking-wide mb-4">This thrift has no finds</h1>
  <p className="text-sm text-gray-500 mb-6">Try searching something else or check back later — new drops happen often.</p>
  <a href="/cloth" className="underline text-sm tracking-wide hover:opacity-70">Browse all clothes</a>
</div>



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
        <Footer/>

   </>
  )
}

export default Cloth