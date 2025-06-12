import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import ArrowPuple from "@/assets/arrow-purple.png";
import ArrowLime from "@/assets/arrow-lime.png";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";
import { MdDoubleArrow } from "react-icons/md";

const items = [
  {
    icon: ArrowPuple,
    title: "Pre-kg (Pre-Kindergarten) – 3 years as on 1st June 2025.",
  },
  {
    icon: ArrowLime,
    title: "LKG (Lower Kindergarten) – 4 years as on 1st June 2025.",
  },
  {
    icon: ArrowPuple,
    title: "UKG (Upper Kindergarten) – 5 years as on 1st June 2025.",
  },
];

const curriculumData = [
  {
    title: "Forms of Knowledge",
    ages: "5–11 years",
    grades: "I to V",
    content: [
      "English",
      "Math",
      "Combined Science (Physics, Chemistry, and Biology)",
      "Global Perspectives",
      "Second Language - Tamil / French / Hindi (starting in Grade II)",
      "Art",
      "Music",
      "Computer Science (starting in Grade II)",
    ],
  },
  {
    title: "Co-curricular Activities",
    content: [
      "Games & Sports",
      "Music (till Grade 2)",
      "Creative Movement",
      "Theatre",
      "Expressions",
      "Library",
      "Meraki",
    ],
  },
];

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];
function OurProgrammes() {
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
      <section className="bg-white py-16 px-4 md:px-6">
        <div className="p-10 mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-extrbold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
            Our Programmes
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-primary font-primary mt-6 mb-6">
            Kindergarten
          </h3>
          <p className="text-black font-secondary text-lg leading-relaxed">
            The kindergarten/preschool programme in APL is integrated and
            holistic. It is designed to provide the children with the
            opportunity to develop self-awareness, better communication skills,
            improved balance and coordination and grow to be caring, life-long
            learners. Our Kindergarten curriculum is an in-house curriculum
            where we focus on the PSE (Personal, social and emotional)
            development, communication, sensory and cognitive development and
            all the other areas that form a foundation for Grade 1.  Learning in
            APL is experiential, hands-on and personalised which helps the
            children make real-life connections. We have differentiated learning
            classrooms, where children learn individually and collaboratively.
            The environment in APL is joyful, purposeful and engaging with lots
            of opportunities to explore without losing focus on the
            values, empathy, discipline and respect. 
          </p>
        </div>

        <div className=" mx-auto p-10">
          <h2 className="text-3xl md:text-4xl font-extrbold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
            Our kindergarten is a 3 year programme
          </h2>
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
        <div className="p-10 mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-extrbold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
            Cambridge Primary
          </h2>
          <p className="text-black font-secondary text-lg mb-5 leading-relaxed">
            Our Primary Program is guided by the Cambridge Primary Curriculum
            aimed at developing young learners who are confident, responsible,
            reflective, innovative and engaged. Our curricular and co-curricular
            activities are planned with a focus on holistic development with an
            equal emphasis on cognitive socio-emotional and physical skills
            alongside creative expression. Learning is exploratory and
            evaluative in nature. Students learn to apply their knowledge and
            understanding to solve new and unfamiliar problems. There are ample
            opportunities to work independently or collaboratively and take
            intellectual risks.   
          </p>
          <p className="text-black font-secondary text-lg leading-relaxed">
            A roadmap to learning at the primary level – With a student-centric
            approach to imparting knowledge, students learn to imbibe
            mathematical, language, and scientific skills among many others.
            Children learn to express their voice in multiple mediums. By
            encouraging children to explore, experiment and learn independently
            through activity-based techniques, we seek to equip children with
            skills in problem-solving, critical analysis and creativity. In
            addition to integrating formative and summative assessments to
            strengthen their learning, portfolios are created to exhibit the
            student’s developmental milestones.
          </p>
        </div>
        <div className="p-6 md:p-10 mx-auto  text-left space-y-6">
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
                <div className="px-6 py-4 bg-white space-y-4">
                  {/* Show Ages and Grades only if available */}
                  {section.ages && (
                    <p className="text-gray-600">
                      <strong>Ages:</strong> {section.ages}
                    </p>
                  )}
                  {section.grades && (
                    <p className="text-gray-600">
                      <strong>Grades:</strong> {section.grades}
                    </p>
                  )}
                  <ol className="space-y-1 text-gray-800 list-none pl-1">
  {section.content.map((item, i) => {
    const isOdd = (i + 1) % 2 !== 0;
    const number = String(i + 1).padStart(2, "0");
    const iconColor = isOdd ? "text-primary" : "text-secondary";

    return (
      <li key={i} className="flex items-center gap-2">
        <span className={`font-medium flex items-center gap-1 ${iconColor}`}>
          {number}.
          <MdDoubleArrow className={`w-4 h-4 ${iconColor}`} />
        </span>
        <span>{item}</span>
      </li>
    );
  })}
</ol>

                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* <div className="p-6 bg-secondary">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <h4 className="text-white font-primary font-bold text-xl text-center">
            Find out what our core team of the institution has to say!
          </h4>
          <button className="px-6 py-3 rounded-lg bg-primary text-secondary hover:bg-primary/90 hover:text-white font-primary font-semibold">
            Click Here
          </button>
        </div>
      </div> */}
      <TestimonialCarousel />
    </>
  );
}

export default OurProgrammes;
