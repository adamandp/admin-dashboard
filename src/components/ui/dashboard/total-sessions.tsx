// "use client";

// import { Card } from "@/components/card";
// import { fetchTotalSessions } from "@/lib/data";
// import { useSuspenseQuery } from "@tanstack/react-query";
// import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/shadcn/chart";

// export const TotalSessions = ({ className }: { className?: string }) => {
//   const { data: TotalSessionsData } = useSuspenseQuery({
//     queryKey: ["total-sessions"],
//     queryFn: fetchTotalSessions,
//   });
//   const { label, data, growthPercentage, value } = TotalSessionsData;
//   const chartConfig = {
//     revenue: {
//       label: "Revenue",
//       color: "var(--chart-1)",
//     },
//   } satisfies ChartConfig;

//   return (
//     <Card
//       title={label}
//       value={value}
//       statusBadge={{
//         percentage: growthPercentage,
//       }}
//       size="md"
//       className={`${className}`}
//     >
//       <main className="h-full flex items-center">
//         <ChartContainer
//           config={chartConfig}
//           className="w-full h-full aspect-video"
//         >
//           <AreaChart
//             accessibilityLayer
//             data={data}
//             margin={{
//               left: -20,
//               right: 0,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <YAxis
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickCount={7}
//               tickFormatter={(value) =>
//                 `${value > 1000 ? `${value / 1000}k` : value}`
//               }
//             />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent indicator="dot" />}
//             />
//             <defs>
//               <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
//                 <stop
//                   offset="5%"
//                   stopColor="var(--color-revenue)"
//                   stopOpacity={0.8}
//                 />
//                 <stop
//                   offset="95%"
//                   stopColor="var(--color-revenue)"
//                   stopOpacity={0.1}
//                 />
//               </linearGradient>
//             </defs>
//             <Area
//               dataKey="revenue"
//               type="linear"
//               fill="url(#fillRevenue)"
//               fillOpacity={0.6}
//               stroke="var(--color-revenue)"
//               stackId="a"
//             />
//           </AreaChart>
//         </ChartContainer>
//       </main>
//     </Card>
//   );
// };
