import { useState } from "react";
import paper from "../assets/section-2-banner.png";
import tabData from "../data/data";

export default function TabsAccordionSection() {
  const tabs = Object.keys(tabData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const { images, content } = tabData[activeTab];

  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${paper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto font-primary px-4 py-10 lg:py-40 space-y-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:justify-center gap-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveSubIndex(0);
              }}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold text-sm md:text-base transition ${
                activeTab === tab
                  ? "bg-third text-secondary"
                  : "border border-third text-secondary hover:bg-third"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Images */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* First image */}
            <div className="md:w-2/3 w-full">
              <img
                src={images[0]}
                alt="Main"
                className="w-full h-auto object-cover rounded"
              />
            </div>

            {/* Second image */}
            <div className="md:w-1/3 w-full md:mt-12 pt-2 md:pt-0">
              <img
                src={images[1]}
                alt="Secondary"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-3">
            <h4 className="text-xl sm:text-2xl font-semibold text-black">
              {content.sub1}
            </h4>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              {content.heading}
            </h2>

            {content.subtitle && (
              <p className="text-base sm:text-lg text-black">
                {content.subtitle}
              </p>
            )}

            <h3 className="text-xl sm:text-2xl font-bold text-black">
              {content.title}
            </h3>

            <p className="text-sm sm:text-base font-secondary text-gray-800">
              {content.description}
            </p>

            {/* Accordion Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {content.subheading.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSubIndex(index)}
                  className={`flex items-center text-left px-3 py-2 font-semibold rounded transition ${
                    activeSubIndex === index
                      ? "text-black"
                      : "text-third hover:text-secondary"
                  }`}
                >
                  <span className="text-xl font-bold mr-2">
                    {activeSubIndex === index ? "−" : "+"}
                  </span>
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Accordion Content */}
        {/* <div className="w-full bg-white bg-opacity-80 rounded-lg p-4 mt-4 shadow">
          <h4 className="text-lg sm:text-xl font-semibold text-third mb-2">
            {content.subheading[activeSubIndex].title}
          </h4>
          <p
            className="text-sm sm:text-base text-gray-800"
            dangerouslySetInnerHTML={{
              __html: content.subheading[activeSubIndex].description,
            }}
          />
        </div> */}
      </div>
    </section>
  );
}
