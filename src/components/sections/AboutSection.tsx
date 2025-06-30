import { Bio } from "@/data/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Eye } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-glow relative w-full overflow-hidden py-20 md:py-28 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="relative max-w-screen-md mx-auto px-4 sm:px-8 md:px-12 lg:px-20 z-10">
        <div className="animated-rainbow-border">
          <div className="relative z-10 bg-card rounded-3xl p-6 md:p-10 text-center animate-fadeIn">
            <div className="flex flex-col items-center gap-6">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/aetherfolio-f2f25.appspot.com/o/images%2Fashutosh-pant.png?alt=media&token=8d233157-b184-46c5-9f22-3957591e1d24"
                alt="Ashutosh Pant"
                width={150}
                height={150}
                className="rounded-full border-4 border-primary shadow-lg"
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Hi, I am <span className="text-primary">{Bio.name}</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I’m a data analyst skilled in Excel, SQL, Python, Power BI, and Tableau. Passionate about transforming raw data into actionable insights, I specialize in creating impactful dashboards and working on real-world analytical projects — from Airbnb market analysis to customer sales trends. With a strong foundation in analytics and a focus on business value, I’m driven to help organizations make smarter, data-informed decisions.
                </p>
                <div className="mt-4">
                    <Button asChild size="lg" className="font-semibold text-white bg-gradient-to-r from-primary via-purple-600 to-accent hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/40 rounded-full px-8 py-3 text-base group relative overflow-hidden">
                       <Link href="/visuals">
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-full"></div>
                          <span className="relative flex items-center">
                            <Eye className="mr-2 h-5 w-5" />
                            View Visuals
                          </span>
                       </Link>
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
