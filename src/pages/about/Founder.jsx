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
                threshold: 0.2, // Trigger when 20% of the component is visible
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
                                    Mr. Saurabh Singh 
                                </span>
                                , founded Vrinda LandScaping House with a passion for sustainability and a commitment to enhancing the environment.Plants purify the air, uplift our moods, and create a sense of tranquility that is invaluable in today's fast-paced world
                            </p>
                            <p 
                                className={`w-[46.333vw] text-[#c3c3c3] text-[1.25vw] font-normal mb-[1.25vw] text-justify transition-all duration-1000 ease-out ${
                                    isVisible 
                                        ? 'opacity-100 translate-x-0' 
                                        : 'opacity-0 -translate-x-8'
                                }`}
                                style={{ transitionDelay: '0.8s' }}
                            >
                                Through our wide variety of plants, gardening solutions, and expert guidance, we aim to make greenery accessible to all.We take pride in offering healthy, high-quality plants along with the knowledge and care tips needed to nurture them.
                            </p>
                            <p 
                                className={`w-[46.333vw] text-[#c3c3c3] text-[1.25vw] font-normal text-justify mb-[3.5vw] transition-all duration-1000 ease-out ${
                                    isVisible 
                                        ? 'opacity-100 translate-x-0' 
                                        : 'opacity-0 -translate-x-8'
                                }`}
                                style={{ transitionDelay: '1s' }}
                            >
                                Whether you're an experienced gardener or just beginning your journey, our team is dedicated to helping you find the perfect plants that suit your lifestyle.
                            </p>
                             <h6 
                                className={`w-[46.333vw] text-[#c3c3c3] text-[1.5vw] font-bold text-justify transition-all duration-1000 ease-out ${
                                    isVisible 
                                        ? 'opacity-100 translate-x-0' 
                                        : 'opacity-0 -translate-x-8'
                                }`}
                                style={{ transitionDelay: '1.2s' }}
                            >
                                -Landscaping with the blessing of Vrinda
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
                            Mr. Saurabh Singh
                        </span>
                        , founded Vrinda LandScaping House with a passion for sustainability and a commitment to enhancing the environment.
                    </p>
                    <p 
                        className={`text-[#5a5a5a] text-[3.765vw] font-normal mb-[3.529vw] w-[85vw] text-justify transition-all duration-1000 ease-out ${
                            isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: '0.6s' }}
                    >
                        Plants purify the air, uplift our moods, and create a sense of tranquility that is invaluable in today's fast-paced world. Through our wide variety of plants, gardening solutions, and expert guidance, we aim to make greenery accessible to all.
                    </p>
                    <p 
                        className={`text-[#5a5a5a] text-[3.765vw] font-normal w-[85vw] mb-[3.529vw] text-justify transition-all duration-1000 ease-out ${
                            isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: '0.8s' }}
                    >
                        We take pride in offering healthy, high-quality plants along with the knowledge and care tips needed to nurture them.
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