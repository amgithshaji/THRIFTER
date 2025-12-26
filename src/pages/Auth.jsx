import Chroma from '@/component/Chroma'
import Header from '@/users/components/Header'
import React from 'react'
import { Link } from 'react-router-dom'


function Auth({ insideRegister }) {
    return (
        <div>
 
            <div style={{ fontFamily: 'Raleway, sans-serif' }} className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col  px-10 lg:px-47 ">
<Link to={'/'}>
                        <img src="/logo2.png" className=' w-70 mb-9 mt-10' alt="logo" />
    
</Link>                    {
                        insideRegister ? <h2 className="text-sm tracking-widest mb-5 ">PERSONAL DETAILS</h2>
                            :
                            <h2 className="text-sm tracking-widest mb-5 ">LOG IN</h2>

                    }
                    <div className="flex flex-col gap-5">
                        {
                            insideRegister &&
                            <div className="relative">
                                <input type="text" id="username" className="peer w-full border-b border-black py-2 outline-none placeholder-transparent" placeholder="Name" />
                                <label htmlFor="username" className="absolute left-0 top-2 text-xs tracking-widest text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[10px] peer-focus:-top-1 peer-focus:text-[10px]">NAME</label>
                            </div>
                        }
                        <div className="relative">
                            <input type="email" id="email" className="peer w-full border-b border-black py-2 outline-none placeholder-transparent" placeholder="Email" />
                            <label htmlFor="email" className="absolute left-0 top-2 text-xs tracking-widest text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[10px] peer-focus:-top-1 peer-focus:text-[10px]">EMAIL</label>
                        </div>

                        <div className="relative">
                            <input type="password" id="password" className="peer w-full border-b border-black py-2 outline-none placeholder-transparent" placeholder="Password" />
                            <label htmlFor="password" className="absolute left-0 top-2 text-xs tracking-widest text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[10px] peer-focus:-top-1 peer-focus:text-[10px]">PASSWORD</label>

{ !insideRegister &&
                                <p className="text-xs mt-3 font-light underline cursor-pointer">Have you forgotten your password?</p>
    }
                       </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                        {insideRegister ?
                            <>
                                <Link to={'/register'}>

                                    <button className="w-full bg-black text-white py-2 text-xs tracking-widest font-light hover:bg-gray-900">Register</button>
                                </Link>

                                <Link to={'/login'}>
                                    <button className="w-full border border-black py-2 text-xs font-light tracking-widest hover:text-gray-500">Login
                                    </button>
                                </Link>
                            </>
                            :
                            <>
                                <Link to={'/login'}>
                                    <button className="w-full border border-black py-2 text-xs font-light tracking-widest hover:text-gray-500">Login
                                    </button>
                                </Link>

                                <Link to={'/register'}>

                                    <button className="w-full bg-black text-white py-2 text-xs tracking-widest font-light hover:bg-gray-900">Register</button>
                                </Link>
                            </>
                        }
                    </div>

               {
                !insideRegister ?
                     <div className="mt-10">
                        <p className="tracking-widest text-sm mb-2">ACCESS WITH</p>
                        <p className="text-[11px] font-light mb-6">By logging in with my social login, I agree to link my account in accordance with the Privacy Policy.</p>

                        <div className="flex flex-col gap-3">
                            <button className="w-full border border-black py-2 text-xs font-light tracking-widest hover:text-gray-500">CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col gap-4 mt-6">
  {/* Checkbox 1 */}
  <label className="flex items-start gap-3 cursor-pointer group">
    <div className="relative flex items-center justify-center">
      <input type="checkbox" className="peer sr-only" />
      <div className="w-4 h-4 border border-black bg-white peer-checked:bg-white transition-all"></div>
      {/* This is the black tick */}
      <svg 
        className="absolute w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" 
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-[11px] font-light tracking-wide ">
      I wish to receive Thrifter news on my e-mail
    </span>
  </label>

  {/* Checkbox 2 */}
  <label className="flex items-start gap-3 cursor-pointer group">
    <div className="relative flex items-center justify-center">
      <input type="checkbox" className="peer sr-only" />
      <div className="w-4 h-4 border border-black bg-white transition-all"></div>
      <svg 
        className="absolute w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" 
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-[11px] font-light tracking-wide ">
      I accept the <span className="underline italic">privacy statement</span>
    </span>
  </label>
</div>
               }
                </div>

                <div className="hidden lg:block h-screen w-full">
                    {/* <img src="https://static.zara.net/assets/public/4b38/edb4/6cb24356aa2d/7fcd855af741/09598104500-a6/09598104500-a6.jpg?ts=1765982232993&w=877" alt="login visual" className="w-full h-screen object-cover" /> */}
                    < Chroma />
                </div>
            </div>
        </div>
    )
}

export default Auth