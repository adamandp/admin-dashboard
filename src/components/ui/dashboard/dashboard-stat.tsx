"use client";

import { Card } from "@/components/card";
import { StatSkeleton } from "@/components/skeleton";
import { fetchDashboardStat } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";
import { CirclePlusIcon, EyeIcon, StarIcon, UserRoundIcon } from "lucide-react";

export const DashboardStat = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboardStat"],
    queryFn: fetchDashboardStat,
  });
  const icon = [EyeIcon, UserRoundIcon, CirclePlusIcon, StarIcon];

  return isLoading ? (
    <StatSkeleton />
  ) : (
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
