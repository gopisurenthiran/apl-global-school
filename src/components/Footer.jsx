import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.svg";
import books from "../assets/book.svg";
import footerFream from "../assets/bg-footer.svg"; // replace with your footer frame image
// your stack of books image

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-primary pt-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between px-10">
        {/* Left - Logo */}
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="APL Logo" className="h-12 md:h-16" />
        </div>

        {/* Center - Links + Social */}
        <div className="text-center">
          <ul className="flex flex-wrap justify-center gap-6 mb-4 font-secondary font-medium font-semibold text-sm md:text-base">
            <li>
              <a href="#about" className="hover:text-secondary">
                About APL
              </a>
            </li>
            <li>
              <a href="#apl-academics" className="hover:text-secondary">
                APL Academics
              </a>
            </li>
            <li>
              <a href="#academics" className="hover:text-secondary">
                Academics
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-secondary">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-secondary">
                Contact us
              </a>
            </li>
          </ul>

          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7D3F98] text-white p-2 rounded-md"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7D3F98] text-white p-2 rounded-md"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7D3F98] text-white p-2 rounded-md"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Right - Books Image */}
        <div className="mt-4 md:mt-0 px-10">
          <img src={books} alt="Books" className="h-20 md:h-24" />
        </div>
      </div>
      <div className="bg-[url('/bg-footer.svg')] bg-cover bg-center lg:h-7 md:h-7 h-4">
  
      </div>

      <div className="bg-primary  p-4 text-center">
        <p className="text-sm font-semibold text-white">
        Copyright    &copy; {new Date().getFullYear()}. APL Global School I All Rights Reserved
        </p>
        </div>
    </footer>
  );
};

export default Footer;
