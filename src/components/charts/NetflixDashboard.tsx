
'use client';

import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, AreaChart, Area, Tooltip } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import Image from 'next/image';

const ratingsData = [
    { name: 'TV-MA', value: 2027 },
    { name: 'TV-14', value: 1698 },
    { name: 'TV-PG', value: 701 },
    { name: 'R', value: 508 },
    { name: 'PG-13', value: 286 },
    { name: 'NR', value: 218 },
    { name: 'PG', value: 184 },
    { name: 'TV-Y7', value: 169 },
    { name: 'TV-G', value: 149 },
    { name: 'TV-Y', value: 143 },
    { name: 'TV-Y7-FV', value: 95 },
    { name: 'G', value: 37 },
];

const distributionData = [
    { name: 'Movie', value: 4265, percentage: '68.42%' },
    { name: 'TV Show', value: 1969, percentage: '31.58%' },
];

const topGenresData = [
    { name: 'Documentaries', value: 299 },
    { name: 'Stand-Up Comedy', value: 273 },
    { name: 'Dramas, International Movies', value: 248 },
    { name: 'Dramas, Independent Movies', value: 186 },
    { name: 'Comedies, Dramas, International', value: 174 },
    { name: 'Kids\' TV', value: 159 },
    { name: 'Documentaries, International', value: 150 },
    { name: 'Children & Family Movies, Comedies', value: 129 },
    { name: 'Comedies, International Movies', value: 120 },
    { name: 'Children & Family Movies', value: 120 },
];

const yearlyData = [
    { year: '2010', movie: 10, 'tv-show': 5 },
    { year: '2011', movie: 20, 'tv-show': 10 },
    { year: '2012', movie: 40, 'tv-show': 15 },
    { year: '2013', movie: 60, 'tv-show': 25 },
    { year: '2014', movie: 100, 'tv-show': 50 },
    { year: '2015', movie: 200, 'tv-show': 100 },
    { year: '2016', movie: 500, 'tv-show': 250 },
    { year: '2017', movie: 1000, 'tv-show': 500 },
    { year: '2018', movie: 1800, 'tv-show': 800 },
    { year: '2019', movie: 2500, 'tv-show': 1200 },
];

const chartConfig: ChartConfig = {
    value: { label: 'Count' },
    movie: { label: 'Movie', color: '#60A5FA' }, // blue-400
    'tv-show': { label: 'TV Show', color: '#E50914' }, // netflix-red
};

const NetflixDashboard = () => {
    return (
        <div className="bg-background text-foreground p-2 sm:p-4 rounded-lg font-sans">
            {/* Header Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-6">
                {/* Left Column: Toggles & Details */}
                <div className="md:col-span-1 flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Select defaultValue="TV Show">
                            <SelectTrigger className="w-full rounded-lg">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="TV Show">TV Show</SelectItem>
                                <SelectItem value="Movie">Movie</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="13 Reasons Why">
                            <SelectTrigger className="w-full rounded-lg">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="13 Reasons Why">13 Reasons Why</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <div><span className="font-bold text-foreground">Rating:</span> TV-MA</div>
                        <div><span className="font-bold text-foreground">Release Year:</span> 2019</div>
                        <div><span className="font-bold text-foreground">Duration:</span> 3 Seasons</div>
                        <div><span className="font-bold text-foreground">Date Added:</span> 2019</div>
                    </div>
                </div>

                {/* Center Column: Logo */}
                <div className="md:col-span-1 flex justify-center items-center order-first md:order-none">
                    <h1 className="text-5xl font-black text-[#E50914] tracking-widest">NETFLIX</h1>
                </div>

                {/* Right Column: Description */}
                <div className="md:col-span-1">
                    <Card className="bg-transparent border-none shadow-none">
                        <CardContent className="p-0">
                            <h3 className="font-bold text-foreground">Genre</h3>
                            <p className="text-sm text-muted-foreground">Crime TV Shows, TV Dramas, TV Mysteries</p>
                            <h3 className="font-bold mt-2 text-foreground">Description</h3>
                            <p className="text-sm text-muted-foreground">After a teenage girl's perplexing suicide, a classmate receives a series of tapes that unravel the mystery of her tragic choice.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

                <Card className="lg:col-span-3 p-4 rounded-lg">
                    <CardTitle className="mb-4">Total movies & TV Shows by country</CardTitle>
                    <CardContent className="p-0">
                        <Image src="https://placehold.co/800x400.png" width={800} height={400} alt="Map of content distribution" className="w-full h-auto rounded-md" data-ai-hint="dark world map data" />
                        <p className="text-xs text-muted-foreground mt-1">© 2025 Mapbox © OpenStreetMap</p>
                    </CardContent>
                </Card>
                
                <Card className="lg:col-span-2 p-4 rounded-lg">
                    <CardTitle className="mb-4">Ratings</CardTitle>
                    <ChartContainer config={chartConfig} className="w-full h-[300px]">
                        <BarChart data={ratingsData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <XAxis dataKey="name" tickLine={false} axisLine={false}/>
                            <YAxis tickLine={false} axisLine={false}/>
                            <Tooltip content={<ChartTooltipContent />} cursor={{ fill: 'hsl(var(--muted))' }} />
                            <Bar dataKey="value" name="Count" fill="#E50914" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ChartContainer>
                </Card>

                <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="lg:col-span-2 p-4 rounded-lg">
                        <CardTitle className="mb-4">Top 10 genre</CardTitle>
                        <ChartContainer config={chartConfig} className="w-full h-[350px]">
                            <BarChart data={topGenresData} layout="vertical" margin={{ top: 0, right: 30, left: 120, bottom: 0 }}>
                                <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                                <XAxis type="number" tickLine={false} axisLine={true} />
                                <YAxis dataKey="name" type="category" width={120} tickLine={false} axisLine={false} />
                                <Tooltip content={<ChartTooltipContent />} cursor={{ fill: 'hsl(var(--muted))' }} />
                                <Bar dataKey="value" name="Count" fill="#E50914" radius={[0, 4, 4, 0]} barSize={20} />
                            </BarChart>
                        </ChartContainer>
                    </Card>

                    <div className="lg:col-span-1 flex flex-col gap-4">
                         <Card className="p-4 rounded-lg">
                            <CardTitle className="mb-2 text-center">Movies & TV Shows Distribution</CardTitle>
                            <ChartContainer config={chartConfig} className="w-full h-[150px]">
                                <PieChart>
                                    <Tooltip content={<ChartTooltipContent />} />
                                    <Pie data={distributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={30} outerRadius={50}>
                                        <Cell key="cell-0" fill="#60A5FA" />
                                        <Cell key="cell-1" fill="#E50914" />
                                    </Pie>
                                </PieChart>
                            </ChartContainer>
                        </Card>
                         <Card className="p-4 rounded-lg">
                            <CardTitle className="mb-2">Total movies & TV Shows by Years</CardTitle>
                             <ChartContainer config={chartConfig} className="w-full h-[150px]">
                                <AreaChart data={yearlyData} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="year" tickLine={false} axisLine={false} />
                                    <YAxis tickLine={false} axisLine={false}/>
                                    <Tooltip content={<ChartTooltipContent />} />
                                    <Area type="monotone" dataKey="movie" stackId="1" stroke="#60A5FA" fill="#60A5FA" fillOpacity={0.6}/>
                                    <Area type="monotone" dataKey="tv-show" stackId="1" stroke="#E50914" fill="#E50914" fillOpacity={0.8}/>
                                </AreaChart>
                            </ChartContainer>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetflixDashboard;
