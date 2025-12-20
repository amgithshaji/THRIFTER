import { Route, Routes } from 'react-router-dom'

import './App.css'

import PreLoader from './component/PreLoader'
import { useEffect, useState } from 'react'
import Home from './users/pages/Home'

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
    </Routes>
  )
}

export default App
