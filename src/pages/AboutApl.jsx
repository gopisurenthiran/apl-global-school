import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutGraph from "/assets/about-graph.svg";
import Essential from "/assets/EssentialSupport.webp";
import SynergySection from "./About/SynergySection";
import AplEventsShowcase from "./Home/AplEventsShowcase";
import CertificatesCarousel from "./Home/CertificatesCarousel";


const images = ["/assets/Department.webp", "/assets/Department.webp", "/assets/Department.webp"];
const imagesMobile = ["/assets/Department-mob.webp", "/assets/Department-mob.webp", "/assets/Department-mob.webp"];
const customCards = [
  { date: "3rd & 4th August 2023", title: "SYNERGY\nBYTES", href: "#" },
  { date: "19th & 20th July 2024", title: "APL MUN\n2024", href: "#" },
  {
    date: "19th & 20th July 2024",
    title: "ENGLISH\nFESTIVITAS 2023",
    href: "#",
  },
];
function AboutAPL() {
  const [imageIndex, setImageIndex] = useState(0);

  // Auto-rotate banner every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Mobile */}
          <motion.img
            key={`mobile-${imageIndex}`}
            src={imagesMobile[imageIndex]}
            alt="Mobile Banner"
            className="absolute w-full max-w-[420px] h-[600px] object-cover block sm:hidden mx-auto left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Desktop */}
          <motion.img
            key={`desktop-${imageIndex}`}
            src={images[imageIndex]}
            alt="Desktop Banner"
            className="absolute w-full max-w-[1440px] h-[600px] object-cover hidden sm:block mx-auto left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </section>

      {/* Introduction Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-10 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-top">
            <div className="space-y-5 text-sm sm:text-base">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-third border-b-2 border-secondary inline-block mb-4">
                About APL
              </h2>
              <p className="text-black font-secondary leading-relaxed">
                <span className="font-bold">
                  {" "}
                  Academy for Personalized Learning’- APL Global School’s
                </span>{" "}
                pedagogy and assessment strategies are designed to address
                individual needs in a group context. Accreditation from{" "}
                <span className="font-bold">
                  {" "}
                  Cambridge Assessment International Education (CAIE)
                </span>{" "}
                helps support our personalised learning model and work towards
                an effective educational model. With access to the excellent
                teaching resources, APL Global School prepares students in line
                with the Cambridge curriculum to take the IGCSE and A level
                examinations.
              </p>
              <p className="text-black font-secondary leading-relaxed">
                The diverse array of CAIE subject offerings available at APL at
                different levels (Core, Extended and in some subjects, course
                work, as well as the availability of practical, work-based
                subjects) match our school’s Vision of realising potential.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={Essential}
                alt="APL Vision"
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full py-10 px-4 sm:px-6 md:px-12"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="max-w-6xl mx-auto space-y-10 text-sm sm:text-base">
          <div className="space-y-4">
            <h2 className="text-primary font-primary text-2xl leading-relaxed">
              Our Vision
            </h2>
            <p className="text-black font-secondary leading-relaxed">
              To be a school that targets whole brain development and inspires
              the creative best in students by giving them an opportunity to
              realise their unique potential.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
              Our Promise
            </h3>
            <p className="text-black font-secondary leading-relaxed">
              To be a school that combines the best of teaching and learning
              fundamentals and enables students to realise their potential and
              optimise their achievement.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              To provide a learning environment that provides ‘Personalized
              Learning’ experiences.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              To help students become self-motivated, goal-oriented individuals
              who are ready to face the challenges of work, life and citizenship
              in a global society
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
              Our Mission
            </h3>
            <p className="text-black font-secondary leading-relaxed">
              To provide learning environments that are both self-paced and
              target oriented.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              To provide personalized education that is learner-centric with an
              optimum student-teacher ratio.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              To develop students as per their brain profiles and learning
              styles.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              To develop in students whole brain potential and life enriching
              skills.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
              Our Motto
            </h3>
            <p className="text-black font-secondary leading-relaxed">
              Realizing their own potential encourages students to understand
              their skill sets and opportunities and then chart road maps to
              reach their goals.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              It reiterates their uniqueness as individuals and helps them to
              make confident choices that are in tune with their abilities and
              personality profiles.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary font-primary text-2xl leading-relaxed">
              Our Symbol
            </h3>
            <p className="text-black font-secondary leading-relaxed">
              Stylized symbols of set-square and T-square are used to depict
              APL. The geometric shapes stand for the pedagogic process itself
              while the bright and contrasting colours depict a sense of
              modernism yet within the periphery of tradition and discipline.
            </p>
            <p className="text-black font-secondary leading-relaxed">
              Lime green symbolizes freshness and growth while the rich violet
              is symbolic of each student’s unique worth and identity.
            </p>
          </div>
        </div>
      </section>
<AplEventsShowcase
      bgUrl="/assets/apl-event-bg.png"
      rightImg="/assets/event-boy.png"
      rightImgAlt="APL student"
      cards={customCards} // (optional) pass to override defaultCards
    />
    <CertificatesCarousel />
    </>
  );
}

export default AboutAPL;
