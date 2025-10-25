import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  HelpCircle,
  Phone,
  Clock,
  Shield,
  CreditCard,
  Package,
  Truck,
  Star,
} from "lucide-react";

const FAQSection = () => {
  const faqData = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of services including business consulting, digital marketing, web development, and customer support solutions. Our team is dedicated to providing tailored solutions that meet your specific business needs and help you achieve your goals efficiently.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "What are your business hours?",
      answer:
        "Our business hours are Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. We're closed on Sundays, but our online support system is available 24/7 for urgent inquiries.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team through multiple channels: Call us at +1 (555) 123-4567 during business hours, email us at support@company.com, or use the contact form on our website.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Is my information secure?",
      answer:
        "Absolutely! We take data security very seriously. All your information is protected with industry-standard encryption protocols and we comply with GDPR.",
    },
    {
      icon: <Package className="w-5 h-5" />,
      question: "Do you offer custom solutions?",
      answer:
        "Yes, we specialize in creating custom solutions tailored to your unique requirements. Whether you need a custom website, marketing campaign, or business solution, we're here to help.",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      question: "What is your response time?",
      answer:
        "We strive to respond to all inquiries within 24 hours during business days. For urgent matters, our phone support provides immediate assistance during business hours.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments. All transactions are processed securely.",
    },
    {
      icon: <Star className="w-5 h-5" />,
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we provide comprehensive ongoing support for all our services. This includes maintenance, updates, and technical assistance.",
    },
  ];

  const half = Math.ceil(faqData.length / 2);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setActiveIndex(0);
    } else {
      setActiveIndex([0, half]);
    }
  }, [isMobile, half]);

  const toggleFAQ = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      setActiveIndex((prev) => {
        if (Array.isArray(prev)) {
          if (prev.includes(index)) {
            return prev.filter((i) => i !== index);
          }
          if (index < half) {
            return [index, prev[1]];
          } else {
            return [prev[0], index];
          }
        }
        return [index];
      });
    }
  };

  const isOpen = (index) =>
    Array.isArray(activeIndex)
      ? activeIndex.includes(index)
      : activeIndex === index;

  return (
    <div className="min-h-screen bg-white py-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-3"
          style={{
            background: "linear-gradient(135deg, #040472 0%, #0606b8 100%)",
          }}
        >
          <HelpCircle className="w-7 h-7 text-white" />
        </div>
        <h1
          className="text-2xl md:text-3xl font-bold mb-2"
          style={{
            background: "linear-gradient(135deg, #040472 0%, #0606b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
          Find answers to common questions about our services, support, and
          policies. Can't find what you're looking for? Feel free to contact our
          team.
        </p>
      </div>

      {/* FAQ Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-l from-white via-blue-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            {/* Center Divider */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full hidden md:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #040472, transparent)",
              }}
            ></div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 py-10 px-6 md:px-10">
              {/* Left Column */}
              <div className="divide-y divide-gray-100">
                {faqData.slice(0, half).map((item, index) => (
                  <FAQItem
                    key={index}
                    item={item}
                    index={index}
                    isOpen={isOpen(index)}
                    toggleFAQ={toggleFAQ}
                  />
                ))}
              </div>

              {/* Right Column */}
              <div className="divide-y divide-gray-100">
                {faqData.slice(half).map((item, index) => (
                  <FAQItem
                    key={index + half}
                    item={item}
                    index={index + half}
                    isOpen={isOpen(index + half)}
                    toggleFAQ={toggleFAQ}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual FAQ Item
const FAQItem = ({ item, index, isOpen, toggleFAQ }) => {
  return (
    <div className="overflow-hidden">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          <div
            className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-transform duration-200"
            style={{
              backgroundColor: "rgba(4, 4, 114, 0.1)",
              color: "#040472",
            }}
          >
            {item.icon}
          </div>
          {/* Responsive question text */}
          <h3 className="font-semibold text-gray-800 pr-4 text-sm sm:text-base md:text-lg leading-snug">
            {item.question}
          </h3>
        </div>
        <div
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color: "#040472" }}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 pb-4">
          <div
            className="pl-3 border-l-2"
            style={{ borderColor: "rgba(4, 4, 114, 0.2)" }}
          >
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
