import React, { useEffect, useRef, useState } from 'react';
import Abhishek from '../../../public/founder/Founder.png'; // Adjust the path as necessary
import ImageBG from '../../../public/founder/Canvas1.png'; // Adjust the path as necessary
import Abhi from '../../../public/founder/Founder.JPG'; // Adjust the path as necessary

const SixthComp = () => {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '-50px 0px'
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    return (
        <div 
            ref={componentRef}
            className='sm:mb-[10vw] sm:mt-[10vw] mt-[14.118vw] mb-[14.118vw]'
        >
            {/* Desktop Version */}
            <div className="px-[6.458vw] hidden sm:block">
                <h2 
                    className={`text-[#372e32] text-[3.333vw] font-bold ml-[3.125vw] mb-[3vw] transition-all duration-1000 ease-out ${
                        isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '0.2s' }}
                >
                    Meet The Founder
                </h2>
                <div className="relative">
                    <img
                        src={ImageBG}
                        alt="Background"
                        className={`w-full h-auto transition-all duration-1200 ease-out ${
                            isVisible 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-95'
                        }`}
                        style={{ transitionDelay: '0.4s' }}
                    />
                    <div className="absolute inset-0 flex">
                        <div className="py-[2.5vw] pl-[3.594vw] text-white">
                            <p 
                                className={`text-[#c3c3c3] w-[46.333vw] text-[1.25vw] font-normal mb-[1.25vw] transition-all duration-1000 ease-out ${
                                    isVisible 
                                        ? 'opacity-100 translate-x-0' 
                                        : 'opacity-0 -translate-x-8'
                                }`}
                                style={{ transitionDelay: '0.6s' }}
                            >
                                <span className="text-white text-[1.25vw] font-semibold text-justify">
                                    Mr. XYZ
                                </span>
                                , the visionary founder of Blu Kings Distillers, embarked on this journey with a single purpose — to craft whisky that reflects authenticity, legacy, and craftsmanship. Each bottle tells a story of passion and perfection.
                            </p>
                            <p 
                                className={`w-[46.333vw] text-[#c3c3c3] text-[1.25vw] font-normal mb-[1.25vw] text-justify transition-all duration-1000 ease-out ${
                                    isVisible 
                                        ? 'opacity-100 translate-x-0' 
                                        : 'opacity-0 -translate-x-8'
                                }`}
                                style={{ transitionDelay: '0.8s' }}
                            >
                                Blu Kings Distillers celebrates the rich heritage of whisky-making while embracing modern innovation. From meticulous grain selection to aging in premium barrels — we ensure every sip delivers unmatched smoothness and character.
                            </p>
                            <p 
                                className={`w-[46.333vw] text-[#c3c3c3] text-[1.25vw] font-normal text-justify mb-[3.5vw] transition-all duration-1000 ease-out ${
                                    isVisible 
                                        ? 'opacity-100 translate-x-0' 
                                        : 'opacity-0 -translate-x-8'
                                }`}
                                style={{ transitionDelay: '1s' }}
                            >
                                Our mission is simple — to provide whisky lovers with a refined drinking experience that feels bold, proud, and unforgettable. Whether shared in celebration or enjoyed in quiet moments, Blu Kings is crafted to elevate every occasion.
                            </p>
                             <h6 
                                className={`w-[46.333vw] text-[#c3c3c3] text-[1.5vw] font-bold text-justify transition-all duration-1000 ease-out ${
                                    isVisible 
                                        ? 'opacity-100 translate-x-0' 
                                        : 'opacity-0 -translate-x-8'
                                }`}
                                style={{ transitionDelay: '1.2s' }}
                            >
                                - Crafted with Pride, Distilled for the Bold
                             </h6>
                        </div>
                        <div 
                            className={`w-[31.827vw] h-[55.5vw] relative ml-[4.4vw] bottom-[25.7vw] transition-all duration-1200 ease-out ${
                                isVisible 
                                    ? 'opacity-100 translate-x-0 scale-100' 
                                    : 'opacity-0 translate-x-12 scale-90'
                            }`}
                            style={{ transitionDelay: '0.5s' }}
                        >
                            <img
                                src={Abhishek}
                                alt="Abhishek Sharma"
                                className="absolute right-0 top-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className='block sm:hidden'>
                <div className='px-[7.059vw]'>
                    <h1 
                        className={`text-center text-[#372e32] text-[7.529vw] font-bold mb-[3.529vw] transition-all duration-1000 ease-out ${
                            isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        Meet The Founder
                    </h1>
                    <p 
                        className={`text-[#5a5a5a] text-[3.765vw] font-normal mb-[3.529vw] w-[85vw] text-justify transition-all duration-1000 ease-out ${
                            isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: '0.4s' }}
                    >
                        <span className='text-[#372e32] text-base font-semibold'>
                            Mr. XYZ
                        </span>
                        , the founder of Blu Kings Distillers, is driven by dedication to quality and the art of fine whisky-making.
                    </p>
                    <p 
                        className={`text-[#5a5a5a] text-[3.765vw] font-normal mb-[3.529vw] w-[85vw] text-justify transition-all duration-1000 ease-out ${
                            isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: '0.6s' }}
                    >
                        Blu Kings represents a balance of tradition and innovation — carefully distilled and aged to deliver a rich, smooth, and bold whisky that stands out in every pour.
                    </p>
                    <p 
                        className={`text-[#5a5a5a] text-[3.765vw] font-normal w-[85vw] mb-[3.529vw] text-justify transition-all duration-1000 ease-out ${
                            isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: '0.8s' }}
                    >
                        Every bottle is a mark of precision and passion, crafted to elevate your celebrations, connections, and unforgettable moments.
                    </p>
                </div>
                <div 
                    className={`relative w-[85.882vw] h-[113.176vw] ml-[7.059vw] transition-all duration-1200 ease-out ${
                        isVisible 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{ transitionDelay: '1s' }}
                >
                    <img
                        src={Abhi}
                        alt="Abhishek Sharma"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default SixthComp;
