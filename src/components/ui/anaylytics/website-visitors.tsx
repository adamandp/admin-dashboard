"use client";

import { RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/shadcn/chart";
import { fetchWebsiteVisitors } from "@/lib/data";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Card } from "@/components/card";
import { Dot } from "@/components/dot";

export default function WebsiteVisitors({ className }: { className?: string }) {
  const { data: websiteVisitorsData } = useSuspenseQuery({
    queryKey: ["website-visitors"],
    queryFn: fetchWebsiteVisitors,
  });
  const { data, label, totalVisitors } = websiteVisitorsData;

  const chartData = data.map((item) => ({
    label: item.label,
    visitors: item.visitors,
    fill: `var(--chart-${item.id})`,
  }));

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    organic: {
      label: "Organic",
      color: "var(--chart-1)",
    },
    social: {
      label: "Social",
      color: "var(--chart-2)",
    },
    direct: {
      label: "Direct",
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig;
  return (
    <Card className={className} size="md" header={false}>
      <p className="font-worksans font-medium text-[clamp(calc(16px*0.6),calc(16/1440*100vw),16px)]/[1.25]">
        {label}
      </p>
      <ChartContainer
        config={chartConfig}
        className="w-full h-full aspect-video"
      >
        <RadialBarChart
          data={chartData}
          innerRadius={75}
          outerRadius={110}
          barSize={10}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel nameKey="label" />}
          />
          <RadialBar dataKey="visitors" background />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-lg font-semibold fill-neutral-colors-200"
          >
            {totalVisitors > 1000 ? `${totalVisitors / 1000}k` : totalVisitors}
          </text>
        </RadialBarChart>
      </ChartContainer>
      <div className="grid gap-c-7 w-full p-c-7">
        {data.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-c-2">
              <Dot size="lg" color={`var(--chart-${item.id})`} />
              <p className="Text-Single200Regular text-neutral-colors-400">
                {item.label}
              </p>
            </div>
            <p className="Text-Single300Medium text-neutral-colors-200">
              {item.visitors}%
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
