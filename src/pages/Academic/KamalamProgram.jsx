import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import Essential from "@/assets/EssentialSupport.png";
import { MdDoubleArrow } from "react-icons/md";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];


function KamalamProgram() {
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
        <div className="py-12 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrbold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
                Kamalam Program
              </h2>
              <p className="text-black font-secondary text-base leading-relaxed">
                There has been much debate over “what meets the requirement of
                children with greater needs”? The Kamalam program is the answer
                to that question. Your child can have the benefits of a
                tailor-made environment and curriculum, while having
                opportunities to learn in a larger pool with a diverse group of
                students.
              </p>

              <p className="text-black font-secondary text-base leading-relaxed">
                The Kamalam program is a student-centered program, designed for
                students who require a customised curriculum and for those who
                work better in controlled environments and cater to their
                particular needs.
              </p>

              <p className="text-black font-secondary text-base leading-relaxed">
                We provide the right kind of environment and instructional
                support required for students working on this curriculum. We
                facilitate this in areas of functional literacy, functional
                numeracy, functional science and ICT skills, including other
                skill areas like community living, Activities of Daily Living,
                home living and culinary Skills. Designated spaces with minimal
                distractions have been earmarked for optimal support.
              </p>

              <p className="text-black font-secondary text-base leading-relaxed">
                Students will receive occupational therapy and pre-vocational
                training services based on their strengths, interests and needs.
                The objective would be for students to be able to communicate
                effectively, be independent and self-sufficient. The student’s
                schedule is optimally designed to give him/her an equal mix of
                academic learning, skill development and socio-emotional
                learning opportunities.
              </p>

              <p className="text-black font-secondary text-base leading-relaxed">
                Functional Curriculum includes individualised attention and
                intervention strategies for developing specific skills and
                helping him/her achieve and generalise the learned skills.
                Students under the functional curriculum work in small groups
                focussing on skills of interest in music, dance & Meraki-art,
                paving opportunities for increased participation and
                interaction. This allows for more opportunities to participate
                and interact within the small group which would further help to
                build expressive language and communication skills. The same is
                practiced in larger groups with the support of a Special
                Educator, thus working towards achieving social skills, play
                skills, emotional skills, and self-regulation skills.
              </p>

              <p className="text-black font-secondary text-base leading-relaxed">
                As students progress on the functional curriculum, we are able
                to suggest options for their later stages of learning and
                engagement towards deciding on taking up Board examinations like
                the NIOS and/or looking for vocational program options based on
                the interests, strengths and abilities of the individual.
              </p>
            </div>

            {/* Right - Image */}
            <div>
              <img
                src={Essential}
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

export default KamalamProgram;
