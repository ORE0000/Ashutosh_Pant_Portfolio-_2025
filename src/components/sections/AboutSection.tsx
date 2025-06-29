import { Bio } from "@/data/constants";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden py-20 md:py-28 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="relative max-w-screen-md mx-auto px-4 sm:px-8 md:px-12 lg:px-20 z-10">
        <div className="animated-rainbow-border">
          <div className="relative z-10 bg-card rounded-3xl p-6 md:p-10 text-center animate-fadeIn">
            <div className="flex flex-col items-center gap-6">
              <Image
                src="/images/HeroImage.jpg"
                alt="Ashutosh Pant"
                width={150}
                height={150}
                className="rounded-full border-4 border-primary shadow-lg"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Hi, I am <span className="text-primary">{Bio.name}</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  {Bio.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
