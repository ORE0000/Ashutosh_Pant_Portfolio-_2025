
'use client';

import { Bar, BarChart, CartesianGrid, ComposedChart, Line, Pie, PieChart, XAxis, YAxis, Cell } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';


const topAuthorsFollowersData = [
    { author: 'jonaxx', followers: 4.0, fill: 'hsl(var(--chart-1))' },
    { author: 'C.C.', followers: 3.4, fill: 'hsl(var(--chart-2))' },
    { author: 'maxinejiji', followers: 3.0, fill: 'hsl(var(--chart-3))' },
    { author: '4reuminct', followers: 2.7, fill: 'hsl(var(--chart-4))' },
    { author: 'Tina Lata', followers: 2.2, fill: 'hsl(var(--chart-5))' },
];

const topStoriesReadsData = [
    { story: 'HIH Season 1', reads: 380, fill: 'hsl(var(--chart-1))' },
    { story: 'HIH Season 2', reads: 355, fill: 'hsl(var(--chart-2))' },
    { story: 'HIH Season 3', reads: 243, fill: 'hsl(var(--chart-3))' },
    { story: 'Hell University', reads: 176, fill: 'hsl(var(--chart-4))' },
    { story: 'The Rain in España', reads: 157, fill: 'hsl(var(--chart-5))' },
];

const genrePopularityData = [
    { genre: 'Romance', reads: 2080, fill: 'hsl(var(--chart-1))' },
    { genre: 'General Fiction', reads: 380, fill: 'hsl(var(--chart-2))' },
    { genre: 'Teen Fiction', reads: 326, fill: 'hsl(var(--chart-3))' },
    { genre: 'Mystery Thriller', reads: 241, fill: 'hsl(var(--chart-4))' },
    { genre: 'Science Fiction', reads: 58, fill: 'hsl(var(--chart-5))' },
];

const authorActiveYearsData = [
    { years: '9-11', authors: 3, trend: 1.5 },
    { years: '11-13', authors: 3, trend: 2.0 },
    { years: '13-15', authors: 6, trend: 2.2 },
];


const chartConfig: ChartConfig = {
    followers: { label: 'Followers (M)' },
    reads: { label: 'Reads (M)' },
    authors: { label: 'Number of Authors', color: 'hsl(var(--chart-1))' },
    trend: { label: 'Trend', color: 'hsl(var(--chart-2))' },
};


export default function WattpadAnalysisChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <Card>
            <CardHeader>
                <CardTitle>Top 5 Authors by Followers</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="w-full h-[300px]">
                    <BarChart data={topAuthorsFollowersData} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid horizontal={false} />
                        <YAxis dataKey="author" type="category" tickLine={false} axisLine={false} />
                        <XAxis dataKey="followers" type="number" unit="M" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="followers" radius={4}>
                             {topAuthorsFollowersData.map((entry) => (
                                <Cell key={`cell-${entry.author}`} fill={entry.fill} />
                            ))}
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Top 5 Stories by Reads</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="w-full h-[300px]">
                    <BarChart data={topStoriesReadsData} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid horizontal={false} />
                        <YAxis dataKey="story" type="category" tickLine={false} axisLine={false} />
                        <XAxis dataKey="reads" type="number" unit="M" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="reads" radius={4}>
                             {topStoriesReadsData.map((entry) => (
                                <Cell key={`cell-${entry.story}`} fill={entry.fill} />
                            ))}
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle>Genre Popularity by Reads</CardTitle>
                <CardDescription>Reads in Millions</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="w-full h-[300px]">
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent nameKey="genre" />} />
                        <Pie data={genrePopularityData} dataKey="reads" nameKey="genre" cx="50%" cy="50%" outerRadius={100} label>
                            {genrePopularityData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                        </Pie>
                        <ChartLegend content={<ChartLegendContent nameKey="genre" />} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Distribution of Author Active Years</CardTitle>
                <CardDescription>Longevity of top authors on the platform</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="w-full h-[300px]">
                    <ComposedChart data={authorActiveYearsData}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="years" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend />
                        <Bar dataKey="authors" barSize={50} fill="var(--color-authors)" />
                        <Line type="monotone" dataKey="trend" stroke="var(--color-trend)" strokeWidth={2} />
                    </ComposedChart>
                </ChartContainer>
            </CardContent>
        </Card>
    </div>
  );
}
