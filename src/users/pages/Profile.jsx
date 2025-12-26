import React from 'react'
import Header from '../components/Header'
import Footer from '@/component/Footer'
import ShinyText from '@/components/ShinyText'


function Profile() {
  return (
    <div>
        <Header/>
            <div style={{ fontFamily: "Playfair Display, serif" }} className='text-center mt-30  text-5xl font-semibold ' >
                <div>
                    <ShinyText
                        text="MIRO"
                        speed={3}
                        className='custom-class'
                    />
                </div>

            </div>
            <div className="w-full flex justify-center h-auto py-12">

                <img
                    src="https://i.pinimg.com/736x/fc/b8/f7/fcb8f7c246d81ad733ecb907dd52a344.jpg" alt="img" className="w-[93%] h-100 object-cover object-top" />

            </div>
        <Footer/>
    </div>
  )
}

export default Profile