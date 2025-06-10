import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bigImg1 from "@/assets/tab-1.png";
import smallImg1 from "@/assets/tab-2.png";
import bigImg2 from "@/assets/tab-2.png";
import smallImg2 from "@/assets/tab-1.png";
import bgGrid from "@/assets/grid-1.png";
import { tabs, tabContent } from "@/data/Home_Data";

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("Meraki");
  const [imageIndex, setImageIndex] = useState(0);
  const [expandedHighlight, setExpandedHighlight] = useState(null);

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
      className="w-full min-h-screen bg-repeat pt-10 px-4 sm:px-8 md:px-16 pb-5"
      style={{
        backgroundImage: `url(${bgGrid})`,
        backgroundSize: "cover",
      }}
    >
      {/* Tabs */}
      <div className="flex flex-wrap justify-center w-full gap-4 sm:gap-6 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setExpandedHighlight(null);
              setImageIndex(0);
            }}
            className={`w-full sm:w-40 md:w-48 px-4 py-4 text-base sm:text-lg md:text-xl font-semibold border-2 rounded-lg transition-all duration-300 ease-in-out text-center
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
      <div className="flex flex-col lg:flex-row mb-20 gap-10 items-start">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col items-start gap-6 lg:sticky lg:top-32 h-fit">
          <div className="space-y-2 px-2">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-primary">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-base sm:text-lg md:text-2xl text-primary whitespace-pre-line">
              {tabContent[activeTab].sub}
            </p>
          </div>

          {/* Image Animation */}
          <div className="relative max-w-full w-full mt-20 sm:max-w-[320px] md:max-w-[380px] h-[300px] sm:h-[360px] md:h-[400px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={`big-${imageIndex}`}
                src={big}
                alt="Big"
                className="absolute top-0 left-0 w-2/3 sm:w-[240px] md:w-[300px] z-20"
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
                className="absolute top-28 left-20 sm:left-52 md:left-72 w-1/3 sm:w-[160px] md:w-[200px] z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full h-full lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 overflow-y-auto max-h-[600px] pr-2 md:pr-4 scrollbar-thin scrollbar-thumb-primary"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                {tabContent[activeTab].heading}
              </h2>

              <p className="text-gray-800 whitespace-pre-line text-sm sm:text-sm md:text-base">
                {tabContent[activeTab].description}
              </p>

              {/* Accordion */}
              {tabContent[activeTab].highlights?.length > 0 && (
                <div className="space-y-3">
                  {tabContent[activeTab].highlights.map((item, idx) => {
                    const isOpen = expandedHighlight === item;
                    return (
                      <div
                        key={idx}
                        className="border border-gray-300 rounded-lg"
                      >
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
                              className="px-4 pb-3 text-gray-700 whitespace-pre-line text-sm sm:text-base"
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
    </div>
  );
}
