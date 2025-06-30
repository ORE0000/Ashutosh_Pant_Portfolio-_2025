'use client';

import { Bio } from "@/data/constants";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const getLinkHref = (baseHref: string) => {
    return pathname === "/" ? baseHref : `/${baseHref}`;
  };

  return (
    <footer className="w-full bg-transparent dark:bg-transparent light:bg-gradient-to-t from-secondary to-transparent py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold gradient-text animated-gradient-text">
          {Bio.name}
        </h1>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
          <Link href={getLinkHref("#about")} className="text-foreground hover:text-primary transition-colors nav-link-hover">About</Link>
          <Link href={getLinkHref("#skills")} className="text-foreground hover:text-primary transition-colors nav-link-hover">Skills</Link>
          <Link href={getLinkHref("#experience")} className="text-foreground hover:text-primary transition-colors nav-link-hover">Experience</Link>
          <Link href={getLinkHref("#projects")} className="text-foreground hover:text-primary transition-colors nav-link-hover">Projects</Link>
          <Link href={getLinkHref("#education")} className="text-foreground hover:text-primary transition-colors nav-link-hover">Education</Link>
        </nav>
        <div className="flex gap-4">
          <Link href={Bio.facebook} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-transform hover:scale-110">
            <Facebook size={24} />
          </Link>
          <Link href={Bio.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-transform hover:scale-110">
            <Twitter size={24} />
          </Link>
          <Link href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-transform hover:scale-110">
            <Linkedin size={24} />
          </Link>
          <Link href={Bio.insta} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-transform hover:scale-110">
            <Instagram size={24} />
          </Link>
        </div>
        <p className="text-xs text-muted-foreground">&copy; 2025 {Bio.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
