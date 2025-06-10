import React, { useState, useEffect, useRef } from "react";
import bannerImg from '@/assets/Banner.png';
import mobile from '@/assets/mobileBanner.png';
import EnquiryForm from './HomeForm';
import SocialIcon from './SocialIcons';
import 'flowbite';

const images = [
  {
    url: bannerImg,
  },
  {
    url: bannerImg,
  },
  {
    url: bannerImg,
  },
  {
    url: bannerImg,
  },
  {
    url: bannerImg,
  },
];

const BannerSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slideRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* Slider Wrapper */}
        <div
          ref={slideRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full relative"
          >
            <img
              src={isMobile ? mobile : img.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}

        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 px-4 py-2 ">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-primary scale-125" : "bg-secondary hover:bg-primary"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Desktop Form & Social Icons */}
        <div className="hidden md:flex absolute top-10 right-10">
          <div className="max-w-sm w-full">
            <EnquiryForm />
            <div className="mt-20">
              <SocialIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Form & Social Icons */}
      <div className="block md:hidden px-4 py-6 bg-white">
        <div className="rounded-xl shadow-md p-4">
          <EnquiryForm />
          <div className="mt-4">
            <SocialIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
