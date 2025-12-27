import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '@/component/Footer'

function ClothDetails() {
    return (
        <div>
            <Header />
            <div style={{ fontFamily: 'Raleway, sans-serif' }}>
                <div className='grid md:grid-cols-2 grid-cols-1 h-screen md:ms-55 ms-4 gap-30' >
                    <div>
                        <img className=' me-30 md:mt-1 mt-25  md:h-210 h-130 md:w-143 w-89 object-cover object-top relative ' src="https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg?ts=1765983610422&w=1024" alt="no img" />
                    </div>
                    <div>
                        <div className=' md:mt-50  md:me-45 me-5'>
                            <div>
                                <p className='text-[18px] font-light uppercase' >SUPIMA® COtTON T-SHIRT</p>
                                <p className='text-[18px] font-light uppercase' >₹ 2000.00</p>
                                <p className='text-[10px] font-light mt-1 tracking-[1px] uppercase' >MRP INCL. ALL TAXES</p>
                                <hr className='mt-10  border-black' />
                                <p className='text-[11px] font-base mt-9 uppercase' >WHITE | 2000/100/100. </p>
                                <button className="w-full border mt-8 border-black py-3 text-xs tracking-widest uppercase hover:text-gray-700 transition cursor-pointer">
                                    ADD
                                </button>

                                <p className="mt-8 text-[13px] tracking-widest uppercase leading-relaxed">
                                    Slim fit - round neck - regular length - extra long sleeve
                                </p>
                                <p className=" text-[13px] mt-6 leading-relaxed">
                                    T-shirt made in 100% Supima cotton yarn. Featuring a round neck and
                                    extra long sleeves. Straight hem.
                                </p>
                                <div className="space-y-4 text-xs tracking-widest uppercase mt-6">
                                    <p>Product size available</p>
                                    <p className='font-semibold text-[13px]  ' >m</p>
                                    <p>Exchange,return available</p>
                                    <Link to={'/seller'}>
                                        <p className='uppercase cursor-pointer' >seller details</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* grid 2 */}
                <div className='grid md:grid-cols-2 grid-cols-1   md:ms-7 ms-4 md:gap-30 gap-1' >
                    <div className=' md:mt-50 mt-100  md:me-45 me-5'>
                        <div className="md:ms-25 text-[11px] tracking-widest  md:mt-180 mt-10">
                            <p className='uppercase' >Outershell</p>
                            <p className='uppercase' >main fabric</p>
                            <p className='' >95% cotton</p>
                            <p className='' >5% elastane</p>

                            <p className='uppercase' >secondary fabric</p>
                            <p className='' >100% viscose</p>
                        </div>
                    </div>
                    {/* img */}
                    <img className=' md:me-70 me-80 md:mt-50   md:h-210 h-134 md:w-143  object-cover object-top relative ' src="https://static.zara.net/assets/public/03ed/9e99/f63146bbb944/d7aac0184b04/02298603712-a3/02298603712-a3.jpg?ts=1765983791129&w=750" alt="no img" />
                </div>
                {/* grid 3 */}
                <div className='grid md:grid-cols-2 grid-cols-1   mt-5 ms-4 md:gap-0 gap-5' >
                    <div className=''>
                        <img className=' md:ms-20 me-80 md:mt-50   md:h-210 h-134 md:w-143  object-cover object-top relative ' src="https://static.zara.net/assets/public/4eb8/744f/0144486687b8/28298abba873/02298603712-p/02298603712-p.jpg?ts=1765983791430&w=1024" alt="no img" />
                    </div>
                    {/* img */}
                    <img className=' md:ms-5 me-80 md:mt-50  md:h-210 h-134 md:w-143  object-cover object-top relative ' src="https://static.zara.net/assets/public/26a0/ccd8/640c4ebd931c/f5df29ca5ac3/02298603712-a1/02298603712-a1.jpg?ts=1765983791455&w=1125" alt="no img" />
                </div>
                {/* grid-4 */}
                <div className='grid md:grid-cols-2 grid-cols-1    ms-4 md:gap-0 gap-5' >
                    <div className=''>
                        <img className=' md:ms-20 me-80 md:mt-30 mt-5   md:h-210 h-134 md:w-143  object-cover object-top relative ' src="https://static.zara.net/assets/public/c62d/4427/3dba406bb926/f97288e0a92e/02298603712-a2/02298603712-a2.jpg?ts=1765983791636&w=750" alt="no img" />
                    </div>
                    {/* img */}
                    <img className=' md:ms-5 me-80 md:mt-30  md:h-210 h-134 md:w-143  object-cover object-top relative ' src="https://static.zara.net/assets/public/6528/dda0/1dee452ba974/431cf30ead53/02298603712-a4/02298603712-a4.jpg?ts=1765983790953&w=750" alt="no img" />
                </div>
                {/* grid 5 */}
                <div className='grid md:grid-cols-2 grid-cols-1    ms-4 md:gap-0 gap-5' >
                    <div className=''>
                        <img className=' md:ms-20 me-80 md:mt-30 mt-5  md:h-210 h-134 md:w-143  object-cover object-top relative ' src="https://static.zara.net/assets/public/0576/8d16/4f4e4fbab7a5/fcaa83ed2f9b/02298603712-e1/02298603712-e1.jpg?ts=1761823339325&w=750" alt="no img" />
                    </div>
                    {/* img */}

                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default ClothDetails