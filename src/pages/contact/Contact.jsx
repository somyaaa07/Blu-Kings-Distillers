import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Users, Building, Globe, Paperclip, HeadphonesIcon, CheckCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Add CSS styles directly to the document
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-slow {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(2deg); }
      }
      
      @keyframes float-medium {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-2deg); }
      }
      
      @keyframes float-fast {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-8px) rotate(1deg); }
      }
      
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.1; transform: scale(1); }
        50% { opacity: 0.2; transform: scale(1.05); }
      }
      
      @keyframes rotate-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes bounce-gentle {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      
      .animate-float-slow {
        animation: float-slow 8s ease-in-out infinite;
      }
      
      .animate-float-medium {
        animation: float-medium 6s ease-in-out infinite;
      }
      
      .animate-float-fast {
        animation: float-fast 4s ease-in-out infinite;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
      
      .animate-rotate-slow {
        animation: rotate-slow 20s linear infinite;
      }
      
      .animate-bounce-gentle {
        animation: bounce-gentle 2s ease-in-out infinite;
      }
      
      .card-shadow {
        box-shadow: 0 20px 25px -5px rgba(4, 4, 114, 0.1), 0 10px 10px -5px rgba(4, 4, 114, 0.04);
      }
      
      .input-focus {
        transition: all 0.3s ease;
      }
      
      .input-focus:focus {
        box-shadow: 0 0 0 3px rgba(4, 4, 114, 0.1);
      }
      
      .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgba(4, 4, 114, 0.1), 0 4px 6px -2px rgba(4, 4, 114, 0.05);
      }
      
      .pattern-dots {
        background-image: radial-gradient(#040472 1px, transparent 1px);
        background-size: 20px 20px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };
window.scrollTo(0, 0);
  return (
    <div className="min-h-screen bg-white overflow-hidden">
  {/* Header Banner with Background Image */}
      <div className="relative mb-0 overflow-hidden" style={{ height: '600px' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://i.pinimg.com/736x/d8/17/c7/d817c72debc5945ac60f333df18c8753.jpg)',
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content - Left Aligned */}
        <div className="relative h-full flex items-center px-8 sm:px-16 lg:px-32 max-w-7xl">
          <div className="text-left" style={{ marginTop: '-40px' }}>
            <h1 className="text-8xl sm:text-8xl font-semibold mb-3 text-white tracking-tight font-serif" style={{ fontWeight: 700 }}>
             Contact Us
            </h1>
            <div className="w-16 mb-4" style={{ height: '3px', backgroundColor: '#ef4444' }}></div>
            <p className="text-white text-midium leading-relaxed max-w-lg" style={{ fontSize: '15px', opacity: 0.95, lineHeight: '1.7' }}>
              See your indulgent as this, he occasional admittance unreserved<br className="hidden sm:block" />
              friendship: unfeeling as. Is voice seemed to. Settling of goodness<br className="hidden sm:block" />
              felicity. Elderly it among as sense. Waited his if spoke no juvenile.
            </p>
          </div>
        </div>

             {/* Curved Bottom Edge - Smooth Elegant Wave */}
          {/* Curved Bottom Edge - Smooth Elegant Wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: '110px' }}>
          <svg className="relative block w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path d="M0,80 C320,20 640,20 960,80 C1120,110 1280,110 1440,80 L1440,150 L0,150 Z" fill="white" fillOpacity="1" stroke="none"></path>
          </svg>
        </div>
      </div>

      {/* Contact Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="bg-gradient-to-l from-blue-50 via-blue-50 to-white/50 rounded-2xl card-shadow overflow-hidden relative">
          {/* Premium Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Top left corner elements */}
            <FloatingEnvelope top="5%" left="2%" animation="animate-float-slow" />
            {/* <FloatingPhone top="15%" left="8%" animation="animate-float-medium" /> */}
            
            {/* Top right corner elements */}
            <FloatingMessageBubble top="8%" right="5%" animation="animate-float-fast" />
            {/* <FloatingClock top="20%" right="10%" animation="animate-float-slow" /> */}
            
            {/* Bottom left corner elements */}
            {/* <FloatingLocationPin bottom="10%" left="5%" animation="animate-float-medium" /> */}
            <FloatingPaperPlane bottom="8%" left="45%" animation="animate-float-fast" />
            
            {/* Bottom right corner elements */}
            {/* <FloatingBusinessCard bottom="5%" right="8%" animation="animate-float-slow" /> */}
            {/* <FloatingHeadphones bottom="15%" right="3%" animation="animate-float-medium" /> */}
            
            {/* Center decorative elements */}
            {/* <FloatingGlobe top="40%" left="-5%" animation="animate-rotate-slow" opacity="0.05" /> */}
            {/* <FloatingNetworkNodes top="50%" right="-5%" animation="animate-pulse-glow" opacity="0.05" /> */}
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 pattern-dots"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            {/* Left Section - Company Info */}
            <div className="bg-transparent p-8 lg:border-r-2 border-gray-200" style={{
              color: '#040472'
            }}>
              <h2 className="text-2xl font-bold mb-4 pt-10" style={{ color: '#040472' }}>Contact Information</h2>
              <p className="text-gray-600 mb-6">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-4">
                <div className="flex items-start hover-lift p-2 rounded-lg">
                  <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#040472', color: 'white' }}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: '#040472' }}>Phone</h3>
                    <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                    <p className="text-gray-600 text-sm">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start hover-lift p-2 rounded-lg">
                  <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#040472', color: 'white' }}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: '#040472' }}>Email</h3>
                    <p className="text-gray-600 text-sm">info@company.com</p>
                    <p className="text-gray-600 text-sm">support@company.com</p>
                  </div>
                </div>

                <div className="flex items-start hover-lift p-2 rounded-lg">
                  <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#040472', color: 'white' }}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: '#040472' }}>Address</h3>
                    <p className="text-gray-600 text-sm">123 Business Avenue</p>
                    <p className="text-gray-600 text-sm">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Decorative separator */}
           
            </div>

            {/* Right Section - Contact Form */}
            <div className="p-8 bg-transparent">
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#040472' }}>Send Us a Message</h2>
              <p className="text-gray-600 mb-6">We'll respond as soon as possible</p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none input-focus transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none input-focus transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none input-focus transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none input-focus transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-3 px-6 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center group relative overflow-hidden"
                  style={{
                    backgroundColor: '#040472'
                  }}
                >
                  <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-200 bg-white"></div>
                  <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-20"></div>
    </div>
  );
}

// New floating components - Contact/Business themed
const FloatingEnvelope = ({ top, left, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ top, left }}>
      <svg width="40" height="30" viewBox="0 0 40 30">
        <rect x="2" y="5" width="36" height="20" fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <path d="M 2 5 L 20 18 L 38 5" stroke="#040472" strokeWidth="1.5" fill="none" opacity="0.3" />
        <circle cx="32" cy="10" r="2" fill="#040472" opacity="0.2" />
      </svg>
    </div>
  );
};

