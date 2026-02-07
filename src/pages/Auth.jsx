import Chroma from '@/component/Chroma'
import Header from '@/users/components/Header'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Slide } from 'react-toastify';
import { googleLoginAPI, loginAPI, registerAPI } from '@/services/allAPI';
import { FaEyeSlash } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa6'
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { routeGuardContext } from '@/contextAPI/AuthContext';







function Auth({insideRegister}) {
  const{role,setAuthorized}= useContext(routeGuardContext)
  const [viewPassword, setViewPassword] = useState(false)
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  // console.log(userDetails);
  const handleRegister = async (e) => {
    e.preventDefault()
    const { username, email, password } = userDetails
    if (email && password && username) {
      // toast.success("API CALL")
      try {
        const result = await registerAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success(`Register successfull`)
          setUserDetails({ username: "", email: "", password: "" })
          navigate('/login')
        }
        else if (result.status == 409) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
          navigate('/login')

        } else {
          console.log(result);
          toast.error("something went wrong")
          setUserDetails({ username: "", email: "", password: "" })
        }

      } catch (err) {
        console.log(err);

      }
    } else {
      toast.info("please fill the form completely")
    }
  }
  // login

  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = userDetails
    if (email && password) {
      try {
        // api call
        const result = await loginAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("login successfull")
          sessionStorage.setItem("token", result.data.token)
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          setAuthorized(true)
          setTimeout(() => {
            if (result.data.user.role == "admin") {
              navigate('/admin/home')
            } else {
              navigate('/')
            }
          }, 2500)

        } else if (result.status == 401 || result.status == 404) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        } else {
          toast.error("something went wrong")
          setUserDetails({ username: "", email: "", password: "" })

        }


      } catch (err) {
        console.log(err);

      }
    } else {
      toast.info("please fill the form completely!!!")
    }
  }





// google login function for normal design google button

  //   const handleGoogleLogin = async (credentialResponse) => {
  //     console.log("inside handleGoogleLogin");
  //     console.log(credentialResponse);
  // const decode = jwtDecode(credentialResponse.credential)
  // console.log(decode);
  // const result = await googleLoginAPI({username:decode.name,email:decode.email,password:'googlePassword'})
  //    if (result.status == 200) {
  //           toast.success("login successfull")
  //           sessionStorage.setItem("token", result.data.token)
  //           sessionStorage.setItem("user", JSON.stringify(result.data.user))
  //           setTimeout(() => {
  //             if (result.data.user.role == "admin") {
  //               navigate('/admin/home')
  //             } else {
  //               navigate('/')
  //             }
  //           }, 2500)

  //         }else{
  //           console.log(result);

  //               toast.error("something went wrong")
  //         }

  //   }


  // google login function for custom design google button


  const handleGoogleLogin = async (tokenResponse) => {
    console.log("inside handleGoogleLogin");
    console.log(tokenResponse);

    const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${tokenResponse.access_token}`,
      },
    });

    const decode = await res.json(); // same content as decoded JWT
    console.log(decode);

    const result = await googleLoginAPI({
      username: decode.name,
      email: decode.email,
      password: "googlePassword",
    });

    if (result.status === 200) {
      toast.success("login successfull");
      sessionStorage.setItem("token", result.data.token);
      sessionStorage.setItem("user", JSON.stringify(result.data.user));

      setTimeout(() => {
        if (result.data.user.role === "admin") {
          navigate("/admin/home");
        } else {
          navigate("/");
        }
      }, 2500);
    } else {
      console.log(result);
      toast.error("something went wrong");
    }
  };


  // google login
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => handleGoogleLogin(tokenResponse),
    onError: () => console.log("Google login failed"),
  });

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
                <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" id="username" className="peer w-full border-b  border-black py-2 outline-none placeholder-transparent" placeholder="Name" />
                <label htmlFor="username" className="absolute left-0  text-xs tracking-widest text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[10px] peer-focus:-top-1 peer-focus:text-[10px] ">NAME</label>
              </div>
            }
            <div className="relative">
              <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="email" id="email" className="peer w-full border-b border-black py-2 outline-none placeholder-transparent " placeholder="Email" />
              <label htmlFor="email" className="absolute left-0  text-xs tracking-widest text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[10px] peer-focus:-top-1 peer-focus:text-[10px]">EMAIL</label>
            </div>

            <div className="relative">
              <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type={viewPassword ? "text" : "password"} id="password" className="peer w-full border-b border-black py-3 outline-none placeholder-transparent " placeholder="Password" />
              {
                viewPassword ?
                  <FaEyeSlash onClick={() => setViewPassword(!viewPassword)} color='black' className='text-gray-400  cursor-pointer md:ms-90 ms-70 "' style={{ marginTop: "-30px" }} />
                  :
                  <FaEye onClick={() => setViewPassword(!viewPassword)} color='black' className='text-gray-400  cursor-pointer md:ms-90 ms-70 ' style={{ marginTop: "-30px" }} />
              }

              <label htmlFor="password" className="absolute left-0 top-1 text-xs tracking-widest text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[10px] peer-focus:-top-1 peer-focus:text-[10px]">PASSWORD</label>

              {!insideRegister &&
                <p className="text-xs mt-5 font-light underline cursor-pointer">Have you forgotten your password?</p>
              }
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {insideRegister ?
              <>
                <Link to={'/register'}>

                  <button onClick={handleRegister} className="w-full bg-black mt-9 text-white py-2 text-xs tracking-widest font-light hover:bg-gray-900">Register</button>
                </Link>

                <Link to={'/login'}>
                  <button className="w-full border border-black py-2 text-xs font-light tracking-widest hover:text-gray-500">Login
                  </button>
                </Link>
              </>
              :
              <>
                <Link to={'/login'}>
                  <button onClick={handleLogin} className="w-full border border-black py-2 text-xs font-light tracking-widest hover:text-gray-500">Login
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

                  <div className="w-full flex justify-center">
                    <div className="w-full  flex justify-center">

                      {/* normal design */}
                      {/* <GoogleLogin
                        onSuccess={credentialResponse => {
                          handleGoogleLogin(credentialResponse)
                        }}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                      />; */}

                      {/* custom design button */}
                      <button
                        type='button'
                        onClick={() => login()}
                        className="w-full border border-black py-2 mt-3 text-sm tracking-wide
             hover:bg-black hover:text-white transition flex items-center justify-center gap-2"
                      >
                        <img
                          src="/google logo.webp"
                          alt="google"
                          className="w-4 h-4"
                        />
                        Continue with Google
                      </button>




                    </div>
                  </div>



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
                    Keep me notified about new collections and price drops
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
      {/* toast container */}
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        transition={Slide}
        theme="dark"
      />
    </div>
  )
}

export default Auth