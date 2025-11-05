import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

// Image gallery
const items = [
  { src: "/assets/markai_1.webp", alt: "Back to School" },
  { src: "/assets/markai_2.webp", alt: "Creative Kids" },
  { src: "/assets/markai_3.webp", alt: "Holiday Fun" },
];

// SnapShot Archive
const snapshots = [
  "January 2012",
  "April 2012",
  "August 2012",
  "November 2012",
  "February 2013",
  "April 2013",
  "September 2013",
  "Jan 2014",
  "July 2014",
  "September 2014",
  "Dec 2014",
  "May 2015",
  "July 2015",
  "October 2015",
  "January 2016",
  "April 2016",
  "July 2016",
  "October 2016",
  "January 2017",
  "July 2017",
  "December 2017",
  "April 2018",
  "August 2018",
  "January 2019",
  "October 2019",
  "February 2020",
  "November 2020",
  "February 2021",
  "June 2021",
  "January 2022",
  "June 2022",
  "November 2022",
  "August 2023",
  "October 2024",
];

// Accordion content
const merakiSections = [
  {
    title: "Meraki (Experiential Learning)",
    content: `The Meraki (Experiential Learning) program helps students to explore creation and expression through Art, Music, Movement and Photography. The department nurtures an inclusive environment for students, allowing for a fluid engagement with the art forms from Grade 3 onwards. Through an immersive experience in art making, creative process and reflections, Meraki aims to go beyond the product, to promote artistic process. We strongly believe that it is the process of art-making that gives a child the creative confidence, not merely the final product. Folk toy making and play, junk instruments and music making, puppetry and theatre- are some of the projects planned for junior school.
The department also stands apart in its consistent efforts to integrate visual arts with other art forms and disciplines—the environment, culture, mental health, and the body.

For the senior school, Meraki is offered for the students of the NIOS stream. The 11th and 12th Grade students may opt to take up an area in greater depth to create a body of work or a portfolio in art, music or photography. While this course is geared to nurture creation and free expression, some students have gone on to pursue art and music on recognising their core abilities. 

Alumni of the program now find themselves in institutions such as Srishti School of Design and KM College of Music and Technology.

Award winning projects:
https://artroomhero.com/amruthaanand/`,
  },
  {
    title: "FARMING @ APL",
    content: `This is a movement that was started in 2017, by working with APL students to create a garden campus that is edible. We follow regenerative agricultural practices where there is minimal cost and external inputs and maximum benefits such as harvests, a permanent ecosystem with bio diverse flora and fauna, and a closed loop system. As a part of the APL garden, our students across grades have created two Miyawaki Forests that are now self sustaining with over 20 varieties of trees, shrubs, and other vegetation. Over the years, our practices have attracted fauna such as earthworms that are indicative of a healthy soil, garden lizards that keep our insects in control, birds, butterflies, bees, and even tree frogs and toads. We have also started what we call a sky garden, where we have vines, both ornamental and edible growing on the topmost floor edges of our building that also double up as natural cool curtains for our classrooms there. The main aim of the Eat Your School Garden movement is to impart Education for Sustainability (EfS) and share our best practices with other schools to encourage more schools to create such learning gardens. We are also active on social media with Eat Your School Garden pages on Facebook and Instagram, along with a blog page with student contributions on medium.com.

    Facebook: https://www.facebook.com/eatyourschoolgarden
Instagram: https://www.instagram.com/eatyourschoolgarden/
Blog: https://medium.com/eat-your-school-garden`,
  },
  {
    title: "Responsible Citizenship Program",
    content: `The Responsible Citizenship Program in APL has been initiated to help students practice the various aspects that an individual needs to possess in order to lead a sustainable and responsible life while being an informed, law-abiding citizen, recognising their civic responsibility. The student members have taken good practises to their communities where they speak about recycling; spreading awareness about signs and symptoms of infectious disease to name a few.
Real Time issues within the school community were studied and members of the RCP sensitised the student body on mindful use of water, tissues, and segregation of waste. Their campaign on reducing wastage of food within the school community delivered a phenomenal response.

Sustainable Development Goals (SDGs), or Global Goals, an initiative by United Nations Member States (2015) was a universal call to action to end poverty, protect the planet and ensure that all people enjoy peace and prosperity by 2030. Members of the RCP have bestowed upon themselves this goal to discuss prevalent issues and discuss possible solutions.`,
  },
  {
    title: "Publishing & SnapShot",
    content: (
      <>
        <p className="mb-4">
          <strong>SnapShot</strong>, APL’s e-magazine is created by the
          students, for the students. It is a platform that gives them an
          opportunity to voice their opinions, showcase events, and much more.
          Contributions come from students, teachers, and parents, making it a
          diverse magazine.
        </p>
        <p className="mb-4">
          This student-centered program allows students to explore different
          roles like writing, proofing, art direction, and design. SnapShot
          reflects the synthesis of academic learning and real-world experience.
        </p>
        <h4 className="text-md font-semibold mt-4 mb-2 text-secondary">
          SnapShot Archive
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm mb-4">
          {snapshots.map((snap, i) => (
            <div
              key={i}
              className="bg-gray-50 p-2 rounded shadow hover:bg-gray-100 transition"
            >
              {snap}
            </div>
          ))}
        </div>
        <div className="mt-2">
          <a
            href="#"
            className="inline-block bg-primary text-white px-5 py-2 rounded hover:bg-primary/90 transition"
          >
            Download Latest Snapshot
          </a>
          <a
            href="#"
            className="ml-4 text-blue-600 text-sm underline hover:text-blue-800"
          >
            Click here to give us your feedback!
          </a>
        </div>
      </>
    ),
  },
];

export default function MerakiSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="px-4 md:px-16 py-12 bg-white text-primary font-sans">
      {/* Image Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Intro Text */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-secondary mb-2">
          Meraki
        </h2>
        <p className="italic text-sm text-primary mb-4">
          Creative Expression | Passion Meets Purpose
        </p>
        <h3 className="text-lg md:text-xl font-bold text-black uppercase mb-2">
          Beyond Classroom
        </h3>
        <p className="text-sm md:text-base text-black leading-relaxed mb-6">
          Any education is not complete without taking cognisance of what is the
          need of the hour. Designed to complement the academic curriculum,
          beyond classroom widens horizons, maximises learners’ participation
          and potential, thus, leading to increased learning and enhanced
          cognitive development...
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {merakiSections.map((item, index) => (
            <div key={index} className="border rounded-md shadow-sm">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 font-medium text-left"
              >
                <div className="flex gap-3 items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white text-xs rounded-full">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                  <span>{item.title}</span>
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-sm text-gray-700 whitespace-pre-line overflow-hidden"
                  >
                    {typeof item.content === "string" ? (
                      <p>{item.content}</p>
                    ) : (
                      item.content
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
