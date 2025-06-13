import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

import AboutGraph from "@/assets/graph2.png";
import Alumni from "@/assets/Alumni.png";
import PaperBg from "@/assets/paper-bg.png";

// Replace with your image imports
import img1 from "@/assets/AboutBanner-1.png";
import img2 from  "@/assets/AboutBanner-2.png";
import img3 from "@/assets/AboutBanner-1.png";

const images = [img1, img2, img3];

// Replace with your testimonials data
const alumniTestimonials = [
  {
    id: 1,
    name: "Aisha Sharma",
    batch: "Class of 2020",
    quote: "APL shaped my curiosity.",
    text: "At APL, I discovered my passion for literature and art. The environment encouraged me to explore and express myself freely.",
    university: "Ashoka University",
    note: "Studying Liberal Arts and Creative Writing.",
  },
  {
    id: 2,
    name: "Rahul Iyer",
    batch: "Class of 2019",
    quote: "Science came alive at APL.",
    text: "My teachers at APL made learning an experience I looked forward to. Labs, projects, and field trips helped me love physics.",
    university: "University of Cambridge",
  },
  {
    id: 3,
    name: "Priya Desai",
    batch: "Class of 2021",
    quote: "APL taught me empathy and leadership.",
    text: "From being a class leader to organizing events, I grew in confidence. APL helped me become a global citizen.",
    university: "New York University",
    note: "Majoring in International Relations.",
  },
];

export default function OurAlumini() {
  const [imageIndex, setImageIndex] = useState(0);
  const [selected, setSelected] = useState(alumniTestimonials[0]);

  // Auto-rotate banner every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <section className="relative w-full h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden">
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

      {/* Info Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-12 px-4 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
                APL Alumni
              </h2>
              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                APL Global School is an initiative of the Ramaniyam Group Enterprise.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                We are truly rewarded when our students get the recognition they deserve...
              </p>
              <p className="text-black font-secondary font-bold text-sm sm:text-base leading-relaxed">
                Currently we have 102 students in GR 12 who will be graduating in 2025...
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={Alumni}
                alt="Alumni"
                className="w-3/4 md:w-[80%] lg:w-[70%] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="flex flex-col md:flex-row gap-8 px-4 py-10 sm:px-6 md:px-12 md:py-16"
        style={{ backgroundImage: `url(${PaperBg})`, backgroundSize: 'cover' }}
      >
        {/* Alumni List */}
        <div className="w-full md:w-1/3 max-h-[270px] overflow-y-auto pr-2 md:pr-6 space-y-4 scrollbar-hide">
          {alumniTestimonials.map((student) => (
            <div
              key={student.id}
              onClick={() => setSelected(student)}
              className={`cursor-pointer p-4 rounded-lg transition-all duration-200 ${
                selected.id === student.id
                  ? "bg-secondary/60 shadow-md"
                  : "hover:bg-secondary/40"
              }`}
            >
              <p className="font-semibold font-primary text-primary border-b-2 border-secondary inline-block mb-1">
                {student.name}
              </p>
              <p className="text-sm font-light text-primary/80">{student.batch}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Detail */}
        <div className="w-full md:w-2/3">
          <div className="max-w-3xl sticky md:top-20 space-y-5 bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-md">
            <Quote className="w-6 h-6 text-secondary" />
            <h2 className="text-xl sm:text-2xl font-bold text-primary">{selected.quote}</h2>
            <p className="text-black whitespace-pre-line leading-relaxed text-sm sm:text-base">
              {selected.text}
            </p>
            <div className="text-sm text-black space-y-1">
              <p><strong>Batch:</strong> {selected.batch}</p>
              <p><strong>University:</strong> {selected.university}</p>
            </div>
            {selected.note && (
              <p className="text-xs text-black italic border-t pt-4">{selected.note}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
