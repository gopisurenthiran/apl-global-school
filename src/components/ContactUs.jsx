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
    <h3 className="md:col-span-2 text-xl md:text-3xl font-semibold mb-4">
      We’d Love to Hear From You
    </h3>

    <input
      type="text"
      placeholder="Parent Name"
      className="bg-[#6f3d86] text-white placeholder-white font-secondary px-4 py-3 rounded outline-none border-none"
    />
    <input
      type="text"
      placeholder="Student Name"
      className="bg-[#6f3d86] text-white placeholder-white font-secondary px-4 py-3 rounded outline-none border-none"
    />

    <select
      className="bg-[#6f3d86] text-white font-secondary px-4 py-3 rounded outline-none border-none"
      defaultValue=""
    >
      <option value="" disabled className="text-white">Applying For</option>
      <option>Nursery</option>
      <option>Grade 1</option>
    </select>
    <input
      type="email"
      placeholder="Email"
      className="bg-[#6f3d86] text-white placeholder-white font-secondary px-4 py-3 rounded outline-none border-none"
    />

    <input
      type="tel"
      placeholder="Phone No"
      className="bg-[#6f3d86] text-white placeholder-white font-secondary px-4 py-3 rounded outline-none border-none"
    />
    <select
      className="bg-[#6f3d86] text-white font-secondary px-4 py-3 rounded outline-none border-none"
      defaultValue=""
    >
      <option value="" disabled className="text-white">Preferred Location</option>
      <option>Chennai</option>
      <option>Bangalore</option>
    </select>

    <textarea
      placeholder="Your Message"
      rows="3"
      className="md:col-span-2 bg-[#6f3d86] text-white placeholder-white font-secondary px-4 py-3 rounded outline-none border-none"
    ></textarea>

    <div className="md:col-span-2 mt-2">
      <button
        type="submit"
        className="bg-secondary text-white font-medium px-6 py-3 rounded-md hover:bg-[#c3d452c9] transition"
      >
        Submit
      </button>
    </div>
  </form>

  {/* Right: Image Section */}
  <div className="w-full md:w-1/2 flex items-end justify-center mt-6 md:mt-0">
    <img
      src={ContactBanner}
      alt="Smiling girl"
      className="w-full h-auto object-contain max-h-[400px]"
    />
  </div>
</div>

    </div>
  );
}
