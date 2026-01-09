import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconBook,
} from "@tabler/icons-react";
import { motion } from "motion/react";

/* 👇 PASTE LOGO + LOGOICON HERE */
export const Logo = () => {
  return (
    <div className="flex items-center space-x-2 py-1 text-sm font-normal ">
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white "
      >
        Admin Panel
      </motion.span>
    </div>
  );
};

export const LogoIcon = () => {
  return (
    <div className="flex items-center py-1">
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white " />
    </div>
  );
};
/* 👆 END LOGO CODE */

function AdminSideBar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: <IconBrandTabler className="h-5 w-5" />,
    },
    {
      label: "Resources",
      href: "/admin/resources",
      icon: <IconBook className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: <IconSettings className="h-5 w-5" />,
    },
    {
      label: "Logout",
      href: "/logout",
      icon: <IconArrowLeft className="h-5 w-5" />,
    },
  ];

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 rounded-3xl">
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* 👇 USING LOGO HERE */}
          {open ? <Logo /> : <LogoIcon />}

          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>

        <div>
          <SidebarLink
            link={{
              label: "Admin",
              href: "/admin",
              icon: (
                <img
                  src="https://assets.aceternity.com/manu.png"
                  className="h-7 w-7 rounded-full"
                  alt="Admin avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export default AdminSideBar;
