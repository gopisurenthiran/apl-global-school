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
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

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
      <section className="bg-white py-16 px-4 md:px-6">
        <div className="p-10 mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-extrbold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
            OUR EDUCATIONAL PHILOSOPHY
          </h2>
          <p className="text-black font-secondary text-lg leading-relaxed">
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
          <h3 className="text-3xl md:text-4xl font-bold text-primary font-primary mt-6 mb-6">
            Student demographic
          </h3>
          <p className="text-black font-secondary text-lg leading-relaxed">
            The class sizes are kept small, maintaining a 1:22 teacher-student
            ratio. The classrooms include: first generation learners; children
            with disabilities; foreign nationals, and children requiring
            economic support. The professionals working at APL are encouraged to
            bring in diversity by being innovative, and constantly challenge
            themselves and the students.
          </p>
        </div>
        <div className="p-10 mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-extrbold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
            How do we work towards achieving our educational philosophy?
          </h2>
          <p className="text-black font-secondary text-lg leading-relaxed">
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
        <div className=" mx-auto p-10">
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Bullet image */}
                <img src={item.icon} alt="" className="w-8 h-8 mt-1 shrink-0" />

                {/* Text content */}
                <div>
                  <h3 className="text-xl font-semibold text-black font-secondary">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="p-6 bg-secondary">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <h4 className="text-white font-primary font-bold text-xl text-center">
            Find out what our core team of the institution has to say!
          </h4>
          <button className="px-6 py-3 rounded-lg bg-primary text-secondary hover:bg-primary/90 hover:text-white font-primary font-semibold">
            Click Here
          </button>
        </div>
      </div>
      <TestimonialCarousel />
    </>
  );
}

export default OurEducational;
