import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import Pedagogy from "@/assets/Pedagogy.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MdDoubleArrow } from "react-icons/md";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];

const curriculumData = [
  {
    title: "ART",

    content: [
      `The Art Program at APL Global School is designed to stimulate young minds to reflect and express themselves creatively. The program exposes children to artistically respond and understand their environment. Children will be exploring the evolution of art by understanding local and world art history. They will be encouraged to identify the significance of art history in their present lives.`,
      `We live among a rich cultural art tradition. Children will get an opportunity to see and learn about local, traditional and contemporary art practices. They will explore different areas of study like painting, sculpture, printmaking, digital art, textiles…etc. They will also have hands-on experience with all the different art mediums.`,
      `The Art Program aims to provide a child with a holistic experience. For children who want to pursue and grow into practicing a creative career, the experience and learning they get from school will be valuable. The attempt is to provide a space for personal artistic growth. This will allow the child to grow into an individual that artistically responds to its environment.`,
      `By grade 8, the students are well equipped to take on IGCSE Art & Design curriculum. By extension, Art & Design is provided as a subject at A & AS level as well.`,
    ],
  },
  {
    title: "MUSIC",
    content: [
      `Even before recorded history, people created music, whether through drumming, singing or chanting. Some of our strongest emotions may be brought on by listening to a piece of music.`,
      `To enable our students to understand and learn this method of expression, we introduced Music as a subject from Grade 1 to 8. At APL Global, using various Western Classical Music teaching techniques (like Alfred’s, John Thomson, Suzuki and Trinity based) we equip our students to play and analyse all levels of music.`,
      `Since we believe each child is unique, we ensure that equal importance is given to both World Music and Indian Classical Music in the curriculum, so that students are exposed to alternative forms of music. In addition, we ensure that students are exposed to top-notch music and sound engineering software so that they are in touch with aspects of music production as well.`,
      `By grade 8, the students are well equipped to take on IGCSE Music curriculum. By extension, Music is provided as a subject at A & AS level as well.`,
      `Our students have composed and created background scores for the yearly annual day event and other programmes. they have worked in collaboration with leading musicians in the industry; composing music pieces for school fundraisers and awareness programmes. This has led to a profound sense of individuality and on a broader social level, the ability of music to foster community while creating art.`,
    ],
  },
  {
    title: "SPORTS",
    content: [
      `Sports have always been an integral part of the APL curriculum. The path shown by
Dr. Kannan Pugazhendi— a renowned sports physician and fitness consultant — is being carried forward ably by the sports faculty. With a firm belief that the physical state impacts mental energies, APL ensures that its students are exposed to regular fitness checks, exercises and sports.`,
      `The sports program is aimed at developing physical fitness and sporting ability in a variety of indoor and outdoor games, at individual and team levels. Attention is given to individual needs in areas like posture, strength, endurance, flexibility, stamina and skill development for sporting events. Sports and movement activities are used effectively to work on psychological factors like self-confidence, attention, motivation, managing emotions and so on. With access to excellent sports facilities, students benefit from enhanced and age-appropriate coaching & learning.`,
      `The programme is more than just a co-curricular activity. It is being addressed as a CAIE curriculum with syllabus aims and assessment objectives in place. Students are exposed to a sound understanding of the principles & practices of sports as a discipline and good health in general.`,
      `The games played at APL include basketball, football, cricket, badminton, table tennis, throw ball, volleyball and a range of athletic sports.`,
    ],
  },
  {
    title: "DMAC (Drama, Music, Art and Creative Movement)",
    description:
      "Students in the Lower Secondary school have the option of choosing any one of the four Creative forms of Expression: Drama, Music, Art, and Creative Movements (DMAC). They will be assessed on their progress at the end of each term.",
    options: [
      {
        title: "Drama",
        description:
          "The course in Drama promotes active learning, stimulates creativity and widens perceptions. A series of theatre games and improvisational exercises conducted under the supervision of a professional theatre person will focus on helping them develop their imagination, spontaneity, and reflexes.",
        aims: [
          "Enabling students to understand the role of rhythm, space, character, and plot in creating a piece of theatre.",
          "Helping students discover and enhance their storytelling skills.",
          "Developing their acting skills, both individually and in groups.",
          "Enabling students to develop their skills in devising original stories for the stage.",
        ],
      },
      {
        title: "Music",
        description:
          "Music is introduced as a subject from Grade 1 to 8 at APL Global. Using various Western Classical Music teaching techniques (like Alfred’s, John Thomson, Suzuki, and Trinity based), students learn to play and analyze music. Equal importance is given to World Music and Indian Classical Music. Students are also introduced to music production using professional software. Instrument choices include Vocal, Guitar, Keyboard, and Drums.",
        aims: "By Grade 8, students are prepared for the IGCSE Music curriculum. Music is also available at A & AS level.",
      },
      {
        title: "Art",
        description:
          "The Art program is designed to stimulate young minds to reflect and express themselves creatively. Students explore local and global art history and gain hands-on experience with various art mediums. They also study local, traditional, and contemporary art practices.",
        aims: "By Grade 8, students are prepared for the IGCSE Art & Design curriculum. Art & Design is also offered at A & AS level.",
      },
      {
        title: "Creative Movements",
        description:
          "Creative Movement sessions focus on problem-solving, collaboration, expression, and valuing individual differences. The classes increase body awareness and spatial understanding to enhance self-expression and respect for others.",
        aims: [
          "Creative Movement and Performance",
          "Rhythm & Fitness",
          "Dance Studies",
        ],
      },
    ],
  },
];

