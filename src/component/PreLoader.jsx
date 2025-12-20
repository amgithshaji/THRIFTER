import React from 'react'
import Shuffle from './Shuffle';
function PreLoader() {
  return (
    <div  className='bg-black   text-white md:text-2xl text-1xl tracking-[17px] md:tracking-[60px]  h-screen flex justify-center items-center' >
<Shuffle
  text="Thrifter"
  shuffleDirection="right"
  duration={0.65}
  animationMode="evenodd"
  shuffleTimes={4}
  ease="power2.out"
  stagger={0.16}
  threshold={0.1}
  triggerOnce={true}
  triggerOnHover={true}
  respectReducedMotion={true}
/>



    </div>
  )
}

export default PreLoader