import React, { useState } from 'react';4
import { Link } from 'react-router-dom';

export default function WhiskyGallery() {
  const [selectedWhisky, setSelectedWhisky] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const whiskies = [
    {
      id: 1,
      name: "Highland Single Malt",
      description: "Rich and complex Scottish whisky",
      region: "Scotland - Highland",
      link: "/gallery",
      image: "glry-img/glry1.jpeg",
      hoverImage: "glry-img/glry-img1.jpeg",
      imageCount: 12
    },
    {
      id: 2,
      name: "Islay Peated",
      description: "Smoky and full-bodied Scotch",
      region: "Scotland - Islay",
      link: "/gallery",
      image: "glry-img/glry2.jpeg",
      hoverImage: "glry-img/glry-img2.jpeg",
      imageCount: 11
    },
    {
      id: 3,
      name: "Speyside Smooth",
      description: "Elegant and fruity expression",
      region: "Scotland - Speyside",
      link: "/gallery",
      image: "glry-img/glry3.jpeg",
      hoverImage: "glry-img/glry-img3.jpeg",
      imageCount: 10
    },
    {
      id: 4,
      name: "Bourbon Reserve",
      description: "Premium American whiskey",
      region: "Kentucky - USA",
     link: "/gallery",
      image: "glry-img/glry4.jpeg",
      hoverImage: "glry-img/glry-img4.jpeg",
      imageCount: 13
    },
    {
      id: 5,
      name: "Irish Whiskey",
      description: "Smooth and mellow Irish classic",
      region: "Ireland",
      link: "/gallery",
      image: "glry-img/glry5.jpeg",
      hoverImage: "glry-img/glry-img5.jpeg",
      imageCount: 9
    },
    {
      id: 6,
      name: "Rye Whiskey",
      description: "Spicy and bold American rye",
      region: "Pennsylvania - USA",
      link: "/gallery",
      image: "glry-img/glry6.jpeg",
      hoverImage: "glry-img/glry-img6.jpeg",
      imageCount: 11
    },
  ];

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF', fontFamily: 'Georgia, serif' }}>
      {/* Hero Header */}
      <header className="relative py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight" style={{ color: '#040472', fontFamily: 'Georgia, serif' }}>
              Premium Collection
            </h1>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: '#040472', fontFamily: 'Georgia, serif' }}>
              Discover the finest whisky selections from around the world
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, #040472)' }}></div>
              <span className="text-sm tracking-widest uppercase" style={{ color: '#040472', fontFamily: 'Georgia, serif' }}>Curated Excellence</span>
              <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, #040472)' }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="p-4 sm:p-8" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl px-2 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whiskies.map((whisky) => (
              <div
                key={whisky.id}
                className="group cursor-pointer touch-manipulation block"
                onClick={() => handleCardClick(whisky.id)}
              >
                <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${activeCard === whisky.id ? 'card-active' : ''}`} style={{ backgroundColor: '#FFFFFF' }}>
                  {/* Image Container */}
                  <div className="absolute inset-0">
                    <img
                      src={whisky.image}
                      alt={whisky.name}
                      className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-0 ${activeCard === whisky.id ? 'scale-110 opacity-0' : ''}`}
                    />
                    <img
                      src={whisky.hoverImage}
                      alt={whisky.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 ${activeCard === whisky.id ? 'opacity-100 scale-100' : ''}`}
                    />
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out ${activeCard === whisky.id ? 'translate-x-full' : ''}`}
                         style={{
                           background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                           width: '100%'
                         }}>
                    </div>
                  </div>

                  {/* Always visible Black Gradient for text readability */}
                  <div 
                    className="absolute inset-0" 
                    style={{ 
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5), transparent)' 
                    }}
                  ></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif' }}>
                    {/* Image Count Badge */}
                    <div className={`absolute top-6 right-6 px-4 py-2 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 ${activeCard === whisky.id ? 'opacity-100 translate-y-0' : ''}`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium">{whisky.imageCount}</span>
                    </div>

                    {/* Region Tag */}
                    <div className="mb-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase" style={{ backgroundColor: '#E8EAFF', color: '#040472', fontFamily: 'Georgia, serif' }}>
                        {whisky.region}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif' }}>
                      {whisky.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100" style={{ color: '#E8EAFF', fontFamily: 'Georgia, serif' }}>
                      {whisky.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to ="/gallery">
          <div className="text-center py-12">
            <div className="inline-flex items-center group cursor-pointer">
              <div className="bg-blue-900 px-10 py-5 hover:bg-blue-950 transition-all duration-300 group-hover:shadow-2xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <span className="text-white font-light tracking-[0.2em] uppercase text-sm">
                    View Full Gallery
                  </span>
                  <svg className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
}