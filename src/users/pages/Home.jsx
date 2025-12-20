import React from 'react'
import TextPressure from "@/components/TextPressure"
import ShinyText from "@/components/ShinyText"

function Home() {
  return (
    <div className=' bg-white'  >

<div className='grid grid-cols-2' >
     <div className=" flex items-center justify-center flex-col  md:mt-60 mt-25">
      <TextPressure 
      text="THRIFTER"
      textColor='black' 
        fontSize={54}
          fontWeight={800}
      />
<div>
  

 <div className='mb-50'>
    <ShinyText 
      text="Just some shiny text!" 
      speed={3} 
      className='custom-class' 
    />
 </div>


  
</div>
    </div>
  
    <div>
<div className='md:ms-20 ms-4 '>
        <img className=' me-6 md:h-150 h-80 w-160 object-cover object-top'  src="https://i.pinimg.com/1200x/bc/63/dd/bc63dde14b5ff98b314601718e12e4ec.jpg" alt="no img" />
  <div className='md:mt-13 mt-4 flex  '>
  <p style={{  fontFamily: 'Raleway, sans-serif'}} className='md:text-base text-xs italic'>Founder:<br />RETRO PREPPY</p>
  <p style={{fontFamily:"Playfair Display, serif"}} className='md:me-10 me-1 md:text-2xl text-xs italic'> one of everything<br />really good</p>
</div>  
</div>  

</div>
</div>


    

 </div>

  )
}

export default Home