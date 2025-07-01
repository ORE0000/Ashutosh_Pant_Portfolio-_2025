
'use client';

import { visuals } from '@/data/constants';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Dynamically import chart components to ensure they only run on the client
const CustomerSalesChart = dynamic(() => import('@/components/charts/CustomerSalesChart'), {
  ssr: false, 
  loading: () => <div className="w-full h-96 flex items-center justify-center bg-card rounded-lg"><p>Loading chart...</p></div>,
});
const PratilipiMarketAnalysisChart = dynamic(() => import('@/components/charts/PratilipiMarketAnalysisChart'), {
  ssr: false,
  loading: () => <div className="w-full h-96 flex items-center justify-center bg-card rounded-lg"><p>Loading chart...</p></div>,
});
const WattpadAnalysisChart = dynamic(() => import('@/components/charts/WattpadAnalysisChart'), {
  ssr: false,
  loading: () => <div className="w-full h-96 flex items-center justify-center bg-card rounded-lg"><p>Loading chart...</p></div>,
});
const AirbnbAnalysisChart = dynamic(() => import('@/components/charts/AirbnbAnalysisChart'), {
  ssr: false,
  loading: () => <div className="w-full h-96 flex items-center justify-center bg-card rounded-lg"><p>Loading chart...</p></div>,
});
const NetflixDashboard = dynamic(() => import('@/components/charts/NetflixDashboard'), {
    ssr: false,
    loading: () => <div className="w-full h-screen flex items-center justify-center bg-black"><p className="text-white text-lg animate-pulse">Loading Dashboard...</p></div>,
});


export default function VisualDetailPage() {
  const params = useParams<{ slug: string }>();
  const visual = visuals.find((v) => v.slug === params.slug);

  if (!visual) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <Button asChild variant="ghost" className="mb-8">
            <Link href="/visuals">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Visuals
            </Link>
        </Button>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
                <Card className="w-full overflow-hidden rounded-2xl">
                    <CardHeader className="p-0">
                        <Image
                            src={visual.image}
                            alt={visual.title}
                            width={1200}
                            height={700}
                            className="object-cover aspect-video"
                            data-ai-hint={visual.hint}
                        />
                    </CardHeader>
                    <CardContent className="p-6">
                        <CardTitle className="text-3xl font-bold text-primary mb-4">{visual.title}</CardTitle>
                        <p className="text-muted-foreground leading-relaxed">{visual.longDescription}</p>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2">
                <Card className="sticky top-24 rounded-2xl">
                    <CardHeader>
                        <CardTitle>Project Details</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        <div>
                            <h4 className="font-semibold mb-3">Tools & Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {visual.tools.map((tool) => (
                                    <Badge key={tool} variant="secondary">{tool}</Badge>
                                ))}
                            </div>
                        </div>
                         <div>
                            <h4 className="font-semibold mb-3">Key Achievements</h4>
                            <ul className="space-y-2">
                               {visual.achievements.map((ach, index) => (
                                 <li key={index} className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{ach}</span>
                                 </li>
                               ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>

        {visual.component && (
            <div className="mt-12">
                {visual.component === 'CustomerSalesChart' && <CustomerSalesChart />}
                {visual.component === 'PratilipiMarketAnalysisChart' && <PratilipiMarketAnalysisChart />}
                {visual.component === 'WattpadAnalysisChart' && <WattpadAnalysisChart />}
                {visual.component === 'AirbnbAnalysisChart' && <AirbnbAnalysisChart />}
                {visual.component === 'NetflixDashboard' && <NetflixDashboard />}
            </div>
        )}
      </div>
    </div>
  );
}
