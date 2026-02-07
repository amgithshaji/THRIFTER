import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSideBar";

function AdminLayout({insideRegister}) {
  const [open, setOpen] = useState(false);

  return (
    // Outer Frame (Sidebar Background)
    <div className="flex flex-col md:flex-row bg-neutral-950 w-full h-screen overflow-hidden">
      
      <AdminSidebar open={open} setOpen={setOpen} />
      
      {/* 1. 'bg-neutral-900': The gray portion you want to curve.
         2. 'md:rounded-tl-[3.5rem]': Creates that deep curve at the top-left corner.
         3. 'scrollbar-hide': Custom utility to make the scrollbar invisible.
      */}
      <main className="flex-1 bg-neutral-900 md:rounded-tl-[3.5rem] border-l border-t border-neutral-800 shadow-2xl overflow-y-auto overflow-x-hidden scrollbar-hide relative z-0 touch-auto">
        <div className="w-full min-h-full">
          <Outlet />
        </div>
      </main>
      
    </div>
  );
}

export default AdminLayout;