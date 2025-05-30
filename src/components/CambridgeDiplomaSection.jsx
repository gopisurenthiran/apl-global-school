import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Banner from "../assets/VideoBanner.png";
import Video from "../assets/ad-vk.mp4";

export default function CambridgeDiplomaSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) videoRef.current.play();
  };

  const highlights = [
    {
      title: "Learning in Action",
      content:
        "Students engage in real-time learning with hands-on experiences that promote deep understanding.",
    },
    {
      title: "Creative Classrooms at APL",
      content:
        "Innovative teaching methods foster creative thinking and problem-solving skills.",
    },
    {
      title: "Hands-On Learning Moments",
      content:
        "Learners actively participate through experiments, group projects, and presentations.",
    },
    {
      title: "Exploring Science and Innovation",
      content:
        "Exposure to scientific inquiry helps spark curiosity and future-focused innovation.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-16 bg-white overflow-hidden">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-third mb-8 sm:mb-10 overflow-hidden leading-tight">
        Centre for Cambridge International Diploma <br className="hidden sm:block" /> in Teaching and
        Learning
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left: Image/Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg"
        >
          {!isPlaying && (
            <img
              src={Banner}
              alt="Student Banner"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          )}

          <video
            ref={videoRef}
            src={Video}
            className={`absolute inset-0 w-full h-full object-cover rounded-xl ${
              isPlaying ? "block" : "hidden"
            }`}
            controls
            muted
            loop
            preload="metadata"
          />

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlay}
                className="bg-white/80 hover:bg-white rounded-full p-4 transition"
              >
                <PlayCircle className="text-red-600 w-10 h-10" />
              </button>
            </div>
          )}
        </motion.div>

        {/* Right: Text & Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm sm:text-base md:text-[16px] font-secondary mb-2">
            <span className="font-bold">APL Global is an accredited centre for the Cambridge
            International Diploma in Teaching and Learning (CIDTL), a professional development
            qualification offered by Cambridge Assessment International Education.</span>
          </p>

          <p className="text-third font-semibold mt-4 mb-2 sm:text-base">
            Stories Told Through Every Frame
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-third mb-4">
            THINKERS VOICE OF YOUNG THINKERS
          </h3>

          <p className="text-sm sm:text-base text-gray-700 font-secondary mb-6">
            Experience the spirit of APL Global School through our video gallery. From classroom
            activities to special events, these moments showcase our students' creativity, learning,
            and growth in action.
          </p>

          <ul className="text-sm sm:text-base text-gray-800 space-y-4">
            {highlights.map((item, index) => (
              <li key={index}>
                <button
                  className="flex items-center gap-2 w-full font-primary text-left font-medium"
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className={`text-sm font-bold w-6 h-6 flex items-center justify-center border border-secondary text-secondary rounded-full transition duration-200 ${
                      openIndex === index ? "bg-secondary text-white" : "bg-white"
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                  <span>{item.title}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm sm:text-base font-secondary pl-6 border-l-4 border-secondary transition-all duration-300 ease-in-out">
                    {item.content}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
