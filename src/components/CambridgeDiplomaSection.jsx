import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Banner from "../assets/VideoBanner.png"; // Use your local image
import Video from "../assets/ad-vk.mp4"; // Use your local image

export default function CambridgeDiplomaSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
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
    <section className="py-16 px-4 md:px-16 bg-white">
      <h2 className="text-center text-4xl md:text-5xl font-bold font-primary text-third mb-10">
        Centre for Cambridge International Diploma <br /> in -reaching and
        Learning
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image with Play Icon */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg"
        >
          {/* Show Banner Image before video plays */}
          {!isPlaying && (
            <img
              src={Banner}
              alt="Student Banner"
              className="absolute top-0 left-0 w-full h-100 object-cover rounded-xl"
            />
          )}

          {/* Video element (starts hidden until play) */}
          <video
            ref={videoRef}
            src={Video} // Replace with actual path
            className={`absolute top-0 left-0 w-full h-100 object-cover rounded-xl ${
              isPlaying ? "block" : "hidden"
            }`}
            controls
            muted
            loop
            preload="metadata"
          />

          {/* Play Button overlay */}
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

        {/* Right: Text and Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="font-semibold text-sm md:text-base mt-4 mb-2">
            <span className="font-bold">APL Global</span> is an accredited
            centre for the Cambridge International Diploma in Teaching and
            Learning (CID T L), a professional development qualification offered
            by Cambridge Assessment International Education.
          </p>

          <p className="text-third font-semibold mb-2">
            Stories Told Through Every Frame
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-third mb-4">
            THINKERS VOICE OF YOUNG THINKERS
          </h3>

          <p className="text-sm md:text-base mb-6">
            Experience the spirit of APL Global School through our video
            gallery. From classroom activities to special events, these moments
            showcase our students' creativity, learning, and growth in action.
          </p>

          <ul className="text-sm text-gray-800 space-y-3">
            {highlights.map((item, index) => (
              <li key={index}>
                <button
                  className="flex items-center gap-2 w-full font-primary text-left font-medium"
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className={`text-sm font-bold w-6 h-6 flex items-center justify-center border border-secondary text-secondary rounded-full transition duration-200 ${
                      openIndex === index
                        ? "bg-secondary text-white"
                        : "bg-white"
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                  <span>{item.title}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm font-secondary pl-6 border-l-4 border-secondary transition-all duration-300 ease-in-out">
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
