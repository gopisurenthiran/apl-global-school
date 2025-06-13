import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import Pedagogy from "@/assets/Pedagogy.png";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];

function OurPedagogy() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section with Auto Slider */}
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

      {/* Pedagogy Section with Background */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-12 px-4 sm:px-6 md:px-16 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left - Text */}
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Our School Pedagogy
              </h2>

              <h3 className="text-xl sm:text-2xl text-primary font-primary leading-relaxed">
                Personalized learning
              </h3>

              <p className="text-black font-secondary text-sm sm:text-base leading-relaxed">
                Considering that who we are is as important as what we want to
                achieve, APL maintains a progressive mindset that is open to
                growth and change in the spirit of personalization. In this
                personalized atmosphere, a student is encouraged to discuss how
                they would prefer to set goals and pace their learning program.
                Conversations are invited; a compassionate mentoring space is
                nurtured mindfully to ensure that we walk the talk of developing
                an inclusive culture. Teaching strategies are differentiated to
                ensure that no child is left behind in the spirit of inclusion.
              </p>

              <p className="text-black font-secondary text-base leading-relaxed font-bold text-lg">
                “Making Learning Personal in an Inclusive Environment.”
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={Pedagogy}
                alt="APL Vision"
                className="w-full max-w-md sm:max-w-sm md:max-w-lg rounded-lg object-contain"
              />
            </div>
          </div>
        </div>

        {/* Call-to-action Bar */}
        <div className="p-6 sm:p-10 bg-secondary">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 text-center">
            <h4 className="text-white font-primary font-bold text-base sm:text-lg md:text-xl">
              Find out what our core team of the institution has to say!
            </h4>
            <button className="px-6 py-3 rounded-lg bg-primary text-secondary hover:bg-primary/90 hover:text-white font-primary font-semibold">
              Click Here
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurPedagogy;
