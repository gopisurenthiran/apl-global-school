import React, { useState, useEffect, useRef, useCallback } from "react";
import bannerImg1 from "/banners/home-banner-1.jpg";
import bannerImg2 from "/banners/personal-web.jpg";
import bannerImg3 from "/banners/dedicate-web.jpg";
import bannerImg4 from "/banners/experiential-web.jpg";
import bannerImg5 from "/banners/home-banner-5.webp";

import mobileBanner1 from "/banners/home-banner-mob-1.jpg";
import mobileBanner2 from "/banners/personal-mob.jpg";
import mobileBanner3 from "/banners/dedicate-mob.jpg";
import mobileBanner4 from "/banners/experiential-mob.jpg";
import mobileBanner5 from "/banners/home-banner-mob-5.webp";

import SocialIcon from "./SocialIcons";
import EnquiryForm from "./EnquiryForm";

// Array of image objects
const images = [
  { url: bannerImg1, mobile: mobileBanner1 },
  { url: bannerImg2, mobile: mobileBanner2 },
  { url: bannerImg3, mobile: mobileBanner3 },
  { url: bannerImg4, mobile: mobileBanner4 },
  { url: bannerImg5, mobile: mobileBanner5 },
];

const BannerSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const slideRef = useRef(null);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
      {/* Banner Slider */}
      <div className="relative w-full h-[600px] md:h-[400px] overflow-hidden">
        <div
          ref={slideRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-full relative">
              {/* Desktop Image */}
              <img
                src={img.url}
                alt={`Slide ${index + 1}`}
                className="hidden sm:block absolute w-full max-w-[1440px] h-[400px] object-cover mx-auto left-1/2 -translate-x-1/2"
                loading="lazy"
                decoding="async"
              />
              {/* Mobile Image */}
              <img
                src={img.mobile}
                alt={`Slide Mobile ${index + 1}`}
                className="block sm:hidden w-full h-[600px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                current === index
                  ? "bg-primary border-primary scale-125"
                  : "bg-white border-primary"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Desktop Enquiry Form */}
        {!isMobile && (
          <div className="absolute top-4 right-10 z-10 max-w-md bg-opacity-90">
            <div>
              <EnquiryForm />
            </div>
            <div className="p-10 flex justify-center mt-6 items-center">
              <SocialIcon />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Enquiry Form */}
      {isMobile && (
        <div className="md:hidden px-4 py-6">
          <div className="p-4">
            <EnquiryForm />
            <div className="mt-6">
              <SocialIcon />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerSection;
