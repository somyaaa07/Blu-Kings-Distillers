import React from 'react';
import { Beer, Droplets, Thermometer, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BreweryLanding() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [hoveredBeer, setHoveredBeer] = React.useState(null);

  const beers = [
    { 
      name: 'Hoppy Corset', 
      price: '$5.99', 
      image: 'https://i.pinimg.com/1200x/7b/86/0a/7b860a3c5a2f581d18e1093236609583.jpg',
      ingredients: ['2 oz Hoppy IPA', '1 oz Citrus Liqueur', 'Fresh Lemon', 'Ice Cubes']
    },
    { 
      name: 'Buffalo Wings', 
      price: '$7.99', 
      image: 'https://i.pinimg.com/1200x/37/ca/63/37ca63d692b2a484d0c49fc7f1270980.jpg',
      ingredients: ['2 oz Dark Ale', '1 oz Spicy Syrup', 'Cayenne Rim', 'Lime Wedge']
    },
    { 
      name: 'Springy Moon Hope', 
      price: '$6.99', 
      image: 'https://i.pinimg.com/1200x/ed/42/04/ed4204a732febac240b67eafde41cd74.jpg',
      ingredients: ['2 oz Wheat Beer', '1 oz Orange Juice', 'Honey', 'Mint Leaves']
    },
  ];

  const instructions = [
    { icon: Beer, title: 'Beer Ingredients', desc: 'High-quality malt, hops and yeast create the perfect foundation for exceptional beer.' },
    { icon: Thermometer, title: 'Best process', desc: 'Precision temperature control and timing ensure optimal flavor development.' },
    { icon: Droplets, title: 'Filtering procedure', desc: 'Advanced filtration systems remove impurities while preserving rich flavors.' },
    { icon: Clock, title: 'Widely Method', desc: 'Time-tested brewing techniques combined with modern innovation.' }
  ];


  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img 
            src="/cocktailss/banner1.png" 
            alt="Hops and beer" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen flex items-center py-20">
          <div className="max-w-3xl w-full">
            <p className="text-amber-400 text-xs sm:text-sm mb-3 sm:mb-4 tracking-widest font-bold uppercase">
              Brewed with Simple Ingredients
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              The <span className="font-serif italic font-normal">Best Ideas</span> Emerge<br className="hidden sm:block" />
              From The <span className="font-serif italic font-normal">Simplest</span><br className="hidden sm:block" />
              <span className="font-serif italic font-normal">Tools</span>
            </h1>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-light">
              Every great beer begins with simple ingredients and traditional brewing methods,
              transformed through craftsmanship into something extraordinary.
            </p>
            <button className="bg-[#040472]  text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105">
              <Link to="/contact">
              Learn More
              </Link>
            </button>
          </div>
        </div>
      
      </div>

    
      {/* Instructions Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/20">
        <div className="absolute inset-0 opacity-30 sm:opacity-50 md:opacity-80">
          <img src="/cocktailss/instruction1.svg" className="object-cover w-full h-full" alt="Background pattern"></img>
        </div>
        
        {/* Decorative elements - hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-10 lg:top-20 right-10 lg:right-20 w-40 sm:w-48 lg:w-72 h-40 sm:h-48 lg:h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-10 lg:bottom-20 left-10 lg:left-20 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-16 xl:gap-24">
            {/* Left - Title Section */}
            <div className="w-full lg:flex-shrink-0 lg:w-80 xl:w-96">
              <div>
                <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-100/80 rounded-full">
                  <span className="text-xs font-semibold text-[#040472] tracking-wider uppercase">Brewing Excellence</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#040472] leading-tight mb-2 sm:mb-3">
                  Detailed Beer
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-serif text-amber-600 mb-2">Drinking Instructions</p>
              </div>
            </div>

            {/* Right - Instructions Grid (2x2) */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                {instructions.map((item, idx) => (
                  <div key={idx} className="group relative bg-white/80 shadow-xl backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-amber-100/50">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-orange-50/0 to-amber-100/0 group-hover:from-amber-50/30 group-hover:via-orange-50/20 group-hover:to-transparent rounded-xl sm:rounded-2xl lg:rounded-3xl transition-all duration-500"></div>
                    
                    <div className="relative flex items-start gap-3 sm:gap-4 lg:gap-5">
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <item.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white relative z-10" />
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-lg sm:rounded-xl lg:rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                        </div>
                      </div>
                      <div className="flex-1 pt-0.5 sm:pt-1">
                        <h3 className="font-bold text-[#040472] mb-1.5 sm:mb-2 lg:mb-3 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg group-hover:text-blue-700 transition-colors duration-300">{item.title}</h3>
                        <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-amber-400/10 to-transparent rounded-tr-xl sm:rounded-tr-2xl lg:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Descriptions */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold font-serif text-[#040472] mb-3 sm:mb-4 tracking-tight leading-tight">
              Product Descriptions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-light px-4">
              We source and meticulously brew exceptional specialty beers from around the world and deliver
              them straight to your door, ensuring the highest quality in every glass.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {beers.map((beer, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-2xl cursor-pointer relative overflow-hidden transition-all duration-700 ease-out group"
                onMouseEnter={() => setHoveredBeer(idx)}
                onMouseLeave={() => setHoveredBeer(null)}
                onClick={() => setHoveredBeer(hoveredBeer === idx ? null : idx)}
              >
                <div className={`flex flex-col gap-4 sm:gap-5 lg:gap-6 transition-all duration-700 ease-out ${
                  hoveredBeer === idx ? 'lg:flex-row lg:items-start' : 'items-center text-center'
                }`}>
                  {/* Beer Image */}
                  <div className={`relative flex-shrink-0 transition-all duration-700 ease-out ${
                    hoveredBeer === idx ? 'w-full lg:w-28 xl:w-32' : 'w-full'
                  }`}>
                    <div className={`relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-700 ease-out ${
                      hoveredBeer === idx 
                        ? 'w-full h-40 sm:h-48 lg:w-28 lg:h-48 xl:w-32 xl:h-52' 
                        : 'w-full h-48 sm:h-56 md:h-64 lg:h-72'
                    }`}>
                      <img 
                        src={beer.image} 
                        alt={beer.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 w-full">
                    <div className={`transition-all duration-700 ease-out ${
                      hoveredBeer === idx ? 'text-center lg:text-left mb-3 sm:mb-4' : 'text-center'
                    }`}>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#040472] mb-1.5 sm:mb-2 transition-colors duration-700 group-hover:text-[#040472] tracking-tight">
                        {beer.name}
                      </h3>
                      <p className="text-amber-600 font-bold text-base sm:text-lg lg:text-xl transition-all duration-700">
                        {beer.price}
                      </p>
                    </div>

                    {/* Ingredients Section */}
                    <div 
                      className="overflow-hidden transition-all duration-700 ease-out"
                      style={{
                        maxHeight: hoveredBeer === idx ? '500px' : '0px',
                        opacity: hoveredBeer === idx ? 1 : 0,
                        transform: `translateY(${hoveredBeer === idx ? '0' : '-10px'})`,
                      }}
                    >
                      <div className="pt-3 sm:pt-4 border-t border-gray-200 mt-3 sm:mt-4">
                        <h4 className="font-black text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">
                          How to Make
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2 text-left">
                          {beer.ingredients.map((ingredient, i) => (
                            <li key={i} className="text-xs sm:text-sm text-gray-600 flex items-start transition-colors duration-300 hover:text-gray-900 font-light">
                              <span className="text-amber-600 mr-2 flex-shrink-0 font-bold">•</span>
                              <span className="leading-relaxed">{ingredient}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-gray-500 mt-3 sm:mt-4 italic font-light">
                          Mix all ingredients over ice and serve chilled
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60 sm:opacity-70">
          <img 
            src="https://i.pinimg.com/1200x/08/23/17/082317ed24267f54e0d578d1a476af99.jpg" 
            alt="Brewery" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen flex items-center py-20">
          <div className="max-w-3xl w-full">
            <p className="text-amber-400 text-xs sm:text-sm mb-3 sm:mb-4 tracking-widest font-black uppercase">
              We Brew Good Quality Beer
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              There is a story<br />
              <span className="font-serif italic font-normal">Behind Every Beer</span>
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-light">
              Each brew carries with it centuries of tradition, countless hours of perfection,
              and the passion of craftsmen dedicated to creating exceptional experiences.
            </p>
            <button className="bg-[#040472]  text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105">
              <Link to="/contact">
              Discover More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}