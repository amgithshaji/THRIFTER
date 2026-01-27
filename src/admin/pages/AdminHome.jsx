import React, { useEffect, useState } from "react";
import { 
  IconPackage, 
  IconUsers, 
  IconCurrencyRupee, 
  IconTrendingUp, 
  IconAlertCircle,
  IconBuildingStore, 
  IconChevronRight 
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from 'react-toastify';
import { getAllClothesAPI, getAllStoresAPI, getAllUsersAPI, getLatestAddClothesAPI, getLatestAddStoresAPI } from "@/services/allAPI";

function AdminHome() {
  const [allUsers,setAllUsers] = useState(0);
  // console.log(allUsers);
  const [allClothes, setAllClothes] = useState(0);
  console.log(allClothes);
  
const [allStores, setAllStores] = useState(0);
console.log(allStores);

const [latestClothes, setLatestClothes] = useState([]);
// console.log(latestClothes);

const [latestStores, setLatestStores] = useState([]);
console.log(latestStores);


  
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    toast.success("Logged out successfully");
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

useEffect(() => {
  getAllUsers();
}, []);


const getAllUsers = async () => {
  try {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      "Authorization": `Bearer ${token}`
    };

    const result = await getAllUsersAPI(reqHeader);
    console.log(result.data);

    if (result.status === 200) {
      setAllUsers(result.data);
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getAllClothes();
}, []);

const getAllClothes = async () => {
  try {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      "Authorization": `Bearer ${token}`
    };

    const result = await getAllClothesAPI(reqHeader);
    console.log(result.data);

    if (result.status === 200) {
      setAllClothes(result.data);
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getAllStores();
}, []);

const getAllStores = async () => {
  try {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      "Authorization": `Bearer ${token}`
    };

    const result = await getAllStoresAPI(reqHeader);
    console.log(result.data);

    if (result.status === 200) {
      setAllStores(result.data);
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getLatestAddedClothes();
}, []);


const getLatestAddedClothes = async () => {
  try {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      "Authorization": `Bearer ${token}`
    };

    const result = await getLatestAddClothesAPI(reqHeader);
    console.log(result.data);

    if (result.status === 200) {
      setLatestClothes(result.data);
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getLatestAddedStores();
}, []);


const getLatestAddedStores = async () => {
  try {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      "Authorization": `Bearer ${token}`
    };

    const result = await getLatestAddStoresAPI(reqHeader);
    console.log(result.data);

    if (result.status === 200) {
      setLatestStores(result.data);
    }
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className="p-4 md:p-8 space-y-8 text-white max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Thrifter Command Center</h1>
          <p className="text-gray-400 mt-1">Real-time overview of your marketplace.</p>
        </div>
        <button onClick={handleLogout} className="bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition">
          Log out
        </button>
      </div>

      {/* Dynamic Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Template for individual Stat Card */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-neutral-700 transition group shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-white group-hover:text-black transition duration-300">
               <IconTrendingUp size={20}/>
            </div>
            <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
              +32.6%
            </span>
          </div>
          <p className="text-sm text-gray-400 font-medium tracking-wide uppercase text-[10px]">Growth rate</p>
          <h2 className="text-2xl font-bold mt-1">+54</h2>
        </div>

            {/* Template for individual Stat Card */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-neutral-700 transition group shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-white group-hover:text-black transition duration-300">
              <IconUsers size={20}/> 
            </div>
            <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
              +3.5%
            </span>
          </div>
          <p className="text-sm text-gray-400 font-medium tracking-wide uppercase text-[10px]">Total Users</p>
          <h2 className="text-2xl font-bold mt-1">+{allUsers}</h2>
        </div>

            {/* Template for individual Stat Card */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-neutral-700 transition group shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-white group-hover:text-black transition duration-300">
             <IconPackage size={20}/> 
            </div>
            <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
              +5.2%
            </span>
          </div>
          <p className="text-sm text-gray-400 font-medium tracking-wide uppercase text-[10px]">Total Products</p>
          <h2 className="text-2xl font-bold mt-1">+{allClothes}</h2>
        </div>

            {/* Template for individual Stat Card */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-neutral-700 transition group shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-white group-hover:text-black transition duration-300">
            <IconBuildingStore size={20} />
            </div>
            <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
              +2.5%
            </span>
          </div>
          <p className="text-sm text-gray-400 font-medium tracking-wide uppercase text-[10px]">Total Store</p>
          <h2 className="text-2xl font-bold mt-1">+{allStores}</h2>
        </div>

        
      </div>
      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inventory Quality Control (Main Feed) */}
        <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Pending Approvals</h3>
            <span className="text-xs text-blue-400 cursor-pointer hover:underline font-medium">View All Listings</span>
          </div>
          
          <div className="space-y-4">
            {/* Template for individual Approval Item */}
           {
            latestClothes?.length>0?
            latestClothes?.map(cloth=>(
               <div key={cloth?._id} className="flex items-center justify-between p-4 bg-neutral-950/50 rounded-xl border border-neutral-800/50 hover:border-neutral-700 transition">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <IconPackage size={20} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase">{cloth?.clothname}</p>
                  <p className="text-xs text-gray-500 uppercase">{cloth?.gender} </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">₹{cloth?.price}</p>
                <span className="text-[10px] uppercase tracking-wider font-bold text-yellow-400">
                  {cloth?.status}
                </span>
              </div>
            </div>
              
            ))
            :
            <p>no clothes</p>
           }
          </div>
        </div>

        {/* Actionable Alerts */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
            <IconAlertCircle className="text-red-500" size={20} /> Urgent Tasks
          </h3>
          <div className="space-y-4">
            {/* Template for Alert Item */}
            <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
              <p className="text-sm font-medium text-red-400">Payout Failure</p>
              <p className="text-xs text-gray-400 mt-1">3 sellers haven't received funds due to KYC issues.</p>
              <button className="mt-3 text-xs bg-red-500/10 text-red-400 px-3 py-1.5 rounded-md hover:bg-red-500/20 font-bold transition">Resolve Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Store Details Section */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 w-full shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Latest Store Registrations</h3>
            <p className="text-xs text-neutral-500">Monitor new sellers entering the ecosystem.</p>
          </div>
          <span className="text-xs text-blue-400 cursor-pointer hover:underline font-medium flex items-center gap-1">
            View All Shops <IconChevronRight size={14}/>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Template for individual Store Card */}
          {
            latestStores?.length>0?
            latestStores?.map(stores=>(
              <div className="flex items-center justify-between p-5 bg-neutral-950/40 rounded-xl border border-neutral-800/50 hover:border-neutral-700 transition group">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 group-hover:text-white transition">
                <IconBuildingStore size={26} />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-tight uppercase">{stores?.storename}</p>
                <p className="text-xs text-neutral-500 italic">{stores?.storetagline}</p>
              </div>
            </div>
            <div className="text-right">
              {/* <p className="text-xs font-bold text-white">142 Items</p> */}
              <span className="text-[9px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                Verified
              </span>
            </div>
          </div>
            ))
            :
            <p>no stores</p>
          }
        </div>
      </div>

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

export default AdminHome;