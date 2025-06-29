"use client";

import { Bio } from "@/data/constants";
import { Button } from "@/components/ui/button";
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Image from "next/image";
import HeroBgAnimation from "../canvas/HeroBgAnimation";
import Tilt from 'react-parallax-tilt';

const headContainerAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const headTextAnimation = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

const headContentAnimation = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      delay: 0.2,
    },
  },
};

const imageAnimation = {
   hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      delay: 0.4,
    },
  },
}


const HeroSection = () => {
  return (
    <section id="home" className="relative w-full flex justify-center py-20 px-4 sm:px-8 md:px-12 lg:px-20 z-10 overflow-hidden min-h-[80vh] md:min-h-[90vh] items-center">
      <motion.div 
        className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-6xl gap-12"
        variants={headContainerAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Left Container */}
        <div className="w-full order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div variants={headTextAnimation}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Hi, I am <br /> {Bio.name}
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground flex items-center gap-2 justify-center md:justify-start mt-2 min-h-[80px]">
              I am a
              <span className="text-primary font-bold">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </motion.div>

          <motion.p 
            className="text-base md:text-lg text-muted-foreground mt-6 max-w-lg"
            variants={headContentAnimation}
          >
            {Bio.description}
          </motion.p>
          
          <motion.div variants={headContentAnimation} className="mt-8">
            <Button asChild size="lg" className="font-semibold text-white bg-gradient-to-r from-primary via-primary to-accent hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/40 rounded-full px-8 py-4 text-lg">
              <a href={Bio.resume} target="_blank" rel="noopener noreferrer">
                Check Resume
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Container */}
        <motion.div className="w-full order-1 md:order-2 flex justify-center md:justify-end" variants={imageAnimation}>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1500} scale={1.05}>
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-10 z-0">
                  <HeroBgAnimation />
              </div>
              <Image
                src="/images/HeroImage.jpg"
                alt="Hero Image"
                width={400}
                height={400}
                className="relative z-10 rounded-full border-2 border-primary object-cover shadow-2xl w-full h-full"
                priority
              />
            </div>
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
