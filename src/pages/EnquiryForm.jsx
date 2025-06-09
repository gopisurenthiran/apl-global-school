import React from "react";

const EnquiryForm = () => {
  return (
    <div className="bg-[#6C3595] text-white p-6 sm:p-8 rounded-2xl w-full max-w-md shadow-xl">
      <h2 className="text-lime-300 text-lg font-semibold mb-6">
        Welcome to APL Global School
      </h2>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <input type="text" placeholder="Parent Name" className="input" />
        <input type="text" placeholder="Student Name" className="input" />

        <select className="input">
          <option>Applying For</option>
          <option>Pre-KG</option>
          <option>Grade 1</option>
        </select>
        <input type="email" placeholder="Email" className="input" />

        <input type="text" placeholder="Phone No" className="input" />
        <input type="text" placeholder="City" className="input" />

        <select className="input">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select className="input">
          <option>Preffered Location</option>
          <option>Location 1</option>
          <option>Location 2</option>
        </select>

        <div className="sm:col-span-2 text-right">
          <button
            type="submit"
            className="bg-lime-300 text-black px-6 py-2 rounded font-medium hover:bg-lime-200 transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-8">
        <a href="#"><img src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6" /></a>
        <a href="#"><img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" /></a>
        <a href="#"><img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" /></a>
      </div>

      {/* Floating Admissions Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm">
          <svg
            className="w-4 h-4 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L15 8H9L12 2ZM4.5 20L12 9L19.5 20H4.5Z" />
          </svg>
          Admissions Enquiry
        </button>
      </div>
    </div>
  );
};

export default EnquiryForm;
