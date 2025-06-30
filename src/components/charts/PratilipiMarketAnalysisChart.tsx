
'use client';

import { useState, useMemo } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, ComposedChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from '@/components/ui/chart';


// Data based on the provided image
const revenueBySourceData = [
  { source: 'Subscriptions & In-App', FY22: 580, FY24: 0 },
  { source: 'Advertising', FY22: 450, FY24: 0 },
  { source: 'Content & Premium Subs', FY22: 0, FY24: 620 },
  { source: 'Brand Advertising', FY22: 0, FY24: 100 },
  { source: 'Sale of Books', FY22: 0, FY24: 150 },
];

const revenuePieData = [
    { name: 'Subscriptions & In-App', value: 30, fill: 'hsl(var(--chart-1))' },
    { name: 'Advertising', value: 22, fill: 'hsl(var(--chart-2))' },
    { name: 'Content & Premium Subs', value: 31, fill: 'hsl(var(--chart-3))' },
    { name: 'Brand Advertising', value: 7, fill: 'hsl(var(--chart-4))' },
    { name: 'Sale of Books', value: 10, fill: 'hsl(var(--chart-5))' },
];

const allFinancialData = [
  { fiscalYear: 'FY21', revenue: 50, netLoss: 10, yoyGrowth: 0, lossReduction: 0 },
  { fiscalYear: 'FY22', revenue: 2000, netLoss: 1900, yoyGrowth: 39, lossReduction: 0 },
  { fiscalYear: 'FY23', revenue: 300, netLoss: 1500, yoyGrowth: -85, lossReduction: 21 },
  { fiscalYear: 'FY24', revenue: 550, netLoss: 500, yoyGrowth: 83, lossReduction: 67 },
  { fiscalYear: 'FY25', revenue: 900, netLoss: 300, yoyGrowth: 64, lossReduction: 40 },
];

const allFundingData = [
  { year: 2015, amountRaised: -100, cumulativeCapital: 0, returnMultiple: 0, round: 'Angel' },
  { year: 2017, amountRaised: 200, cumulativeCapital: 200, returnMultiple: 0, round: 'Seed' },
  { year: 2018, amountRaised: 500, cumulativeCapital: 700, returnMultiple: 1.0, round: 'Series A' },
  { year: 2020, amountRaised: 800, cumulativeCapital: 2300, returnMultiple: 6.0, round: 'Series B' },
  { year: 2022, amountRaised: 500, cumulativeCapital: 2500, returnMultiple: 4.0, round: 'Series C' },
  { year: 2023, amountRaised: 300, cumulativeCapital: 2800, returnMultiple: 21.0, round: 'Series D' },
];

const chartConfig: ChartConfig = {
    FY22: { label: 'FY22', color: 'hsl(var(--chart-1))' },
    FY24: { label: 'FY24', color: 'hsl(var(--chart-2))' },
    revenue: { label: 'Revenue (M)', color: 'hsl(var(--chart-1))' },
    netLoss: { label: 'Net Loss (M)', color: 'hsl(var(--chart-3))' },
    yoyGrowth: { label: 'YoY Growth (%)', color: 'hsl(var(--chart-2))' },
    amountRaised: { label: 'Amount Raised (M)', color: 'hsl(var(--chart-1))' },
    cumulativeCapital: { label: 'Cumulative Capital (M)', color: 'hsl(var(--chart-2))' },
    returnMultiple: { label: 'Return Multiple', color: 'hsl(var(--chart-4))' },
    'Subscriptions & In-App': { label: 'Subscriptions & In-App' },
    'Advertising': { label: 'Advertising' },
    'Content & Premium Subs': { label: 'Content & Premium Subs' },
    'Brand Advertising': { label: 'Brand Advertising' },
    'Sale of Books': { label: 'Sale of Books' },
};

