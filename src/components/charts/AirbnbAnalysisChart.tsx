
'use client';

import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList, Cell, Area, AreaChart } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';

const avgPricePerBedroomData = [
    { bedrooms: 1, price: 96.2 },
    { bedrooms: 2, price: 175.4 },
    { bedrooms: 3, price: 249.7 },
    { bedrooms: 4, price: 315.4 },
    { bedrooms: 5, price: 450.0 },
    { bedrooms: 6, price: 584.8 },
];

const priceByZipcodeData = [
    { zipcode: '98101', price: 205, fill: 'hsl(var(--chart-1))' },
    { zipcode: '98102', price: 170, fill: 'hsl(var(--chart-2))' },
    { zipcode: '98103', price: 165, fill: 'hsl(var(--chart-3))' },
    { zipcode: '98104', price: 158, fill: 'hsl(var(--chart-4))' },
    { zipcode: '98105', price: 150, fill: 'hsl(var(--chart-5))' },
    { zipcode: '98106', price: 148, fill: 'hsl(var(--chart-1))' },
    { zipcode: '98107', price: 135, fill: 'hsl(var(--chart-2))' },
    { zipcode: '98108', price: 130, fill: 'hsl(var(--chart-3))' },
    { zipcode: '98109', price: 128, fill: 'hsl(var(--chart-4))' },
    { zipcode: '98112', price: 125, fill: 'hsl(var(--chart-5))' },
    { zipcode: '98115', price: 110, fill: 'hsl(var(--chart-1))' },
    { zipcode: '98116', price: 105, fill: 'hsl(var(--chart-2))' },
    { zipcode: '98117', price: 98, fill: 'hsl(var(--chart-3))' },
    { zipcode: '98118', price: 95, fill: 'hsl(var(--chart-4))' },
    { zipcode: '98119', price: 92, fill: 'hsl(var(--chart-5))' },
];

const revenueForYearData = [
    { week: 'Mar 6', revenue: 950000 },
    { week: 'Apr 3', revenue: 1100000 },
    { week: 'May 1', revenue: 1250000 },
    { week: 'May 29', revenue: 1800000 },
    { week: 'Jun 26', revenue: 1750000 },
    { week: 'Jul 24', revenue: 1900000 },
    { week: 'Aug 21', revenue: 2000000 },
    { week: 'Sep 18', revenue: 1950000 },
    { week: 'Oct 16', revenue: 1850000 },
    { week: 'Nov 13', revenue: 1980000 },
];

const bedroomListings = [1, 2, 3, 4, 5, 6];
const zipcodes = ['98101', '98102', '98103', '98104', '98105', '98106', '98107', '98108', '98109', '98112', '98115', '98116', '98117', '98118', '98119'];


const chartConfig: ChartConfig = {
    price: { label: 'Avg. Price', color: 'hsl(var(--chart-2))' },
    revenue: { label: 'Revenue', color: 'hsl(var(--chart-1))' },
};

