"use client";

import { Card } from "@/components/card";
import { fetchUsersByDevice } from "@/lib/data";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/shadcn/chart";
import { Dot } from "@/components/dot";

export const SalesTrend = ({ className }: { className?: string }) => {
  const { data: UsersByDeviceData } = useSuspenseQuery({
    queryKey: ["total-users-by-device"],
    queryFn: fetchUsersByDevice,
  });
  const { data, label, totalUsers } = UsersByDeviceData;
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-1)",
    },
    laptop: {
      label: "Laptop",
      color: "var(--chart-2)",
    },
    phoneApp: {
      label: "Phone App",
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig;

  return (
    <Card size="md" className={`${className} justify-center`}>
      <main className="relative">
        <ChartContainer
          config={chartConfig}
          className="w-full h-full aspect-video"
        >
          <RadialBarChart
            cy={"50%"}
            data={data}
            endAngle={180}
            barSize={20}
            innerRadius="80%"
            outerRadius="100%"
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 30}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalUsers.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 10}
                          className="fill-muted-foreground"
                        >
                          {label}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="laptop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-laptop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="phoneApp"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-phoneApp)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
        <div className="grid gap-c-7 absolute left-1/2 -translate-x-1/2 bottom-0 w-full p-c-7">
          {Object.entries(chartConfig).map(([key, config]) => (
            <div key={key} className="flex justify-between items-center">
              <div className="flex items-center gap-c-2">
                <Dot size="lg" color={config.color} />
                <p className="Text-Single200Regular text-neutral-colors-400">
                  {config.label}
                </p>
              </div>
              <p className="Text-Single300Medium text-neutral-colors-200">
                {data[0][key as keyof (typeof data)[0]].toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </main>
    </Card>
  );
};
