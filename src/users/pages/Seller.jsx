import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ShinyText from '@/components/ShinyText'
import { Link, useParams } from 'react-router-dom'
import Footer from '@/component/Footer'
import { viewClothAPI, viewStoreAPI } from '@/services/allAPI'
import serverURL from '@/services/serverURL'


function Seller() {

  const{sellermail} = useParams()
  // const sellermail = decodeURIComponent(sellermail)
const [store,setStore] = useState({})
    const images = store?.uploadimages || []

console.log(store);

useEffect(()=>{
getStoreDetails()
},[])

const getStoreDetails = async ()=>{
  const token = sessionStorage.getItem("token")
  if (token) {
           const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      const result = await viewStoreAPI(reqHeader,sellermail)
      if (result.status==200) {
        setStore(result.data)
        
      }else{
        console.log(result);
        

      }
    
  }
}

    return (
        <div>
            <Header />
  {
    store?

    <div>
              <div style={{ fontFamily: "Playfair Display, serif" }} className='text-center mt-30  text-5xl font-semibold ' >
                  <div>
                      <ShinyText
                          text={store?.storename}
                          speed={3}
                          className='custom-class uppercase'
                      />
                  </div>
  
              </div>
              <div className="w-full flex justify-center h-auto py-12">
  
                  <img
                      src={images[1] ? `${serverURL}/uploads/${images[0]}` : "https://static.zara.net/assets/public/187c/b270/10d84b96b1bb/1bd4e4d78831/03548264716-a6/03548264716-a6.jpg?ts=1766507794122&w=750"} alt="img" className="w-[93%] h-auto" />
  
              </div>
              {/* section 2 */}
              <div className='grid md:grid-cols-2 grid-cols-1 h-screen md:ms-35 ms-4 md:mb-40' >
                  <div className=''>
                      <img className=' md:ms- me-80 md:mt-30 mt-5  md:h-210 h-134 md:w-143  object-cover object-top relative ' src={images[1] ? `${serverURL}/uploads/${images[1]}` : "https://static.zara.net/assets/public/187c/b270/10d84b96b1bb/1bd4e4d78831/03548264716-a6/03548264716-a6.jpg?ts=1766507794122&w=750"} alt="no img" />
                    {/* <video
    className="md:mt-30 mt-5 md:h-210 h-134 md:w-143 object-cover object-top relative"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/seller1.mp4" type="video/mp4" />
  </video> */}
  
                  </div>
                  <div>
                      <div className=' md:mt-29  md:me-45 me-5'>
                          <div>
                              <p className='text-[20px] font-bold uppercase' >{store?.storetagline}</p>
                              <p className="mt-8 text-[20px] font-semibold uppercase leading-relaxed">
                                  {store?.storedetails}
                              </p>
                              <div className='tracking-tighter leading-tight'>
                                  <p className=" text-[19px] mt-5 ">
                                    {store?.storedescription}
                                  </p>
                                  {/* <p className=" text-[19px]  ">
                                      Featuring a round neck
                                  </p>
                                  <p className=" text-[19px]  ">
                                      extra long sleeves. Straight hem.
                                  </p> */}
                              </div>
  
                          </div>
                      </div>
                  </div>
              </div>
              {/* grid-2 */}
              <div className='grid md:grid-cols-2 grid-cols-1 md:ms-35 ms-4   ' >
                  <div className=''>
                      <img className=' me-80 md:mt-30   md:h-210 h-134 md:w-143  object-cover object-top relative ' src={images[1] ? `${serverURL}/uploads/${images[2]}` : "https://static.zara.net/assets/public/187c/b270/10d84b96b1bb/1bd4e4d78831/03548264716-a6/03548264716-a6.jpg?ts=1766507794122&w=750"} alt="no img" />
                  </div>
  
              </div>
              {/* grid-3 */}
              <div className="w-full flex justify-center  object-cover object-center py-12">
  
                  <img
                      src={images[1] ? `${serverURL}/uploads/${images[3]}` : "https://static.zara.net/assets/public/187c/b270/10d84b96b1bb/1bd4e4d78831/03548264716-a6/03548264716-a6.jpg?ts=1766507794122&w=750"} alt="img" className="w-[93%] " />
  
              </div>
  </div>
  :
    <div>
              <div style={{ fontFamily: "Playfair Display, serif" }} className='text-center mt-30  text-5xl font-semibold ' >
                  <div>
                      <ShinyText
                          text="thrifter"
                          speed={3}
                          className='custom-class uppercase'
                      />
                  </div>
  
              </div>
              <div className="w-full flex justify-center h-auto py-12">
  
                  <img
                      src="https://i.pinimg.com/736x/fc/b8/f7/fcb8f7c246d81ad733ecb907dd52a344.jpg" alt="img" className="w-[93%] h-auto" />
  
              </div>
              {/* section 2 */}
              <div className='grid md:grid-cols-2 grid-cols-1 h-screen md:ms-35 ms-4 md:mb-40' >
                  <div className=''>
                      {/* <img className=' md:ms- me-80 md:mt-30 mt-5  md:h-210 h-134 md:w-143  object-cover object-top relative ' src="https://static.zara.net/assets/public/0576/8d16/4f4e4fbab7a5/fcaa83ed2f9b/02298603712-e1/02298603712-e1.jpg?ts=1761823339325&w=750" alt="no img" /> */}
                    <video
    className="md:mt-30 mt-5 md:h-210 h-134 md:w-143 object-cover object-top relative"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/seller1.mp4" type="video/mp4" />
  </video>
  
                  </div>
                  <div>
                      <div className=' md:mt-29  md:me-45 me-5'>
                          <div>
                              <p className='text-[20px] font-bold uppercase' >thrifter® fashion</p>
                              <p className="mt-8 text-[20px] font-semibold uppercase leading-relaxed">
                                  MIRO is built on the idea that simplicity never goes out of style
                              </p>
                              <div className='tracking-tighter leading-tight'>
                                  <p className=" text-[19px] mt-5 ">
                                    T-shirt made in 100% Supima cotton yarn.
"
                                  </p>
                                  <p className=" text-[19px]  ">
                                      Featuring a round neck
                                  </p>
                                  <p className=" text-[19px]  ">
                                      extra long sleeves. Straight hem.
                                  </p>
                              </div>
  
                          </div>
                      </div>
                  </div>
              </div>
              {/* grid-2 */}
              <div className='grid md:grid-cols-2 grid-cols-1 md:ms-35 ms-4   ' >
                  <div className=''>
                      <img className=' me-80 md:mt-30   md:h-210 h-134 md:w-143  object-cover object-top relative ' src="https://static.zara.net/assets/public/0576/8d16/4f4e4fbab7a5/fcaa83ed2f9b/02298603712-e1/02298603712-e1.jpg?ts=1761823339325&w=750" alt="no img" />
                  </div>
  
              </div>
              {/* grid-3 */}
              <div className="w-full flex justify-center  object-cover object-center py-12">
  
                  <img
                      src="https://i.pinimg.com/736x/fc/b8/f7/fcb8f7c246d81ad733ecb907dd52a344.jpg" alt="img" className="w-[93%] " />
  
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
   <div className="group">
      <div className="relative bg-[#f5f5f5]">
       <Link to={'/clothdetails'}>
            <img
              src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"
              alt=""
              className="w-full md:h-105 h-80 object-cover"
            />
       </Link>
      </div>

      <div className="mt-4 text-[12px] tracking-wide">
        <p className="mb-1">Monogram Tartan Denim Pants</p>
        <p className="font-medium">₹ 2,20,000.00</p>
      </div>
    </div>

    {/* Repeat Card */}
    <div className="group">
      <div className="relative bg-[#f5f5f5]">
       <Link to={'/clothdetails'}>
            <img
              src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"
              alt=""
              className="w-full md:h-105 h-80 object-cover"
            />
       </Link>
      </div>

      <div className="mt-4 text-[12px] tracking-wide">
        <p className="mb-1">Monogram Tartan Denim Pants</p>
        <p className="font-medium">₹ 2,20,000.00</p>
      </div>
    </div>

    {/* Card */}
     <div className="group">
      <div className="relative bg-[#f5f5f5]">
       <Link to={'/clothdetails'}>
            <img
              src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"
              alt=""
              className="w-full md:h-105 h-80 object-cover"
            />
       </Link>
      </div>

      <div className="mt-4 text-[12px] tracking-wide">
        <p className="mb-1">Monogram Tartan Denim Pants</p>
        <p className="font-medium">₹ 2,20,000.00</p>
      </div>
    </div>

    {/* Card */}
     <div className="group">
      <div className="relative bg-[#f5f5f5]">
       <Link to={'/clothdetails'}>
            <img
              src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg"
              alt=""
              className="w-full md:h-105 h-80 object-cover"
            />
       </Link>
      </div>

      <div className="mt-4 text-[12px] tracking-wide">
        <p className="mb-1">Monogram Tartan Denim Pants</p>
        <p className="font-medium">₹ 2,20,000.00</p>
      </div>
    </div>

  </div>
</div>
<Footer/>
        </div>
    )
}

export default Seller