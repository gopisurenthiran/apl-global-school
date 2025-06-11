import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import chatIcon from "@/assets/chat-icon.png";

export default function SocialIcon() {
  return (
    <>
      {/* Desktop: absolute positioned */}
      <div className="hidden md:flex absolute bottom-6 left-2 items-center gap-6 z-10">
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
        <div className="flex items-center">
          <img src={chatIcon} alt="" className="h-10 w-10 object-contain" />
          <button className="h-10 text-white font-semibold px-4 rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 shadow hover:opacity-90">
            Admissions Enquiry
          </button>
        </div>
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
          <div className="flex items-center">
          <img src={chatIcon} alt="" className="h-10 w-10 object-contain" />
          <button className="h-10 text-white font-semibold px-4 rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 shadow hover:opacity-90">
            Admissions Enquiry
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
