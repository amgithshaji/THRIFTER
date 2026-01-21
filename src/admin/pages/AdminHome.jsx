import React from "react";
import { 
  IconPackage, 
  IconUsers, 
  IconCurrencyRupee, 
  IconTrendingUp, 
  IconAlertCircle,
  IconBuildingStore, // Most common export for store/shop
  IconChevronRight 
} from "@tabler/icons-react";

function AdminHome() {
  const stats = [
    { label: "Total Revenue", value: "₹2,45,600", growth: "+12.5%", icon: <IconCurrencyRupee size={20}/> },
    { label: "Active Listings", value: "842", growth: "+18", icon: <IconPackage size={20}/> },
    { label: "Total Users", value: "1,248", growth: "+54", icon: <IconUsers size={20}/> },
    { label: "Growth Rate", value: "24.3%", growth: "+4.2%", icon: <IconTrendingUp size={20}/> },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8 text-white max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Thrifter Command Center</h1>
          <p className="text-gray-400 mt-1">Real-time overview of your marketplace.</p>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition">
          Export Report
        </button>
      </div>

      {/* Dynamic Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-neutral-700 transition group shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-white group-hover:text-black transition duration-300">
                {stat.icon}
              </div>
              <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                {stat.growth}
              </span>
            </div>
            <p className="text-sm text-gray-400 font-medium tracking-wide uppercase text-[10px]">{stat.label}</p>
            <h2 className="text-2xl font-bold mt-1">{stat.value}</h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inventory Quality Control (Main Feed) */}
        <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Pending Approvals</h3>
            <span className="text-xs text-blue-400 cursor-pointer hover:underline font-medium">View All Listings</span>
          </div>
          
          <div className="space-y-4">
            {[
              { item: "Vintage 90s Nike Windbreaker", user: "SneakerHead99", price: "₹1,200", status: "Reviewing" },
              { item: "Levi's 501 Original Denim", user: "DenimDoc", price: "₹2,500", status: "Reviewing" },
              { item: "Retro Polaroid Camera", user: "AnalogVibes", price: "₹4,800", status: "Flagged" },
            ].map((listing, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-neutral-950/50 rounded-xl border border-neutral-800/50 hover:border-neutral-700 transition">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                    <IconPackage size={20} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{listing.item}</p>
                    <p className="text-xs text-gray-500">by @{listing.user}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{listing.price}</p>
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${listing.status === 'Flagged' ? 'text-red-400' : 'text-yellow-400'}`}>
                    {listing.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actionable Alerts */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
            <IconAlertCircle className="text-red-500" size={20} /> Urgent Tasks
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
              <p className="text-sm font-medium text-red-400">Payout Failure</p>
              <p className="text-xs text-gray-400 mt-1">3 sellers haven't received funds due to KYC issues.</p>
              <button className="mt-3 text-xs bg-red-500/10 text-red-400 px-3 py-1.5 rounded-md hover:bg-red-500/20 font-bold transition">Resolve Now</button>
            </div>
            
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
              <p className="text-sm font-medium text-yellow-400">New Dispute</p>
              <p className="text-xs text-gray-400 mt-1">Order #8492: Buyer claims "Not as described".</p>
              <button className="mt-3 text-xs bg-yellow-500/10 text-yellow-400 px-3 py-1.5 rounded-md hover:bg-yellow-500/20 font-bold transition">Open Case</button>
            </div>
          </div>
        </div>
      </div>

      {/* --- NEW SECTION: FULL WIDTH STORE DETAILS --- */}
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
          {[
            { store: "RetroVibe Co.", owner: "Sarah J.", items: "142", tier: "Gold" },
            { store: "Hype Beast Hub", owner: "Mike D.", items: "84", tier: "Silver" },
            { store: "Denim Den", owner: "Emma W.", items: "210", tier: "Platinum" },
          ].map((shop, idx) => (
            <div key={idx} className="flex items-center justify-between p-5 bg-neutral-950/40 rounded-xl border border-neutral-800/50 hover:border-neutral-700 transition group">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 group-hover:text-white transition">
                  <IconBuildingStore size={26} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">{shop.store}</p>
                  <p className="text-xs text-neutral-500 italic">Managed by {shop.owner}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-white">{shop.items} Items</p>
                <span className="text-[9px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  {shop.tier}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;