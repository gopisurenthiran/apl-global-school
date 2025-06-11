import React, { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Banner from "@/assets/VideoBanner.png";
import Video from "@/assets/ad-vk.mp4";
import { FaPlay } from "react-icons/fa";

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
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-third mb-10 leading-tight">
        Centre for Cambridge International Diploma{" "}
        <br className="hidden sm:block" />
        in Teaching and Learning
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
        {/* Left: Video Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[520px] rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
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
                className="bg-white hover:bg-white border-4 border-secondary rounded-full p-4 transition"
              >
                <FaPlay className="text-primary w-8 h-8" />
              </button>
            </div>
          )}
        </motion.div>

        {/* Right: Text + Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center h-full min-h-[400px] md:min-h-[500px] lg:min-h-[520px]"
        >
          {/* Introduction Paragraph */}
          <p className="text-sm sm:text-base md:text-[16px] font-secondary mb-2">
            <span className="font-bold">
              APL Global is an accredited centre for the Cambridge International
              Diploma in Teaching and Learning (CIDTL), a professional
              development qualification offered by Cambridge Assessment
              International Education.
            </span>
          </p>

          {/* Tagline */}
          <p className="text-third font-semibold font-secondary mt-4 mb-2 sm:text-base">
            Stories Told Through Every Frame
          </p>

          {/* Heading with bottom border */}
          <h2 className="inline-block text-lg sm:text-xl md:text-2xl font-primary font-semibold text-third border-b-2 border-secondary mb-4">
            THINKERS VOICE OF YOUNG THINKERS
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 font-secondary mb-6">
            Experience the spirit of APL Global School through our video
            gallery. From classroom activities to special events, these moments
            showcase our students' creativity, learning, and growth in action.
          </p>

          {/* Accordion List */}
          <ul className="text-sm sm:text-base text-gray-800 space-y-4">
            {highlights.map((item, index) => (
              <li key={index}>
                <button
                  className="flex items-center gap-2 w-full font-primary text-left font-medium"
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className={`w-5 h-5 flex items-center justify-center border-2 border-secondary rounded-full transition duration-200 ${
                      openIndex === index
                        ? "bg-secondary text-white"
                        : "bg-white text-secondary"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 font-bold" strokeWidth={3} />
                    ) : (
                      <Plus className="w-6 h-6 font-bold" strokeWidth={3} />
                    )}
                  </span>
                  <span className="font-primary">{item.title}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm sm:text-base font-secondary pl-6  transition-all duration-300 ease-in-out">
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
