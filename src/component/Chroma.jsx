import ChromaGrid from '@/components/ChromaGrid'
import React from 'react'

function Chroma() {
    const items = [
  {
    image: "https://static.zara.net/assets/public/4b38/edb4/6cb24356aa2d/7fcd855af741/09598104500-a6/09598104500-a6.jpg?ts=1765982232993&w=877",
    // title: "Sarah Johnson",
    // subtitle: "Frontend Developer",
    // handle: "@sarahjohnson",
    // borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    // url: "https://github.com/sarahjohnson"
  },
//   {
//     image: "https://i.pravatar.cc/300?img=2",
//     title: "Mike Chen",
//     subtitle: "Backend Engineer",
//     handle: "@mikechen",
//     borderColor: "#10B981",
//     gradient: "linear-gradient(180deg, #10B981, #000)",
//     url: "https://linkedin.com/in/mikechen"
//   }
];

  return (
    <div>
<div style={{ height: '', position: 'relative' }}>
  <ChromaGrid 
    items={items}
    columns={1}
    rows={1}
    radius={350}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div>

    </div>
  )
}

export default Chroma