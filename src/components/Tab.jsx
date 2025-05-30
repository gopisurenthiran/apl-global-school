import { useState } from "react";
import paper from "../assets/graph2.png"
import tabData from "../data/data";

export default function TabsAccordionSection() {
  const tabs = Object.keys(tabData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const { images, content } = tabData[activeTab];

  return (
    <section
      className="p-10"
      style={{
        backgroundImage: `url(${paper})`,
        backgroundAttachment: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="">
        <div className="container mx-auto font-primary px-4 overflow-hidden space-y-8">

          {/* Desktop */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start lg:py-10 sm:py-0 hidden md:flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setActiveSubIndex(0);
                  }}
                  className={`px-20 py-4 space-y-8 mx-auto rounded-md font-semibold text-sm md:text-base transition ${
                    activeTab === tab
                      ? "bg-third text-secondary"
                      : "border border-third text-secondary hover:bg-third"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

          
          {/* ✅ Tabs: 2 per row on mobile, flex layout on md+ */}
          <div className="grid grid-cols-2 gap-4 justify-center md:flex md:flex-wrap md:justify-start lg:py-20 sm:py-0 block md:hidden">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveSubIndex(0);
                }}
                className={`px-4 py-3 rounded-md font-semibold text-sm md:text-base transition ${
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
            <div className="flex gap-6 relative">
              <div className="p-2 w-2/3">
                <img
                  src={images[0]}
                  alt="Main"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-1/3 mt-12 pt-12">
                <img
                  src={images[1]}
                  alt="Secondary"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>


                {/* Desktop */}
               <div className="space-y-2 font-primary ">
                <h4 className="text-3xl font-semi-bold text-#000000">
                  {content.sub1}
                </h4>
                <h2 className="text-3xl font-bold text-#000000">
                  {content.heading}
                </h2>
    
                {content.subtitle && (
                  <p className="text-xl text-#000000 ">{content.subtitle}</p>
                )}
                <h2 className="text-3xl font-bold text-#000000">{content.title}</h2>
                <p className="font-secondary">{content.description}</p>
    
                {/* Accordion Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full ">
                  {content.subheading.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSubIndex(index)}
                      className={`flex items-center justify-start text-left p-2  font-semibold transition ${
                        activeSubIndex === index
                          ? " text-black"
                          : " text-third hover:text-secondary"
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

             {/* Mobile */}
            {/* Right: Text Content */}
            <div className="space-y-2 font-primary block md:hidden">
              
              {/* ✅ Accordion: 2 per row on mobile, 1 per row on md+ */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 w-full block md:hidden">
                {content.subheading.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSubIndex(index)}
                    className={`flex items-center justify-start text-left p-2 font-semibold transition ${
                      activeSubIndex === index
                        ? "text-black"
                        : "text-third hover:text-secondary"
                    }`}
                  >
                    {/* <span className="text-xl font-bold">
                      {activeSubIndex === index ? "−" : "+"}
                    </span> */}
                    {/* <span className="ml-2">{item.title}</span> */}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
