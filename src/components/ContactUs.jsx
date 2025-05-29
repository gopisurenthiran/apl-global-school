import React from 'react';
import ContactBanner from '../assets/ContactBanner.svg';

export default function ContactUs() {
  return (
    <div className="bg-white py-12 px-4 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-medium font-primary text-third mb-10 text-center">
        Contact us
      </h2>

      {/* Form + Image container */}
      <div className="bg-third text-white rounded-xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left: Form Section */}
        <form className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 pr-4">
          <h3 className="md:col-span-2 text-xl md:text-3xl font-semibold mb-4 text-white">
            We’d Love to Hear From You
          </h3>

          <input
            type="text"
            placeholder="Parent Name"
            className="bg-[#6f3d86] px-3 py-2 text-white font-secondary border-none rounded outline-none"
          />
          <input
            type="text"
            placeholder="Student Name"
            className="bg-[#6f3d86] px-3 py-2 text-white font-secondary border-none rounded outline-none"
          />

          <select className="bg-[#6f3d86] px-3 py-2 text-white font-secondary rounded border-none outline-none">
            <option>Applying For</option>
            <option>Nursery</option>
            <option>Grade 1</option>
          </select>
          <input
            type="email"
            placeholder="Email"
            className="bg-[#6f3d86] px-3 py-2 text-white font-secondary rounded border-none outline-none"
          />

          <input
            type="tel"
            placeholder="Phone No"
            className="bg-[#6f3d86] px-3 py-2 text-white font-secondary rounded border-none outline-none"
          />
          <select className="bg-[#6f3d86] px-3 py-2 text-white font-secondary rounded border-none outline-none">
            <option>Preferred Location</option>
            <option>Chennai</option>
            <option>Bangalore</option>
          </select>

          <textarea
            placeholder="Your Message"
            className="md:col-span-2 bg-[#6f3d86] px-3 py-2 text-white font-secondary rounded border-none outline-none"
            rows="3"
          ></textarea>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-secondary text-white font-medium px-6 py-2 rounded-md hover:bg-[#c3d452c9] transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Right: Image Section */}
        <div className="w-full md:w-1/2 flex items-end justify-left ">
          <img
            src={ContactBanner}
            alt="Smiling girl"
            className="w-full h-full object-contain max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
