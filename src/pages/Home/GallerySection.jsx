import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import Img1 from "@/assets/Img-1.jpg";
import Img2 from "@/assets/Img-2.jpg";
import Img3 from "@/assets/Img-3.jpg";
import highlights from "@/data/Gallery";

const images = [Img1, Img2, Img3];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <section className="container mx-auto w-full bg-white py-20 top-10 px-4 md:px-10 lg:px-20 overflow-hidden">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-third mb-2 font-primary">
        Gallery
      </h2>
      <p className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-third mb-10 font-primary">
        Capturing joy, Learning and Achievement
      </p>

      <div className="flex flex-col-reverse lg:flex-row items-start gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-primary inline-block border-b-2 border-secondary font-primary">
            SPORTS DAY
          </h3>
          <p className="text-gray-700 text-sm sm:text-base font-secondary">
             Sports Day at APL Global School is a vibrant celebration of teamwork,
        perseverance, and school spirit. Students of all age groups participate
        in a variety of athletic events that encourage healthy competition,
        physical fitness, and camaraderie. It's a day where learners shine
        beyond the classroom, showcasing their talents, supporting their peers,
        and embracing the joy of movement.
          </p>
          <p className="text-gray-700 text-sm sm:text-base font-secondary">
            From sprints to relays, long jumps to tug-of-war, every event is an
        opportunity for students to challenge themselves, cheer on their
        classmates, and embody the true spirit of sportsmanship.
          </p>

          {/* Accordion */}
          <ul className="text-sm text-gray-800 space-y-3">
            {highlights.map((item, index) => (
              <li key={index}>
                <button
                  className="flex items-center gap-2 w-full text-left font-medium font-primary"
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className={`text-sm font-bold w-4 h-4 flex items-center justify-center border border-secondary rounded-full transition ${
                      openIndex === index
                        ? "bg-secondary text-white"
                        : "bg-white text-secondary"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" strokeWidth={3} />
                    ) : (
                      <Plus className="w-5 h-5 " strokeWidth={3} />
                    )}
                  </span>
                  <span>{item.title}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm sm:text-base font-secondary pl-4 ">
                    {item.content}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <button className="mt-4 px-4 py-2 bg-secondary text-white rounded hover:bg-[#c3d452c9] transition font-primary text-sm sm:text-base">
            View More Photos
          </button>
        </div>

        {/* Right: Auto-scrolling Image Slider */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[360px] sm:min-h-[420px] md:min-h-[500px]">
          <div className="relative w-full max-w-[400px] sm:max-w-[460px] md:max-w-[500px] flex justify-center items-center">
            {images.map((img, index) => {
              const diff = index - activeIndex;
              const scale = index === activeIndex ? 1.08 : 1;
              const zIndex = images.length - Math.abs(diff);
              const translateX = diff * 60;

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute rounded-xl shadow-md object-cover cursor-pointer transition-all duration-300 ease-in-out ${
                    index === activeIndex
                      ? "h-80 w-60 sm:h-96 sm:w-72"
                      : "h-72 w-52 sm:h-80 sm:w-64"
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
      </div>
    </section>
  );
}
