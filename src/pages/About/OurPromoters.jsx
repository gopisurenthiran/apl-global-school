import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import Ramaniyam from "@/assets/Ramaniyan-bg.png";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];

function OurPromoters() {
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
      <section className="relative w-full min-h-[80vh] md:h-screen overflow-hidden">
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

      {/* Main Content Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-12 px-4 sm:px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-primary inline-block border-b-2 border-secondary mb-4">
                Promoters
              </h2>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                APL Global School is an initiative of the Ramaniyam Group Enterprise
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                <span className="font-extrabold text-lg">
                  RAMANIYAM REAL ESTATES PRIVATE LIMITED
                </span>{" "}
                is a leading builder in Chennai with over three decades of experience
                in the residential, commercial and IT sectors. It has earned a
                reputation for expertise in providing customized buildings. A myriad
                of projects across the city of Chennai stand tall as a testament to
                their commitment to personalisation, quality and excellence.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                APL Global School’s Personalized Learning Design is an extension of the
                same ethos of customization into the field of education. The
                architects for this project, Arvind Varuna Associates have converted
                these values with equal passion and have gone out of their way to
                accommodate our customisation requests.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                The infrastructure has been designed to cater to the varied needs of
                the students with the sports facilities, spacious auditorium and a
                multi-purpose gallery being some of its hallmarks.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                To provide a shield from the marshland, a 30 feet grill wall has been
                erected at the western side of the building which supports a vertical
                garden, simulating a rainforest environment.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Natural Stones like Tandur stone are used for the flooring to provide
                an anti-skid, low maintenance but hardy surface. The exterior Wall
                paint is made from grinding natural stones like green marble and
                Jaisalmer stone to provide an earthy, chemical free wall finish with
                an elegant look; a unique Ramaniyam innovation.
              </p>

              <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
                Our Founder Gita Jagannathan says – “Academy for Personalized Learning
                is based on the principles of person-centered approach to Education,
                Inclusion and Sustainable Living. The school nurtures and supports
                every individual to be a happy and healthy person who confidently
                explores the limits of their own potential. APL Global School believes
                that schools should provide a safe and open space, in which children
                build an understanding of self, their community and the larger world
                while exploring their role in society.”
              </p>
            </div>

            {/* Right Column - Image */}
            <div>
              <img
                src={Ramaniyam}
                alt="Ramaniyam Building"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-6 bg-secondary">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <h4 className="text-white font-primary font-bold text-xl">
              Find out what our core team of the institution has to say!
            </h4>
            <button className="px-6 py-3 rounded-lg bg-primary text-secondary hover:bg-primary/90 hover:text-white font-primary font-semibold">
              Click Here
            </button>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <TestimonialCarousel />
      </section>
    </>
  );
}

export default OurPromoters;
