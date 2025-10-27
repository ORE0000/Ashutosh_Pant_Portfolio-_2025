'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart, GitCommit, Lightbulb, TrendingUp, Sparkles, Music2 } from 'lucide-react';
import Link from 'next/link';
import PowerBiLogo from '@/components/icons/PowerBiLogo';

const keyFeatures = [
    'Interactive analysis of songs by artist, album type, and month',
    'Popularity and duration correlation insights',
    'Explicit vs. Non-explicit content breakdown',
    'Dynamic filters and navigation buttons for a seamless user experience',
    'Custom button slicers with horizontal pagination for song browsing',
    'Integrated artist and album visuals using cover art'
];

const insightsGained = [
    'Distribution of explicit vs. clean tracks',
    'Top-performing artists by average popularity',
    'Song duration patterns related to chart performance',
    'Trends in music releases over time'
];

const techStack = [
    { name: 'Power BI', icon: PowerBiLogo },
    { name: 'DAX' },
    { name: 'Data Modeling' },
    { name: 'Excel/CSV' }
];

export default function SpotifyDashboardPage() {
  return (
    <div className="min-h-screen bg-background py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8 hover:bg-accent/50">
          <Link href="/visuals">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Visuals
          </Link>
        </Button>
        
        {/* Header Section */}
        <header className="text-center mb-12 section-glow">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Music2 className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Power BI Analytics Dashboard</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text tracking-tight mb-6">
            Spotify Music Analytics Dashboard
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            An interactive Power BI dashboard built to explore and visualize Spotify's global music trends, artist performance, and content patterns.
          </p>
        </header>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="relative overflow-hidden card-hover-shimmer hover:border-primary/30 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BarChart className="text-primary h-5 w-5" />
                </div>
                <span>Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Interactive dashboard analyzing global music trends with modern UI and responsive visuals.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden card-hover-shimmer hover:border-primary/30 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <div className="p-2 rounded-lg bg-chart-2/10">
                  <GitCommit className="text-chart-2 h-5 w-5" />
                </div>
                <span>Tech Stack</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden card-hover-shimmer hover:border-primary/30 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <div className="p-2 rounded-lg bg-chart-3/10">
                  <Lightbulb className="text-chart-3 h-5 w-5" />
                </div>
                <span>Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Interactive filters, custom slicers, artist visuals, and dynamic navigation.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden card-hover-shimmer hover:border-primary/30 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <div className="p-2 rounded-lg bg-chart-4/10">
                  <TrendingUp className="text-chart-4 h-5 w-5" />
                </div>
                <span>Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Track distribution, artist performance, duration patterns, and release trends.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Dashboard - Main Feature */}
        <Card className="relative overflow-hidden mb-12 hover:border-primary/30 transition-all duration-300">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-chart-3 animate-pulse"></div>
                  Live Interactive Dashboard
                </CardTitle>
                <CardDescription>
                  Explore real-time data visualizations and interact with filters to discover music trends
                </CardDescription>
              </div>
              <Badge className="bg-chart-3/20 text-chart-3 border-chart-3/30 hover:bg-chart-3/30">
                Live
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative w-full bg-muted/20" style={{ paddingBottom: '50%' }}>
              <iframe 
                title="Global Music Trends Dashboard" 
                className="absolute top-0 left-0 w-full h-full"
                src="https://app.powerbi.com/view?r=eyJrIjoiMDc1OWU0NWYtOTBlMy00MzI5LThmN2ItZWUzNGYyZWE3ZDhmIiwidCI6IjA1MmI4MDFhLWZjMGUtNDEzZS04OTk5LTdkNWYwNzhjZTdkMiJ9&pageName=711be0c99a01d026c416" 
                frameBorder="0" 
                allowFullScreen={true}
                style={{ border: 'none' }}>
              </iframe>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Features & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="relative overflow-hidden card-hover-shimmer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="text-primary h-5 w-5" />
                Key Features
              </CardTitle>
              <CardDescription>Core functionalities and capabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden card-hover-shimmer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-primary h-5 w-5" />
                Insights Gained
              </CardTitle>
              <CardDescription>Key findings and data-driven discoveries</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {insightsGained.map((insight, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}