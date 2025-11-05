import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutGraph from "/assets/about-graph.svg";
import AplNews1 from "/assets/apl/Youth_award.webp";
import AplNews2 from "/assets/apl/Cultural.webp";
import AplNews3 from "/assets/apl/APL_Events.webp";


const images = ["/assets/Our-Alumni.webp", "/assets/Our-Alumni.webp"];
const imagesMobile = ["/assets/Our-Alumni-mob.webp", "/assets/Our-Alumni-mob.webp"];

const newsSections = [
  {
    title: "APLMUN 2023",
    description: `Model United Nations is an educational mock-up where participants simulate UN agencies. It enhances diplomacy, debate, and public speaking skills.`,
    description2: `APL MUN 2023 was organized by APL Global School’s students. With over 300 participants, it featured six committees, robust debates, and spirited resolutions.`,
    description3: `Held on August 29-30, 2019, it was one of the largest events hosted by APL. Delegates showcased exceptional collaboration, earning accolades.`,
    description4: `Click below to know more about the proceeds in APLMUN`,
    link1: `http://aplmun.com/`,
    button: `Click here to read our APLMUN newsletter`,
    link2: `https://www.aplglobalschool.com/wp-content/uploads/2023/08/APL-MUN-Gazette-Web.pdf`,
    image: AplNews1,
  },
  {
    title: "Cultural Evening",
    description: `When music took centre stage.`,
    description1: `‘Nightingales’ and ‘The Land of Hattaman’ were student-led musicals showcasing creativity, humor, and storytelling.`,
    description2: `‘Thirst for Truth’ and ‘Not Another Fairytale’ displayed students’ abilities to write, direct, and perform with depth and wit.`,
    description3: `These productions proved that theatre, music, and young talent form a powerful combination.`,
    image: AplNews2,
  },
  {
    title: "Inter School Sports Tournament",
    subtitle: `In competitive mode`,
    subtitle1: `“Sports does not build character; it reveals it!”`,
    description: `The 5th Inter-School Sports Tournament was held at the new APL campus, bringing together passionate student athletes.`,
    description1: `Events ranged from team sports to individual challenges like tennis and badminton. Students competed with vigor and spirit.`,
    description2: `More than just games, it was a platform for camaraderie and sportsmanship.`,
    description3: `Bravo students!!`,
    image: AplNews3,
  },
];

export default function News() {
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
      {/* Auto Slider Banner */}
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

      {/* News Content Section */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="py-10 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto space-y-14">
          {newsSections.map((section, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${
                idx % 2 === 1 ? "md:flex-row-reverse md:flex" : ""
              }`}
            >
              {/* Text Section */}
              <div className="space-y-4 text-sm sm:text-base">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-2">
                  {section.title}
                </h2>

                {/* Optional Subtitles */}
                {section.subtitle && (
                  <h3 className="text-lg font-semibold text-secondary">
                    {section.subtitle}
                  </h3>
                )}
                {section.subtitle1 && (
                  <h3 className="text-base italic text-black/70">
                    {section.subtitle1}
                  </h3>
                )}

                {/* Description Paragraphs */}
                {section.description && (
                  <p className="text-black font-secondary leading-relaxed">
                    {section.description}
                  </p>
                )}
                {section.description1 && (
                  <p className="text-black font-secondary leading-relaxed">
                    {section.description1}
                  </p>
                )}
                {section.description2 && (
                  <p className="text-black font-secondary leading-relaxed">
                    {section.description2}
                  </p>
                )}
                {section.description3 && (
                  <p className="text-black font-secondary leading-relaxed">
                    {section.description3}
                  </p>
                )}
                {section.description4 && (
                  <p className="text-black font-secondary leading-relaxed">
                    {section.description4}
                  </p>
                )}

                {/* Optional Link */}
                {section.link1 && (
                  <a
                    href={section.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-secondary font-medium underline"
                  >
                    Visit: {section.link1}
                  </a>
                )}
                <br />
                {/* Optional Button */}
                {section.link2 && section.button && (
                  <a
                    href={section.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-5 py-2 bg-secondary text-white font-semibold rounded shadow hover:bg-secondary/90 transition"
                  >
                    {section.button}
                  </a>
                )}
              </div>

              {/* Image Section */}
              <div className="flex justify-center md:justify-end">
                <img
                  src={section.image}
                  alt={section.title}
                  className="max-w-xs object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
