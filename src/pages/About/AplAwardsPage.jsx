import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { MdDoubleArrow } from "react-icons/md";

// Images
import award1 from "/assets/award-1.webp";
import award2 from "/assets/award-2.webp";
import award3 from "/assets/award-3.png";
import award4 from "/assets/ceii.jpg";
import award5 from "/assets/world.jpg";
import award6 from "/assets/awards-6.png";
import award7 from "/assets/thumbnail-3.jpg";
import award9 from "/assets/award-8.png";
import award8 from "/assets/thumbnail-4.jpg";
import award10 from "/assets/award-10.png";
import award11 from "/assets/ika.png";
import award12 from "/assets/award-12.png";
import award13 from "/assets/outstanding.png";
import award14 from "/assets/award-14.png";

// Sections
import APLVAlue3 from "../others/AplValue3";
import StaticBanner from "../../components/StaticBanner";
import SpecialMention from "../Home/SpecialMention";
import CambridgeAwards from "../others/CambridgeAwards";

// Banner
import banner1 from "/banners/apl-awards.jpg";
import mobile1 from "/banners/apl-awards-mob.webp";

const slides = [{ desktop: banner1, mobile: mobile1 }];

const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split(/[?&]/)[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  } else if (url.includes("youtube.com/watch")) {
    const id = url.split("watch?v=")[1].split(/[?&]/)[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  }
  return url;
};

// Determine if URL is YouTube
const isYouTubeLink = (url) =>
  typeof url === "string" && (url.includes("youtube.com") || url.includes("youtu.be"));


const awards = [
  
  {
    title: "Excellence in Activity Based Learning",
    year: "2019",
    description:
      "APL received the prestigious award for 'Excellence in Activity Based Learning' in the ELDROK India K-12 Summit 2019.",
    image: award2,
    link: "https://youtu.be/-GZY7rW1PzA",
  },
  {
    title: "CEII Most Innovational Pedagogy Award 2020–21",
    year: "2021",
    description:
      " APL was awarded the “CEII most Innovational Pedagogy award 2020-21 in Tamil Nadu region. It was also conferred with an honorary membership of CEII’s Academy Guild, a privilege shared by 20 odd schools pan India.",
    image: award4,
    link: "https://youtu.be/1pOqrxeg65w",
  },
  {
    title: "Women's Empowerment Entrepreneur 2019",
    year: "2022",
    description:
      "Our Founder Ms. Gita Jagannathan was honoured with the Leadership award under the category of 'Women's Empowerment Entrepreneur 2019'. The award procreated by AsiaOne celebrates and acknowledges the talented cohort of innovators, creators, and entrepreneurs who have been instrumental in boldly envisioning, realizing and validating their aspirations to shape the future, and transform the world as “World’s Greatest Brands & Leaders 2018-19”.",
    image: award3,
    link: "#",
  },
  {
    title: "World Education Summit & Awards 2022",
    year: "2022",
    description:
      "Our Founder Ms. Gita Jagannathan was invited as a speaker in the 23rd World Education Summit & Awards 2022– The Premier Global Event on Innovation in Education virtual conference organised by Elets Technomedia & DigitalLearning Magazine, March 2022. The topic was Decoding the Future, Equipping Teachers of Today with the Skills of Tomorrow.",
    image: award5,
    link:"https://www.youtube.com/watch?v=0SdvFqndx6g",
  },
  {
    title: "Outstanding Professional Achievement Award",
    year: "2022",
    description:
      "In Recognition of Outstanding Professional Achievement & Contribution in Nation Building, our Founder Ms Gita Jagannathan was conferred with a Certificate of Appreciation, 2022. The Indian Achievers' Forum promotes achievements that inspire businesses and communities. This award is in appreciation of her exceptional and distinguished service in her field.",
    image: award6,
    link: "#",
  },
  {
    title: "Sports Talk With Gita",
    year: "2022",
    description:
      "Our Founder Ms Gita Jagannathan was a speaker in the talk show 'Sports Champ' hosted by Mr Bhushan Thakur, an international Sportsperson, Founder an Editor-in-chief of Sports Champ YouTube channel, Sports EducationMagazine, 2022.",
    image: award7,
    link: "https://youtu.be/abcIPmDJTuU",
  },
  {
    title: "Eldrok India K12 Awards - 2022",
    year: "2022",
    description:
      'APL received the prestigious award for "Excellence in Providing Personalised Learning Environment" presented by Eldrok India K12 Awards - 2022.',
    image: award9,
    link: "#",
  },
  {
    title: "Recognizing Transformative School Leadership",
    year: "2022",
    description:
      ' Our Founder Ms. Gita Jagannathan participated in a talk show (2022) by Great Principals, an organization that is committed to recognizing the contribution of school leaders and their exceptional contribution in the field of education from across the country. They recognise the contributions of school leaders and educators who firmly believe in the ‘all inclusive’ pedagogy and work tirelessly towards the reformation of Indian education system.',
    image: award8,
    link: "https://www.youtube.com/watch?v=vGH87-gshCg&t=16s",
  },
  {
    title: "Excellence in Global Education",
    year: "2024",
    description:
      "Our school was featured in The Knowledge Review Magazine as one of  'The Most Excellent International Schools to Study in India, 2024' The Knowledge Review Magazine is a global education magazine (print and online) that deals with the introduction of institutes and leaders around the world for educational information, with a focus on institutions, and educational leaders around the world while intending to evaluate learners. and educators about education systems, technologies, opportunities, trends, and strategies.",
    image: award10,
    link: "#",
  },
  {
    title: "IKA 2024 - Chennai",
    year: "2024",
    description: "Our principal, Ms. Sarija Santhosh was awarded the 'IKA 2024 - Chennai' in recognition for excellence in Promoting Extra Curricular Activities for Holistic Development. The honour was bestowed by Eldrok India K-12 Summit - 2024', on 6th August, 2024, in an event held at ITC Grand Chola, Chennai.",
    image: award11,
    link: "#",
  },
    {
    title: "IDA Education Awards 2024",
    year: "2024",
    description: "APL was the winner of The IDA Education Awards 2024 under the category of  'Fostering Inclusive Education'. We were recognised for our contributions and dedication to the field of education and for setting an inspiring example for educators and institutions across the nation in creating a respectful, supportive and inclusive environment by bridging gaps across multiple learning levels of students",
    image: award12,
    link: "#",
  },
      {
    title: "Most Outstanding School Award",
    year: "2024",
    description: "We were awarded “The Most Outstanding School” in the regional rankings by The Global Educators Conclave (GEO),  a prestigious platform for visionary school leaders, academic heads, educators, policy advocates, and education innovators from Tamil Nadu and beyond.",
    image: award13,
    link: "#",
  },

];


