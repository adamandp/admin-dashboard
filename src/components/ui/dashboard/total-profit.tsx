"use client";

import { Card } from "@/components/card";
import { fetchTotalProfit } from "@/lib/data";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/shadcn/chart";

export const TotalProfit = ({ className }: { className?: string }) => {
  const { data: TotalProfitData } = useSuspenseQuery({
    queryKey: ["total-profit"],
    queryFn: fetchTotalProfit,
  });
  const { label, data, growthPercentage, value } = TotalProfitData;

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "var(--chart-1)",
    },
    expenses: {
      label: "Expenses",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  return (
    <Card
      title={label}
      value={value}
      statusBadge={{
        percentage: growthPercentage,
      }}
      size="md"
      className={`${className}`}
    >
      <main className="h-full flex items-center">
        <ChartContainer
          config={chartConfig}
          className="w-full h-full aspect-video"
        >
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
            <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
          </BarChart>
        </ChartContainer>
      </main>
    </Card>
  );
};
