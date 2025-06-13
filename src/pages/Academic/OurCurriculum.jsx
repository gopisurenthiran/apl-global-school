import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import CurriculumImg from "@/assets/Curriculum.png";
import { MdDoubleArrow } from "react-icons/md";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];

const curriculumData = [
  {
    title: "Cambridge Primary",
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
    title: "Cambridge Lower Secondary",
    ages: "11–14 years",
    grades: "VI to VIII",
    content: [
      "English",
      "Math",
      "Combined Science (Physics, Chemistry, and Biology)",
      "Computer Science",
      "History",
      "Geography",
      "Global Perspectives",
      "Second Language - Tamil / French / Hindi",
      "Drama",
      "Art",
      "Music",
      "Creative Movement",
    ],
  },
  {
    title: "Cambridge Upper Secondary",
    ages: "14-16 years",
    grades: "IX to X",
    content: [
      "English as First Language (0500)",
      "English as a Second Language (0510)",
      "Mathematics (0580)",
      "Additional Mathematics (0606)",
      "Physics (0625)",
      "Chemistry (0620)",
      "Biology (0610)",
      "Environmental Management (0680)",
      "Accountancy (0452)",
      "Business Studies (0450)",
      "Economics (0455)",
      "Enterprise (0454)",
      "Sociology (0495)",
      "History (0470)",
      "Geography (0460)",
      "Travel & Tourism (0471) – O Level",
      "Global Perspectives (0457)",
      "Food & Nutrition (0648)",
      "Information and Communication Technology (0417)",
      "Computer Science (0478)",
      "Art and Design (0400)",
      "Music (0410)",
      "Drama (0411)",
      "Physical Education (0413)",
      "German (0525)",
      "French (0520)",
      "Spanish (0530)",
      "Hindi (0549)",
      "Tamil (3226) – O Level",
    ],
  },
  {
    title: "Cambridge Advanced",
    content: [
      "Biology (9700)",
      "Chemistry (9701)",
      "Physics (9702)",
      "Mathematics (9709)",
      "Further Mathematics (9231)",
      "Business (9609)",
      "History (9489)",
      "Computer Science (9618)",
      "Psychology (9990)",
      "Information Technology (9626)",
      "Accounting (9706)",
      "Sociology (9699)",
      "Economics (9708)",
      "English Language (9093)",
      "English General Paper (8021)",
      "Art & Design (9479)",
      "Music (9483)",
      "Media Studies (9607)",
      "Travel & Tourism (9395)",
      "Global Perspectives (9239)",
    ],
  },
];

function OurCurriculum() {
  const [index, setIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleAccordion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
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

      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-12 px-4 sm:px-8 md:px-16 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Our Curriculum
              </h2>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                We are a registered school of Cambridge Assessment International
                Education, part of the University of Cambridge. Through
                Cambridge International’s programmes, APL prepares students for
                higher education and also helps them develop an informed
                curiosity and a lasting passion for learning.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Cambridge International (<span className="border-b-2 border-secondary">www.cambridgeinternational.org</span>) is the
                world’s largest provider of international education programmes
                and qualifications for 5–19 year olds.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                APL’s Personalized Learning design ensures that the student is a
                self-learner and has the necessary skills to excel in university
                level courses.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                As a Cambridge International registered centre we are supported
                by teacher training and resources developed by Cambridge
                International to match the highest international standards.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={CurriculumImg}
                alt="APL Curriculum"
                className="w-full max-w-[500px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundImage: `url(${AboutGraph})` }}>
        <div className="px-4 sm:px-6 md:px-10 py-10 space-y-6 max-w-screen-lg mx-auto">
          {curriculumData.map((section, index) => (
            <div key={index} className="border-b border-black shadow-sm">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-3 sm:px-6 sm:py-4 font-semibold text-base sm:text-lg flex justify-between items-center"
              >
                {section.title}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 space-y-4">
                  {section.ages && (
                    <p className="text-gray-600 text-sm sm:text-base">
                      <strong>Ages:</strong> {section.ages}
                    </p>
                  )}
                  {section.grades && (
                    <p className="text-gray-600 text-sm sm:text-base">
                      <strong>Grades:</strong> {section.grades}
                    </p>
                  )}
                  <ol className="space-y-1 text-gray-800 pl-1">
                    {section.content.map((item, i) => {
                      const isOdd = (i + 1) % 2 !== 0;
                      const number = String(i + 1).padStart(2, "0");
                      const iconColor = isOdd
                        ? "text-primary"
                        : "text-secondary";
                      return (
                        <li key={i} className="flex items-center gap-2 text-sm sm:text-base">
                          <span className={`font-medium flex items-center gap-1 ${iconColor}`}>
                            {number}. <MdDoubleArrow className={`w-4 h-4 ${iconColor}`} />
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
        <h2 className="text-center text-sm sm:text-base md:text-lg p-6 sm:p-10 text-primary font-primary">
          Details of courses can be obtained from{" "}
          <a
            href="https://www.cambridgeinternational.org/"
            className="text-secondary border-b border-primary font-bold"
          >
            www.cambridgeinternational.org
          </a>
        </h2>
      </section>
    </>
  );
}

export default OurCurriculum;
