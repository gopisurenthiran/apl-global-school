import { useState } from "react";
import Img1 from "../assets/Img-1.jpg";
import Img2 from "../assets/Img-2.jpg";
import Img3 from "../assets/Img-3.jpg";

const images = [Img1, Img2, Img3];

const highlights = [
  {
    title: "Innovation Ceremony",
    content:
      "Students showcase innovative projects and solutions with hands-on creativity and critical thinking.",
  },
  {
    title: "Arts",
    content:
      "A colorful display of student talent in visual arts, drama, and music performances.",
  },
  {
    title: "English Proficiency",
    content:
      "Competitions and activities to improve vocabulary, fluency, and confidence in English.",
  },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-20">
      <h2 className="text-center text-4xl md:text-5xl font-bold font-primary text-purple-700 mb-2">
        Gallery
      </h2>
      <p className="text-center text-2xl font-semibold font-primary text-purple-700 mb-12">
        Capturing joy, Learning and Achievement
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold font-primary text-black">
            SPORTS DAY
          </h3>
          <p className="text-gray-700 font-secondary text-sm">
            Sports Day at APL Global School is a vibrant celebration of
            teamwork, perseverance, and school spirit. Students of all age
            groups participate in a variety of athletic events that encourage
            healthy competition, physical fitness, and camaraderie. It's a day
            where learners shine beyond the classroom, showcasing their talents,
            supporting their peers, and embracing the joy of movement. Sports
            Day at APL Global School is a vibrant celebration of teamwork,
            perseverance, and school spirit. Students of all age groups
            participate in a variety of athletic events that encourage healthy
            competition, physical fitness, and camaraderie. It's a day where
            learners shine beyond the classroom, showcasing their talents,
            supporting their peers, and embracing the joy of movement. Physical
            fitness, and camaraderie. It's a day where learners shine beyond the
            classroom, showcasing their talents, supporting their peers, and
            embracing the joy of movement.
          </p>
          <p className="text-gray-700 font-secondary text-sm">
            From sprints to relays, long jumps to tug-of-war, every event is an
            opportunity for students to challenge themselves, cheer on their
            classmates, and embody the true spirit of sportsmanship.
          </p>

          {/* Accordion */}
          <ul className="text-sm text-gray-800 space-y-2">
            {highlights.map((item, index) => (
              <li key={index}>
                <button
                  className="flex items-center gap-2 w-full font-primary text-left font-medium"
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className={`text-sm font-bold w-6 h-6 flex items-center justify-center border border-secondary text-secondary rounded-full transition duration-200 ${
                        openIndex === index ? 'bg-secondary text-white' : 'bg-white'
                    }`}
                    >
                    {openIndex === index ? '−' : '+'}
                    </span>

                  <span>{item.title}</span>
                </button>

                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm font-secondary pl-4 border-l-4 border-purple-300 transition-all duration-300 ease-in-out">
                    {item.content}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <button className="mt-4 px-4 py-2 bg-lime-500 font-primary text-white rounded hover:bg-lime-600 transition">
            View More Photos
          </button>
        </div>

        {/* Right Side Image Stack */}
        <div className="md:w-1/2 relative h-[380px] flex items-center justify-center">
          {images.map((img, index) => {
            const diff = index - activeIndex;
            const scale = index === activeIndex ? 1.05 : 1;
            const zIndex = images.length - Math.abs(diff);
            const translateX = diff * 60;

            return (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`absolute rounded-xl shadow-lg object-cover cursor-pointer transition-all duration-300 ease-in-out ${
                  index === activeIndex ? "h-80 w-52" : "h-64 w-44"
                }`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex: zIndex,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
