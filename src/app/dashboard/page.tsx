import { Suspense } from "react";
import { DashboardStat } from "@/app/ui/dashboard/dashboard-stat";
import {
  ClearCardSkeleton,
  DashboardStatSkeleton,
  MediumSkeleton,
  TableSkeleton,
  TotalRevenueSkeleton,
} from "../ui/dashboard/dashboard-skeleton";
import { TotalRevenue } from "../ui/dashboard/total-revenue";
import { TotalProfit } from "../ui/dashboard/total-profit";
import { TotalSessions } from "../ui/dashboard/total-sessions";
import { UsersByDevice } from "../ui/dashboard/users-by-device";
import { RecentOrder } from "@/app/ui/dashboard/recent-order/recent-order";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { UsersByCountry } from "../ui/dashboard/users-by-country/users-by-country";

const properties = {
  name: "John Doe",
  users: 2400,
  percentage: 10,
};

export default function Page() {
  return (
    <main className="grid gap-c-6">
      <div className="flex justify-between">
        <div>
          <h1 className="Special-HeadingsDisplay-4 text-white">
            Welcome back, John
          </h1>
          <h2 className="text-neutral-colors-400 Text-Single100Regular">
            Measuring your advertising ROI and report website traffic
          </h2>
        </div>
        <div className="grid justify-end gap-c-3 md:flex">
          <Button
            size={"custom"}
            variant={"costum"}
            className="bg-neutral-colors-700"
          >
            Export data
            <ArrowDown className="size-c-2.5" />
          </Button>
          <Button
            size={"custom"}
            variant={"costum"}
            className="bg-primarys-colors-color-1"
          >
            Create Report
          </Button>
        </div>
      </div>
      <Suspense fallback={<DashboardStatSkeleton />}>
        <DashboardStat />
      </Suspense>
      <Suspense fallback={<div>Loading..</div>}>
        <UsersByCountry />
      </Suspense>
      <section className="grid gap-c-4 grid-cols-1 lg:grid-cols-6">
        <Suspense fallback={<TotalRevenueSkeleton className="lg:col-span-4" />}>
          <TotalRevenue className="lg:col-span-4" />
        </Suspense>
        <div className="lg:col-span-2 grid grid-cols-2 gap-c-4 lg:grid-cols-1">
          <Suspense fallback={<MediumSkeleton />}>
            <TotalProfit />
          </Suspense>
          <Suspense fallback={<MediumSkeleton />}>
            <TotalSessions />
          </Suspense>
        </div>
      </section>
      <div className="flex justify-between mt-c-10">
        <div>
          <h1 className="Special-HeadingsDisplay-4 text-white">
            Reports overview
          </h1>
        </div>
        <div className="grid justify-end gap-c-3 md:flex">
          <Button
            size={"custom"}
            variant={"costum"}
            className="bg-neutral-colors-700"
          >
            Export data
            <ArrowDown className="size-c-2.5" />
          </Button>
          <Button
            size={"custom"}
            variant={"costum"}
            className="bg-primarys-colors-color-1"
          >
            Create Report
          </Button>
        </div>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-c-4">
        <Suspense fallback={<ClearCardSkeleton />}>
          <UsersByDevice />
        </Suspense>
        <Suspense fallback={<TableSkeleton />}>
          <RecentOrder />
        </Suspense>
      </section>
    </main>
  );
}
