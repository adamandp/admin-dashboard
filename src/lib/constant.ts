import {
  ChartSpline,
  LayoutDashboard,
  PackageSearch,
  Users,
} from "lucide-react";

const sidebarData = {
  documents: [
    {
      name: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Analytics",
      url: "#",
      icon: ChartSpline,
    },
    {
      name: "Products",
      url: "#",
      icon: PackageSearch,
    },
    {
      name: "Users",
      url: "#",
      icon: Users,
    },
  ],
};

export { sidebarData };