export default function PratilipiMarketAnalysisChart() {
    const fiscalYears = ['FY21', 'FY22', 'FY23', 'FY24', 'FY25'];
    const fundingRounds = ['Angel', 'Seed', 'Series A', 'Series B', 'Series C', 'Series D'];

    const [selectedYears, setSelectedYears] = useState<string[]>(fiscalYears);
    const [selectedRounds, setSelectedRounds] = useState<string[]>(fundingRounds);

    const handleYearChange = (year: string) => {
        setSelectedYears(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]);
    };
    const handleRoundChange = (round: string) => {
        setSelectedRounds(prev => prev.includes(round) ? prev.filter(r => r !== round) : [...prev, round]);
    };

    const filteredFinancialData = useMemo(() => {
        return allFinancialData.filter(d => selectedYears.includes(d.fiscalYear));
    }, [selectedYears]);

    const filteredFundingData = useMemo(() => {
        return allFundingData.filter(d => selectedRounds.includes(d.round));
    }, [selectedRounds]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Revenue by Source (FY22 & FY24)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="w-full h-[300px]">
                            <BarChart data={revenueBySourceData} layout="vertical" margin={{ left: 100 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" unit="M" />
                                <YAxis type="category" dataKey="source" width={100} tick={{ fontSize: 12 }} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend />
                                <Bar dataKey="FY22" fill="var(--color-FY22)" stackId="a" />
                                <Bar dataKey="FY24" fill="var(--color-FY24)" stackId="a" />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Revenue Breakdown (FY24)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="w-full h-[300px]">
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                                <Pie data={revenuePieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                                    {revenuePieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                                </Pie>
                                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Financial Performance</CardTitle>
                        <CardDescription>{selectedYears.join(', ')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="w-full h-[350px]">
                            <ComposedChart data={filteredFinancialData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="fiscalYear" />
                                <YAxis yAxisId="left" unit="M" />
                                <YAxis yAxisId="right" orientation="right" unit="%" />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend />
                                <Bar yAxisId="left" dataKey="revenue" barSize={20} fill="var(--color-revenue)" />
                                <Bar yAxisId="left" dataKey="netLoss" barSize={20} fill="var(--color-netLoss)" />
                                <Line yAxisId="right" type="monotone" dataKey="yoyGrowth" stroke="var(--color-yoyGrowth)" />
                            </ComposedChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Funding Trends</CardTitle>
                        <CardDescription>Selected Rounds: {selectedRounds.length > 3 ? `${selectedRounds.slice(0,3).join(', ')}...` : selectedRounds.join(', ')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="w-full h-[350px]">
                            <ComposedChart data={filteredFundingData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis yAxisId="left" unit="M" />
                                <YAxis yAxisId="right" orientation="right" />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend />
                                <Bar yAxisId="left" dataKey="amountRaised" barSize={20} fill="var(--color-amountRaised)" name="Amount Raised (M)" />
                                <Line yAxisId="left" type="monotone" dataKey="cumulativeCapital" stroke="var(--color-cumulativeCapital)" name="Cumulative Capital (M)" />
                                <Line yAxisId="right" type="monotone" dataKey="returnMultiple" stroke="var(--color-returnMultiple)" name="Return Multiple" />
                            </ComposedChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Filters</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        <div>
                            <h4 className="font-semibold mb-3">Fiscal Year</h4>
                            <div className="space-y-2">
                                {fiscalYears.map(year => (
                                    <div key={year} className="flex items-center space-x-2">
                                        <Checkbox id={`year-${year}`} checked={selectedYears.includes(year)} onCheckedChange={() => handleYearChange(year)} />
                                        <Label htmlFor={`year-${year}`}>{year}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3">Funding Round</h4>
                             <div className="space-y-2">
                                {fundingRounds.map(round => (
                                    <div key={round} className="flex items-center space-x-2">
                                        <Checkbox id={`round-${round}`} checked={selectedRounds.includes(round)} onCheckedChange={() => handleRoundChange(round)} />
                                        <Label htmlFor={`round-${round}`}>{round}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
