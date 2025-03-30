"use client";

import { Card, Title, TrendIndicator, Value } from "@/components/card";
import { fetchUsersByCountry } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";
import { UsersByCountryMap } from "./user-by-country-map";
import { UsersByCountryChart } from "./users-by-country-chart";

export const UsersByCountry = () => {
  const { data: UsersByCountryData } = useQuery({
    queryKey: ["users-by-country"],
    queryFn: fetchUsersByCountry,
  });

  const { data, category, growthPercentage, totalUsers } =
    UsersByCountryData || {};
  return (
    <Card size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-c-10 lg:gap-c-4">
        <section className="flex flex-col gap-c-2.5 lg:col-span-1">
          <Title title={category} size="lg" />
          <div className="flex items-center gap-c-1.5 mb-c-1">
            <Value value={totalUsers || 0} />
            <TrendIndicator precentage={growthPercentage} />
          </div>
          <UsersByCountryChart data={data || []} />
        </section>
        <section className="h-c-80 lg:h-full lg:col-span-2">
          <UsersByCountryMap data={data || []} />
        </section>
      </div>
    </Card>
  );
};
