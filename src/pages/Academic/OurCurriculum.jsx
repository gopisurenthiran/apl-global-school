import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutGraphRaw from "/assets/about-graph.svg"; // may be string or object with .src depending on your bundler
import CurriculumImg from "/assets/apl/cambridge.png";
import Nios from "/assets/apl/nios.png";
import { MdDoubleArrow } from "react-icons/md";
import { X } from "lucide-react";

import StaticBanner from "../../components/StaticBanner";
import AplEventsShowcase from "../Home/AplEventsShowcase";
import CertificatesCarousel from "../Home/CertificatesCarousel";
import APLVAlue5 from "../others/AplValue5";

import banner1 from "/banners/apl-curriculam.jpg";
import mobile1 from "/banners/Co-curricular-mob.webp";

const slides = [{ desktop: banner1, mobile: mobile1 }];

/* --- Safely resolve SVG to a URL string --- */
const AboutGraph =
  typeof AboutGraphRaw === "string"
    ? AboutGraphRaw
    : (AboutGraphRaw && AboutGraphRaw.src) || "/assets/about-graph.svg";

/* ---------------- Cambridge curriculum ---------------- */
const curriculum = [
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
    ages: "16-18 years",
    grades: " XI to XII",
    content: [
      "(Any four, including English)",
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

/* ---------------- NIOS subjects ---------------- */
const niosData = [
  {
    title: "Secondary - Forms of Knowledge",
    content: [
      "English",
      "Mathematics",
      "Science and Technology",
      "Painting",
      "Home Science",
      "Accountancy",
      "Business Studies",
      "Economics",
      "Social Science",
      "Data Entry Operations",
      "Psychology",
      "Carnatic Music",
      "Bakery & Confectionery",
      "Tamil",
      "Hindi",
    ],
  },
  {
    title: "Senior Secondary - Forms of Knowledge",
    content: [
      "English",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Psychology",
      "Computer Science",
      "Data Entry Operations",
      "Mass Communication",
      "Painting",
      "Economics",
      "Business Studies",
      "Accountancy",
      "Catering Management",
      "Home Science",
      "Physical Education and Yoga",
      "Environmental Science",
    ],
  },
];

const customCards = [
   { date: "31st July &1st August 2025", 
    title: "SYNERGY\nBYTES", 
    href: "/assets/pdf/Synergy-Bytes.pdf" ,
    target: "_blank", 
  },
 
  { date: "18th & 19th July, 2025", title: "APL MUN\n2024", href: "/assets/pdf/APL-MUN.pdf",
    target: "_blank",
   },
  { date: "21st July 2023", title: "ENGLISH FESTIVITAS 2023", href: "/assets/pdf/Inglish-festival.pdf", target: "_blank", },
  {
    date: "July 2025",
    title: "APL SnapShot",
    href: "/assets/pdf/SnapShot.pdf",
     target: "_blank",
  },
];

function OurCurriculum() {
  // ✅ Pure JS: no TypeScript generics
  const [openCambridgeIndex, setOpenCambridgeIndex] = useState(null);
  const [openNiosIndex, setOpenNiosIndex] = useState(null);

  return (
    <>
      {/* Banner Section */}
      <StaticBanner slides={slides} alt="Our Academics Curriculum Banner" />

      <section className="bg-cover bg-center bg-no-repeat w-full">
        {/* Cambridge intro */}
        <div
          className="py-12 px-4 sm:px-8 md:px-16 max-w-screen-xl mx-auto"
          style={{ backgroundImage: `url(${AboutGraph})` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-top">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Academics Curriculum
              </h2>
              <p className="text-black font-bold font-secondary text-sm sm:text-base leading-relaxed">
                Cambridge International Education
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                We are a registered school of <b>Cambridge Assessment International
                Education,</b> part of the University of Cambridge. Through
                Cambridge International’s programmes, APL prepares students for
                higher education and also helps them develop an informed
                curiosity and a lasting passion for learning.
              </p>

              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Cambridge International (
                <a
                  href="https://www.cambridgeinternational.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b-2 border-secondary"
                >
                  www.cambridgeinternational.org
                </a>
                ) is the world’s largest provider of international education
                programmes and qualifications for 5–19 year olds.
              </p>
              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
              APL’s Personalized Learning design ensures that the student is a self-learner and has the necessary skills to excel in university level courses. We shape the Cambridge curriculum around how our students learn and als offer a wide range of subjects which allows greater flexibility for them to make their choices.
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
                className="w-full max-w-[350px] h-auto"
              />
            </div>
          </div>
        </div>

        {/* Cambridge cards */}
        <section
          style={{ backgroundImage: `url(${AboutGraph})` }}
          className="bg-cover bg-center bg-no-repeat py-10"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {curriculum.map((section, index) => (
                <div
                  key={section.title}
                  className="bg-white rounded-lg shadow hover:shadow-md transition p-4 border-l-4 border-secondary cursor-pointer"
                  onClick={() => setOpenCambridgeIndex(index)}
                >
                  <h3 className="text-primary font-primary text-lg sm:text-xl font-semibold flex justify-between items-center">
                    {section.title}
                    <span className="text-secondary border border-primary hover:bg-primary p-2 px-4 rounded-full font-secondary text-sm">
                      Click to View
                    </span>
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-center text-sm sm:text-base md:text-lg p-6 sm:p-10 text-primary font-primary">
            Details of courses can be obtained from{" "}
            <a
              href="https://www.cambridgeinternational.org/"
              target="_blank"
              rel="noreferrer"
              className="text-primary border-b border-primary font-bold"
            >
              www.cambridgeinternational.org
            </a>
          </h2>

          {/* Cambridge Modal */}
          <AnimatePresence>
            {openCambridgeIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
                onClick={() => setOpenCambridgeIndex(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white max-w-4xl w-full rounded-lg shadow-lg p-6 relative max-h-[85vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setOpenCambridgeIndex(null)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-primary"
                    aria-label="Close Cambridge curriculum modal"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Title */}
                  <h2 className="text-primary text-xl font-bold font-primary mb-4">
                    {curriculum[openCambridgeIndex].title}
                  </h2>

                  {curriculum[openCambridgeIndex].ages && (
                    <p className="text-gray-700 text-sm mb-1">
                      <strong>Ages:</strong> {curriculum[openCambridgeIndex].ages}
                    </p>
                  )}
                  {curriculum[openCambridgeIndex].grades && (
                    <p className="text-gray-700 text-sm mb-3">
                      <strong>Grades:</strong> {curriculum[openCambridgeIndex].grades}
                    </p>
                  )}

                  {/* Subjects */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {curriculum[openCambridgeIndex].content.map((item, i) => {
                      const iconColor = (i + 1) % 2 !== 0 ? "text-primary" : "text-secondary";
                      return (
                        <div
                          key={`${item}-${i}`}
                          className="flex items-start gap-2 text-sm sm:text-base bg-gray-50 p-2 rounded-md"
                        >
                          <MdDoubleArrow className={`w-4 h-4 mt-1 ${iconColor}`} />
                          <span>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* NIOS */}
       <div
  className="py-12 px-4 sm:px-8 md:px-16 max-w-screen-xl mx-auto"
  style={{ backgroundImage: `url(${AboutGraph})` }}
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    {/* --- Left Text Section --- */}
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
        NIOS Gr8–12
      </h2>
      <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
        APL Global School is accredited to the National Institute of Open
        Schooling (NIOS) curriculum. NIOS is a national level board of education
        through which students complete their Secondary &amp; Senior Secondary
        school program. It is internationally recognised and students have been
        known to pursue their higher education across the world. The board
        offers students significant flexibility in their pace of learning. In
        addition to the wide variety of subject choices, it is possible to have
        staged assessments and a range of accommodations to support those
        students with special educational needs.
      </p>
      <p className="font-secondary font-semibold">
        At APL, NIOS is the chosen board of studies for a plethora of reasons.
        Typically, the board is chosen by students who —
      </p>

      <div className="text-black font-secondary leading-relaxed space-y-2 px-6">
        {[
          "Want to strike a balance between their academic and non-academic interests.",
          "Want to concentrate on competitive exams to achieve their long term goals.",
          "Prefer learning in a small group setting (our ratio in the NIOS classroom 1:10).",
          "Value flexibility in choice of subjects and pace of learning.",
          "Have special educational needs and/or medical needs.",
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-3">
            <MdDoubleArrow className="w-4 h-4 text-primary mt-1" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* --- Right Sticky Image --- */}
    <div className="flex justify-center md:justify-center">
      <div className="sticky top-24">
        <img
          src={Nios}
          alt="NIOS at APL"
          className="w-full max-w-[350px] h-auto"
        />
      </div>
    </div>
  </div>
</div>


        {/* NIOS cards */}
        <section
          style={{ backgroundImage: `url(${AboutGraph})` }}
          className="bg-cover bg-center bg-no-repeat py-10"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {niosData.map((section, index) => (
                <div
                  key={section.title}
                  className="bg-white rounded-lg shadow hover:shadow-md transition p-4 border-l-4 border-secondary cursor-pointer"
                  onClick={() => setOpenNiosIndex(index)}
                >
                  <h3 className="text-primary font-primary text-lg sm:text-xl font-semibold flex justify-between items-center">
                    {section.title}
                    <span className="text-secondary border border-primary hover:bg-primary p-2 px-4 rounded-full font-secondary text-sm">
                      Click to View
                    </span>
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* NIOS Modal */}
          <AnimatePresence>
            {openNiosIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
                onClick={() => setOpenNiosIndex(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white max-w-4xl w-full rounded-lg shadow-lg p-6 relative max-h-[85vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setOpenNiosIndex(null)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-primary"
                    aria-label="Close NIOS modal"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h2 className="text-primary text-xl font-bold font-primary mb-4">
                    {niosData[openNiosIndex].title}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {niosData[openNiosIndex].content.map((item, i) => {
                      const iconColor = (i + 1) % 2 !== 0 ? "text-primary" : "text-secondary";
                      return (
                        <div
                          key={`${item}-${i}`}
                          className="flex items-start gap-2 text-sm sm:text-base bg-gray-50 p-2 rounded-md"
                        >
                          <MdDoubleArrow className={`w-4 h-4 mt-1 ${iconColor}`} />
                          <span>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          

          <h2 className="text-center text-sm sm:text-base md:text-lg p-6 sm:p-10 text-primary font-primary">
            For more details on the subjects, you can go through the following link{" "}
            <a
              href="https://www.nios.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="text-primary border-b border-primary font-bold"
            >
              www.nios.ac.in
            </a>
          </h2>
        </section>
      </section>

      <APLVAlue5 />

      <AplEventsShowcase
        bgUrl="/assets/apl-event-bg.png"
        rightImg="/assets/event-boy.png"
        rightImgAlt="APL student"
        cards={customCards}
      />

      <CertificatesCarousel />
    </>
  );
}

export default OurCurriculum;
