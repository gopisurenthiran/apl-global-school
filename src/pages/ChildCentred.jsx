import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/assets/AboutAPLBanner.webp", "/assets/AboutAPLBanner.webp", "/assets/AboutAPLBanner.webp"];
const imagesMobile = ["/assets/AboutAPLBannerMobile.webp", "/assets/AboutAPLBannerMobile.webp", "/assets/AboutAPLBannerMobile.webp"];

function ChildCentred() {
  const [imageIndex, setImageIndex] = useState(0);

  // Auto-rotate banner every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Mobile */}
          <motion.img
            key={`mobile-${imageIndex}`}
            src={imagesMobile[imageIndex]}
            alt="Mobile Banner"
            className="absolute w-full h-full object-cover block sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
          {/* Desktop */}
          <motion.img
            key={`desktop-${imageIndex}`}
            src={images[imageIndex]}
            alt="Desktop Banner"
            className="absolute w-full h-full object-cover hidden sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </section>
    </>
  );
}

export default ChildCentred;
