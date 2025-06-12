import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];
function OurCampus() {
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
            Our Campus
          </h2>
          <p className="text-black font-secondary mb-4 t text-lg leading-relaxed">
            APL Global School has been modelled structurally and pedagogically
            on the Personalized Learning Platform. The campus is a
            sprawling <span className="font-extrabold "> 2,70,099 sq ft </span>which includes the Admin and Academic
            block. The impressive building offers state of the art facilities to
            support a wholesome learning environment. Vibrant air-conditioned
            classrooms, science labs, food labs, art rooms. music rooms,
            recording room, digital art and photo studio, OT rooms, a gym, dance
            rooms, counselling rooms and libraries support activity based and
            student centred learning. 
          </p>
          
          <p className="text-black font-secondary mb-4 t text-lg leading-relaxed">
            The campus has an auditorium of <span className="font-extrabold "> 9,825 sq ft </span>
            to conduct all school events, assemblies and activities. The
            students enjoy their dose of football using the two futsal grounds
            of  <span className="font-extrabold ">24,050 sq ft</span>, basketball, cricket nets and volleyball in the
            terrace area of <span className="font-extrabold ">10,756 sq ft </span>and a multi sports facility area that
            includes badminton courts. 
          </p>
          <p className="text-black font-secondary mb-4 text-lg leading-relaxed">
            All classrooms from Grades 1-12 are
            equipped with Smart Boards and Projectors to provide students with
            an enriched learning experience. Access to technology helps students
            research on independent projects or use multimedia software to
            create interactive presentations, while our teachers use it for
            differentiated teaching to accommodate different learning styles.
          </p>
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

export default OurCampus;
