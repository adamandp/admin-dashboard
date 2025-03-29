import { Button } from "@/components/ui/shadcn/button";
import { AnalyticsStat } from "@/components/ui/anaylytics/analytics-stat";
import WebsiteVisitors from "@/components/ui/anaylytics/website-visitors";
import { ArrowDownIcon } from "lucide-react";
import { Suspense } from "react";
import { RevenueByCustomer } from "@/components/ui/anaylytics/revenue-by-customer";
import { TeamProgress } from "@/components/ui/anaylytics/team-progress";
import { SalesTrend } from "@/components/ui/anaylytics/sales-trend";
import { OrderStatus } from "@/components/ui/anaylytics/order-status/order-status";

const Header = ({ title }: { title: string }) => (
  <main className="flex justify-between items-center">
    <p className="Special-HeadingsDisplay-4">{title}</p>
    <div className="flex items-center gap-c-3">
      <Button size={"custom"} variant={"default"}>
        Export Data
        <ArrowDownIcon className="size-c-3" />
      </Button>
      <Button size={"custom"} variant={"secondary"}>
        Create report
      </Button>
    </div>
  </main>
);

export default function Page() {
  return (
    <main>
      <div className="grid gap-c-7">
        <Header title="Analytics" />
        <div className="grid gap-c-4">
          <Suspense fallback={<div>Loading...</div>}>
            <AnalyticsStat />
          </Suspense>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-c-4">
            <Suspense fallback={<div>Loading...</div>}>
              <WebsiteVisitors className="" />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <RevenueByCustomer className="col-span-2" />
            </Suspense>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-c-4">
            <Suspense fallback={<div>Loading...</div>}>
              <TeamProgress />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <SalesTrend />
            </Suspense>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <OrderStatus />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
