
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lightbulb, TrendingUp, CheckCircle, BarChart3, Puzzle, Database, Smartphone } from 'lucide-react';
import Link from 'next/link';

const keyFeatures = [
    'Dynamic market demand and brand share analysis.',
    'Pricing intelligence and discount behavior tracking.',
    'Amazon vs. Flipkart performance comparison.',
    'Product-level deep dive with advanced filters.',
];

const insightsGained = [
    'Identified optimal price positioning for new launches.',
    'Understood customer demand patterns and segment performance.',
    'Analyzed discounting behavior and its impact on value perception.',
    'Benchmarked competitive performance across major platforms.',
];

const techStack = [
    { name: 'SQL Server', icon: <Database className="h-5 w-5" /> },
    { name: 'Power BI', icon: <BarChart3 className="h-5 w-5" /> },
    { name: 'DAX', icon: <Puzzle className="h-5 w-5" /> },
];

export default function SmartphoneMarketAnalysisPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/visuals">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Visuals
          </Link>
        </Button>
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <Smartphone className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">Market Intelligence Dashboard</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text animated-gradient-text">
              Smartphone Launch Intel
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A self-service market intelligence dashboard to analyze the Indian smartphone market across Amazon and Flipkart, enabling data-driven decisions.
            </p>
          </header>

          <main>
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Live Interactive Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full bg-muted/30 rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    title="Smartphone_Competitive_Intelligence_Dashboard" 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNWY5OWZlYjctNWEyMi00MTkyLTkxZjMtMjFiNWM0MmUwOTJiIiwidCI6IjA1MmI4MDFhLWZjMGUtNDEzZS04OTk5LTdkNWYwNzhjZTdkMiJ9" 
                    frameBorder="0" 
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Lightbulb className="text-primary h-6 w-6" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <TrendingUp className="text-primary h-6 w-6" />
                    Insights Gained
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {insightsGained.map((insight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-muted-foreground">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Puzzle className="text-primary h-6 w-6" />
                    Tech Stack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-4">
                    {techStack.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2">
                        {tech.icon}
                        <span className="font-semibold">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
