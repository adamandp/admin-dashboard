"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/shadcn/chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function UsersByCountryChart() {
  return (
    <ChartContainer config={chartConfig} className="aspect-video">
      <BarChart accessibilityLayer data={chartData} layout="vertical">
        <CartesianGrid horizontal={false} />
        <YAxis
          dataKey="visitors"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          orientation="right"
        />
        <XAxis dataKey="visitors" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar dataKey="visitors" layout="vertical" radius={4} barSize={7}>
          <LabelList
            dataKey="browser"
            content={(props) => {
              const { x, y, value } = props;
              return (
                <text
                  x={x}
                  y={typeof y === "number" ? y - 10 : 0}
                  fill="#aeb9e1"
                  fontSize={14}
                  fontFamily="var(--font-monasans)"
                  textAnchor="start"
                >
                  {String(value).charAt(0).toUpperCase() +
                    String(value).slice(1)}
                </text>
              );
            }}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
