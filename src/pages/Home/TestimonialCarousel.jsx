import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import profile1 from "@/assets/t-1.png";
import profile2 from "@/assets/t-2.png";
import profile3 from "@/assets/t-3.png";
import paper from "@/assets/bg-graph.png";

const testimonials = [
  {
    name: "Hirsh Venket",
    role: "2022 Batch",
    content:
      "APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school.",
    avatar: profile1,
  },
  {
    name: "Anita Roy",
    role: "2021 Batch",
    content: "Ad Club was where I found my passion and voice. APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school.",
    avatar: profile2,
  },
  {
    name: "Ravi Kumar",
    role: "2023 Batch",
    content: "Inspiring experience! Events shaped my career path. APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school.",
    avatar: profile1,
  },
  {
    name: "Divya Mehta",
    role: "2020 Batch",
    content: "Wonderful memories and great personal growth. APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school.",
    avatar: profile2,
  },
  {
    name: "Sanjay Singh",
    role: "2019 Batch",
    content: "The club pushes you to dream big. Loved it. APL had enabled me to take the subjects of my preference and pursue my interests. For instance, I was able to take up German and Classical studies, though it was not a part of the subjects offered. I was provided the platform to do more than I could have had at another school.",
    avatar: profile1,
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  const stopInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resetInterval = () => {
    stopInterval();
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
    resetInterval();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetInterval();
  };

  return (
    <div
      className="relative py-16 bg-white overflow-hidden"
      style={{
        backgroundImage: `url(${paper})`,
        backgroundSize: "cover",
        backgroundPosition: "",
      }}
    >
      <div className="text-center mt-20 mb-20">
        <h2 className="text-5xl text-primary font-semibold font-primary mb-2">Testimonials</h2>
        <p className="text-primary font-primary text-3xl mt-3">
          Voices that inspire our journey
        </p>
      </div>

      {/* Nav Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Cards */}
      <div className="relative flex justify-center items-center h-[440px]">
        {testimonials.map((t, i) => {
          const pos = (i - index + testimonials.length) % testimonials.length;
          const isActive = pos === 0;

          let translateX = 0;
          let scale = 0.85;
          let opacity = 0.4;
          let zIndex = 10;
          let color = "text-black";
          let bg = "bg-white";
          let shadow = "shadow";

          if (isActive) {
            scale = 1.1;
            opacity = 1;
            zIndex = 50;
            color = "text-white";
            bg = "bg-secondary";
            shadow = "shadow-2xl";
          } else if (pos === 1 || pos === testimonials.length - 1) {
            translateX = pos === 1 ? 160 : -160;
            scale = 0.95;
            opacity = 1;
            zIndex = 40;
          } else if (pos === 2 || pos === testimonials.length - 2) {
            translateX = pos === 2 ? 280 : -280;
            scale = 0.9;
            opacity = 1;
            zIndex = 20;
          }

          return (
            <motion.div
              key={i}
              className={`absolute w-[280px] h-[400px] p-5 shadow-2xl rounded-2xl ${bg} ${shadow} transition-all duration-500`}
              style={{ zIndex }}
              animate={{ x: translateX, scale, opacity }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <div className="flex justify-center -mt-10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-13 h-13 rounded-full border-2 border-white shadow-md"
                />
              </div>
              <div className="flex justify-center mt-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-5 h-5 ml-2 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className={`text-sm mt-4 ${color} font-secondary text-left p-2`}>{t.content}</p>
              <h4 className={`font-semibold mt-7 font-secondary text-left ${color}`}>
                {t.name}
              </h4>
              <p className={`text-xs ${color} font-secondary text-left `}>{t.role}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}