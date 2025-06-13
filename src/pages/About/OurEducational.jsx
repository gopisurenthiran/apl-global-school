import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import ArrowPuple from "@/assets/arrow-purple.png";
import ArrowLime from "@/assets/arrow-lime.png";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";

const items = [
  {
    icon: ArrowPuple,
    title:
      "We offer diverse subject choices through the Cambridge International curriculum and National Institute for Open Schooling so that our students can pursue their interests unreservedly.",
  },
  {
    icon: ArrowLime,
    title:
      "In nurturing a culture of inclusion and equanimity, we include first generation learners and differently abled children in a classroom.",
  },
  {
    icon: ArrowPuple,
    title:
      "We use differentiated teaching methods and technology to suit all learner styles.",
  },
  {
    icon: ArrowLime,
    title:
      "We encourage teachers to be innovative, maintain high expectations and constantly challenge themselves and the students.",
  },
  {
    icon: ArrowPuple,
    title:
      "Skilled special educators, mentors, subject experts, and counsellors work collaboratively with parents to support holistic development of every child.",
  },
  {
    icon: ArrowLime,
    title:
      "Teachers are encouraged to commit to personal and professional development.",
  },
];

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];

function OurEducational() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden">
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

      {/* Philosophy Section */}
      <section className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
              OUR EDUCATIONAL PHILOSOPHY
            </h2>
            <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
              We believe in preparing learners for life in a world where they will
              interact with compassion, courage and resilience; a mindset that
              respects differences. The school will therefore be a community of
              stakeholders invested in the personal, intellectual, social,
              physical and spiritual development of every learner. Children are
              provided with a variety of options and multiple opportunities to
              learn and succeed. Every child will be nurtured to take an active
              role in making this planet an impartial, inclusive, self-sustaining
              world.
            </p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-primary mb-4">
              Student Demographic
            </h3>
            <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
              The class sizes are kept small, maintaining a 1:22 teacher-student
              ratio. The classrooms include: first generation learners; children
              with disabilities; foreign nationals, and children requiring
              economic support. The professionals working at APL are encouraged to
              bring in diversity by being innovative, and constantly challenge
              themselves and the students.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-primary border-b-2 border-secondary inline-block mb-4">
              How do we work towards achieving our educational philosophy?
            </h2>
            <p className="text-black font-secondary text-base sm:text-lg leading-relaxed">
              We believe in preparing learners for life in a world where they will
              interact with compassion, courage and resilience; a mindset that
              respects differences. The school will therefore be a community of
              stakeholders invested in the personal, intellectual, social,
              physical and spiritual development of every learner. Children are
              provided with a variety of options and multiple opportunities to
              learn and succeed. Every child will be nurtured to take an active
              role in making this planet an impartial, inclusive, self-sustaining
              world.
            </p>
          </div>

          {/* Bullet List */}
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src={item.icon}
                  alt=""
                  className="w-6 sm:w-7 h-6 sm:h-7 mt-1 shrink-0"
                />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black font-secondary">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 py-10 bg-secondary">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-center">
          <h4 className="text-white font-primary font-bold text-lg sm:text-xl">
            Find out what our core team of the institution has to say!
          </h4>
          <button className="px-5 py-3 rounded-lg bg-primary text-secondary hover:bg-primary/90 hover:text-white font-primary font-semibold">
            Click Here
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <TestimonialCarousel />
    </>
  );
}

export default OurEducational;
