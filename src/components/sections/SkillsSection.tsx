"use client";

import { Bio } from "@/data/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Tilt from 'react-parallax-tilt';

const SkillsSection = () => {
  return (
    <section id="skills" className="flex flex-col items-center justify-center gap-8 md:gap-12">
      <div className="text-center animate-fadeIn max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text animated-gradient-text">
            Skills
        </h2>
        <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
        <p className="mt-8 text-base md:text-lg text-muted-foreground">
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Bio.skills.map((skillCategory, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1500} scale={1.05}>
            <Card 
              className="w-full h-full bg-card/80 backdrop-blur-sm border border-border/20 shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fadeIn relative overflow-hidden card-hover-shimmer rounded-2xl" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-center font-semibold text-foreground">{skillCategory.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  {skillCategory.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 border border-foreground/20 rounded-lg p-3 text-secondary-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer">
                      <img src={skill.image} alt={skill.name} className="w-6 h-6" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
