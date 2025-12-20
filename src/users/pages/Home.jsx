import React from 'react'
import TextPressure from "@/components/TextPressure"
import ShinyText from "@/components/ShinyText"
import StaggeredMenu from '@/components/StaggeredMenu'

function Home() {
  const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Login', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

  return (

<div className='h-auto'>

       <StaggeredMenu
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
    />


  <div className='grid md:grid-cols-2 grid-cols-1 ' >
       <div className=" flex items-center justify-center flex-col  md:mt-60 mt-30  ">
        <TextPressure 
        text="THRIFTER"
        textColor='black' 
          fontSize={54}
            minfontWeight={800}
            minFontSize={100}
        />
  <div>
    
  
  <div style={{fontFamily:"Playfair Display, serif"}} className=' md:mb-5 mb-5 md:mt-1 mt-2 md:me-60 me-35 italic '>
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
  <div className='md:ms-20 ms-4 relative group'>
          <img className=' me-6  md:h-150 h-80 md:w-160 w-89 object-cover object-top relative '  src="https://i.pinimg.com/1200x/bc/63/dd/bc63dde14b5ff98b314601718e12e4ec.jpg" alt="no img" />
          <button  style={{fontFamily:"Playfair Display, serif"}}  className=' md:text-sm text-xs absolute md:left-124 left-57  md:top-139 top-71 -translate-x-1/9 -translate-y-1/9 border border-black text-black cursor-pointer px-6 py-1 md:hover:border-white hover:border-white md:hover:text-white hover:text-white  active:border-white active:text-white  '   transition-all duration-300 ease-out >View product</button>
    <div className='md:mt-13 mt-4 flex  '>
    <p style={{  fontFamily: 'Raleway, sans-serif'}} className='md:text-base text-xs italic'>Founder:<br />RETRO PREPPY</p>
    <p style={{fontFamily:"Playfair Display, serif"}} className='md:me-10 me-5 md:text-2xl text-xs italic'> one of everything<br />really good</p>
  </div>  
  </div>  
  
  </div>
  </div>
  
  
      
  
</div>

  )
}

export default Home