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
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/shadcn/chart";
import { CountryData } from "@/lib/definitions/dashboard";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";

export function UsersByCountryChart({ data }: { data: CountryData[] }) {
  const chartData = data.map((item) => ({
    label: item.name,
    users: item.users,
    fill: `var(--chart-${item.id})`,
  }));

  return (
    <ScrollArea className="max-h-c-96">
      <div className="aspect-[4.5/12] lg:aspect-[4.5/9] pr-2">
        <ChartContainer config={{}} className="size-full">
          <BarChart data={chartData} layout="vertical" height={20}>
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="users"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              orientation="right"
              tickFormatter={(value) =>
                value > 1000 ? `${(value / 1000).toFixed(1)}k` : value
              }
            />
            <XAxis dataKey="users" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="users" layout="vertical" radius={4} barSize={10}>
              <LabelList
                dataKey="label"
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
      </div>
    </ScrollArea>
  );
}
