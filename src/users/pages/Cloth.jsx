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
         <div key={cloth?._id} className="group">
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
  <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-md text-center px-6">

        {/* Icon / Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif"
            alt="unauthorized"
            className="w-52"
          />
        </div>

        {/* Headline */}
        <h1 className="text-2xl tracking-widest font-semibold mb-3">
          ACCESS RESTRICTED
        </h1>

        {/* Sub text */}
        <p className="text-sm text-gray-600 mb-6">
          Looks like you're trying to unlock a <span className="font-semibold">members-only thrift zone</span>.
        </p>

        {/* Login CTA */}
      <Link to={'/login'}>
          <button
            className="w-full border border-black py-2 text-sm tracking-widest hover:bg-black hover:text-white transition mb-3"
          >
            LOGIN TO CONTINUE
          </button>
      </Link>

        {/* Home CTA */}
        <Link to="/">
          <p className="text-xs underline tracking-wider">
            Return to Homepage
          </p>
        </Link>
      </div>
            </div>

      }
        <Footer/>

   </>
  )
}

export default Cloth