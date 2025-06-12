import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Menu, X, ChevronDown, School, Users, Building, Goal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const dropdownItems = [
  { label: 'Our Framework', href: '/apl-framework'},
  { label: 'Our Educational Philosophy', href: '/apl-educational' },
  { label: 'Our Promoters', href: '/apl-promoters' },
  { label: 'Our Campus', href: '/apl-campus' },
  { label: 'Our Management', href: '/apl-management' },
  { label: 'Our Faculty', href: '/apl-faculty' },
  { label: 'Our Alumni', href: '/apl-alumni' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  }),
};

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={logo} alt="APL Logo" className="h-12 w-auto" />
        </a>

        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-light relative">
          <a href="/" className="hover:text-secondary">Home</a>

          {/* Dropdown Trigger */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-secondary">
              About APL <ChevronDown size={16} />
            </div>

            {/* Dropdown Outside Floating */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -left-20 top-[100%] mt-6 w-[250px] bg-white text-primary rounded-lg shadow-2xl p-4 z-50"
                >
                  {dropdownItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      className="flex items-center gap-3 hover:bg-secondary/40 p-2 rounded-md transition"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#admission" className="hover:text-secondary">Admission</a>
          <a href="#academics" className="hover:text-secondary">APL Academics</a>
          <a href="#child-centered" className="hover:text-secondary">Child-Centered</a>
          <a href="#gallery" className="hover:text-secondary">Gallery</a>
          <a href="#contact" className="hover:text-secondary">Contact</a>
        </nav>
      </div>

      {/* Mobile Nav (same as your existing) */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 font-light text-white/90">
            <li><a href="#home" className="block">Home</a></li>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer">
                About APL <ChevronDown size={14} className="group-open:rotate-180 transition" />
              </summary>
              <ul className="pl-4 mt-1 space-y-1 text-sm">
                {dropdownItems.map((item) => (
                  <li key={item.label}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </details>
            <li><a href="#admission">Admission</a></li>
            <li><a href="#academics">APL Academics</a></li>
            <li><a href="#child-centered">Child-Centered</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
