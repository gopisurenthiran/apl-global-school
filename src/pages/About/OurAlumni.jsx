import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import Alumni from "@/assets/Alumni.png";
import bgGrid from "@/assets/grid-1.png";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];

const contents = [
  {
    id: 1,
    name: "Vaidhuna Venkatakrishnan",
    batch: "Batch 2013, Cambridge",
    university: "Joined University of Texas at Dallas",
    quote: "‘extremely adaptive.’",
    text: `I have become the best version of myself. I was highly motivated and inspired to achieve my best both inside and outside the classroom. I learnt to become extremely adaptive and proactive about my work.`,
    note: "APL Global School is an accredited centre for the CIDTL with authorization to register other school candidates as well.",
  },
  {
    id: 2,
    name: "Sample Student 2",
    batch: "Batch 2015, Cambridge",
    university: "Harvard University",
    quote: "‘life-changing experience.’",
    text: `APL shaped my outlook and provided endless growth opportunities.`,
    note: "Proud to be a lifelong learner from APL.",
  },
  {
    id: 3,
    name: "Vaidhuna Venkatakrishnan3",
    batch: "Batch 2013, Cambridge",
    university: "Joined University of Texas at Dallas",
    quote: "‘extremely adaptive.’",
    text: `I have become the best version of myself. I was highly motivated and inspired to achieve my best both inside and outside the classroom. I learnt to become extremely adaptive and proactive about my work.`,
    note: "APL Global School is an accredited centre for the CIDTL with authorization to register other school candidates as well.",
  },
  {
    id: 4,
    name: "Sample Student 4",
    batch: "Batch 2015, Cambridge",
    university: "Harvard University",
    quote: "‘life-changing experience.’",
    text: `APL shaped my outlook and provided endless growth opportunities.`,
    note: "Proud to be a lifelong learner from APL.",
  },
  {
    id: 5,
    name: "Vaidhuna Venkatakrishnan5",
    batch: "Batch 2013, Cambridge",
    university: "Joined University of Texas at Dallas",
    quote: "‘extremely adaptive.’",
    text: `I have become the best version of myself. I was highly motivated and inspired to achieve my best both inside and outside the classroom. I learnt to become extremely adaptive and proactive about my work.`,
    note: "APL Global School is an accredited centre for the CIDTL with authorization to register other school candidates as well.",
  },
  {
    id: 6,
    name: "Sample Student 6",
    batch: "Batch 2015, Cambridge",
    university: "Harvard University",
    quote: "‘life-changing experience.’",
    text: `APL shaped my outlook and provided endless growth opportunities.`,
    note: "Proud to be a lifelong learner from APL.",
  },
];

function OurAlumini() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = window.scrollY + window.innerHeight / 2;
      const offsetTop = containerRef.current.offsetTop;
      const sectionHeight = containerRef.current.scrollHeight / contents.length;


      const index = Math.min(
        contents.length - 1,
        Math.floor((scrollY - offsetTop) / sectionHeight)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Slider Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={imageIndex}
            src={images[imageIndex]}
            alt="Banner"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </section>

      {/* About Alumni Info */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-12 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
                APL Alumni
              </h2>
              <p className="text-black font-secondary text-lg leading-relaxed">
                APL Global School is an initiative of the Ramaniyam Group Enterprise
              </p>
              <p className="text-black font-secondary text-base leading-relaxed">
                We are truly rewarded when our students get the recognition they deserve and find a place in well-known colleges and universities in India and all parts of the world...
              </p>
              <p className="text-black font-secondary font-bold text-base leading-relaxed">
                Currently we have 102 students in GR 12 who will be graduating in 2025. We are proud of our alumni community featuring 856 graduates since 2009.
              </p>
              <p className="text-black font-secondary font-bold text-base leading-relaxed">
                Here’s some of the details of our alumni’s placement.
              </p>
            </div>
            <div>
              <img
                src={Alumni}
                alt="Alumni"
                className="ml-20 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={containerRef} className="relative mt-20">
  {contents.map((content, idx) => (
    <motion.div
      key={content.id}
      className="sticky top-0 h-[400px] flex items-center justify-center px-4"
      animate={{
        opacity: activeIndex === idx ? 1 : 0.2,
        scale: activeIndex === idx ? 1 : 0.95,
        zIndex: activeIndex === idx ? 10 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-black bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-6xl w-full space-y-5 border border-gray-300 bg-opacity-90">
        <h3 className="text-base sm:text-lg font-semibold">
          {content.name},{" "}
          <span className="text-sm font-normal">{content.batch}</span>
        </h3>
        <blockquote className="text-lg sm:text-xl font-medium text-primary border-l-4 pl-4 border-primary">
          {content.quote}
        </blockquote>
        <p className="text-sm italic text-black">{content.university}</p>
        <p className="text-sm sm:text-base leading-relaxed text-black">
          {content.text}
        </p>
        <p className="text-xs italic text-black">{content.note}</p>
      </div>
    </motion.div>
  ))}
</section>


      {/* Alumni Testimonial Section */}
      <section
        ref={containerRef}
        className="relative"
        style={{
          backgroundImage: `url(${bgGrid})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          backgroundPosition: "top left",
          height: `${contents.length * 120}vh`,
        }}
      >
        {contents.map((content, idx) => (
          <motion.div
            key={content.id}
            className="sticky top-0 h-screen flex items-center justify-center px-4"
            animate={{
              opacity: activeIndex === idx ? 1 : 0.2,
              scale: activeIndex === idx ? 1 : 0.95,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/95 text-black rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl w-full space-y-5 border border-gray-300">
              <h3 className="text-base sm:text-lg font-semibold">
                {content.name}, <span className="text-sm font-normal">{content.batch}</span>
              </h3>
              <blockquote className="text-lg sm:text-xl font-medium text-primary border-l-4 pl-4 border-primary">
                {content.quote}
              </blockquote>
              <p className="text-sm italic text-gray-700">{content.university}</p>
              <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                {content.text}
              </p>
              <p className="text-xs italic text-gray-500">{content.note}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <TestimonialCarousel />
    </>
  );
}

export default OurAlumini;