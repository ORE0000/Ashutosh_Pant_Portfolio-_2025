
"use client";

import { Project } from "@/data/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
    return (
        <div className="flex group h-full">
            <Card className="bg-card flex flex-col w-full hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden card-hover-shimmer rounded-2xl">
                <CardHeader className="p-0 relative">
                    <Image
                    src={project.image || 'https://placehold.co/600x400.png'}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-t-2xl object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="abstract technology"
                    />
                </CardHeader>
                <div className="p-4 flex flex-col flex-grow">
                    <CardTitle className="text-lg md:text-xl text-foreground">{project.title}</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">{project.date}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                    <CardContent className="flex-grow p-0 pt-4">
                        <CardDescription className="text-sm text-muted-foreground overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>
                            {project.description}
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="p-0 pt-4 mt-auto">
                        <Button
                            onClick={() => onViewDetails(project)}
                            className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                        >
                            View Details
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        </div>
    );
};

export default ProjectCard;
