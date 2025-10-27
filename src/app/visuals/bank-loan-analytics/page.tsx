
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lightbulb, TrendingUp, CheckCircle, Database, BarChart3, Puzzle } from 'lucide-react';
import Link from 'next/link';

const keyFeatures = [
    'Dynamic KPIs for Good & Bad Loans',
    'Month-over-Month financial comparison',
    'Regional and categorical breakdowns',
    'Clean and professional dashboard UI design'
];

const techStack = [
    { name: 'SQL Server', icon: <Database className="h-5 w-5" /> },
    { name: 'Power BI', icon: <BarChart3 className="h-5 w-5" /> },
    { name: 'DAX', icon: <Puzzle className="h-5 w-5" /> }
];

export default function BankLoanAnalyticsDashboardPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text animated-gradient-text">
              Bank Loan Analytics Dashboard
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              An end-to-end analysis of a financial institution’s loan dataset to uncover insights into loan performance, borrower behavior, and portfolio health.
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
                    title="Banking Loan Analytics Dashboard" 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMDgwZTJiZDYtZDczMy00N2RhLTlhNGEtZjZhYzRjYmJmYWVjIiwidCI6IjA1MmI4MDFhLWZjMGUtNDEzZS04OTk5LTdkNWYwNzhjZTdkMiJ9"
                    frameBorder="0" 
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                   <p className="text-sm text-muted-foreground mt-4">
                    This project strengthened my ability to design data models, write efficient SQL queries, and build insightful, interactive dashboards that communicate data-driven stories effectively.
                  </p>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
