import React from 'react';
import { useState } from 'react';
import banner from '../assets/banner.png';

import 'flowbite';
import EnquiryForm from './HomeForm';
import SocialIcon from './SocialIcons';

const Banner = () => {
  return (
    <>
    <div className="relative w-full h-screen md-h:screen sm-h:screen overflow-hidden">
    {/* Carousel Wrapper */}
    <div id="default-carousel" className="absolute inset-0 z-0 h-full w-full" data-carousel="slide">
      <div className="relative h-full w-full">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${index === 0 ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-full  object-center"
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
  
      {/* Navigation Buttons */}
      {/* <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 6 10">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
          </svg>
        </span>
      </button> */}
      {/* <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 6 10">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </span>
      </button> */}
    </div>
    <div className="absolute right-0 flex justify-end -top-10">
    <EnquiryForm />
    <SocialIcon  />
  </div>
 
  </div>
  
  </>
  
  );
};

export default Banner;
