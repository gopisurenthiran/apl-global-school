import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Banner from "/assets/cambridge-logo.jpg";
import { FaPlay } from "react-icons/fa";

export default function CambridgeDiplomaSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

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
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-16 bg-white overflow-hidden">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-third mb-10 leading-tight">
        Centre for Cambridge International Diploma{" "}
        <br className="hidden sm:block" />
        in Teaching and Learning - CIDTL
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
        {/* Left: Video Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden  flex items-center justify-center"
        >
          {!isPlaying && (
            <img
              src={Banner}
              alt="Cambridge Diploma Banner"
              className="absolute inset-0 "
            />
          )}

         
        </motion.div>

        {/* Right: Text + Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-start "
        >
          {/* Introduction Paragraph */}
          <p className="text-sm sm:text-base md:text-[16px] font-secondary mb-2">
            <span>
              APL Global is an accredited centre for the Cambridge International
              Diploma in Teaching and Learning (CIDTL) offered by Cambridge
              Assessment International Education. We are successfully providing
              this professional development qualification since 2010.
            </span>
            <br />
            <span>
              This programme is planned and supervised by a certified Programme
              Leader. The course is available for both in-house teachers and
              external faculty members. Registration is open throughout the
              year. Individual mentoring and personalised workshops are
              conducted to ensure that candidates emerge successfully as
              reflective practitioners and inspiring world-class educators.
            </span>
          </p>
          <div className=" ">
            <button
              className=" px-6 py-2 bg-secondary uppercase text-white rounded hover:bg-secondary transition font-primary text-sm sm:text-base"
              onClick={() => navigate("/teacher")}
            >
              Know More
            </button>
          </div>

         
          {/* <p className="text-third font-semibold font-secondary mt-4 mb-2 sm:text-base">
            Stories Told Through Every Frame
          </p> */}

          

          
          {/* <p className="text-sm sm:text-base text-gray-700 font-secondary mb-6">
            Experience the spirit of APL Global School through our video
            gallery. From classroom activities to special events, these moments
            showcase our students' creativity, learning, and growth in action.
          </p> */}

{/*       
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
                      <Minus className="w-4 h-4 font-bold" strokeWidth={3} />
                    ) : (
                      <Plus className="w-4 h-4 font-bold" strokeWidth={3} />
                    )}
                  </span>
                  <span className="font-primary">{item.title}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm sm:text-base font-secondary pl-6 transition-all duration-300 ease-in-out">
                    {item.content}
                  </p>
                )}
              </li>
            ))}
          </ul> */}
        </motion.div>
      </div>
    </section>
  );
}
