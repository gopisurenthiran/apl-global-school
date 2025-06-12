import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import Ramaniyam from "@/assets/Ramaniyan-bg.png";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];

function OurCurriculum() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
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
        {/* Add an overlay to improve text readability if needed */}
        <div className=" py-12 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrbold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
                Our Curriculum
              </h2>
              {/* <p className="text-black font-secondary text-lg leading-relaxed">
                APL Global School is an initiative of the Ramaniyam Group
                Enterprise
              </p> */}
              <p className="text-black font-secondary text-base leading-relaxed">
                We are a registered school of Cambridge Assessment International
                Education, part of the University of Cambridge. Through
                Cambridge International’s programmes, APL prepares students for
                higher education and also helps them develop an informed
                curiosity and a lasting passion for learning. The Cambridge
                Pathways give students a clear direction for educational success
                where they also discover new abilities, have a wider exposure
                and give them the skills they need for life. The curriculum in
                each stage of the Pathway has aims and objectives to develop the
                Cambridge learner attributes.
              </p>

              <p className="text-black font-secondary text-base leading-relaxed">
                Cambridge International (<span className="border-b-2 border-secondary">www.cambridgeinternational.org</span>) is the
                world’s largest provider of international education programmes
                and qualifications for 5 – 19 year olds. Around 10,000 schools
                in over 160 countries are part of the Cambridge learning
                community.
              </p>
              <p className="text-black font-secondary text-base leading-relaxed">
                The delivery of Cambridge International qualifications through
                APL’s Personalized Learning design ensures that the student is a
                self-learner and has the necessary skills to excel in university
                level courses. We shape the Cambridge curriculum around how our
                students learn and offer a wide range of subjects which
                allows greater flexibility for them to make their choices.
              </p>

              <p className="text-black font-secondary text-base leading-relaxed">
                As a Cambridge International registered centre we are supported
                by teacher training and resources developed by Cambridge
                International to match the highest international standards. 
              </p>
            </div>

            {/* Right - Image */}
            <div>
              <img
                src={Ramaniyam}
                alt="APL Vision"
                className="ml-20 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="p-6 bg-secondary">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <h4 className="text-white font-primary font-bold text-xl text-center">
              Find out what our core team of the institution has to say!
            </h4>
            <button className="px-6 py-3 rounded-lg bg-primary text-secondary hover:bg-primary/90 hover:text-white font-primary font-semibold">
              Click Here
            </button>
          </div>
        </div>
        <TestimonialCarousel />
      </section>
    </>
  );
}

export default OurCurriculum;
