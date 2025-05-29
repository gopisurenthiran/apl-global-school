import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import paper from "../assets/section-2-banner.png";


const testimonials = [
  {
    name: 'Hrsh Venket',
    batch: '2021 batch',
    content:
      `APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school. APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school.`,    image: 'https://i.pravatar.cc/100?img=1',
    rating: 5,
  },
  {
    name: 'Jane Doe',
    batch: '2020 batch',
    content:
      `APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school. APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school.`,   image: 'https://i.pravatar.cc/100?img=2',
    rating: 4,
  },
  {
    name: 'John Smith',
    batch: '2022 batch',
    content:
      `APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school. APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school.`,    image: 'https://i.pravatar.cc/100?img=3',
    rating: 5,
  },
  {
    name: 'Alice Ray',
    batch: '2023 batch',
    content:
      `APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school. APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school.`,
    image: 'https://i.pravatar.cc/100?img=4',
    rating: 5,
  },
  {
    name: 'Rahul Sen',
    batch: '2021 batch',
    content:
      `APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school. APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school.`,
    image: 'https://i.pravatar.cc/100?img=5',
    rating: 4,
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Faster autoplay (3 seconds)
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  const goToPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    resetAutoSlide();
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    resetAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const getPositionClass = (index) => {
    if (index === activeIndex) return 'z-20 scale-105';
    if (index === (activeIndex + 1) % testimonials.length) return 'translate-x-1/2 scale-90 z-10 opacity-50';
    if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) return '-translate-x-1/2 scale-90 z-10 opacity-50';
    return 'hidden md:block opacity-0';
  };

  return (
    <section
          className="bg-cover bg-center bg-no-repeat py-14"
          style={{ backgroundImage: `url(${paper})`, }}
        >
    <div className=" py-16 px-4 text-center relative overflow-hidden" >
      <h2 className="text-2xl md:text-4xl font-bold font-primary text-primary m-4">
        Testimonials
      </h2>
      <p className="text-primary mb-10 font-primary text-3xl">
        Voices that inspire our journey
      </p>

      <div className="relative flex items-center justify-center h-[400px] md:h-[450px]">
        {/* Prev Button */}
        <button
          onClick={goToPrev}
          className="absolute left-4 md:left-12 z-30 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-6 h-6 text-purple-600" />
        </button>

        {/* Slides */}
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out transform rounded-xl p-6  shadow-lg text-left w-[300px] md:w-[450px] ${
                isActive ? 'bg-secondary text-white' : 'bg-white text-gray-700'
              } ${getPositionClass(index)}`}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                />
              </div>

              <div className="mt-10 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? isActive
                          ? 'text-white'
                          : 'text-gray-400'
                        : 'text-gray-300'
                    }`}
                    fill={
                      i < testimonial.rating
                        ? isActive
                          ? 'currentColor'
                          : 'currentColor'
                        : 'none'
                    }
                  />
                ))}
              </div>

              <p className="mt-4 text-sm md:text-base leading-relaxed">
                {testimonial.content}
              </p>
              <p className="mt-4 font-semibold text-lg">{testimonial.name}</p>
              <p className="text-sm">({testimonial.batch})</p>
            </div>
          );
        })}

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 md:right-12 z-30 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-6 h-6 text-purple-600" />
        </button>
      </div>
    </div>
    </section>
  );
}
