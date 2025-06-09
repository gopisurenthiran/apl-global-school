import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bigImg1 from "@/assets/tab-1.png";
import smallImg1 from "@/assets/tab-2.png";
import bigImg2 from "@/assets/tab-2.png";
import smallImg2 from "@/assets/tab-1.png";
import bgGrid from "@/assets/graph2.png";

// Tabs list
const tabs = ["Meraki", "Art", "Music", "Expressions"];

// Main content per tab
const tabContent = {
  Meraki: {
    title: "Meraki",
    sub: "Creative Expression",
    description: `Any education is not complete without taking cognisance of what is the need of the hour. Designed to complement the academic curriculum, beyond classroom widens horizons, maximises learner’s participation and potential, thus leading to increased learning and enhanced cognitive development. Recognising the need for this, the following domains provide that and more: social opportunities and opening a child’s mind to new interests.`,
    highlights: [
      "Meraki (Creative Expressions)",
      "Eat Your School Garden",
      "Responsible Citizenship Programme",
      "Publishing",
    ],
    details: {
        "Meraki (Creative Expressions)":`The Meraki (Creative Expressions) program helps students to explore creation and expression through Art, Music, Movement and Photography. The department nurtures an inclusive environment for students, allowing for a fluid engagement with the art forms from Grade 3 onwards. Through an immersive experience in art making, creative process and reflections, Meraki aims to go beyond the product, to promote artistic process. We strongly believe that it is the process of art-making that gives a child the creative confidence, not merely the final product. Folk toy making and play, junk instruments and music making, puppetry and theatre- are some of the projects planned for junior school.
The department also stands apart in its consistent efforts to integrate visual arts with other art forms and disciplines—the environment, culture, mental health, and the body.

For the senior school, Meraki is offered for the students of the NIOS stream. The 11th and 12th Grade students may opt to take up an area in greater depth to create a body of work or a portfolio in art, music or photography. While this course is geared to nurture creation and free expression, some students have gone on to pursue art and music on recognising their core abilities. 

Alumni of the program now find themselves in institutions such as Srishti School of Design and KM College of Music and Technology.

Award winning projects
https://artroomhero.com/amruthaanand/`,
      "Eat Your School Garden": `This movement began in 2017 with students creating an edible garden. By using regenerative agriculture, the garden fosters biodiversity and sustainable learning. From Miyawaki forests to sky gardens, students experience hands-on education for sustainability.

Follow us:
• Facebook: https://www.facebook.com/eatyourschoolgarden
• Instagram: https://www.instagram.com/eatyourschoolgarden/
• Blog: https://medium.com/eat-your-school-garden`,
      "Responsible Citizenship Programme": `A program to foster sustainability, civic responsibility, and awareness. Students lead initiatives on water conservation, food waste reduction, and support the UN’s SDGs with campaigns and awareness sessions.`,
      Publishing: `SnapShot, APL’s e-magazine, showcases student voices and talents. Students write, proof, design, and illustrate, merging real-world print media skills with academics.`,
    },
    images: [
      { big: bigImg1, small: smallImg1 },
      { big: bigImg2, small: smallImg2 },
    ],
  },
  Art: {
    title: "Art",
    sub: "Discover Your 'Self'",
    description: "Art content coming soon...",
    highlights: [],
    images: [{ big: bigImg1, small: smallImg1 }],
  },
  Music: {
    title: "Music",
    sub: "Hear Your Scound",
    description: "Music content coming soon...",
    highlights: [],
    images: [{ big: bigImg1, small: smallImg1 }],
  },
  Expressions: {
    title: "Expressions",
    sub: "Impress Through Expressions",
    description: "Expressions content coming soon...",
    highlights: [],
    images: [{ big: bigImg1, small: smallImg1 }],
  },
};

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("Meraki");
  const [imageIndex, setImageIndex] = useState(0);
  const [expandedHighlight, setExpandedHighlight] = useState(null);

  // Rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      const total = tabContent[activeTab]?.images?.length || 1;
      setImageIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeTab]);

  const images = tabContent[activeTab]?.images || [];
  const { big, small } = images[imageIndex] || {};

  return (
    <div
      className="w-full min-h-screen bg-repeat pt-10 px-4 md:px-16 pb-24"
      style={{
        backgroundImage: `url(${bgGrid})`,
        backgroundSize: "cover",
      }}
    >
      {/* Tabs */}
      <div className="flex flex-wrap justify-center w-full gap-6 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setExpandedHighlight(null);
              setImageIndex(0);
            }}
            className={`w-full sm:w-48 px-8 py-4 text-xl font-semibold border-2 rounded-lg transition-all duration-300 ease-in-out text-center
              ${
                activeTab === tab
                  ? "bg-primary text-secondary"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Sticky Column */}
        <div className="sticky top-32 h-fit flex flex-col items-start justify-start gap-6">
          <div className="space-y-1 px-2">
            <h3 className="text-2xl md:text-4xl font-semibold text-primary">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-2xl text-primary whitespace-pre-line">
              {tabContent[activeTab].sub}
            </p>
          </div>

          {/* Image Animation */}
          <div className="relative w-[380px] h-[400px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={`big-${imageIndex}`}
                src={big}
                alt="Big"
                className="absolute top-0 left-0 w-[300px] z-20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.img
                key={`small-${imageIndex}`}
                src={small}
                alt="Small"
                className="absolute top-28 left-80 w-[200px] z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right Dynamic Content */}
        <AnimatePresence mode="wait">
          {/* Right Scrollable Section */}
            <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 overflow-y-auto pr-4 max-h-[600px] scrollbar-thin scrollbar-thumb-primary"
            >

            <h2 className="text-3xl font-bold text-primary">
              BEYOND CLASSROOM
            </h2>

            <p className="text-gray-800 whitespace-pre-line">
              {tabContent[activeTab].description}
            </p>

            {/* Highlights with Accordion */}
            {tabContent[activeTab].highlights?.length > 0 && (
              <div className="space-y-3">
                {tabContent[activeTab].highlights.map((item, idx) => {
                  const isOpen = expandedHighlight === item;
                  return (
                    <div key={idx} className="border border-gray-300 rounded-lg">
                      <button
                        onClick={() =>
                          setExpandedHighlight(isOpen ? null : item)
                        }
                        className="w-full flex items-center justify-between px-4 py-2 text-left text-primary font-semibold hover:bg-purple-50"
                      >
                        {item}
                        <span className="text-xl font-bold">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 pb-3 text-gray-700 whitespace-pre-line"
                          >
                            {tabContent[activeTab].details?.[item]}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
