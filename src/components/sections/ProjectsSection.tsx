"use client";

import { useState } from "react";
import type { Project } from "@/data/constants";
import { Bio } from "@/data/constants";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import ProjectDetailsModal from "../ProjectDetailsModal";

const projectCategories = [
  { value: 'all', label: 'All' },
  { value: 'web app', label: "Web App's" },
  { value: 'data analyst', label: 'Data Analyst' },
  { value: 'machine learning', label: 'Machine Learning' },
];

const ProjectsSection = () => {
  const [toggle, setToggle] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const filteredProjects =
    toggle === "all"
      ? Bio.projects
      : Bio.projects.filter((project) =>
          project.category?.toLowerCase().includes(toggle.toLowerCase())
        );

  const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <>
      <section id="projects" className="flex flex-col items-center justify-center gap-8 md:gap-12">
        <div className="text-center animate-fadeIn max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text animated-gradient-text">
              Projects
          </h2>
          <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
          <p className="mt-8 text-base md:text-lg text-muted-foreground">
            I have worked on a wide range of projects. From web apps to machine learning models. Here are some of my projects.
          </p>
        </div>

        <div className="relative flex flex-wrap justify-center items-center gap-1 md:gap-2 rounded-full bg-card/80 p-1.5 border border-border/20 backdrop-blur-sm">
          {projectCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                setToggle(category.value);
                setShowAll(false);
              }}
              className={`relative px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium transition-colors duration-300 rounded-full ${
                toggle === category.value ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {toggle === category.value && (
                <motion.span
                  layoutId="project-tab-bubble"
                  className="absolute inset-0 z-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={toggle} 
        >
          {projectsToShow.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard 
                project={project} 
                onViewDetails={() => setSelectedProject(project)} 
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length > 6 && (
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="mt-8 rounded-full font-semibold px-6 py-3"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        )}
      </section>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectsSection;