export default function AplAwardsPage() {
  const [popupContent, setPopupContent] = useState(null); // { type: 'image'|'youtube', src }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = popupContent ? "hidden" : "";
  }, [popupContent]);

  const openPopup = (award, type) => {
    if (type === "youtube") {
      setPopupContent({ type: "youtube", src: getYouTubeEmbedUrl(award.link) });
    } else {
      setPopupContent({ type: "image", src: award.image });
    }
  };

  return (
    <>
      <StaticBanner slides={slides} alt="APL Awards Banner" />

      <section className="relative w-full py-16 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="bg-primary text-white rounded-lg py-14 relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-primary font-bold text-secondary"
          >
            APL Awards & Recognitions
          </motion.h1>
          <p className="text-white px-10 mt-4 ">Awards are recognitions that demonstrate exceptional achievements in the fields of education, innovation, and holistic development. APL has been recognised in different areas for consistently striving for academic excellence, fostering creativity, and implementing forward-thinking practices that positively impact students and the broader learning community.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="w-full flex items-center justify-center p-2">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full max-h-72 object-contain cursor-pointer"
                  onClick={() =>
                    openPopup(award, isYouTubeLink(award.link) ? "youtube" : "image")
                  }
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-primary font-semibold text-secondary">{award.title}</h3>
                <p className="text-sm text-primary font-medium mt-1">{award.year}</p>
                <p className="text-sm text-gray-600 mt-2 flex-grow">{award.description}</p>
                {award.link && award.link !== "#" && isYouTubeLink(award.link) && (
                  <button
                    onClick={() => openPopup(award, "youtube")}
                    className="mt-4 px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-secondary transition"
                  >
                    Watch Video
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popup */}
      <AnimatePresence>
        {popupContent && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopupContent(null)}
          >
            {popupContent.type === "youtube" ? (
              <iframe
                src={popupContent.src}
                title="Award Video"
                className="w-full max-w-[95vw] h-[60vh] md:h-[80vh] rounded-lg shadow-2xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={popupContent.src}
                alt="Award"
                className="max-w-[95vw] max-h-[90vh] rounded-lg object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            )}

            <button
              onClick={() => setPopupContent(null)}
              className="absolute top-5 right-5 bg-white/90 hover:bg-secondary hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-gray-900 text-lg font-bold shadow"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <APLVAlue3 />
      <CambridgeAwards />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-16">
        <SpecialMention />
      </section>
    </>
  );
}