export default function AirbnbAnalysisChart() {
    const [selectedBedroom, setSelectedBedroom] = useState<number | null>(null);
    const [selectedZipcode, setSelectedZipcode] = useState<string | null>(null);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Avg Price Per Bedroom</CardTitle>
                    <CardDescription>Click a bedroom count or a bar to highlight it.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="w-full h-[300px]">
                        <BarChart data={avgPricePerBedroomData} margin={{ top: 20 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="bedrooms" name="Bedrooms" tickLine={false} axisLine={false} />
                            <YAxis unit="$" name="Avg. Price" tickLine={false} axisLine={false} />
                            <ChartTooltip 
                                cursor={{fill: 'hsl(var(--muted) / 0.5)'}} 
                                content={<ChartTooltipContent indicator="dot" />} 
                            />
                            <Bar dataKey="price" radius={[4, 4, 0, 0]} className="transition-opacity">
                                <LabelList dataKey="price" position="top" offset={8} className="fill-foreground text-sm" />
                                {avgPricePerBedroomData.map((entry) => (
                                    <Cell 
                                        key={`cell-${entry.bedrooms}`} 
                                        fill={selectedBedroom === entry.bedrooms ? 'hsl(var(--primary))' : 'hsl(var(--chart-2))'}
                                        fillOpacity={selectedBedroom && selectedBedroom !== entry.bedrooms ? 0.3 : 1}
                                        onClick={() => setSelectedBedroom(selectedBedroom === entry.bedrooms ? null : entry.bedrooms)}
                                        className="cursor-pointer"
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Distinct Count of Bedroom Listings</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        {bedroomListings.map(b => (
                            <Button
                                key={b}
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start p-2 font-medium text-left h-auto",
                                    selectedBedroom === b ? 'bg-primary/20 text-primary' : 'hover:bg-muted'
                                )}
                                onClick={() => setSelectedBedroom(selectedBedroom === b ? null : b)}
                            >
                                {b} Bedroom
                            </Button>
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                        Click to filter by bedroom count. Click again to clear.
                    </p>
                </CardContent>
            </Card>

            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Price by Zipcode</CardTitle>
                    <CardDescription>Click a zipcode from the list or a bar to highlight it.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={{}} className="w-full h-[400px]">
                        <BarChart data={priceByZipcodeData} layout="vertical" margin={{ left: 10, right: 10 }}>
                            <CartesianGrid horizontal={false} />
                            <XAxis type="number" unit="$" />
                            <YAxis dataKey="zipcode" type="category" width={50} tickLine={false} axisLine={false} />
                            <ChartTooltip
                                cursor={{fill: 'hsl(var(--muted))'}}
                                content={
                                    <ChartTooltipContent
                                        labelFormatter={(value, payload) => {
                                            return `Zipcode: ${payload[0]?.payload.zipcode}`;
                                        }}
                                    />
                                }
                            />
                            <Bar dataKey="price" name="Avg. Price" background={{ fill: 'hsl(var(--background))' }} className="transition-opacity">
                                {priceByZipcodeData.map((entry, index) => (
                                    <Cell 
                                        key={`cell-${index}`} 
                                        fill={selectedZipcode === entry.zipcode ? 'hsl(var(--primary))' : entry.fill}
                                        fillOpacity={selectedZipcode && selectedZipcode !== entry.zipcode ? 0.3 : 1}
                                        onClick={() => setSelectedZipcode(selectedZipcode === entry.zipcode ? null : entry.zipcode)}
                                        className="cursor-pointer"
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Filter by Zipcode</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-72">
                        <div className="space-y-2 pr-4">
                            {zipcodes.map(zip => (
                                <Button
                                    key={zip}
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-start p-2 font-medium text-left h-auto",
                                        selectedZipcode === zip ? 'bg-primary/20 text-primary' : 'hover:bg-muted'
                                    )}
                                    onClick={() => setSelectedZipcode(selectedZipcode === zip ? null : zip)}
                                >
                                    {zip}
                                </Button>
                            ))}
                        </div>
                    </ScrollArea>
                    <p className="text-xs text-muted-foreground mt-4">
                        Click a zipcode to filter. Click again to clear.
                    </p>
                </CardContent>
            </Card>

            <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle>Revenue for year</CardTitle>
                    <CardDescription>Week of Date [2016]</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="w-full h-[300px]">
                        <AreaChart data={revenueForYearData}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="week" />
                            <YAxis unit="K" tickFormatter={(value) => `${Math.round(value / 1000)}K`} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" fill="var(--color-revenue)" fillOpacity={0.3} />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>

            <Card className="lg:col-span-3">
                 <CardHeader>
                    <CardTitle>Price Per Zipcode</CardTitle>
                    <CardDescription>
                        Static preview. Click the link below to view the fully interactive dashboard on Tableau Public.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <Image
                        src="https://aneeshlalwani.github.io/images/airbnb-map.png"
                        alt="Price per zipcode map"
                        width={800}
                        height={500}
                        className="rounded-lg object-contain"
                        data-ai-hint="map data"
                    />
                    <Button variant="link" asChild className="mt-2">
                        <Link href="https://public.tableau.com/" target="_blank">View on Tableau Public</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
