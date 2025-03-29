// "use client";

// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartLegend,
//   ChartLegendContent,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/shadcn/chart";
// import { Card } from "@/components/card";
// import { useSuspenseQuery } from "@tanstack/react-query";
// import { fetchRevenueByCustomer } from "@/lib/data";

// const chartConfig = {
//   currentClients: {
//     label: "Current Clients",
//     color: "var(--chart-1)",
//   },
//   subscribers: {
//     label: "Subscribers",
//     color: "var(--chart-2)",
//   },
//   newCustomers: {
//     label: "New Customers",
//     color: "var(--chart-3)",
//   },
// } satisfies ChartConfig;

// export function RevenueByCustomer({ className }: { className?: string }) {
//   const { data: revenueByCustomerData } = useSuspenseQuery({
//     queryKey: ["revenue-by-customer"],
//     queryFn: fetchRevenueByCustomer,
//   });

//   const { category, data, growthPercentage, totalRevenue } =
//     revenueByCustomerData;

//   return (
//     <Card
//       size="md"
//       title={category}
//       statusBadge={{ percentage: growthPercentage }}
//       value={totalRevenue}
//       className={className}
//     >
//       <ChartContainer config={chartConfig} className="aspect-video">
//         <BarChart accessibilityLayer data={data}>
//           <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             tickMargin={10}
//             axisLine={false}
//             tickFormatter={(value) => value.slice(0, 3)}
//           />
//           <ChartTooltip content={<ChartTooltipContent hideLabel />} />
//           <ChartLegend content={<ChartLegendContent />} />
//           <Bar
//             dataKey="currentClients"
//             stackId="a"
//             fill="var(--color-currentClients)"
//             radius={[0, 0, 4, 4]}
//             barSize={7.26}
//           />
//           <Bar
//             dataKey="subscribers"
//             stackId="a"
//             fill="var(--color-subscribers)"
//             barSize={7.26}
//           />
//           <Bar
//             dataKey="newCustomers"
//             stackId="a"
//             fill="var(--color-newCustomers)"
//             barSize={7.26}
//             radius={[4, 4, 0, 0]}
//           />
//         </BarChart>
//       </ChartContainer>
//     </Card>
//   );
// }
