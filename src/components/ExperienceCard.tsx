'use client';

import type { FC } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import type { Experience } from '@/data/constants';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <VerticalTimelineElement
            visible={true}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <Image
                        src={experience.img}
                        alt={experience.company}
                        width={36}
                        height={36}
                        className="rounded-full object-contain"
                    />
                </div>
            }
            contentStyle={{ background: 'transparent', boxShadow: 'none', border: 'none', padding: '0px' }}
            contentArrowStyle={{ borderRight: '7px solid  hsl(var(--border))' }}
            date=""
        >
            <div className="bg-secondary dark:bg-card/80 backdrop-blur-sm border border-border/20 p-4 sm:p-6 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group relative overflow-hidden card-hover-shimmer">
                <div className="flex items-start gap-4">
                    <div className="hidden sm:block p-1 bg-background rounded-lg shadow-sm">
                      <Image
                          src={experience.img}
                          alt={experience.company}
                          width={52}
                          height={52}
                          className="rounded-md object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{experience.role}</h3>
                        <p className="text-sm sm:text-base font-medium text-muted-foreground">{experience.company}</p>
                    </div>
                </div>
                 <p className="text-xs text-muted-foreground mt-2">{experience.date}</p>
                <div className="mt-3 text-sm text-foreground/90 leading-relaxed">
                    {experience.desc}
                </div>
                {experience.skills && (
                    <div className="mt-4">
                        <b className="text-sm font-semibold">Skills:</b>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {experience.skills.map((skill, index) => (
                                <div key={index} className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
