import React from 'react'
import Header from '../components/Header'
import Footer from '@/component/Footer'
import ShinyText from '@/components/ShinyText'



function Profile() {
  return (
    <div>
        <Header/>
       
            <div className="w-full flex justify-center h-auto py-12 mt-20">

                <img
                    src="https://i.pinimg.com/736x/fc/b8/f7/fcb8f7c246d81ad733ecb907dd52a344.jpg" alt="img" className="w-[93%] h-100 object-cover object-top" />

            </div>
                 <div style={{ fontFamily: "Playfair Display, serif" }} className='text-center mt-1 mb-8  text-5xl font-semibold ' >
                <div>
                    <ShinyText
                        text="MIRO"
                        speed={3}
                        className='custom-class'
                    />
                </div>

            </div>
    
      {/*  Profile + Orders Cards Section */}
      <div  style={{ fontFamily: 'Raleway, sans-serif' }}  className="w-full flex justify-center ">
        <div className="w-[93%] grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* My Profile Card */}
          <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">My Profile</h2>
            <p className="mb-9 text-[13px]">Login: amgithshaji410@gmail.com</p>

            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              Edit My Profile
            </button>
            {/* <ProfileEdit/> */}
          </div>

          {/* My store Card */}
            <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">My store</h2>
            <p className="mb-9 text-[13px]">Store: miro</p>

            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              Edit My Store
            </button>
          </div> 
          {/* my cart */}
           {/* <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">My cart</h2>

            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              View My Cart
            </button>
          </div> */}
          {/* my wishlist */}
            {/* <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">My wishlist</h2>

            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              View My Wishlist
            </button>
          </div> */}
             {/* sell cloth */}
           <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">Add Cloth</h2>
            {/* <p className="mb-9 text-[13px]">Add cloth details</p> */}

            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              Add Cloth
            </button>
          </div>
          {/* cloth status */}
            <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">cloth status</h2>
            {/* <p className="mb-9 text-[13px]">Login: amgithshaji410@gmail.com</p> */}

            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              Check Status
            </button>
          </div>
             {/* my order */}
           <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">My order</h2>
            <p className="mb-9 text-[13px]">Login: amgithshaji410@gmail.com</p>

            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              Start Shopping
            </button>
          </div>
          {/* my wishlist */}
            <div className="bg-white   p-8  transition-all ">
            {/* <h2 className="text-1xl font-semibold  mb-6 uppercase">My wishlist</h2> */}
            {/* <p className="mb-9 text-[13px]">Login: amgithshaji410@gmail.com</p> */}

            <button className="w-50 py-2 text-sm md:ms-116 ms-13  border border-black bg-black text-white hover:bg-white hover:text-black hover:opacity-80 transition">
              Log Out
            </button>
          </div>

        </div>
                </div>

        <Footer/>
    </div>
  )
}

export default Profile