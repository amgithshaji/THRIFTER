import { Route, Routes, useLocation } from 'react-router-dom'

import './App.css'

import PreLoader from './component/PreLoader'
import { useContext, useEffect, useState } from 'react'
import Home from './users/pages/Home'
import ClothDetails from './users/pages/ClothDetails'
import Cloth from './users/pages/Cloth'
import Seller from './users/pages/Seller'
import Profile from './users/pages/Profile'
import Auth from './pages/Auth'
import Cart from './users/pages/Cart'
import Wishlist from './users/pages/Wishlist'
import AdminHome from './admin/pages/AdminHome'
import Chatbot from './component/Chatbot/Chatbot'
import AdminLayout from './admin/components/AdminLayout'
import ClothStatus from './component/ClothStatus'
import MyOrder from './component/MyOrder'
import AdminProfile from './admin/pages/AdminProfile'
import AdminResources from './admin/pages/AdminResources'
import PaymentSuccess from './users/pages/PaymentSuccess'
import PaymentFailed from './users/pages/PaymentFailed'
import Pnf from './pages/Pnf'
import About from './users/pages/About'
import { routeGuardContext } from './contextAPI/AuthContext'



function App() {
  const [loader, setLoader] = useState(true)
  const [fadeOutLoader, setFadeOutLoader] = useState(false)
  const {role,setAuthorized} = useContext(routeGuardContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOutLoader(true) // start fade-out
      setTimeout(() => setLoader(false), 700) // hide PreLoader after fade
    }, 3400)

    return () => clearTimeout(timer)
  }, [])

  const location = useLocation()

  const isAdminPage = location.pathname.startsWith('/admin')

  return (
  <>
      <Routes>
        <Route path="/" element={
            <div className="relative w-full h-screen">
              {loader ? 
                <div
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                    fadeOutLoader ? 'opacity-2' : 'opacity-100'
                  }`}
                >
                  <PreLoader />
                </div>
               : 
                <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-700 opacity-100">
                  <Home />
                </div>
              }
            </div>
          } />

        
          
             <Route path='/login' element={<Auth/>} />
            <Route path='/register' element={<Auth insideRegister ={true} />} />
            <Route path='/cloth' element={<Cloth/>} />
            <Route path='/about' element={<About/>} />
           <Route path='/cloth/:id/details' element={<ClothDetails/>} />
           <Route path='/cart' element={<Cart/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
           
          
        


         { 
          role=='user' &&
         <>
            <Route path='/seller/:sellermail/details' element={<Seller/>} />
            <Route path='/profile' element={<Profile/>} />
             
            <Route path='/clothStatus' element={<ClothStatus/>} />
            <Route path='/myorder' element={<MyOrder/>} />
            <Route path='/user/payment-success' element={<PaymentSuccess/>} />
            <Route path='/user/payment-failed' element={<PaymentFailed/>} />
         </>
          }


          
      {    
      role=="admin" &&
             <>
             <Route path="/admin/home" element={<AdminLayout  />}>
             <Route index element={<AdminHome />} />
             </Route>
             <Route path="/admin/resources" element={<AdminLayout />}>
             <Route index element={<AdminResources />} />
             </Route>
              <Route path="/admin/profile" element={<AdminLayout />}>
             <Route index element={<AdminProfile/>} />
             </Route>
             </>
      }
          <Route path='/*' element={<Pnf/>} />
      </Routes>
      {!loader && !isAdminPage && <Chatbot />}


  </>
  )
}

export default App
