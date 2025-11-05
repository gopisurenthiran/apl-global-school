
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import paper from "/assets/grid-1.webp";


const videos = [
  {
    title:
      "Mrs Kiran Merchant  Principal 2011 – 2019 on the school’s customisable curriculum",
    src: "https://www.youtube.com/embed/L6bFKqYxtXU",
  },
  {
    title:
      "Mrs Kiran Merchant – more on Customisable curriculum",
    src: "https://www.youtube.com/embed/oSnJIO8Ofwc",
  },
  {
    title:
      "Mrs Sangeetha Rajamani on APL being a second home and a parent on APL embracing inclusiveness and diversity.",
    src: "https://www.youtube.com/embed/miqaBvkH73A",
  },
   {
    title:
      "Mrs Gita Jagannathan & Mrs Ezhil Mathi on Inclusion",
    src: "https://www.youtube.com/embed/1U8kuhaI0TI",
  },
    {
    title:
      "Mrs Sarija Santhosh & Mrs Asha Porayath on Teacher training and mentorship",
    src: "https://www.youtube.com/embed/cjpbRXpO5qY",
  },
    {
    title:
      "Our founder, Ms Gita on teachers as holistic educators.",
    src: "https://www.youtube.com/embed/Rn0_jX2derE",
  },
    {
    title:
      "Our founder, Ms Gita on counselling and support",
    src: "https://www.youtube.com/embed/2RNAvLSQGto",
  },
    {
    title:
      "Ms Sarija Santhosh – more on Inclusivity",
    src: "https://www.youtube.com/embed/A8BbtppP4PU",
  },
     {
    title:
      "Ms Sarija Santhosh on the need for a Teacher-Mentor",
    src: "https://www.youtube.com/embed/ees2OCBVh6k",
  },
     {
    title:
      "Ms Sarija Santhosh on flexi time for teachers",
    src: "https://www.youtube.com/embed/hKStTWTi_Pg",
  },
      {
    title:
      "Ms Mala Rao on the Good citizenship programme (GCP)",
    src: "https://www.youtube.com/embed/Ugb2u_rMm2c",
  },
      {
    title:
      "A timelapse video – A fundraiser on autism awareness",
    src: "https://www.youtube.com/embed/cDMMoavadg4",
  },
      {
    title:
      "APL awarded ‘Most innovational learning pedagogy award 2021’ by CEII",
    src: "https://www.youtube.com/embed/1pOqrxeg65w",
  },
];

export default function VideoGallery() {
 
  return (
    <>
      
      <section className=" px-6 md:px-16 py-12 font-sans" style={{ backgroundImage: `url(${paper})`, backgroundSize: "cover" }}>
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-primary font-semibold text-primary uppercase mb-12 underline underline-offset-4 decoration-secondary">
          Video Gallery
        </h2>

        {/* Alternating layout */}
        <div className="space-y-16">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-top gap-6 md:gap-12`}
            >
              {/* Text Block */}
              <div className="md:w-1/2 text-lg text-primary font-secondary leading-snug">
                {video.title}
              </div>

              {/* Video Block */}
              <div className="md:w-1/2 aspect-video w-full rounded overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src={video.src}
                  title={`YouTube video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
