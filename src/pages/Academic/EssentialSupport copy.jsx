import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import Essential from "@/assets/EssentialSupport.png";
import { MdDoubleArrow } from "react-icons/md";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];
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
const careerGuidancePoints = [
  "Conducting career talks with APL Alumni and parents as guest speakers",
  "Conducting information sessions for different grade levels on vital information such as entry requirements, entrance exams, timelines, and country-specific requirements.",
  "Helping them to explore different career options and possibilities.",
  "Guiding them in the subject-selection process before stepping into Grade 9 and Grade 11.",
  "Facilitating the Psychometric assessments.",
  "Encouraging them to explore various learning opportunities during summer breaks and vacations like internships, summer schools and volunteering activities.",
  "Arranging university representative visits and university fairs.",
  "Sharing fortnightly / monthly newsletters with information on various webinars, university updates and summer programs.",
  "Coordinating yearly parent-interaction and subject-selection orientation sessions.",
  "Helping Grade 12 students with transcript uploads on application portals.",
  "Coordinating and procuring teacher reference letters and predicted grades for Grade 12 students.",
  "Providing letters of recommendation from counsellors.",
];


function EssentialSupport() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
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

      {/* Content Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-12 px-4 sm:px-6 md:px-16 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Text Content */}
            <div className="space-y-6 text-black font-secondary">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Essential Support
              </h2>

              <h3 className="text-xl sm:text-2xl text-primary font-primary">Mentors</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                ‘Mentoring is a brain to pick, an ear to listen, and a push in the right direction’ (John Crosky). We cannot agree more...
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Our faculty are trained to understand and support students...
              </p>

              <h3 className="text-xl sm:text-2xl text-primary font-primary">Counseling</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Counselors in APL are qualified, experienced & skilled in one-on-one counseling...
              </p>

              <h3 className="text-xl sm:text-2xl text-primary font-primary">Explore</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Explore is a one-of-a-kind program where sessions are conducted...
              </p>

              <h3 className="text-xl sm:text-2xl text-primary font-primary">Academic and Career Counselors</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Ms Preeti Kumar (For Grades 8 & 9), Ms Sujitha Nair (For Grades 10, 11 & 12)
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                APL Global School has dedicated academic and college counsellors...
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                The academic counsellors support students from Grade 8 through...
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={Essential}
                alt="APL Support"
                className="w-full max-w-md sm:max-w-sm md:max-w-lg rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Guidance Section */}
      <section className="p-6 sm:p-10 max-w-screen-xl mx-auto">
        <div className="space-y-6">
          {careerGuidancePoints.map((point, index) => (
            <div
              key={index}
              className={`flex items-start text-sm md:text-base ${
                index % 2 === 0 ? "text-primary" : "text-secondary"
              }`}
            >
              <MdDoubleArrow className="mt-1 mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-primary text-base sm:text-lg md:text-xl">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-secondary p-6 sm:p-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <h4 className="text-white font-primary font-bold text-lg sm:text-xl">
            Find out what our core team of the institution has to say!
          </h4>
          <button className="px-6 py-3 rounded-lg bg-primary text-secondary hover:bg-primary/90 hover:text-white font-primary font-semibold">
            Click Here
          </button>
        </div>
      </section>
    </>
  );
}

export default EssentialSupport;