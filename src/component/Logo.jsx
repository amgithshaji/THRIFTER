import LogoLoop from "@/components/LogoLoop"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

import React from 'react'
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logoloop1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logo22.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logo33.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logo44.png", alt: "Company 1", href: "https://company1.com" },
  // { src: "/logoloop5.png", alt: "Company 1", href: "https://company1.com" },


];

function Logo() {
  return (
    <div>
        <div style={{ height: '100px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
         
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={85}
        gap={100}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      
      {/* Vertical loop with deceleration on hover */}
      {/* <LogoLoop
        logos={techLogos}
        speed={80}
        direction="up"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
      /> */}
    </div>
    </div>
  )
}

export default Logo
