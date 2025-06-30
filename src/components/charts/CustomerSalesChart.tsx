
'use client';

import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
  ChartLegend,
} from '@/components/ui/chart';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const quarterlySalesData = [
  { quarter: 'Q1', desktop: 186, mobile: 80 },
  { quarter: 'Q2', desktop: 305, mobile: 200 },
  { quarter: 'Q3', desktop: 237, mobile: 120 },
  { quarter: 'Q4', desktop: 473, mobile: 290 },
];

const categorySalesData = [
    { category: "Electronics", sales: 450 },
    { category: "Apparel", sales: 320 },
    { category: "Home Goods", sales: 280 },
    { category: "Books", sales: 180 },
    { category: "Groceries", sales: 550 },
];

const chartConfigQuarterly: ChartConfig = {
  desktop: { label: 'Desktop', color: 'hsl(var(--primary))' },
  mobile: { label: 'Mobile', color: 'hsl(var(--accent))' },
};
const chartConfigCategory: ChartConfig = {
    sales: { label: 'Sales ($K)', color: 'hsl(var(--primary))' },
};


export default function CustomerSalesChart() {
  const [view, setView] = useState<'quarterly' | 'category'>('quarterly');

  return (
    <Card className="w-full rounded-2xl">
      <CardHeader>
        <CardTitle>Interactive Sales Analysis</CardTitle>
        <CardDescription>
          Sales performance by different metrics. Use the controls to change the view.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/4">
                <RadioGroup value={view} onValueChange={(value) => setView(value as any)} className="grid gap-2">
                    <h3 className="font-semibold mb-2">View By:</h3>
                    <div>
                        <RadioGroupItem value="quarterly" id="quarterly" className="peer sr-only" />
                        <Label htmlFor="quarterly" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                            Quarterly Sales
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem value="category" id="category" className="peer sr-only" />
                        <Label htmlFor="category" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                            Product Category
                        </Label>
                    </div>
                </RadioGroup>
            </div>

            <div className="w-full md:w-3/4">
              {view === 'quarterly' ? (
                <ChartContainer config={chartConfigQuarterly} className="min-h-[300px] w-full">
                  <BarChart data={quarterlySalesData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="quarter"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                     <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                     />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                    <ChartLegend />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}>
                        <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                    </Bar>
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}>
                          <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                    </Bar>
                  </BarChart>
                </ChartContainer>
              ) : (
                <ChartContainer config={chartConfigCategory} className="min-h-[300px] w-full">
                  <BarChart data={categorySalesData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="category"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                     <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                     />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                    <ChartLegend />
                    <Bar dataKey="sales" fill="var(--color-sales)" radius={4}>
                        <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                    </Bar>
                  </BarChart>
                </ChartContainer>
              )}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
