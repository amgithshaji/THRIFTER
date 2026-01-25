import React, { useRef, useState } from 'react'
import TextPressure from "@/components/TextPressure"
import ShinyText from "@/components/ShinyText"
import { GoMute, GoUnmute } from "react-icons/go";
import SplitText from "@/components/SplitText"
import StarBorder from "@/components/StarBorder"
import Logo from '@/component/Logo';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Footer from '@/component/Footer';
import Magnet from '@/component/Magnet';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import ProductCarousel from './ProductCarousel';


function Home() {

  const videoRef = useRef();
  const [muted, setMuted] = useState(true);
  // split text
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  // const menuItems = [
  //   { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  //   { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  //   { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  //   { label: 'Login', ariaLabel: 'Get in touch', link: '/contact' }
  // ];

  // const socialItems = [
  //   { label: 'Twitter', link: 'https://twitter.com' },
  //   { label: 'GitHub', link: 'https://github.com' },
  //   { label: 'LinkedIn', link: 'https://linkedin.com' }
  // ];
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !muted;
    setMuted(!muted);
  };

const testimonials = [
  {
    quote: "I’ve tried thrifting on Instagram and random websites, but Thrifter honestly feels different. Everything is well-organized, the pieces feel curated, and I actually enjoy scrolling instead of feeling overwhelmed. Found some amazing streetwear pieces at prices I couldn’t believe.",
    name: "Aarav",
    title: "Streetwear Buyer",
  },
  {
    quote: "As someone who wanted to sell clothes without the headache of constant DMs, Thrifter was a relief. Uploading products was simple, the interface looks clean, and my items got visibility quickly. It feels like a proper marketplace, not just another resale page.",
    name: "Meera",
    title: "Verified Seller",
  },
  {
    quote: "What I love most is the vibe. Thrifter doesn’t feel cheap or cluttered like many thrift platforms. It feels intentional and aesthetic. I’ve picked up vintage jackets and unique pieces that I’d never find in normal stores.",
    name: "Rohan",
    title: "Vintage Collector",
  },
  {
    quote: "Shopping sustainably usually feels boring, but Thrifter somehow makes it exciting. Knowing that I’m reusing fashion while still staying on trend is a win. It’s become my go-to place whenever I’m looking for something unique.",
    name: "Ananya",
    title: "Eco-Conscious Shopper",
  },
  {
    quote: "From browsing clothes to adding items to my wishlist, everything feels smooth and premium. It doesn’t feel like a student project at all. Thrifter genuinely feels like a platform I’d keep using long-term.",
    name: "Karthik",
    title: "Regular Buyer",
  },
];


  return (

   <div className=''>
{/* <div className='sticky md:top-11 top-2 z-20 '>
   <div className="w-full max-w-2xl md:py-2  md:mt-10 mt-2 md:ms-230 ms-50 md:px-60 relative  ">
    <input
      type="text"
      placeholder="SEARCH"
      className=" hidden sm:block w-full bg-transparent outline-none text-[11px] tracking-[0.2em] uppercase placeholder-black pr-6"
    />
  
    <div className="hidden sm:block h-px md:w-full w-45 bg-black"></div>
  
  <button>
      <IoIosSearch className="hidden sm:block absolute md:ms-45 ms-15 md:bottom-9 bottom-7 text-base " />
        <IoIosSearch className="block md:hidden md:ms-45 ms-15 md:bottom-9 bottom-7 text-xl mt-12" />
  
  </button>
  </div>
</div> */}

      <div className=''>
  <Header/>
        {/* <StaggeredMenu
          position="fixed"
          items={menuItems}
          socialItems={socialItems}
          isFixed={true}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#000"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl="./logo2.png"
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        /> */}
       
  
  
        <div className='grid md:grid-cols-2 grid-cols-1 h-screen' >
          <div className=" flex items-center justify-center flex-col  md:mt-60 mt-30  ">
              <TextPressure
              className=''
                text="THRIFTER"
                textColor='black'
                fontSize={54}
                minfontWeight={800}
                minFontSize={100}
              />
            <div>
  
  
              <div style={{ fontFamily: "Playfair Display, serif" }} className=' md:mb-5 mb-5 md:mt-1 mt-2 md:me-60 me-35 italic '>
                <div className='md:text-4xl text-base font-bold'>
                  <ShinyText
                    text="Welcome to Thrifter"
                    speed={3}
                    className='custom-class'
                  />
                </div>
                <div className=' italic md:text-2xl text-xs font-medium '>
                  <ShinyText
                    text="This is your premium fashion destination."
                    speed={3}
                    className='custom-class'
                  />
                </div>
  
  
              </div>
  
  
  
            </div>
          </div>
  
          <div>
            <div className='md:ms-20 md:me-1 me-1 relative group'>
              {/* <img className=' me-6  md:h-150 h-80 md:w-160 w-89 object-cover object-top relative ' src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg?ts=1765983610422&w=1024" alt="no img" />
            <Link to={'clothdetails'}>  <button style={{ fontFamily: "Playfair Display, serif" }} className=' md:text-sm text-xs absolute md:left-124 left-57  md:top-139 top-71 -translate-x-1/9 -translate-y-1/9 border border-black text-black cursor-pointer px-6 py-1 md:hover:border-yellow-50 hover:border-yellow-50 md:hover:text-yellow-50 hover:text-yellow-50  active:border-white active:text-white   transition-all duration-300 ease-out' >View product</button></Link> */}
            <ProductCarousel/>
              <div className='md:mt-13 mt-4 flex  '>
                <p style={{ fontFamily: 'Raleway, sans-serif' }} className='md:text-base text-xs italic'>Founder:<br />AMGITH SHAJI</p>
                <p style={{ fontFamily: "Playfair Display, serif" }} className='md:me-10 me-5 md:text-2xl text-xs italic'> one of everything<br />really good</p>
              </div>
            </div>
  
          </div>
        </div>
        {/* bg video */}
        <div className="relative h-screen w-full overflow-hidden">
  
          <video className="absolute inset-0 w-full h-full object-cover" ref={videoRef}
            autoPlay muted loop playsInline>
            <source src="/bgvideo.mp4" type="video/mp4" />
          </video>
  
          {/* Optional overlay */}
          {/* <div className="absolute inset-0 bg-black/50 z-10"></div> */}
  
          {/* Content */}
          <div className="relative z-20  ">
            <h1 style={{ fontFamily: "Playfair Display, serif" }} className="text-white  tracking-widest">
  
              <SplitText
                text="Thrifter"
                className="md:text-[400px] text-[100px] font-bold"
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
              <div className='flex flex-col md:mt-1 mt-145  '>
                <ShinyText
  
                  text="Not Your Ordinary"
                  speed={5}
                  className='custom-class md:text-3xl text-2xl md:ms-40 ms-10'
                />
                <ShinyText
  
                  text=" Clothing Store."
                  speed={5}
                  className='custom-class md:text-3xl text-2xl md:ms-30 ms-5'
                />
                <ShinyText
  
                  text="- Thrifter"
                  speed={5}
                  className='custom-class md:text-1xl text-base md:ms-75 ms-42 italic md:mt-5 mt-3'
                />
              </div>
            </h1>
          </div>
          {/* Mute / Unmute Button */}
          <button onClick={toggleMute} className="absolute z-30 bottom-6 right-6 ">
            {muted ? < GoMute size={19} /> : <GoUnmute size={19} />}
          </button>
        </div>
        <div>
          <div className='text-center md:mt-10 mt-7 ' >
            <h1 style={{ fontFamily: "Playfair Display, serif" }}  >
          <SplitText
                text="New Drop"
                className="md:text-[60px] text-[30px]"
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
  
            </h1>
          </div>
     <div style={{ fontFamily: "Playfair Display, serif" }}  className='text-center ' >
        {/* <img
          className=" md:mt-20 mt-5 md:ms-100 ms-14 md:h-95  h-40 md:w-180 w-70  object-center object-cover"
          src="https://i.pinimg.com/736x/fc/b8/f7/fcb8f7c246d81ad733ecb907dd52a344.jpg"
          alt="no img"
        /> */}
          <Link to={'cloth'}>

    <video
    className="md:mt-10 mt-4 md:ms-100 ms-14 md:h-95  h-40 md:w-180 w-70  object-center object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/discovercloth.mp4" type="video/mp4" />
  </video>
   

    <Magnet padding={100} disabled={false} magnetStrength={5}>
       <StarBorder
      as="button"
      className="custom-class md:mt-15 mt-8 "
      color="red"
      speed="5s"
    >
     Discover the Selection
    </StarBorder>
</Magnet>

  </Link>
  
     </div>
     <div className='md:mt-20 mt-5'>
        <div style={{ fontFamily: "Playfair Display, serif" }} className=' md:mb-20 mb-5 md:mt-1 mt-2 text-center '>
                <div className='md:text-4xl text-base font-bold'>
                  <ShinyText
                    text="Brand that collaborate with us"
                    speed={3}
                    className='custom-class'
                  />
                </div>
                <div className=' italic md:text-2xl text-xs font-medium '>
                  <ShinyText
                    text="The premium fashion destination for genz"
                    speed={3}
                    className='custom-class'
                  />
                </div>
  
  
              </div>
    <Logo/>
  
     </div>
  </div>


       <div className='md:mt-20 mt-5'>
        <div style={{ fontFamily: "Playfair Display, serif" }} className=' md:mb-20 mb-5 md:mt-1 mt-2 text-center '>
                <div className='md:text-4xl text-base font-bold'>
                  <ShinyText
                    text="Loved by thousands of people
"
                    speed={3}
                    className='custom-class'
                  />
                </div>
                <div className=' italic md:text-2xl text-xs font-medium '>
                  <ShinyText
                    text="Here's what some of our users 
                    have to say about Thrifter"
                    speed={3}
                    className='custom-class'
                  />
                </div>
  
  
              </div>
    <div>
<InfiniteMovingCards
  items={testimonials}
  direction="left"
  speed="slow"
/>
  </div>
     </div>

        </div>

        <Footer/>

   </div>

  )
}

export default Home