import React from 'react';
import banner from '../assets/banner.png';
import mobile from '../assets/mobileBanner.png'

import 'flowbite';
import EnquiryForm from './HomeForm';
import SocialIcon from './SocialIcons';

const BannerSection = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Carousel Wrapper */}
        <div id="default-carousel" className="absolute inset-0 z-0 h-full w-full" data-carousel="slide">
          <div className="relative h-full w-full">
            {[...Array(5)].map((_, index) => (
              <div
              key={index}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                index === 0 ? 'block' : 'hidden'
              }`}
              data-carousel-item
            >
              {/* Desktop Banner */}
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="hidden sm:block w-full h-full object-center"
              />
            
              {/* Mobile Banner */}
              <img
                src={mobile}
                alt={`Mobile Banner ${index + 1}`}
                className="block sm:hidden w-full h-full object-center"
              />
            </div>
            
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                type="button"
                className="w-3 h-3 rounded-full bg-white"
                aria-label={`Slide ${i + 1}`}
                data-carousel-slide-to={i}
              ></button>
            ))}
          </div>
        </div>

        {/* Form & Social Icons - Desktop Only */}
        <div className="absolute right-0 justify-end -top-10 hidden md:flex">
          <div>
            <EnquiryForm />
            <SocialIcon />
          </div>
        </div>
      </div>

      {/* Form & Social Icons - Mobile Only */}
      <div className="block md:hidden px-4 py-6">
        <EnquiryForm />
        <div className="mt-4">
          <SocialIcon />
        </div>
      </div>
    </>
  );
};

export default BannerSection;
