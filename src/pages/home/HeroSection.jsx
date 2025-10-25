import React, { useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhiskyHeroSection() {
  const [isMuted, setIsMuted] = useState(true);
   window.scrollTo(0, 0);

  return (
    <div className="relative h-screen w-full overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/herosection/Banner3.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/70 to-black/90 opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 z-10">
        <div className="max-w-7xl mx-auto space-y-5">
          {/* Subtitle */}
          <div className="animate-fade-in">
            <p className="text-amber-400 text-sm md:text-base tracking-[0.3em] uppercase font-light mb-2">
              Est. 1825
            </p>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-tight">
              Crafted for<br />
              <span className="font-bold ">Connoisseurs</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fade-in-delayed">
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Experience the finest single malt whisky, aged to perfection in oak barrels. 
              Each bottle tells a story of tradition, patience, and unparalleled craftsmanship.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-1 animate-fade-in-delayed-more">
            
            <button className="group relative px-10 py-4 bg-white text-gray-900 text-sm tracking-widest uppercase font-medium overflow-hidden transition-all duration-500 hover:text-white">
              <Link to="/products/black-and-black-whisky">
              <span className="relative z-10">Explore Collection</span>
              </Link>
              <div className="absolute inset-0 bg-amber-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            
            
            <Link to="/crafts">
            <button className="px-10 py-4 border-2 border-white text-white text-sm tracking-widest uppercase font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
              Our Crafting
            </button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

    

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 hidden lg:block">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      </div>
      
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed {
          animation: fade-in-up 1s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed-more {
          animation: fade-in-up 1s ease-out 0.9s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}