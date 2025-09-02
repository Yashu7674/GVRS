// HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 md:px-12 py-12 bg-[#171717] text-[#FFFFFF]">
      {/* Text Block */}
      <div className="flex-shrink-0 text-center md:text-left">
        <motion.div
      className="flex-shrink-0 text-center md:text-left"
      initial={{ opacity: 0, y: 50 }}   // start hidden and slightly below
      animate={{ opacity: 1, y: 0 }}    // animate to visible and original position
      transition={{ duration: 1, ease: "easeOut" }} // smooth transition
    >
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Creating Future Leaders <br />
          Through Innovation and <br />
          Excellence
        </h1>
        </motion.div>
      </div>

      {/* Video Block */}
      <div className="flex-1 flex justify-center ">
        <video
          className="rounded-lg shadow-lg w-full max-w h-auto"
          autoPlay
          loop
          muted 
          playsInline
        >
          <source src="src/assets/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