function CoCurricularPrograms() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
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
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        {/* Add an overlay to improve text readability if needed */}
        <div className=" py-12 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrbold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
                Co-Curricular Programs
              </h2>

              <p className="text-black font-secondary text-base leading-relaxed">
                Co-curricular programmes are disciplines that align with and
                mirror our academic programme. These structured disciplines are
                CAIE approved and bear credits.
              </p>
            </div>

            {/* Right - Image */}
            <div>
              <img
                src={Pedagogy}
                alt="APL Vision"
                className="ml-20 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundImage: `url(${AboutGraph})` }}>
        <div className="p-6 md:p-10 mx-auto text-left space-y-6">
          {curriculumData.map((section, index) => (
            <div
              key={index}
              className="border-b border-black overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 transition font-semibold text-lg flex justify-between items-center"
              >
                {section.title}
                <span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary transition duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary transition duration-200" />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 space-y-4">
                  {/* Optional: Show section.description if present */}
                  {section.description && (
                    <p className="text-gray-700">{section.description}</p>
                  )}

                  {/* If 'content' exists, render as list */}
                  {section.content && (
                    <ol className="space-y-1 text-gray-800 list-none pl-1">
                      {section.content.map((item, i) => {
                        const isOdd = (i + 1) % 2 !== 0;
                        const number = String(i + 1).padStart(2, "0");
                        const iconColor = isOdd
                          ? "text-primary"
                          : "text-secondary";

                        return (
                          <li key={i} className="flex items-start gap-2">
                            <span
                              className={`font-medium flex items-center gap-1 ${iconColor}`}
                            >
                              {number}.
                              <MdDoubleArrow
                                className={`w-4 h-4 ${iconColor}`}
                              />
                            </span>
                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </ol>
                  )}

                  {/* If 'options' exist (DMAC), render nested structure */}
                  {section.options && (
                    <div className="space-y-6">
                      {section.options.map((opt, idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-lg text-primary mb-2">
                            {opt.title}
                          </h4>
                          <p className="text-gray-700 mb-2">
                            {opt.description}
                          </p>

                          {/* If aims is an array, render as list; if it's a string, show as a paragraph */}
                          {Array.isArray(opt.aims) ? (
                            <ul className="list-disc list-inside text-gray-800 pl-4 space-y-1">
                              {opt.aims.map((aim, i) => (
                                <li key={i}>{aim}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-800">{opt.aims}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CoCurricularPrograms;
