"use client";

import { Card } from "@/components/card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CirclePlusIcon, EyeIcon, StarIcon, UserRoundIcon } from "lucide-react";
import { fetchDashboardStat } from "@/lib/data";

export const DashboardStat = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["dashboardStat"],
    queryFn: fetchDashboardStat,
  });
  const icon = [EyeIcon, UserRoundIcon, CirclePlusIcon, StarIcon];

  return (
    <main className="grid grid-cols-2 lg:grid-cols-4 gap-c-4">
      {data?.data.map((item) => (
        <Card
          key={item.id}
          title={item.label}
          Icon={icon[item.id - 1]}
          value={item.value}
          precentage={item.change}
          dot={true}
        />
      ))}
    </main>
  );
};
