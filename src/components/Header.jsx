import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Menu, X } from 'lucide-react'; // optional icons, install with `npm i lucide-react`

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/" className="flex items-center">
            <img src={logo} alt="APL Logo" className="h-15 w-20 mr-2" />
          </a>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-col items-end gap-4">
          {/* Bottom Right - Section 2 */}
          <ul className="flex gap-6 font-secondary font-light">
            <li><a href="#tmc" className="hover:text-secondary">Teacher Mentor Centre</a></li>
            <li><a href="#ims" className="hover:text-secondary">IMS</a></li>
            <li><a href="#gallery" className="hover:text-secondary">Gallery</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contact Us</a></li>
          </ul>

          {/* Top Right - Section 1 */}
          <ul className="flex gap-6 font-secondary font-light">
            <li><a href="#home" className="hover:text-secondary">Home</a></li>
            <li><a href="#about" className="hover:text-secondary">About APL</a></li>
            <li><a href="#admission" className="hover:text-secondary">Admission</a></li>
            <li><a href="#academics" className="hover:text-secondary">APL Academics</a></li>
            <li><a href="#child-centered" className="hover:text-secondary">Child - Centered Development</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2 font-light text-sm pt-2 border-t border-white/30">
            <li><a href="#tmc" className="hover:text-secondary">Teacher Mentor Centre</a></li>
            <li><a href="#ims" className="hover:text-secondary">IMS</a></li>
            <li><a href="#gallery" className="hover:text-secondary">Gallery</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contact Us</a></li>
          </ul>
          <ul className="flex flex-col gap-2 font-secondary font-semibold">
            <li><a href="#home" className="hover:text-secondary">Home</a></li>
            <li><a href="#about" className="hover:text-secondary">About APL</a></li>
            <li><a href="#admission" className="hover:text-secondary">Admission</a></li>
            <li><a href="#academics" className="hover:text-secondary">APL Academics</a></li>
            <li><a href="#child-centered" className="hover:text-secondary">Child - Centered Development</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
