
import { Bio } from "@/data/constants";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="flex flex-col items-center justify-center gap-8 md:gap-12">
      <div className="text-center animate-fadeIn max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text animated-gradient-text">
            Education
        </h2>
        <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
        <p className="mt-8 text-base md:text-lg text-muted-foreground">
          My educational journey and qualifications.
        </p>
      </div>

      <div className="w-full max-w-3xl mt-10">
        <div className="relative flex flex-col gap-12 before:content-[''] before:absolute before:top-2 before:left-4 before:h-full before:w-[2px] before:bg-border/30">
          {Bio.education.map((edu) => (
            <div key={edu.id} className="relative pl-14 group animate-fadeIn">
              <div className="absolute left-4 top-2 w-[1px] h-[1px] bg-primary rounded-full ring-4 ring-primary/20 transition-all duration-300 group-hover:ring-8 group-hover:ring-primary/10" />
              <div className="absolute left-0 top-0 flex items-center justify-center h-8 w-8 rounded-full bg-card border border-border/50 group-hover:border-primary transition-colors duration-300">
                 <GraduationCap className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="bg-transparent">
                <p className="text-sm text-muted-foreground mb-1">{edu.date}</p>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{edu.school}</h3>
                <p className="text-base font-medium text-muted-foreground">{edu.degree}</p>
                {edu.grade && <p className="text-sm text-primary/80 mt-1"><b>Grade:</b> {edu.grade}</p>}
                <p className="text-sm text-muted-foreground mt-3">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
