import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '@/component/Footer';

function About() {
  return (
    <>
    <Header/>
        <div className="bg-white text-black font-sans uppercase md:mt-20">
          {/* Hero Section - Large Statement */}
          <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-20 border-b border-gray-100">
            <h1 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter leading-[0.85] mb-10">
              Giving <br /> Clothes <br /> New Life.
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-end">
              <p className="text-[10px] tracking-[0.2em] max-w-sm leading-relaxed text-gray-500">
                THRIFTER IS A CURATED SPACE FOR ARCHIVAL PIECES AND CONTEMPORARY SECOND-HAND FASHION. WE BELIEVE IN THE PATINA OF TIME AND THE POWER OF SUSTAINABILITY.
              </p>
              <span className="text-[9px] tracking-[0.5em] opacity-40 mt-10 md:mt-0">
                EST. 2026 / COLLECTION 01
              </span>
            </div>
          </section>
    
          {/* Philosophy Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Image Placeholder / Aesthetic Block */}
            <div className="h-[60vh] md:h-screen bg-gray-100 flex items-center justify-center relative overflow-hidden">
              <span className="absolute text-[15vw] font-black text-white mix-blend-difference opacity-20 rotate-90">
                STORY
              </span>
              <div className="z-10 text-center">
                <p className="text-xs tracking-[0.3em]">The Thrifter Philosophy</p>
              </div>
            </div>
    
            {/* Right Side - Text Content */}
            <div className="flex flex-col justify-center px-10 md:px-24 py-20 border-l border-gray-100">
              <div className="mb-20">
                <h3 className="text-xl font-semibold tracking-tighter mb-4">01 / Curated Selection</h3>
                <p className="text-[11px] tracking-widest leading-loose text-gray-600 lowercase">
                  Every item in our store is hand-selected. We don't just sell clothes; we curate a history. From 90s minimalism to avant-garde silhouettes.
                </p>
              </div>
    
              <div className="mb-20">
                <h3 className="text-xl font-semibold tracking-tighter mb-4">02 / Conscious Loop</h3>
                <p className="text-[11px] tracking-widest leading-loose text-gray-600 lowercase">
                  Fashion should be circular. By thrifting, you are participating in a movement that reduces waste without compromising on aesthetic excellence.
                </p>
              </div>
    
              <div>
                <h3 className="text-xl font-semibold tracking-tighter mb-4">03 / The Archive</h3>
                <p className="text-[11px] tracking-widest leading-loose text-gray-600 lowercase">
                  Our archive is constantly evolving. We search the globe for pieces that stand the test of trend-cycles and fast-fashion fatigue.
                </p>
              </div>
            </div>
          </section>
    
          {/* Footer Call to Action */}
          <section className="py-40 text-center px-6">
            <h2 className="text-2xl md:text-4xl tracking-tighter font-medium mb-8">
              JOIN THE REVOLUTION.
            </h2>
            <Link to={'/cloth'} className="border border-black px-12 py-4 text-[10px] tracking-[0.3em] hover:bg-black hover:text-white transition-all">
              VIEW COLLECTIONS
            </Link>
          </section>
        </div>
        <Footer/>
    </>
  );
}

export default About;