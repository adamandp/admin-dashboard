import { Header } from "@/components/header";
import { DashboardStat } from "@/components/ui/dashboard/dashboard-stat";
import { UsersByCountry } from "@/components/ui/dashboard/users-by-country/users-by-country";

export default function Page() {
  return (
    <main>
      <div className="grid gap-c-8">
        <Header title="Overview" />
        <div className="grid gap-c-4">
          <DashboardStat />
          <UsersByCountry />
        </div>
      </div>
    </main>
  );
}
