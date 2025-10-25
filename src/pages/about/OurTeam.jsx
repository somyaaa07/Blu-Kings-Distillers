import React from 'react';
import { Wine, Droplet, Award, Package } from 'lucide-react';

export default function OurJourney() {
  const journeySteps = [
    {
      icon: Wine,
      iconBg: 'bg-blue-500',
      borderColor: 'border-blue-500',
      barBg: 'bg-blue-500',
      side: 'left',
      year: '1850',
      title: 'The Beginning',
      description:
        'Our story began in the beautiful hills of Tuscany, where a small family with a deep love for winemaking planted their first vineyard. Every grape was handpicked with care, and every bottle reflected their passion and dedication. What started as a humble dream soon turned into a lasting legacy of craftsmanship and tradition.'
    },
    {
      icon: Droplet,
      iconBg: 'bg-yellow-500',
      borderColor: 'border-yellow-500',
      barBg: 'bg-yellow-500',
      side: 'right',
      year: '1920',
      title: 'Golden Era',
      description:
        'The roaring twenties brought growth and innovation. We refined our methods, expanded our vineyards, and created the blends that shaped our identity. This era was filled with creativity, progress, and a renewed focus on quality that laid the foundation for our global recognition.'
    },
    {
      icon: Award,
      iconBg: 'bg-red-500',
      borderColor: 'border-red-500',
      barBg: 'bg-red-500',
      side: 'left',
      year: '1975',
      title: 'International Recognition',
      description:
        'With decades of dedication, our wines earned international awards and acclaim. Each recognition reminded us that true success comes from patience, passion, and an unwavering commitment to quality that transcends borders and generations.'
    },
    {
      icon: Package,
      iconBg: 'bg-teal-500',
      borderColor: 'border-teal-500',
      barBg: 'bg-teal-500',
      side: 'right',
      year: '2020',
      title: 'Modern Innovation',
      description:
        'As we step into the modern age, we embrace new technology while honoring our roots. Sustainable practices, advanced techniques, and creative craftsmanship guide us as we continue to produce wines that reflect both tradition and innovation.'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight px-4"
            style={{
              background: 'linear-gradient(135deg, #040472 0%, #0606a8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Journey
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>

        <div className="relative">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = step.side === 'left';

            return (
              <div key={index} className="relative flex flex-col lg:flex-row items-stretch mb-6 sm:mb-8 lg:mb-10">
                {/* Left side */}
                <div className="w-full lg:w-1/2 flex justify-end lg:pr-8 xl:pr-10">
                  {isLeft && (
                    <div
                      className={`bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-lg relative border-r-4 ${step.borderColor} w-full lg:max-w-xl xl:w-[700px]`}
                    >
                      <div className="flex items-center justify-start lg:justify-end mb-3 lg:mb-4 gap-2 lg:gap-3">
                        <div
                          className={`${step.iconBg} rounded-2xl p-2 lg:p-3 shadow-xl transition-all duration-300 hover:scale-110 flex-shrink-0`}
                        >
                          <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <h3
                          className="text-2xl sm:text-2xl lg:text-3xl font-black tracking-tighter"
                          style={{
                            color: '#040472',
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            letterSpacing: '-0.05em',
                          }}
                        >
                          {step.year}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide text-left lg:text-right">
                        {step.title}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed text-left lg:text-right">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center line - hidden on mobile */}
                <div className="hidden lg:block flex-shrink-0 w-1"></div>

                {/* Right side */}
                <div className="w-full lg:w-1/2 flex justify-start lg:pl-8 xl:pl-10">
                  {!isLeft && (
                    <div
                      className={`bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-lg relative border-l-4 ${step.borderColor} w-full lg:max-w-xl xl:w-[700px]`}
                    >
                      <div className="flex items-center justify-start mb-3 lg:mb-4 gap-2 lg:gap-3">
                        <div
                          className={`${step.iconBg} rounded-2xl p-2 lg:p-3 shadow-xl transition-all duration-300 hover:scale-110 flex-shrink-0`}
                        >
                          <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <h3
                          className="text-2xl sm:text-2xl lg:text-3xl font-black tracking-tighter"
                          style={{
                            color: '#040472',
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            letterSpacing: '-0.05em',
                          }}
                        >
                          {step.year}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                        {step.title}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}