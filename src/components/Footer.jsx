import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import logo from "/assets/logo.svg";
import books from "/assets/book.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-primary pt-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-10">
        {/* ✅ Left - Logo */}
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <img src={logo} alt="APL Logo" className="h-12 md:h-16" />
          </Link>
        </div>

        {/* ✅ Center - Links + Social */}
        <div className="text-center">
          <ul className="flex flex-wrap justify-center gap-6 mb-4 font-secondary font-semibold text-sm md:text-base">
            <li>
              <Link to="/apl-framework" className="hover:text-secondary">
                About APL
              </Link>
            </li>
            <li>
              <Link to="/apl-programmes" className="hover:text-secondary">
                APL Academics
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-secondary">
                FAQ's
              </Link>
            </li>
          
            <li>
              <Link to="/photo-gallery" className="hover:text-secondary">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-secondary">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-secondary">
                Contact us
              </Link>
            </li>
          </ul>

          {/* ✅ Social Media */}
          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com/aplglobalschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-2 rounded-md"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/aplglobalchennai/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-2 rounded-md"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://in.linkedin.com/school/apl-global-school/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-2 rounded-md"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://wa.me/917338744475"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-2 rounded-md"
            >
              <FaWhatsapp size={20} />
            </a>
            
          </div>
        </div>

        {/* ✅ Right - Books Image */}
        <div className="mt-4 md:mt-0 px-10">
          <img src={books} alt="Books" className="h-20 md:h-24" />
        </div>
      </div>

      {/* ✅ Footer Background */}
      <div className="bg-[url('/bg-footer.svg')] bg-cover bg-center lg:h-7 md:h-7 h-4"></div>

      {/* ✅ Bottom Copyright */}
      <div className="bg-primary p-4 text-center">
        <p className="text-sm font-semibold text-white">
          Copyright &copy; {new Date().getFullYear()}. APL Global School | All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
