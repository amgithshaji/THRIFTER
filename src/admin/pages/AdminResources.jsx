import React, { useState } from 'react';
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

function AdminResources() {
  const [tab, setTab] = useState(1); // 1: Clothes, 2: Users, 3: Stores

  return (
    <div className="p-6 md:p-10 space-y-8 text-white max-w-7xl mx-auto">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Marketplace Resources</h1>
          <p className="text-sm text-gray-400 mt-1">Review listings, manage users, and audit store performance.</p>
        </div>

        <div className="relative group">
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="bg-neutral-800/50 border border-neutral-700/50 rounded-2xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/10 w-full md:w-72 transition-all backdrop-blur-sm"
          />
        </div>
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
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group bg-neutral-900/50 border border-neutral-800 rounded-[2rem] overflow-hidden hover:border-neutral-600 transition-all duration-500">
                <div style={{ aspectRatio: '4/5' }} className="relative overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500&auto=format&fit=crop`} alt="Cloth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-100 truncate">Vintage Graphic Tee</h3>
                    <p className="text-sm text-gray-500 font-medium italic">by @street_king</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black">₹1,499</span>
                    <button className="text-gray-400 hover:text-white"><IconExternalLink size={20} /></button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button className="flex items-center justify-center gap-2 bg-white text-black text-xs font-bold py-3 rounded-xl hover:bg-neutral-200 transition-all"><IconCheck size={16} stroke={3} /> APPROVE</button>
                    <button className="flex items-center justify-center gap-2 bg-neutral-800 text-red-400 text-xs font-bold py-3 rounded-xl hover:bg-red-500/10 transition-all"><IconX size={16} stroke={3} /> REJECT</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          /* STORES GRID (NEW) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {[
              { name: "RetroVibe Co.", owner: "Sarah Jenkins", items: 142, followers: "2.1k", status: "Verified" },
              { name: "Urban Threads", owner: "Mike Ross", items: 84, followers: "940", status: "Pending" },
              { name: "90s Nomad", owner: "Emma Watts", items: 310, followers: "5.4k", status: "Verified" },
            ].map((store, i) => (
              <div key={i} className="bg-neutral-900/50 border border-neutral-800 rounded-[2.5rem] p-6 hover:border-gray-500/50 transition-all duration-500 group relative overflow-hidden">
                {/* Visual Flair */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />
                
                <div className="flex items-start justify-between mb-6">
                  <div className="h-16 w-16 rounded-[1.5rem] bg-neutral-800 flex items-center justify-center border border-neutral-700 text-neutral-400 group-hover:text-blue-400 transition-colors">
                    <IconBuildingStore size={32} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                    store.status === 'Verified' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                  }`}>
                    {store.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{store.name}</h3>
                    {store.status === 'Verified' && <IconBuildingStore size={18} className="text-blue-500" />}
                  </div>
                  <p className="text-sm text-neutral-500">Owner: <span className="text-neutral-300 font-medium">{store.owner}</span></p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8 py-4 border-y border-neutral-800/50">
                  <div>
                    <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Active Items</p>
                    <p className="text-lg font-bold text-white">{store.items}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Followers</p>
                    <p className="text-lg font-bold text-white">{store.followers}</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold py-3 rounded-xl transition-all border border-neutral-700">
                    MANAGE STORE
                  </button>
                  <button className="bg-neutral-800 p-3 rounded-xl hover:text-red-400 transition-colors border border-neutral-700">
                    <IconX size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          /* USERS LIST */
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-[2rem] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 text-gray-500 text-[11px] uppercase tracking-[0.2em]">
                  <th className="px-8 py-6 font-bold">Member</th>
                  <th className="px-8 py-6 font-bold">Status</th>
                  <th className="px-8 py-6 font-bold">Joined</th>
                  <th className="px-8 py-6 font-bold text-right">Settings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/50">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <tr key={i} className="hover:bg-neutral-800 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-neutral-800 border border-neutral-700 overflow-hidden">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="avatar" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-white">Alex Thompson</p>
                          <p className="text-xs text-gray-500">alex.t@thrifter.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold border border-green-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> ACTIVE
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm text-gray-500 font-medium">Jan 12, 2024</td>
                    <td className="px-8 py-5 text-right">
                      <button className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-white transition-all">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminResources;