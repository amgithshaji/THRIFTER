import React from 'react'
import SplitText from "@/components/SplitText"
import { Link } from 'react-router-dom';

function Footer() {
    // split text
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div>
        {/* Top HR */}
  <hr className="border-gray-300 md:my-16 my-10" />
      <div style={{ fontFamily: 'Raleway, sans-serif' }} className="bg-white text-black px-6 md:px-20">



  {/* Footer Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-xs">

    {/* HELP */}
    <div>
      <h3 className="mb-6 tracking-widest uppercase text-xs">Help</h3>
      <p className="mb-4">
        A Client Advisor is available at <br />
        <span className="underline cursor-pointer">1800 103 9988</span>
      </p>
      <p className="mb-4">
        You can also <span className="underline cursor-pointer">chat</span> or{" "}
        <span className="underline cursor-pointer">email us</span>.
      </p>
      <ul className="space-y-3">
        <li className="cursor-pointer">FAQ</li>
        <li className="cursor-pointer">Product Care</li>
        <li className="cursor-pointer">Stores</li>
      </ul>
    </div>

    {/* SERVICES */}
    <div>
      <h3 className="mb-6 tracking-widest uppercase text-xs">Services</h3>
      <ul className="space-y-3">
        <li>Repairs</li>
        <li>Personalisation</li>
        <li>Art of Gifting</li>
        <li>Download our Apps</li>
      </ul>
    </div>

    {/* ABOUT */}
    <div>
      <h3 className="mb-6 tracking-widest uppercase text-xs">
        About thrifter
      </h3>
      <ul className="space-y-3">
        <li>Fashion Shows</li>
        <li>Arts & Culture</li>
        <li>Sustainability</li>
        <li>Latest News</li>
        <li>Careers</li>
        <li>Foundation Thrifter</li>
      </ul>
    </div>

    {/* CONNECT */}
    {/* <div>
      <h3 className="mb-6 tracking-widest uppercase text-xs">Connect</h3>
      <p className="mb-4">
        Sign up for Louis Vuitton emails and receive the latest news from the
        Maison, including exclusive online pre-launches and new collections.
      </p>
    </div> */}

    {/* FOLLOW */}
    <div>
      <h3 className="mb-6 tracking-widest uppercase text-xs">Follow Us</h3>
      <ul className="space-y-3">
        <li>Instagram</li>
<Link> <li className='mb-3' >Facebook</li></Link>
<Link to={"https://www.linkedin.com/in/amgith-shaji-a47849323/"}>
    <li className='mb-3' >Twitter</li>
</Link>  
      <li>YouTube</li>
      </ul>
    </div>

  </div>

  {/* Bottom HR */}
  {/* <hr className="border-gray-200 " /> */}

</div>
  <hr className="border-gray-200 mt-15 " />

  <div>
      <h3 className="md:mb-3 tracking-widest md:mt-20 mt-10 md:ms-12 ms-2 uppercase md:text-xs text-[9px]">
        © 2016 - 2025 thrifter S.p.A. - All rights reserved. SIAE LICENCE # 2294/I/1936 and 5647/I/1936

      </h3>
  </div>

<div style={{fontFamily: "Playfair Display, serif"}}>
   <SplitText
                  text="Thrifter"
                  className="md:text-[400px] text-[100px] font-semibold md:ms-7 ms-3 md:h-140 h-45 "
                  delay={100}
                  duration={0.9}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
</div>
    </div>
  )
}

export default Footer