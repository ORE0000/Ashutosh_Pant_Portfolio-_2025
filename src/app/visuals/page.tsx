
'use client';

import { BarChart, AreaChart, PieChart, MapPinned, LucideIcon, Film, Database, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { visuals } from '@/data/constants';
import Link from 'next/link';

// Icon mapping to render icons from string names in the constants file
const icons: { [key: string]: LucideIcon } = {
  BarChart,
  AreaChart,
  PieChart,
  MapPinned,
  Film,
  Database,
  Smartphone,
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function VisualsPage() {
  return (
    <div className="relative z-10 min-h-screen bg-background">
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-20 py-20 md:py-28">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text animated-gradient-text">
            Data & Visualizations
          </h1>
          <div className="mt-4 mx-auto w-28 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
          <p className="mt-8 text-base md:text-lg text-muted-foreground">
            A showcase of my analytical projects and interactive dashboards. I transform complex data into clear, actionable insights.
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {visuals.map((visual) => {
            const Icon = icons[visual.iconName];
            return (
              <Link href={`/visuals/${visual.slug}`} key={visual.slug}>
                <motion.div variants={itemVariants} className="h-full">
                  <Card className="w-full h-full bg-card/80 backdrop-blur-sm border-border/20 shadow-lg hover:shadow-primary/20 transition-all duration-300 relative overflow-hidden card-hover-shimmer rounded-2xl group cursor-pointer">
                    <CardHeader className="p-0">
                      <Image
                          src={visual.image}
                          alt={visual.title}
                          width={800}
                          height={600}
                          className="rounded-t-2xl object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
                          data-ai-hint={visual.hint}
                        />
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-primary/10 rounded-full">
                            {Icon && <Icon className="h-8 w-8 text-primary" />}
                          </div>
                          <div>
                            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{visual.title}</CardTitle>
                          </div>
                        </div>
                        <CardDescription className="text-muted-foreground">
                          {visual.shortDescription}
                        </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            )
          })}
        </motion.div>
      </div>
    </div>
  );
}
