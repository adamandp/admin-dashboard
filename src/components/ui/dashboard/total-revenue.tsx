// "use client";

// import { Card } from "@/components/card";
// import { fetchTotalRevenue } from "@/lib/data";
// import { useSuspenseQuery } from "@tanstack/react-query";
// import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/shadcn/chart";

// export const TotalRevenue = ({ className }: { className?: string }) => {
//   const { data: TotalRevenueData } = useSuspenseQuery({
//     queryKey: ["total-revenue"],
//     queryFn: fetchTotalRevenue,
//   });

//   const { label, data, growthPercentage, revenue } = TotalRevenueData;

//   const chartConfig = {
//     revenue: {
//       label: "Revenue",
//       color: "var(--chart-1)",
//     },
//     expenses: {
//       label: "Expenses",
//       color: "var(--chart-2)",
//     },
//   } satisfies ChartConfig;

//   return (
//     <Card
//       title={label}
//       value={revenue}
//       statusBadge={{
//         percentage: growthPercentage,
//       }}
//       legend={["Revenue", "Expenses"]}
//       size="lg"
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
//               <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
//                 <stop
//                   offset="5%"
//                   stopColor="var(--color-expenses)"
//                   stopOpacity={0.8}
//                 />
//                 <stop
//                   offset="95%"
//                   stopColor="var(--color-expenses)"
//                   stopOpacity={0.1}
//                 />
//               </linearGradient>
//             </defs>
//             <Area
//               dataKey="revenue"
//               type="natural"
//               fill="url(#fillRevenue)"
//               fillOpacity={0.6}
//               stroke="var(--color-revenue)"
//               stackId="a"
//             />
//             <Area
//               dataKey="expenses"
//               type="natural"
//               fill="url(#fillExpenses)"
//               fillOpacity={0.6}
//               stroke="var(--color-expenses)"
//               stackId="a"
//             />
//           </AreaChart>
//         </ChartContainer>
//       </main>
//     </Card>
//   );
// };
