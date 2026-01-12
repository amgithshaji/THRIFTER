import Header from '@/users/components/Header'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { getAllUserClothAPI, removeClothAPI } from '@/services/allAPI';
import serverURL from '@/services/serverURL';
import { Link } from 'react-router-dom';

function ClothStatus() {
const[userCloth,setUserCloth] = useState([])
console.log(userCloth);

useEffect(()=>{
getUserUploadcloth()
},[])

    useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}, [])

  const getUserUploadcloth = async ()=>{
const token = sessionStorage.getItem("token")
if (token) {
  const reqHeader = {
    "Authorization" : `Bearer ${token}`
  }
  const result = await getAllUserClothAPI(reqHeader)
  if (result.status==200) {
    setUserCloth(result.data)
  }else{
    console.log(result);
    
  }
}
  }
const deleteCloth = async (id)=>{
  const token = sessionStorage.getItem("token")
  if (token) {
      const reqHeader = {
    "Authorization" : `Bearer ${token}`
  }
  const result = await removeClothAPI(id,reqHeader)
  if (result.status==200) {
    getUserUploadcloth()
    
  }else{
    console.log(result);
    
  }
  }
}

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
{
  userCloth?.length>0?
  userCloth?.map(cloth=>(
<div className="border border-black p-4">
  <div className="w-full h-64 overflow-hidden bg-gray-50">
 
 <img key={cloth} src={cloth?.uploadimages?.length>0?`${serverURL}/uploads/${cloth.uploadimages[0]}`:"https://static.zara.net/assets/public/04a8/bba9/e2594c11bf63/bdd8182b57c9/05536259737-a3/05536259737-a3.jpg?ts=1767082163651&w=877"} alt={cloth?.clothname} className="w-full h-full object-contain"/>

  </div>

  <div className="flex items-center justify-between mt-4">
    <p className="text-sm uppercase tracking-widest truncate">
      {cloth?.clothname}
    </p>
    {
      cloth?.status=="pending"?
       <span className="text-xs px-2 py-0.5 border border-black uppercase tracking-widest">
      Pending
    </span>
    :
       cloth?.status=="approved"?
       <span className="text-xs px-2 py-0.5 border border-black uppercase tracking-widest">
      Approved
    </span>
    :
       <span className="text-xs px-2 py-0.5 border border-black uppercase tracking-widest">
      Sold
    </span>
    }




   
  </div>

  <p className="text-[18px] font-light uppercase mt-2">₹ {cloth?.price}</p>
  <p className="text-[10px] tracking-widest uppercase mt-1">
    MRP incl. all taxes
  </p>

  <hr className="border-black my-4" />

  <div className="space-y-2 text-[11px] tracking-widest uppercase">
    <p>{cloth?.clothcolor} | {cloth?.productid}</p>
    <p>Size: <span className="font-semibold">{cloth?.size}</span></p>
  </div>

  

 {
      cloth?.status=="pending"?
     <p className="mt-4 text-[11px] tracking-widest uppercase">
    Waiting for admin approval
  </p>
    :
       cloth?.status=="approved"?
      <p className="mt-4 text-[11px] tracking-widest uppercase">
    Now live on the store

  </p>
    :
    <p className="mt-4 text-[11px] tracking-widest uppercase">
     This item has been sold
  </p>
    }


  {/* Delete Button */}
  <button onClick={()=>(deleteCloth(cloth?._id))} className="w-full mt-6 border border-black py-2 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition">
    Delete
  </button>
</div>
  ))
  :
       <div className="col-span-full flex flex-col items-center justify-center py-24 border  border-black">
  <p className="text-sm tracking-widest uppercase mb-2">
    No uploads yet
  </p>

  <p className="text-xs tracking-widest uppercase text-gray-500 mb-6 text-center max-w-xs">
    Your thrift journey starts here. Upload your first piece and let it find a new home.
  </p>

  <Link to={'/cloth'} className="border border-black px-6 py-2 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition">
    Upload Your First Item
  </Link>
</div>
}


       

        </div>
      </div>

      <Footer />
    </>
  )
}

export default ClothStatus
