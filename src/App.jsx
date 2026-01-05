import { Route, Routes } from 'react-router-dom'

import './App.css'

import PreLoader from './component/PreLoader'
import { useEffect, useState } from 'react'
import Home from './users/pages/Home'
import ClothDetails from './users/pages/ClothDetails'
import Cloth from './users/pages/Cloth'
import Seller from './users/pages/Seller'
import Profile from './users/pages/Profile'
import Auth from './pages/Auth'
import Cart from './users/pages/Cart'
import Wishlist from './users/pages/Wishlist'
import AdminHome from './admin/pages/AdminHome'


function App() {
  const [loader, setLoader] = useState(true)
  const [fadeOutLoader, setFadeOutLoader] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOutLoader(true) // start fade-out
      setTimeout(() => setLoader(false), 700) // hide PreLoader after fade
    }, 3400)

    return () => clearTimeout(timer)
  }, [])

  return (
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
        <Route path='/cloth/:id/details' element={<ClothDetails/>} />
        <Route path='/cloth' element={<Cloth/>} />
        <Route path='/seller/:sellermail/details' element={<Seller/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister ={true} />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
         <Route path='/admin/home' element={<AdminHome/>} />



    </Routes>
  )
}

export default App
