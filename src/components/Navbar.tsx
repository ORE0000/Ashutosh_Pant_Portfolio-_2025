"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Bio } from "@/data/constants";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const mobileMenuItemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkHref = (baseHref: string) => {
    return pathname === "/" ? baseHref : `/${baseHref}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold gradient-text animated-gradient-text">
            Ashutosh Pant
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={getLinkHref(link.href)} className="text-sm font-medium text-foreground hover:text-primary transition-colors nav-link-hover">
                  {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="hidden md:inline-block group">
              <div className="animated-rainbow-border !rounded-lg">
                <div className="relative z-10 bg-background rounded-md px-4 py-2 flex items-center gap-2 text-sm font-medium text-foreground group-hover:bg-transparent group-hover:text-white transition-all duration-200">
                    <Github size={16} />
                    Github Profile
                </div>
              </div>
            </a>
            <ThemeToggle />
            <div className="md:hidden">
              <Button onClick={toggleMenu} variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col justify-start items-center pt-20 px-4 md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 h-8 w-8"
            >
              <X size={24} />
            </Button>
            <nav className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={mobileMenuItemVariants}>
                  <Link
                    href={getLinkHref(link.href)}
                    onClick={toggleMenu}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileMenuItemVariants} className="mt-4">
                <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="group w-full max-w-xs" onClick={toggleMenu}>
                  <div className="animated-rainbow-border !rounded-lg">
                    <div className="relative z-10 w-full px-4 py-2 bg-background rounded-md flex items-center justify-center gap-2 text-sm font-medium text-foreground group-hover:bg-transparent group-hover:text-white transition-all duration-200">
                        <Github size={16} />
                        Github Profile
                    </div>
                  </div>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
