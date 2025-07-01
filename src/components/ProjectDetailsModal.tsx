"use client";

import type { Project } from "@/data/constants";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Link as LinkIcon, X, Eye } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailsModal = ({ project, onClose }: ProjectDetailsModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex justify-center items-center"
        onClick={onClose}
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="w-full max-w-4xl m-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="animated-rainbow-border rounded-3xl">
            <div className="relative z-10 w-full bg-card text-card-foreground rounded-3xl overflow-hidden">
              <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-4 right-4 z-20 rounded-full">
                  <X className="h-5 w-5" />
              </Button>
              <ScrollArea className="max-h-[90vh]">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-56 md:h-auto">
                    <Image
                      src={project.image || 'https://placehold.co/600x400.png'}
                      alt={project.title}
                      layout="fill"
                      className="object-cover"
                      data-ai-hint="abstract technology"
                    />
                  </div>
                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">{project.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{project.date}</p>
                    
                    <div className="flex flex-wrap gap-2 my-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>

                    <p className="text-base text-foreground/90 leading-relaxed">
                      {project.description}
                    </p>

                    {project.member && project.member.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Team Members</h4>
                        <div className="flex items-center -space-x-2">
                          {project.member.map((member) => (
                              <Image
                                key={member.name}
                                src={member.img}
                                alt={member.name}
                                width={40}
                                height={40}
                                className="rounded-full border-2 border-background"
                              />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-4 mt-8">
                      <Button asChild variant="outline" className="border-primary text-primary hover:text-primary hover:bg-primary/10 rounded-full">
                        <Link href={project.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                      {project.webapp && project.category === 'data analyst' ? (
                          <Button asChild className="bg-primary text-primary-foreground hover:bg-accent rounded-full">
                            <Link href={project.webapp}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Visual
                            </Link>
                          </Button>
                      ) : project.webapp && (
                          <Button asChild className="bg-primary text-primary-foreground hover:bg-accent rounded-full">
                            <Link href={project.webapp} target="_blank">
                              <LinkIcon className="mr-2 h-4 w-4" />
                              Live App
                            </Link>
                          </Button>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
