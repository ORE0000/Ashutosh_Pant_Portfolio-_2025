
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Database, GitBranch, Layers, Puzzle, BarChart3, CheckCircle, Rocket, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const techStack = [
    { name: 'SQL Server', icon: <Database className="h-5 w-5" /> },
    { name: 'T-SQL Stored Procedures', icon: <Code className="h-5 w-5" /> },
    { name: 'Medallion Architecture', icon: <Layers className="h-5 w-5" /> },
    { name: 'Star Schema', icon: <GitBranch className="h-5 w-5" /> },
    { name: 'Power BI', icon: <BarChart3 className="h-5 w-5" /> },
];

const etlHighlights = [
    'Stored procedure based execution for modularity.',
    'Idempotent, re-runnable ETL pipelines.',
    'Layered schema-based design (Bronze, Silver, Gold).',
    'View-based semantic layer for BI consumption.',
];

const businessValue = [
    "Delivered a self-service market intelligence solution.",
    "Transformed raw data into actionable insights.",
    "Empowered product managers, pricing teams, and leadership.",
    "Enabled data-driven decisions for strategy and planning."
]

export default function SqlDataWarehousePage() {
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
                <Database className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">Data Engineering Project</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text animated-gradient-text">
              SQL Data Warehouse (Medallion Architecture)
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              An end-to-end data warehouse handling ETL, data modeling, and analytical dataset creation for BI and self-service analytics.
            </p>
          </header>

          <main>
             <Card className="mb-12">
              <CardContent className="p-0">
                <div className="relative w-full bg-muted/30 rounded-lg overflow-hidden aspect-video">
                  <Image
                    src="https://raw.githubusercontent.com/ORE0000/sql-data-warehouse/refs/heads/main/docs/High%20Level%20Architecture%20-%20Enhanced.png"
                    alt="SQL Data Warehouse Architecture"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-75"
                    data-ai-hint="data architecture diagram"
                  />
                </div>
              </CardContent>
            </Card>


            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Project Architecture</CardTitle>
                <CardDescription>
                    This project uses a production-style modern data warehouse approach with a Medallion Architecture (Bronze → Silver → Gold) to ensure data quality and governance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-4 rounded-full bg-yellow-900/20 text-yellow-400 border-2 border-yellow-700">
                           <Database className="h-8 w-8" />
                        </div>
                        <h3 className="font-bold text-lg">Bronze Layer</h3>
                        <p className="text-sm text-muted-foreground max-w-xs">Raw data ingestion from source systems (ERP, CRM).</p>
                    </div>
                     <div className="text-muted-foreground text-2xl font-mono">&rarr;</div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-4 rounded-full bg-gray-500/20 text-gray-300 border-2 border-gray-600">
                           <Puzzle className="h-8 w-8" />
                        </div>
                        <h3 className="font-bold text-lg">Silver Layer</h3>
                        <p className="text-sm text-muted-foreground max-w-xs">Cleansed, conformed, and standardized data.</p>
                    </div>
                     <div className="text-muted-foreground text-2xl font-mono">&rarr;</div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-4 rounded-full bg-yellow-400/20 text-yellow-300 border-2 border-yellow-500">
                           <BarChart3 className="h-8 w-8" />
                        </div>
                        <h3 className="font-bold text-lg">Gold Layer</h3>
                        <p className="text-sm text-muted-foreground max-w-xs">Metrics, KPIs, and analytical models for BI.</p>
                    </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Rocket className="text-primary h-6 w-6" />
                    ETL Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {etlHighlights.map((feature, i) => (
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
                    <Layers className="text-primary h-6 w-6" />
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
            </div>
            
            <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Layers className="text-primary h-6 w-6" />
                    Business Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {businessValue.map((value, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                            <span className="text-muted-foreground">{value}</span>
                        </li>
                        ))}
                    </ul>
                    <Button asChild variant="link" className="mt-4">
                        <Link href="https://github.com/ORE0000/sql-data-warehouse" target="_blank">
                            View on GitHub
                        </Link>
                    </Button>
                </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}


