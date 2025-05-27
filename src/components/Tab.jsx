import { useState } from "react";
import paper from "../assets/section-2-banner.png";
import tabData from '../data/data';

export default function TabsAccordionSection() {
  const tabs = Object.keys(tabData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const { images, content } = tabData[activeTab];

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-10"
      style={{ backgroundImage: `url(${paper})` }}
    >
      <div className="max-w-6xl mx-auto font-primary px-4 py-12 space-y-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveSubIndex(0);
              }}
              className={`px-6 md:px-10 py-3 rounded-md font-semibold text-sm md:text-base transition ${
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
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Layered Images */}
          <div className="flex gap-6 justify-center md:justify-start">
            <div className="p-2 w-2/3">
              <img
                src={images[0]}
                alt="Main"
                className="w-full h-auto object-cover rounded"
              />
            </div>
            <div className="w-1/3 mt-8 md:mt-12">
              <img
                src={images[1]}
                alt="Secondary"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>

          {/* Right: Scrollable Content */}
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl font-semibold text-black">
              {content.sub1}
            </h4>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              {content.heading}
            </h2>

            {content.subtitle && (
              <p className="text-lg md:text-xl text-black">
                {content.subtitle}
              </p>
            )}

            <h2 className="text-2xl md:text-3xl font-bold text-black">
              {content.title}
            </h2>
            <p
              className="text-gray-800"
              dangerouslySetInnerHTML={{ __html: content.description }}
            />

            {/* Accordion Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.subheading.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSubIndex(index)}
                  className={`flex items-center text-left p-2 font-semibold transition ${
                    activeSubIndex === index
                      ? "text-black"
                      : "text-purple-800 hover:text-secondary"
                  }`}
                >
                  <span className="text-xl font-bold">
                    {activeSubIndex === index ? "−" : "+"}
                  </span>
                  <span className="ml-2">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Accordion Content */}
        <div className="w-full space-y-4">
          <div className="p-4 rounded shadow text-gray-700 bg-white">
            <h4 className="text-xl font-semibold mb-2 text-purple-700">
              {content.subheading[activeSubIndex].title}
            </h4>
            <p
              className="text-gray-800"
              dangerouslySetInnerHTML={{
                __html: content.subheading[activeSubIndex].description,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
