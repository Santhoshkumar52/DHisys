import React, { useEffect, useState } from 'react';

const slides = [
  {
    title: "AI Transformation",
    subtitle: "Intelligent Systems for Intelligent Business",
  },
  {
    title: "AI DHisys: Guiding AI Transformation Journey",
    subtitle: "Transform Your Data Assets with AI Excellence. Let's Guide your AI Transformation Journey",
  },
  {
    title: "AI Transformation Solutions Tailored For Your Business",
    subtitle: "Transforming Data into Intelligent Systems",
  },
  {
    title: "Begin Your AI Transformation Journey",
    subtitle: "Let's Work Together!",
  },
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[700px] md:h-[900px] lg:h-[100vh] overflow-hidden">
      {/* Slide Container */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
              index === currentSlide ? 'opacity-0 z-20' : 'opacity-100 z-10'
            }`}
          >
            <img
              src="../../assets/Home/header1.png"
              alt="Slide"
              className="w-full h-full object-cover mirror scale-x-[-1]"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-3xl md:text-4xl font-bold">{slide.title}</h1>
              <p className="mt-2 text-sm md:text-base">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 text-4xl p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 z-30 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 text-4xl p-2 rounded-full"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i === currentSlide ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
