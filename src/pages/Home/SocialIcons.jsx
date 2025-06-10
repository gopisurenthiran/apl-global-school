import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function SocialIcon() {
  return (
    <>
      {/* Desktop: absolute positioned */}
      <div className="hidden md:flex absolute bottom-6 left-6 items-center gap-6 z-10">
        {/* Social Icons */}
        <div className="bg-white flex space-x-3 rounded p-2 shadow-md">
          <a
            href="#"
            className="bg-third text-white p-2 rounded hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-third text-white p-2 rounded hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-third text-white p-2 rounded hover:scale-110 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Button */}
        <button className="text-white font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 shadow hover:opacity-90">
          Admissions Enquiry
        </button>
      </div>

      {/* Mobile layout */}
      <div className="block md:hidden mt-6">
        <div className="flex justify-center">
          <div className="bg-white flex space-x-3 rounded p-2 shadow-md">
            <a
              href="#"
              className="bg-third text-white p-2 rounded hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-third text-white p-2 rounded hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-third text-white p-2 rounded hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button className="text-white font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 shadow hover:opacity-90">
            Admissions Enquiry
          </button>
        </div>
      </div>
    </>
  );
}
