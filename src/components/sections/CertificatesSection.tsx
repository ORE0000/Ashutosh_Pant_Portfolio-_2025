// app/_components/sections/CertificatesSection.tsx
"use client";

import { FC, memo } from "react";
import { motion, Variants } from "framer-motion";
import { Bio } from "@/data/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CertificateCard from "../CertificateCard";

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

const CertificatesSection: FC = () => {
  if (!Bio.certificates?.length) return null;

  return (
    <motion.section
      id="certificates"
      className="relative flex flex-col items-center gap-8 py-16 md:gap-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.35, once: true }}
    >
      {/* ———————————  TITLE  ——————————— */}
      <motion.hgroup
        className="text-center max-w-2xl mx-auto select-none"
        variants={fadeSlideUp}
        custom={0}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient">
          Certificates
        </h2>

        {/* tiny accent bar */}
        <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-accent to-primary" />

        <p className="mt-6 text-base md:text-lg text-muted-foreground/80">
          A curated list of my professional certifications &amp; credentials.
        </p>
      </motion.hgroup>

      {/* ———————————  CAROUSEL  ——————————— */}
      <motion.div
        className="w-full max-w-6xl"
        variants={fadeSlideUp}
        custom={1}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {Bio.certificates.map((cert) => (
              <CarouselItem
                key={cert.id}
                className="md:basis-1/2 lg:basis-1/3 flex" // make item take full height
              >
                {/* Glassy card wrapper */}
                <div className="p-3 w-full h-full">
                  <CertificateCard certificate={cert} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* prettier controls (hide on mobile) */}
          <CarouselPrevious
            className="hidden md:flex"
            aria-label="Previous certificate"
          />
          <CarouselNext
            className="hidden md:flex"
            aria-label="Next certificate"
          />
        </Carousel>
      </motion.div>

      {/* ———————————  BG DECOR (optional)  ——————————— */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* soft gradient blob */}
        <motion.div
          className="absolute -top-24 left-1/2 size-[450px] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl opacity-40 dark:opacity-20"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>
    </motion.section>
  );
};

export default memo(CertificatesSection);
