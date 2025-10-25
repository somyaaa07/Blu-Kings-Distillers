import React, { useState } from 'react';
import { Wine, Droplets, Award, Clock, MapPin } from 'lucide-react';

const WineWhiskyAbout = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const collection = [
    { 
      name: 'Macallan 18 Year', 
      category: 'Single Malt Scotch', 
      region: 'Scotland',
      year: '2005',
      rating: 4.8,
      price: '$299'
    },
    { 
      name: 'Château Margaux', 
      category: 'Bordeaux Red', 
      region: 'France',
      year: '2015',
      rating: 4.9,
      price: '$850'
    },
  ];
 window.scrollTo(0, 0);
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header Banner */}
      <div className="relative mb-0 overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://i.pinimg.com/736x/d8/17/c7/d817c72debc5945ac60f333df18c8753.jpg)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex items-center px-4 sm:px-8 md:px-16 lg:px-12 max-w-7xl mx-auto">
          <div className="text-left -mt-10 sm:-mt-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 text-white tracking-tight font-serif">
              About Us
            </h1>
            <div className="w-12 sm:w-16 mb-4 h-[3px] bg-red-500"></div>
            <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed max-w-md">
              See your indulgent as this, he occasional admittance unreserved<br className="hidden sm:block" />
              friendship: unfeeling as. Is voice seemed to. Settling of goodness<br className="hidden sm:block" />
              felicity. Elderly it among as sense. Waited his if spoke no juvenile.
            </p>
          </div>
        </div>

        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none h-[80px] sm:h-[100px] md:h-[110px]">
          <svg className="relative block w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path d="M0,80 C320,20 640,20 960,80 C1120,110 1280,110 1440,80 L1440,150 L0,150 Z" fill="white" stroke="none"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 border-b border-gray-300 justify-center sm:justify-start">
          {['overview', 'collection', 'heritage'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-2 font-serif text-sm transition-all ${
                activeTab === tab ? 'border-b-2' : 'hover:text-gray-500'
              }`}
              style={{
                color: activeTab === tab ? '#040472' : '#6b7280',
                borderBottomColor: activeTab === tab ? '#040472' : 'transparent'
              }}
            >
              {tab.replace('-', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl p-4 sm:p-6 md:p-10 border-2 border-gray-100 flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Left Side */}
          <div className="flex-1 order-2 md:order-1">
            {activeTab === 'overview' && (
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-serif flex items-center gap-2 sm:gap-3 text-[#040472]">
                    <Wine size={24} className="sm:!w-32 sm:!h-32" />
                    A Legacy of Excellence
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-lg">
                    <p className="text-gray-700 leading-relaxed border-l-4 pl-3 sm:pl-4" style={{ borderColor: '#040472' }}>
                      For over three decades, we've been guardians of the world's most prestigious spirits and wines. Our collection represents a careful curation of heritage, craftsmanship, and the pursuit of perfection.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Each bottle in our collection tells a story—of ancient vineyards, master distillers, and the timeless art of fermentation and aging. We believe that exceptional spirits are not just beverages; they are experiences to be savored.
                    </p>
                  </div>
                </div>

                {/* Expertly Sourced & Award Winning Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white rounded-xl p-4 sm:p-6 border-2 border-gray-200 hover:shadow-xl transition-all hover:scale-105" style={{ borderTopColor: '#040472', borderTopWidth: '4px' }}>
                    <Droplets className="mb-2 sm:mb-3" size={24} style={{ color: '#040472' }} />
                    <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2" style={{ color: '#040472' }}>Expertly Sourced</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Direct relationships with distilleries and vineyards worldwide</p>
                  </div>

                  <div className="bg-white rounded-xl p-4 sm:p-6 border-2 border-gray-200 hover:shadow-xl transition-all hover:scale-105" style={{ borderTopColor: '#040472', borderTopWidth: '4px' }}>
                    <Award className="mb-2 sm:mb-3" size={24} style={{ color: '#040472' }} />
                    <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2" style={{ color: '#040472' }}>Award Winning</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Recognition from international spirit competitions</p>
                  </div>
                </div>

                <div className="rounded-xl p-4 sm:p-6 mt-6 sm:mt-8" style={{ backgroundColor: '#040472' }}>
                  <p className="text-white text-center text-sm sm:text-lg font-serif italic">
                    "Where tradition meets excellence in every bottle"
                  </p>
                </div>
              </div>
            )}

            {/* Collection Tab */}
            {activeTab === 'collection' && (
              <div className="space-y-6 sm:space-y-8">
                {collection.map((item, i) => (
                  <div 
                    key={i} 
                    className="relative bg-white p-4 sm:p-6 transition-all duration-300 hover:shadow-xl group rounded-xl border-2 border-gray-200"
                  >
                    <div className="absolute top-0 left-4 sm:left-6 transform -translate-y-1/2 bg-white px-2 sm:px-3">
                      <span className="text-xs sm:text-sm font-serif tracking-widest" style={{ color: '#040472' }}>
                        VINTAGE {item.year}
                      </span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                      <div className="md:w-1/3 flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl">
                        <div className="relative w-full h-40 sm:h-48 flex items-center justify-center">
                          <Wine size={100} style={{ color: '#040472', opacity: 0.15 }} className="absolute" />
                        </div>
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="mb-3">
                            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-1 font-semibold">{item.category}</p>
                            <h3 className="text-lg sm:text-2xl font-serif mb-1 sm:mb-2" style={{ color: '#040472' }}>{item.name}</h3>
                            <div className="w-12 h-px" style={{ backgroundColor: '#040472' }}></div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                            <div className="text-center p-2 sm:p-3 border border-gray-200 rounded">
                              <MapPin size={16} style={{ color: '#040472' }} className="mx-auto mb-1" />
                              <p className="text-[9px] sm:text-xs text-gray-400 uppercase tracking-wide mb-1">Origin</p>
                              <p className="font-serif text-xs sm:text-sm font-semibold" style={{ color: '#040472' }}>{item.region}</p>
                            </div>
                            <div className="text-center p-2 sm:p-3 border border-gray-200 rounded">
                              <Clock size={16} style={{ color: '#040472' }} className="mx-auto mb-1" />
                              <p className="text-[9px] sm:text-xs text-gray-400 uppercase tracking-wide mb-1">Vintage</p>
                              <p className="font-serif text-xs sm:text-sm font-semibold" style={{ color: '#040472' }}>{item.year}</p>
                            </div>
                            <div className="text-center p-2 sm:p-3 border border-gray-200 rounded">
                              <Award size={16} style={{ color: '#040472' }} className="mx-auto mb-1" />
                              <p className="text-[9px] sm:text-xs text-gray-400 uppercase tracking-wide mb-1">Rating</p>
                              <p className="font-serif text-xs sm:text-sm font-semibold" style={{ color: '#040472' }}>{item.rating}/5.0</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Heritage Tab */}
            {activeTab === 'heritage' && (
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4 sm:mb-6 text-[#040472]">Our Heritage</h2>
                <div className="rounded-2xl p-4 sm:p-8 shadow-lg" style={{ backgroundColor: '#040472' }}>
                  <p className="text-sm sm:text-xl text-white italic leading-relaxed text-center font-serif">
                    "To celebrate the art of distillation and viticulture, bringing the world's finest spirits and wines to connoisseurs who appreciate true craftsmanship."
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center items-center mt-6 md:mt-0">
            {activeTab === 'overview' && (
              <img 
                src="https://i.pinimg.com/736x/d8/17/c7/d817c72debc5945ac60f333df18c8753.jpg" 
                alt="Wine and Whisky Collection" 
                className="w-full max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] object-cover rounded-2xl shadow-2xl"
              />
            )}
            {activeTab === 'collection' && (
              <img 
                src="https://i.pinimg.com/1200x/eb/7b/3e/eb7b3e2afac11129499531d12622569d.jpg" 
                alt="Premium Whisky Bottles" 
                className="w-full max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] object-cover rounded-2xl shadow-2xl"
              />
            )}
            {activeTab === 'heritage' && (
              <img 
                src="https://i.pinimg.com/1200x/6a/09/5a/6a095ac2b2421a9f327ee8f6c490ecc9.jpg" 
                alt="Oak Barrels Aging" 
                className="w-full max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] object-cover rounded-2xl shadow-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineWhiskyAbout;
