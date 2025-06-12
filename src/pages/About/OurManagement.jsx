import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import Management from "@/assets/Management.png";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];

function OurManagement() {
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
                Our Management
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary font-primary mt-6 mb-6">
                GITA JAGANNATHAN{" "}
                <span className="border-r-2 border-secondary mr-4"></span>
                FOUNDER
              </h3>
              
              <p className="text-black font-secondary text-base leading-relaxed">
                Ms. Gita Jagannathan is the owner and founder of APL Global
                School, Chennai. She is a voracious reader and connoisseur of
                fine art, music, and humorous tales. She has a penchant for
                exploration and thirst to constantly evolve; attributes that
                reflect her growing-up years when she had to make sense of the
                cumulative experiences of travelling through 8 different
                schools, her father having been in a transferable job. APL
                Global School is the outcome of her search for an inclusive and
                nurturing space. Gifted with a thirst for the whys and hows of a
                person’s evolution she spent years reaching out, tutoring and
                mentoring students who were struggling to fit in despite being
                intelligent, talented, and hardworking.
              </p>

              <p className="text-black font-secondary text-base leading-relaxed">
                This drove her to learn more about giftedness, learning
                disabilities, and special education. She used the Cambridge
                International Diploma for Teachers and Trainers and a course
                with Harvard Wide on Differentiated Strategies to deepen her
                understanding of pedagogy and learning. Gita is a Reiki Grand
                Master, a hypnotherapist and a student of Yoga. This spiritual
                sensibility in combination with her skills in psychology and
                counseling alchemically contributed to the birth of APL school
                as a space to experience personalized learning for students,
                faculty members and all stakeholders.
              </p>
              <p className="text-black font-secondary text-base leading-relaxed">
                Gita has put in huge efforts and timeless exploration for the
                establishment and smooth functioning of the Academy for
                Personalized Learning or APL Global School. Founding the
                institute was the beginning of her journey of transforming the
                education system. Her unique endeavours to make a positive
                difference in the education sector are far better and more
                practically-driven as against the conventional form of pedagogy
                that has been globally followed for so long.
              </p>

              <p className="text-black font-secondary text-base leading-relaxed">
                She believes that every human being is unique; that it is
                possible for each of us to realize our true potential and create
                an environment that is supportive. In a relatively short span of
                13 years, under the tutelage of Gita, APL has gained a
                reputation for providing a caring educational system that
                develops every facet of a child’s personality. Her aim is to
                have every student become a happy and healthy individual who
                confidently explores the limits of their own potential.
              </p>

              {/* <button className="mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
                Learn More
              </button> */}
            </div>

            {/* Right - Image */}
            <div>
              <img
                src={Management}
                alt="APL Vision"
                className="ml-20 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurManagement;
