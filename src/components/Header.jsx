import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const aboutDropdown = [
  { label: 'Our Framework', href: '/apl-framework' },
  { label: 'Our Educational Philosophy', href: '/apl-educational' },
  { label: 'Our Promoters', href: '/apl-promoters' },
  { label: 'Our Campus', href: '/apl-campus' },
  { label: 'Our Management', href: '/apl-management' },
  { label: 'Our Faculty', href: '/apl-faculty' },
  { label: 'Our Alumni', href: '/apl-alumni' },
];

const academicsDropdown = [
  { label: 'Our Programmes', href: '/apl-programmes' },
  { label: 'Our Curriculum', href: '/apl-curriculum' },
  { label: 'Our Pedagogy', href: '/apl-pedagogy' },
  { label: 'Essential Support', href: '/essential-support' },
  { label: 'Department of Special Education', href: '/apl-department' },
];

const admissionDropdown = [
  { label: 'Academic Structure', href: '/apl-academics-structure' },
  { label: 'Evaluation System', href: '/apl-evaluation' },
  { label: 'Learning Areas', href: '/apl-learning-areas' },
];

const childCenteredDropdown = [
  { label: 'Learning Support', href: '/learning-support' },
  { label: 'Student Voice', href: '/student-voice' },
  { label: 'Wellbeing', href: '/wellbeing' },
];

const galleryDropdown = [
  { label: 'Photo Gallery', href: '/photo-gallery' },
  { label: 'Video Gallery', href: '/video-gallery' },
  { label: 'Events & Celebrations', href: '/events' },
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

const DropdownMenu = ({ label, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1 cursor-pointer hover:text-secondary">
        {label} <ChevronDown size={16} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[100%] left-0 mt-6 w-[250px] bg-white text-primary rounded-lg shadow-2xl p-4 z-50"
          >
            {items.map((item, index) => (
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
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <DropdownMenu label="About APL" items={aboutDropdown} />
          <DropdownMenu label="Admission" items={admissionDropdown} />
          <DropdownMenu label="APL Academics" items={academicsDropdown} />
          <DropdownMenu label="Child-Centered" items={childCenteredDropdown} />
          <DropdownMenu label="Gallery" items={galleryDropdown} />
          <a href="#contact" className="hover:text-secondary">Contact</a>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 font-light text-white/90">
            <li><a href="/" className="block">Home</a></li>
            {[ 
              { label: "About APL", dropdown: aboutDropdown },
              { label: "Admission", dropdown: admissionDropdown },
              { label: "APL Academics", dropdown: academicsDropdown },
              { label: "Child-Centered", dropdown: childCenteredDropdown },
              { label: "Gallery", dropdown: galleryDropdown },
            ].map((section) => (
              <li key={section.label}>
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer">
                    {section.label}
                    <ChevronDown size={14} className="group-open:rotate-180 transition" />
                  </summary>
                  <ul className="pl-4 mt-1 space-y-1 text-sm">
                    {section.dropdown.map((item) => (
                      <li key={item.label}><a href={item.href}>{item.label}</a></li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
