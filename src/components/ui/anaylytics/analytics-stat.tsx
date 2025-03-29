// "use client";

// import { Card } from "@/components/card";
// import { useSuspenseQuery } from "@tanstack/react-query";
// import { BadgeDollarSign, CirclePlusIcon, DollarSign, EyeIcon, Heart, ShoppingBag, StarIcon, UserRoundIcon } from "lucide-react";
// import { fetchAnalyticsStat } from "@/lib/data";

// export const AnalyticsStat = () => {
//   const { data } = useSuspenseQuery({
//     queryKey: ["analytics-stat"],
//     queryFn: fetchAnalyticsStat,
//   });
//   const icon = [Heart, ShoppingBag, BadgeDollarSign, DollarSign];

//   return (
//     <main className="grid grid-cols-2 lg:grid-cols-4 gap-c-4">
//       {data?.data.map((item) => (
//         <Card
//           key={item.id}
//           title={item.label}
//           Icon={icon[item.id - 1]}
//           value={item.value}
//           statusBadge={{
//             percentage: item.change,
//           }}
//           dot={true}
//         />
//       ))}
//     </main>
//   );
// };
