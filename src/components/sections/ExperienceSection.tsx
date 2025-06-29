'use client';

import { Bio } from "@/data/constants";
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from "../ExperienceCard";

const ExperienceSection = () => {
  return (
    <section id="experience" className="flex flex-col items-center justify-center gap-8 md:gap-12">
      <div className="text-center animate-fadeIn max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text animated-gradient-text">
            Experience
        </h2>
        <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
        <p className="mt-8 text-base md:text-lg text-muted-foreground">
            My work experience as a software engineer and working on different companies and projects.
        </p>
      </div>
      <div className="w-full max-w-5xl">
          <VerticalTimeline>
              {Bio.experience.map((exp, index) => (
                  <ExperienceCard key={`exp-${index}`} experience={exp} />
              ))}
          </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceSection;
