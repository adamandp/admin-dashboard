import { Header } from "@/components/header";
import { StatSkeleton } from "@/components/skeleton";
import { DashboardStat } from "@/components/ui/dashboard/dashboard-stat";
import { UsersByCountry } from "@/components/ui/dashboard/users-by-country/users-by-country";
import { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <div className="grid gap-c-8">
        <Header title="Overview" />
        <div className="grid gap-c-4">
          <Suspense fallback={<StatSkeleton />}>
            <DashboardStat />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <UsersByCountry />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
