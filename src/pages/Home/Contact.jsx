import React from "react";
import girl from "@/assets/school-girl.svg"; // update path if needed

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-10">
      
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-third mb-2 p-6 font-primary">
        Contact us
      </h2>
      
      <div className="relative bg-third rounded-xl w-full max-w-5xl p-10 shadow-xl overflow-hidden">
        {/* Text & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="space-y-4">
            <h3 className="text-white text-4xl font-primary  font-bold mb-6">
              We’d Love to Hear From You
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Parent Name"
                className="p-2 rounded-md bg-primary/90 text-sm placeholder-white"
              />
              <input
                type="text"
                placeholder="Student Name"
                className="p-2 rounded-md bg-primary/90 text-sm placeholder-white"
              />
              <input
                type="text"
                placeholder="Apply For"
                className="p-2 rounded-md bg-primary/90 text-sm placeholder-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-md bg-primary/90 text-sm placeholder-white"
              />
              <input
                type="tel"
                placeholder="Phone No"
                className="p-2 rounded-md bg-primary/90 text-sm placeholder-white"
              />
              <input
                type="text"
                placeholder="Preferred Location"
                className="p-2 rounded-md bg-primary/90 text-sm placeholder-white"
              />
              <input
                type="text"
                placeholder="City"
                className="p-2 rounded-md bg-primary/90 text-sm col-span-2 placeholder-white"
              />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="p-2 rounded-md bg-primary/90 text-sm col-span-2 placeholder-white"
              ></textarea>
              <div>
            <button className="bg-secondary  text-white text-sm font-semibold px-4 py-2 rounded hover:bg-secondary">
                Submit
              </button>
              </div>
              
            </div>
          </div>
        </div>

        {/* School Girl Image */}
        <img
          src={girl}
          alt="school girl"
          className="absolute bottom-0 right-0 max-h-full object-contain hidden md:block"
        />
      </div>
    </div>
  );
}
