import React, { useEffect, useState } from 'react';
import { 
  IconUser, 
  IconLock, 
  IconShieldCheck, 
  IconCamera, 
  IconCheck, 
  IconX,
  IconFingerprint,
  IconCpu
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { editUserAPI } from '@/services/allAPI';
import { ToastContainer, toast, Slide } from 'react-toastify';



function AdminProfile() {
  
  
   const [userDetails,setUserDetails] = useState({
      id:"",username:"",password:""
    })
    console.log(userDetails);
    
    const[confirmPassword,setConfirmPassword] = useState("")
    const [passwordMatch,setPasswordMatch]=useState(true)
      const navigate = useNavigate()

       useEffect(()=>{
          if (sessionStorage.getItem("user")) {
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUserDetails({...userDetails,id:user._id,username:user.username})
            
          }
        },[])
      
        const checkPasswordmatch = (data)=>{
      setConfirmPassword(data)
      userDetails.password == data ? setPasswordMatch(true):setPasswordMatch(false)
        }
      
const handleProfileUpdate = async()=>{
  const {username,password,id} = userDetails
  if (!username || !password || !confirmPassword) {
    toast.info("please fill the form completely")
    
  }else{
    const token = sessionStorage.getItem("token")
    if (token) {
        const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      const reqBody = {username,password}
      const result = await editUserAPI(id,reqBody,reqHeader)
      if (result.status==200) {
        toast.success("Profile updated. Please log in again")
        setTimeout(()=>{
          navigate('/login')
        },2000);
        
      }else{
        console.log(result);
        toast.error("something went wrong")
      }
    }
  }
}

 const reset = ()=>{
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio,password:""})
      setConfirmPassword("")
      setPasswordMatch(true)
  }
  return (
    <div className="p-6 md:p-12 text-white max-w-6xl mx-auto animate-in fade-in duration-700">
      
      {/* --- PAGE HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-500 font-black text-[10px] tracking-[0.3em] uppercase">
            <IconCpu size={14} /> System Node: 01
          </div>
          <h1 className="text-5xl font-black tracking-tighter uppercase">Admin Profile</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* --- LEFT SIDE: ADMIN INFO CARD --- */}
        <div className="lg:col-span-4 h-full">
          <div className="bg-neutral-900 border border-neutral-800 rounded-[3.5rem] p-8 flex flex-col h-full relative overflow-hidden shadow-2xl">
            {/* Aesthetic Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px]" />
            
            <div className="relative z-10 space-y-8">
              {/* Profile Image Squircle */}
              <div className="relative group w-fit mx-auto lg:mx-0">
                <div className="h-40 w-40 rounded-[3rem] overflow-hidden border-4 border-neutral-800 shadow-2xl transition-all group-hover:border-neutral-700">
                  <img 
                    src="/logoadmin.png" 
                    className="h-full w-full object-cover  transition-transform duration-700"
                    alt="Admin"
                  />
                  <div className="absolute inset-0  opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                    {/* <IconCamera size={28} /> */}
                  </div>
                </div>
              </div>

              {/* Admin Bio / Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black tracking-tight uppercase">amgith shaji</h3>
                  <p className="text-blue-500 text-xs font-black uppercase tracking-widest mt-1">Chief Operations Officer</p>
                </div>

                <div className="space-y-4">
                  <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                    Overseeing the Thrifter ecosystem. Responsible for inventory nodes, 
                    seller authentication, and global system security.
                  </p>
                  
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-3 text-neutral-400">
                      <IconFingerprint size={16} className="text-blue-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Biometric ID Verified</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-400">
                      <IconShieldCheck size={16} className="text-green-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Master Root Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: INPUT FORM CARD --- */}
        <div className="lg:col-span-8 bg-neutral-950/50 border border-neutral-800 rounded-[3.5rem] p-8 md:p-12 backdrop-blur-xl flex flex-col justify-center shadow-2xl">
          
          <div className="space-y-10">
            <h3 className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.4em] mb-4">Security Credentials</h3>
            
            <div className="space-y-8">
              {/* Username Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 ml-1">Admin Identity</label>
                <div className="relative group">
                  <IconUser className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-white transition-colors" size={20} />
                  <input 
                  value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})}
                    type="text" 
                    placeholder="USERNAME"
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-3xl py-5 pl-14 pr-6 text-sm font-bold focus:outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-neutral-800 uppercase tracking-widest"
                  />
                </div>
              </div>

              {/* Password Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 ml-1">New Pass-Key</label>
                  <div className="relative group">
                    <IconLock className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-white transition-colors" size={20} />
                    <input 
                     value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})}
                      type="password" 
                      placeholder="••••••••••••"
                      className="w-full bg-neutral-900/50 border border-neutral-800 rounded-3xl py-5 pl-14 pr-6 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 ml-1">Confirm Sync</label>
                  <div className="relative group">
                    <IconLock className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-white transition-colors" size={20} />
                    <input 
                    value={confirmPassword} onChange={e=>checkPasswordmatch(e.target.value)}
                      type="password" 
                      placeholder="••••••••••••"
                      className="w-full bg-neutral-900/50 border border-neutral-800 rounded-3xl py-5 pl-14 pr-6 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-mono"
                    />
                  </div>
                   {!passwordMatch && <div className=" mb-3  px-5 font-bold text-red-600 text-xs">
                  *confirm password must match with new password
            </div> }
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={handleProfileUpdate} type="submit"  className="flex-1 bg-white text-black py-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all active:scale-[0.98] shadow-xl  "  disabled= {!passwordMatch?true:false}>
                <IconCheck size={18} stroke={3} /> Save Profile
              </button>
              <button onClick={reset} className="flex-1 bg-neutral-900 border border-neutral-800 text-neutral-400 py-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-neutral-800 hover:text-white transition-all active:scale-[0.98]">
                <IconX size={18} stroke={3} /> Discard
              </button>
            </div>
          </div>
        </div>
      </div>
            {/* toast container */}
            <ToastContainer
            style={{ zIndex: 9999999 }} 
              position="bottom-right"
              autoClose={2000}
              transition={Slide}
              theme="dark"
            />
    </div>
  );
}

export default AdminProfile;