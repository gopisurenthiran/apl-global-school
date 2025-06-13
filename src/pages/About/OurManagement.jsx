import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import Management from "@/assets/Management.png";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];

function OurManagement() {
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
      <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:h-screen overflow-hidden">
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

      {/* Management Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-12 px-4 sm:px-6 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
                Our Management
              </h2>

              <h3 className="text-2xl sm:text-3xl font-bold text-primary font-primary mt-4 mb-4 flex items-center gap-3">
                GITA JAGANNATHAN
                <span className="h-6 border-l-2 border-secondary"></span>
                <span className="text-lg font-medium">FOUNDER</span>
              </h3>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Ms. Gita Jagannathan is the owner and founder of APL Global
                School, Chennai. She is a voracious reader and connoisseur of
                fine art, music, and humorous tales. Her exploration and thirst
                to evolve reflects in her journey through 8 schools during her
                father's transferable job. APL Global is the outcome of her
                search for an inclusive and nurturing space.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                She studied giftedness, learning disabilities, and special
                education via the Cambridge International Diploma and Harvard
                Wide course. Gita is also a Reiki Grand Master, hypnotherapist,
                and Yoga student. These spiritual and psychological strengths
                shaped the vision for APL as a hub for personalized learning.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Gita made tireless efforts to establish APL and transform
                education with a practical, student-centric approach unlike
                traditional models. She promotes a belief that everyone is
                unique and capable of unlocking their true potential.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Under her guidance, APL became known for nurturing every child’s
                personality within just 13 years. Her mission is to ensure each
                student grows into a happy, healthy individual confident in
                exploring their potential.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full">
              <img
                src={Management}
                alt="APL Vision"
                className="w-full max-w-md md:max-w-full mx-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurManagement;