const FloatingPhone = ({ top, left, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ top, left }}>
      <svg width="30" height="40" viewBox="0 0 30 40">
        <rect x="5" y="2" width="20" height="36" rx="3" fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <rect x="8" y="6" width="14" height="24" fill="#040472" opacity="0.1" />
        <circle cx="15" cy="34" r="2" fill="#040472" opacity="0.2" />
      </svg>
    </div>
  );
};

const FloatingMessageBubble = ({ top, right, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ top, right }}>
      <svg width="45" height="35" viewBox="0 0 45 35">
        <path d="M 5 5 Q 5 2 8 2 L 32 2 Q 35 2 35 5 L 35 20 Q 35 23 32 23 L 12 23 L 5 30 L 5 23 Q 5 23 5 20 Z" 
              fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <circle cx="12" cy="12" r="1.5" fill="#040472" opacity="0.2" />
        <circle cx="20" cy="12" r="1.5" fill="#040472" opacity="0.2" />
        <circle cx="28" cy="12" r="1.5" fill="#040472" opacity="0.2" />
      </svg>
    </div>
  );
};

const FloatingClock = ({ top, right, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ top, right }}>
      <svg width="35" height="35" viewBox="0 0 35 35">
        <circle cx="17.5" cy="17.5" r="15" fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <line x1="17.5" y1="17.5" x2="17.5" y2="10" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <line x1="17.5" y1="17.5" x2="23" y2="17.5" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <circle cx="17.5" cy="17.5" r="2" fill="#040472" opacity="0.2" />
      </svg>
    </div>
  );
};

