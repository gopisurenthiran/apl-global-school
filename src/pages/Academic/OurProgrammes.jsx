import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import ArrowPuple from "@/assets/arrow-purple.png";
import ArrowLime from "@/assets/arrow-lime.png";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";
import { MdDoubleArrow } from "react-icons/md";
import AboutGraph from "@/assets/about-graph.svg";

const items = [
  {
    icon: ArrowPuple,
    title: "Pre-kg (Pre-Kindergarten) – 3 years as on 1st June 2025.",
  },
  {
    icon: ArrowLime,
    title: "LKG (Lower Kindergarten) – 4 years as on 1st June 2025.",
  },
  {
    icon: ArrowPuple,
    title: "UKG (Upper Kindergarten) – 5 years as on 1st June 2025.",
  },
];

const curriculumData = [
  {
    title: "Forms of Knowledge",
    ages: "5–11 years",
    grades: "I to V",
    content: [
      "English",
      "Math",
      "Combined Science (Physics, Chemistry, and Biology)",
      "Global Perspectives",
      "Second Language - Tamil / French / Hindi (starting in Grade II)",
      "Art",
      "Music",
      "Computer Science (starting in Grade II)",
    ],
  },
  {
    title: "Co-curricular Activities",
    content: [
      "Games & Sports",
      "Music (till Grade 2)",
      "Creative Movement",
      "Theatre",
      "Expressions",
      "Library",
      "Meraki",
    ],
  },
];

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];

function OurProgrammes() {
  const [index, setIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Slide"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </section>

      {/* Kindergarten Description */}
      <section className="bg-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-primary border-b-2 border-secondary inline-block">
            Our Programmes
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary font-primary mt-4">
            Kindergarten
          </h3>

          <p className="text-black text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
            The kindergarten/preschool programme in APL is integrated and holistic...
          </p>
        </div>

        {/* Kindergarten 3-Year List */}
        <div className="max-w-5xl mx-auto mt-10 space-y-6 px-2 sm:px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
            Our kindergarten is a 3 year programme
          </h2>

          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <img src={item.icon} alt="" className="w-6 h-6 sm:w-8 sm:h-8 mt-1 shrink-0" />
              <h3 className="text-black font-medium font-secondary text-sm sm:text-base">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Cambridge Primary Section */}
        <div className="max-w-5xl mx-auto mt-12 px-2 sm:px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
            Cambridge Primary
          </h2>

          <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Our Primary Program is guided by the Cambridge Primary Curriculum...
          </p>
          <p className="text-black font-secondary text-sm sm:text-base md:text-lg leading-relaxed">
            A roadmap to learning at the primary level – With a student-centric approach...
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section style={{ backgroundImage: `url(${AboutGraph})` }} className="bg-cover bg-no-repeat bg-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 space-y-6">
          {curriculumData.map((section, index) => (
            <div key={index} className="border-b border-black  shadow-sm">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-4 transition font-semibold text-base sm:text-lg flex justify-between items-center"
              >
                {section.title}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary transition duration-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary transition duration-200" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 space-y-4 text-sm sm:text-base">
                  {section.ages && (
                    <p className="text-gray-600">
                      <strong>Ages:</strong> {section.ages}
                    </p>
                  )}
                  {section.grades && (
                    <p className="text-gray-600">
                      <strong>Grades:</strong> {section.grades}
                    </p>
                  )}
                  <ol className="space-y-1 text-gray-800 list-none pl-1">
                    {section.content.map((item, i) => {
                      const isOdd = (i + 1) % 2 !== 0;
                      const number = String(i + 1).padStart(2, "0");
                      const iconColor = isOdd ? "text-primary" : "text-secondary";

                      return (
                        <li key={i} className="flex items-center gap-2">
                          <span className={`font-medium flex items-center gap-1 ${iconColor}`}>
                            {number}.
                            <MdDoubleArrow className={`w-4 h-4 ${iconColor}`} />
                          </span>
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />
    </>
  );
}

export default OurProgrammes;
