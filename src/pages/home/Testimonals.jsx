import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Play, Pause, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const primaryColor = "#040472";
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "CEO & Founder",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      content:
        "Absolutely transformative! The level of professionalism and attention to detail exceeded all our expectations. This partnership has been instrumental in our company's growth trajectory.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      content:
        "Working with this team has been an absolute game-changer. Their innovative approach and dedication to excellence shine through in every interaction.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Design Studio Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      content:
        "The creativity and strategic thinking brought to our project was phenomenal. Every deliverable exceeded our wildest expectations.",
      rating: 5,
    },
    {
      id: 4,
      name: "James Patterson",
      role: "Operations Director",
      company: "Global Solutions Ltd.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      content:
        "Outstanding results delivered consistently. The team's expertise has made them an invaluable partner in our success.",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Lead",
      company: "BrandWorks Agency",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      content:
        "From start to finish, the experience has been flawless. The strategic insights have helped us achieve remarkable results.",
      rating: 5,
    },
    {
      id: 6,
      name: "David Kumar",
      role: "Tech Lead",
      company: "Digital Dynamics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      content:
        "The technical expertise combined with excellent communication makes this team stand out from the competition.",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-14 px-4 sm:px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-20 w-64 sm:w-72 h-64 sm:h-72 bg-blue-50 rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-blue-50 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-50 mb-4 sm:mb-6">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
            <span className="text-xs sm:text-sm font-medium" style={{ color: primaryColor }}>
              Testimonials
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            What Our <span style={{ color: primaryColor }}>Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative mb-10 sm:mb-12">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border border-slate-100 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-2 bg-blue-100 rounded-2xl"></div>
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-white"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 mx-auto lg:mx-0" style={{ color: primaryColor }} />

                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: primaryColor }}
                      fill={primaryColor}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base font-medium mb-1">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            style={{ color: primaryColor }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            style={{ color: primaryColor }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 overflow-x-auto py-3 sm:py-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 transition-all duration-300 ${
                index === activeIndex
                  ? "scale-110 ring-2"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              style={{
                ringColor: primaryColor,
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover border-2 border-slate-200"
              />
            </button>
          ))}
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Dots Indicator */}
          <div className="flex gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-5 sm:w-6" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                style={{
                  backgroundColor: index === activeIndex ? primaryColor : undefined,
                }}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            style={{
              borderColor: primaryColor,
              backgroundColor: isAutoPlaying ? primaryColor : "white",
              color: isAutoPlaying ? "white" : primaryColor,
            }}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span className="font-semibold">Pause Auto-play</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span className="font-semibold">Play Auto-play</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
