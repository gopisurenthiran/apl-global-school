import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import Essential from "@/assets/EssentialSupport.png";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];

function Department() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Auto Slider Banner */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
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

      {/* About Section with Graph BG */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-12 px-4 sm:px-6 lg:px-16 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary border-b-2 border-secondary pb-2">
                Department of Special Education
              </h2>
              <p className="text-base text-black leading-relaxed">
                APL believes that all children learn and grow differently...
              </p>
              <p className="text-base text-black leading-relaxed">
                The school creates a personalized learning environment...
              </p>
              <p className="text-base text-black leading-relaxed">
                Special educators, teachers, therapists and counselors...
              </p>
              <p className="text-base font-bold text-black leading-relaxed">
                In the pipeline... Gifted and Talented program...
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src={Essential}
                alt="Support"
                className="w-full max-w-md rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Section About with Background */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full px-4 sm:px-6 lg:px-16 py-12 space-y-16"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="max-w-screen-xl mx-auto space-y-10">
          {/* Special Education Team */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary">
              Special Education Team at APL
            </h3>
            {/* List of team descriptions */}
            <p className="text-base text-black leading-relaxed">
              <span className="font-bold">Special Educators:</span> Use tools to
              differentiate...
            </p>
            <p className="text-base text-black leading-relaxed">
              <span className="font-bold">Special Education Coordinators:</span>{" "}
              Assigned to help with individual plans...
            </p>
            <p className="text-base text-black leading-relaxed">
              <span className="font-bold">Occupational Therapists:</span>{" "}
              Promote daily activities and quality of life...
            </p>
            <p className="text-base text-black leading-relaxed">
              <span className="font-bold">Support Staff:</span> Help with
              transitions and mobility...
            </p>
            <p className="text-base text-black leading-relaxed">
              <span className="font-bold">Meraki:</span> Offers creative
              expression...
            </p>
          </div>

          {/* Support Programs */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary">
              Special Needs Support Program
            </h3>
            <p className="text-base text-black leading-relaxed">
              <span className="font-bold">Kindergarten level:</span> Co-mentoring with
              educators...
            </p>
            <p className="text-base text-black leading-relaxed">
              <span className="font-bold">Primary and Lower Secondary:</span>{" "}
              Individualized paths and therapies...
            </p>
          </div>

          {/* Skill Enrichment */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary">
              Skill Enrichment
            </h3>
            <p className="text-base text-black leading-relaxed">
              Short-term support in spelling, perception etc...
            </p>
          </div>

          {/* Mainstream Easy */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary">
              Mainstream Easy
            </h3>
            <p className="text-base text-black leading-relaxed">
              Small group support for mainstream learners...
            </p>
          </div>

          {/* Customized Curriculum */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary">
              Customized Curriculum
            </h3>
            <p className="text-base text-black leading-relaxed">
              Tailored based on readiness and skill level...
            </p>
          </div>

          {/* Kamalam Program */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary">
              Kamalam Program
            </h3>
            <p className="text-base font-bold text-black leading-relaxed">
              Functional academics and life skills-based program...
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 bg-secondary">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <h4 className="text-white text-lg font-bold">
            Click here to know more about the
          </h4>
          <button className="px-4 py-2 rounded-lg bg-primary text-secondary hover:bg-primary/90 hover:text-white font-semibold uppercase">
            Kamalam program
          </button>
        </div>
      </section>

      {/* Senior Level Info */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full px-4 sm:px-6 lg:px-16 py-12"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="max-w-screen-xl mx-auto">
          <p className="text-base text-black leading-relaxed">
            <span className="font-bold">Senior level:</span> IGCSE and NIOS
            prepare students... Exam arrangements to eliminate barriers...
          </p>
        </div>
      </section>
    </>
  );
}

export default Department;
