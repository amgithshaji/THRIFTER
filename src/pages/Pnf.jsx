import React from 'react';
import { Link } from 'react-router-dom';

function Pnf() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-white text-black overflow-hidden font-sans uppercase">
      
      {/* Editorial Watermark Background */}
      <span className="absolute inset-0 flex items-center justify-center text-[25vw] font-black opacity-[0.03] select-none pointer-events-none z-0">
        THRIFTER
      </span>

      <div className="relative z-10 text-center px-6">
        {/* Massive 404 Header */}
        <h1 className="text-[120px] md:text-[220px] font-bold tracking-tighter leading-none m-0">
          404
        </h1>
        
        <div className="mt-10 flex flex-col items-center">
          <h2 className="text-sm tracking-[0.3em] font-medium mb-4">
            Page Not Found
          </h2>
          
          <p className="text-[10px] tracking-widest max-w-[280px] leading-relaxed text-gray-500 mb-12">
            THE ITEM YOU ARE LOOKING FOR IS NO LONGER IN OUR COLLECTION OR HAS BEEN ARCHIVED.
          </p>
          
          {/* Zara-style Button */}
          <Link 
            to="/" 
            className="border border-black px-10 py-3 text-[11px] tracking-[0.2em] hover:bg-black hover:text-white transition-colors duration-300"
          >
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Decorative Editorial Footer */}
      <div className="absolute bottom-10 left-10 flex gap-10 text-[9px] tracking-[0.4em] opacity-40">
        <span>ST/P 2026</span>
        <span className="hidden md:block">EDITION 04 — ARCHIVE</span>
      </div>

      <div className="absolute bottom-10 right-10 text-[9px] tracking-[0.4em] opacity-40 hidden md:block">
        © THRIFTER STORE
      </div>
    </div>
  );
}

export default Pnf;