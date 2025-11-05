import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Calendar } from "lucide-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CertificatesCarousel from "./CertificatesCarousel";

/* ---------------- Dummy Data ---------------- */
const data = {
  Affiliations: [],

  News: [
    {
      title: "School awards",
      date: "",
      image: "/assets/events/school-award.jpg",
      description:
        "Awards are recognitions that demonstrate exceptional achievements in the fields of education, innovation, and holistic development. APL has been recognised in different areas for consistently striving for academic excellence, fostering creativity, and implementing forward-thinking practices that positively impact students and the broader learning community.",
      link: "/apl-awards",
    },
    {
      title: "Cambridge Learners awards",
      date: "",
      image: "/assets/cambridge.webp",
      description:
        "Outstanding Cambridge Learner Awards are a group of awards issued by Cambridge International Education, that recognise exceptional achievement in Cambridge exams around the world. The primary purpose of these awards is to celebrate and recognise the success of Cambridge learners.",
      link: "/apl-awards",
    },
    {
      title: "Special mention",
      date: "",
      image: "/assets/children-day.webp",
      description:
        "We take pride in celebrating our students’ grit, focus, and determination reflected in their remarkable achievements. Whether in sports, literary pursuits, or innovative endeavors, we encourage them to follow their passions with zeal and enthusiasm.",
      link: "/apl-awards",
    },
  ],

  Events: [
    {
      title: "Investiture Ceremony",
      image: "/assets/investiture-ceremony.webp",
      imageAlt: "Student leaders taking oath during Investiture Ceremony",
      description:
        "A formal event where student leaders are inducted into their roles, taking an oath to uphold school values and lead by example.",
    },
    {
      title: "APL MUN",
      image: "/assets/apl-mun.webp",
      imageAlt: "Students participating in APL MUN",
      description:
        "Students engage in simulated United Nations discussions, honing diplomatic thinking and public speaking skills.",
    },
    {
      title: "Synergy",
      image: "/assets/synergy.jpg",
      imageAlt: "Students collaborating during Synergy",
      description:
        "A celebration of the English language through drama, poetry, and compelling stage performances.",
    },
    {
      title: "Cultural Evening",
      image: "/assets/cultural-evening.jpg",
      imageAlt: "Students performing at Cultural Evening",
      description:
        "A vibrant conglomeration of music, art, drama and speech that showcases student creativity.",
    },
    {
      title: "HUCOMTEK",
      image: "/assets/hucomtek.webp",
      imageAlt: "Students performing on stage during HUCOMTEK",
      description:
        "An interdisciplinary showcase where technology meets the humanities with student-led creations.",
    },
    {
      title: "Sports Day",
      image: "/assets/sports-day.webp",
      imageAlt: "Track events during Sports Day",
      description:
        "A high-powered annual meet where houses compete in track and field, team games, and relays.",
    },
    {
      title: "Swadeshi Week",
      image: "/assets/swadeshi.png",
      imageAlt: "Swadeshi Week celebrations",
      description:
        "A week-long August celebration, buzzing with activities appreciating local craft and culture.",
    },
    {
      title: "Aspire",
      image: "/assets/aspire.png",
      imageAlt: "Students on a field trip",
      description:
        "Experiential field trips that bring classroom learning to life with hands-on exploration.",
    },
    {
      title: "Meraki Fair",
      image: "/assets/meraki-fair.jpg",
      imageAlt: "Students showcasing their projects at Meraki Fair",
      description:
        "An exhibition of creativity where students present projects, inventions, and innovations.",
    },
    {
      title: "Talent Show",
      image: "/assets/talent-show.jpg",
      imageAlt: "Students performing at Talent Show",
      description:
        "A fun-filled platform for singing, dance, magic, and unique talents to shine.",
    },
    {
      title: "Children’s Day",
      image: "/assets/children’s-day.jpg",
      imageAlt: "Children celebrating Children's Day",
      description:
        "A joyful day celebrating childhood with games, performances, and special assemblies.",
    },
    {
      title: "Inter school Sports Day",
      image: "/assets/inter-school-sports-day.jpg",
      imageAlt: "Students competing in Inter school Sports Day",
      description:
        "Students from different schools compete, showcasing athleticism, teamwork, and spirit.",
    },
  ],
};

export default function NewsEventsTabs() {
  const [activeTab, setActiveTab] = useState("Affiliations");
  const tabs = Object.keys(data);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full bg-gray-50 py-12 font-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Tabs */}
        <div className="mb-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 min-w-max">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-primary uppercase text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-secondary border border-primary hover:text-white"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Heading + Nav */}
        <div className="mb-4 flex items-center justify-between">
          <motion.h2
            key={activeTab}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-2xl md:text-3xl uppercase font-primary font-bold text-primary"
          >
            {activeTab}
          </motion.h2>

          {activeTab !== "Affiliations" && (
            <div className="flex items-center gap-2">
              <button
                ref={prevRef}
                aria-label="Previous"
                className="grid place-items-center h-10 w-10 rounded-full bg-white border border-primary text-primary shadow hover:bg-secondary hover:text-white transition"
              >
                <FaArrowLeft className="h-5 w-5" />
              </button>
              <button
                ref={nextRef}
                aria-label="Next"
                className="grid place-items-center h-10 w-10 rounded-full bg-white border border-primary text-primary shadow hover:bg-secondary hover:text-white transition"
              >
                <FaArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        {activeTab === "Affiliations" ? (
          <CertificatesCarousel />
        ) : data[activeTab].length > 0 ? (
          <Swiper
            key={activeTab}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="pb-8"
          >
            {data[activeTab].map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden h-full"
                >
                  <div className="relative w-full h-44 md:h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      className="w-full h-full object-cover transform transition duration-500"
                    />
                  </div>

                  <div className="p-5">
                    {item.date && (
                      <p className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 text-secondary mr-2" />
                        {item.date}
                      </p>
                    )}

                    <h3 className="text-lg font-semibold text-gray-800 hover:text-primary transition">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                        {item.description.slice(0, 100)}...
                      </p>
                    )}

                    {/* ✅ Updated: News → go to /apl-awards | Events → /gallery */}
                    {activeTab === "Events" ? (
                      <Link
                        to="/gallery"
                        className="mt-4 inline-block text-sm font-medium text-primary hover:text-secondary transition"
                      >
                        ➤ Read More
                      </Link>
                    ) : (
                      <Link
                        to={item.link || "/apl-awards"}
                        className="mt-4 inline-block text-sm font-medium text-primary hover:text-secondary transition"
                      >
                        ➤ Read More
                      </Link>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-gray-500 italic text-sm">
            No {activeTab.toLowerCase()} available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}