const FloatingLocationPin = ({ bottom, left, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ bottom, left }}>
      <svg width="30" height="40" viewBox="0 0 30 40">
        <path d="M 15 5 Q 8 5 8 12 Q 8 20 15 30 Q 22 20 22 12 Q 22 5 15 5 Z" 
              fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <circle cx="15" cy="12" r="3" fill="#040472" opacity="0.2" />
      </svg>
    </div>
  );
};

const FloatingPaperPlane = ({ bottom, left, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ bottom, left }}>
      <svg width="40" height="30" viewBox="0 0 40 30">
        <path d="M 5 15 L 35 5 L 25 15 L 35 25 Z" 
              fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <path d="M 5 15 L 20 15" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
      </svg>
    </div>
  );
};

const FloatingBusinessCard = ({ bottom, right, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ bottom, right }}>
      <svg width="50" height="30" viewBox="0 0 50 30">
        <rect x="5" y="5" width="40" height="20" rx="2" fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <line x1="10" y1="10" x2="25" y2="10" stroke="#040472" strokeWidth="1" opacity="0.2" />
        <line x1="10" y1="14" x2="30" y2="14" stroke="#040472" strokeWidth="1" opacity="0.2" />
        <line x1="10" y1="18" x2="20" y2="18" stroke="#040472" strokeWidth="1" opacity="0.2" />
        <rect x="35" y="10" width="8" height="8" fill="#040472" opacity="0.1" />
      </svg>
    </div>
  );
};

const FloatingHeadphones = ({ bottom, right, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ bottom, right }}>
      <svg width="35" height="35" viewBox="0 0 35 35">
        <path d="M 7 18 Q 7 10 17.5 10 Q 28 10 28 18" 
              fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <rect x="5" y="18" width="4" height="10" rx="2" fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
        <rect x="26" y="18" width="4" height="10" rx="2" fill="none" stroke="#040472" strokeWidth="1.5" opacity="0.3" />
      </svg>
    </div>
  );
};

const FloatingGlobe = ({ top, left, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ top, left }}>
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="35" fill="none" stroke="#040472" strokeWidth="1" opacity="0.2" />
        <ellipse cx="40" cy="40" rx="35" ry="15" fill="none" stroke="#040472" strokeWidth="1" opacity="0.2" />
        <ellipse cx="40" cy="40" rx="15" ry="35" fill="none" stroke="#040472" strokeWidth="1" opacity="0.2" />
        <line x1="5" y1="40" x2="75" y2="40" stroke="#040472" strokeWidth="1" opacity="0.2" />
        <line x1="40" y1="5" x2="40" y2="75" stroke="#040472" strokeWidth="1" opacity="0.2" />
      </svg>
    </div>
  );
};

const FloatingNetworkNodes = ({ top, right, animation, opacity = 0.1 }) => {
  return (
    <div className={`absolute ${animation} opacity-${opacity}`} style={{ top, right }}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="20" cy="20" r="4" fill="#040472" opacity="0.2" />
        <circle cx="80" cy="20" r="4" fill="#040472" opacity="0.2" />
        <circle cx="50" cy="50" r="5" fill="#040472" opacity="0.3" />
        <circle cx="20" cy="80" r="4" fill="#040472" opacity="0.2" />
        <circle cx="80" cy="80" r="4" fill="#040472" opacity="0.2" />
        <line x1="20" y1="20" x2="50" y2="50" stroke="#040472" strokeWidth="0.5" opacity="0.2" />
        <line x1="80" y1="20" x2="50" y2="50" stroke="#040472" strokeWidth="0.5" opacity="0.2" />
        <line x1="20" y1="80" x2="50" y2="50" stroke="#040472" strokeWidth="0.5" opacity="0.2" />
        <line x1="80" y1="80" x2="50" y2="50" stroke="#040472" strokeWidth="0.5" opacity="0.2" />
        <line x1="20" y1="20" x2="80" y2="20" stroke="#040472" strokeWidth="0.5" opacity="0.2" />
        <line x1="20" y1="80" x2="80" y2="80" stroke="#040472" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </div>
  );
};