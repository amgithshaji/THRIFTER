import React, { useEffect, useState } from 'react';
import { 
  IconShirt, 
  IconUsers, 
  IconSearch, 
  IconCheck, 
  IconX, 
  IconExternalLink,
  IconBuildingStore, // Added for Stores
  // IconBadgeCheck
} from '@tabler/icons-react';
import { getAllAdminClothAPI, getAllAdminStoreAPI, getAllAdminUsersAPI, updateClothStatusAPI } from '@/services/allAPI';
import serverURL from '@/services/serverURL';
import { ToastContainer, toast, Slide } from 'react-toastify';



function AdminResources() {
  const [tab, setTab] = useState(1); // 1: Clothes, 2: Users, 3: Stores
  const [allClothes,setAllClothes]= useState([])
  console.log(allClothes);

  const [allstores,setAllStores] = useState([])
  console.log(allstores);
  
  const [allUsers,setAllUsers] = useState([])
  console.log(allUsers);
  


  
  useEffect(()=>{
const token = sessionStorage.getItem("token")
if (token) {
  if (tab == 1) {
    getAllClothes(token)
  }
  
}
  },[tab])
  

  const getAllClothes = async (token)=>{
    const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await getAllAdminClothAPI(reqHeader)
    if (result.status==200) {
      setAllClothes(result.data)
      
    }else{
      console.log(result);
      
    }
  }

    useEffect(()=>{
const token = sessionStorage.getItem("token")
if (token) {
  if (tab == 3) {
    getAllStores(token)
  }
  
}
  },[tab])

  
  const getAllStores = async (token)=>{
    const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await getAllAdminStoreAPI(reqHeader)
    if (result.status==200) {
      setAllStores(result.data)
      
    }else{
      console.log(result);
      
    }
  }

  const updateClothStatus = async (id)=>{
    const token = sessionStorage.getItem("token")
    if (token) {
          const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await updateClothStatusAPI(id,reqHeader)
    if (result.status==200) {
      toast.success("cloth status updated")
          getAllClothes(token)

    }else{
      console.log(result);
      
    }
      
    }
  }

   useEffect(()=>{
const token = sessionStorage.getItem("token")
if (token) {
  if (tab == 2) {
    getAllUsers(token)
  }
  
}
  },[tab])

   const getAllUsers = async (token)=>{
    const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await getAllAdminUsersAPI (reqHeader)
    if (result.status==200) {
      setAllUsers(result.data)
      
    }else{
      console.log(result);
      
    }
  }

  return (
    <div className="p-6 md:p-10 space-y-8 text-white max-w-7xl mx-auto">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Marketplace Resources</h1>
          <p className="text-sm text-gray-400 mt-1">Review listings, manage users, and audit store performance.</p>
        </div>

        {/* <div className="relative group">
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="bg-neutral-800/50 border border-neutral-700/50 rounded-2xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/10 w-full md:w-72 transition-all backdrop-blur-sm"
          />
        </div> */}
      </div>

      {/* --- AESTHETIC TABS --- */}
      <div className="flex p-1.5 bg-neutral-950/40 w-fit rounded-2xl border border-neutral-800/50 backdrop-blur-md">
        <button 
          onClick={() => setTab(1)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === 1 ? 'bg-neutral-800 text-white shadow-xl ring-1 ring-white/10' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <IconShirt size={18} /> Clothes
        </button>
        <button 
          onClick={() => setTab(3)} // NEW STORE TAB
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === 3 ? 'bg-neutral-800 text-white shadow-xl ring-1 ring-white/10' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <IconBuildingStore size={18} /> Stores
        </button>
        <button 
          onClick={() => setTab(2)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === 2 ? 'bg-neutral-800 text-white shadow-xl ring-1 ring-white/10' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <IconUsers size={18} /> Users
        </button>
      </div>

      {/* --- CONTENT AREA --- */}
      <div style={{ minHeight: '400px' }} className="w-full">
        {tab === 1 && (
          /* CLOTHES GRID */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {
                  allClothes?.length>0?

            allClothes.map((cloth) => (
              <div key={cloth?._id} className="group bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-600 transition-all duration-500">
                <div style={{ aspectRatio: '4/5' }} className="relative overflow-hidden">
                  <img src={cloth?.uploadimages?.length>0?`${serverURL}/uploads/${cloth.uploadimages[0]}`:"https://static.zara.net/assets/public/04a8/bba9/e2594c11bf63/bdd8182b57c9/05536259737-a3/05536259737-a3.jpg?ts=1767082163651&w=877"} alt="Cloth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-100 truncate uppercase">{cloth?.clothname}</h3>
                  {/* <p className="text-sm text-gray-500 font-medium italic">by {store?.storename}</p>  */}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black">₹{cloth?.price}</span>
                    <button className="text-gray-400 hover:text-white"><IconExternalLink size={20} /></button>
                  </div>
                  <div className="grid grid-cols-1 gap-3 pt-2">
                  {
                    cloth?.status !="approved"?
                      <button onClick={()=>(updateClothStatus(cloth?._id))} className="flex items-center justify-center gap-2 bg-white text-black text-xs font-bold py-3 rounded-xl hover:bg-neutral-200 transition-all"><IconCheck size={16} stroke={3} /> APPROVE</button>
                    
                     :
                       <button className="flex items-center justify-center gap-2 bg-white text-black text-xs font-bold py-3 rounded-xl hover:bg-neutral-200 transition-all "><IconCheck size={16} stroke={3} /> APPROVED</button>
                  }
                  </div>
                </div>
              </div>
            ))
            :
                <p> loading...</p>

            }
          </div>
        )}

        {tab === 3 && (
          /* STORES GRID (NEW) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             {
              allstores?.length>0?
              allstores.map((store)=>(
 <div key={store?._id} className="bg-neutral-900/50 border border-neutral-800 rounded-[2.5rem] p-6 hover:border-gray-500/50 transition-all duration-500 group relative overflow-hidden">
                {/* Visual Flair */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />
                
                <div className="flex items-start justify-between mb-6">
                  <div className="h-16 w-16 rounded-3xl bg-neutral-800 flex items-center justify-center border border-neutral-700 text-neutral-400 group-hover:text-blue-400 transition-colors">
                    <IconBuildingStore size={32} />
                  </div>
                  <span className='x-3 py-1 p-3 rounded-full text-[10px] font-black uppercase tracking-widest border 
                    bg-blue-500/10 text-blue-400 border-blue-500/20'
                >
                    Verified
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white uppercase">{store?.storename}</h3>
                    <IconBuildingStore size={18} className="text-blue-500" />
                  </div>
                  <p className="text-sm text-neutral-500">TAGLINE: <span className="text-neutral-300 font-medium uppercase">{store?.storetagline}</span></p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8 py-4 border-y border-neutral-800/50">
                  <div>
                    <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Owner Mail</p>
                    <p className="text-lg font-bold text-white uppercase">{store?.ownermail}</p>
                  </div>
                  {/* <div>
                    <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Followers</p>
                    <p className="text-lg font-bold text-white">10k+</p>
                  </div> */}
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold py-3 rounded-xl transition-all border border-neutral-700">
                    APPROVED STORE
                  </button>
                  {/* <button className="bg-neutral-800 p-3 rounded-xl hover:text-red-400 transition-colors border border-neutral-700">
                    <IconX size={18} />
                  </button> */}
                </div>
              </div>
              ))
              :
                              <p> loading...</p>

             }
            
          </div>
        )}

       {tab === 2 && (
  /* USERS LIST - FULLY RESPONSIVE */
  <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
    <table className="w-full text-left border-collapse">
      {/* Hide Header on Mobile */}
      <thead className="hidden md:table-header-group">
        <tr className="border-b border-neutral-800 text-gray-500 text-[11px] uppercase tracking-[0.2em]">
          <th className="px-8 py-6 font-bold">Member</th>
          <th className="px-8 py-6 font-bold">Status</th>
          <th className="px-8 py-6 font-bold">Role</th>
          <th className="px-8 py-6 font-bold text-right">Access</th>
        </tr>
      </thead>
      
      <tbody className="divide-y divide-neutral-800/50 flex flex-col md:table-row-group">
        {allUsers.length > 0 ? (
          allUsers.map((user) => (
            <tr 
              key={user?._id} 
              className="flex flex-col md:table-row hover:bg-neutral-800/50 transition-colors group p-6 md:p-0"
            >
              {/* Member Info */}
              <td className="px-0 md:px-8 py-2 md:py-5">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-neutral-800 border border-neutral-700 overflow-hidden">
                    <img 
                      src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg" 
                      alt="avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-white uppercase truncate">{user?.username}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                </div>
              </td>

              {/* Status */}
              <td className="px-0 md:px-8 py-2 md:py-5">
                <div className="flex items-center gap-2 md:block">
                  <span className="md:hidden text-[10px] text-gray-600 font-bold uppercase tracking-wider">Status:</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold border border-green-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> ACTIVE
                  </span>
                </div>
              </td>

              {/* Role */}
              <td className="px-0 md:px-8 py-2 md:py-5">
                <div className="flex items-center gap-2 md:block">
                  <span className="md:hidden text-[10px] text-gray-600 font-bold uppercase tracking-wider">Role:</span>
                  <span className="text-sm text-gray-400 md:text-gray-500 font-medium uppercase">
                    {user?.role || 'Member'}
                  </span>
                </div>
              </td>

              {/* Access / Verified Badge */}
              <td className="px-0 md:px-8 py-4 md:py-5 text-left md:text-right">
                <div className="flex items-center justify-between md:justify-end gap-3">
                   <span className="md:hidden text-[10px] text-gray-600 font-bold uppercase tracking-wider">Access:</span>
                   <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.15)]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 00-1.06-1.06l-4.47 4.47-1.615-1.615a.75.75 0 00-1.06 1.06l2.145 2.145a.75.75 0 001.06 0l5-5z" clipRule="evenodd" />
                    </svg>
                    VERIFIED
                  </span>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="p-10 text-center text-gray-500 uppercase text-xs tracking-widest">
              No users found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)}
      </div>
        {/* toast container */}
            <ToastContainer
              position="bottom-left"
              autoClose={2000}
              transition={Slide}
              theme="dark"
            />
    </div>
  );
}

export default AdminResources;