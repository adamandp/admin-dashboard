import { OrderStatus } from "@/lib/definitions/analytics";
import { createColumnHelper } from "@tanstack/react-table";

const OSColumnHelper = createColumnHelper<OrderStatus>();
export const OrderStatusColumn = [
  OSColumnHelper.accessor("client.name", {
    header: "Name",
    cell: ({ row }) => row.original.client.name,
  }),
  OSColumnHelper.accessor("client.email", {
    header: () => <div>Email</div>,
    cell: ({ row }) => row.original.client.email,
  }),
  OSColumnHelper.accessor("date", {
    header: "Date",
    cell: ({ row }) => row.getValue("date"),
  }),
  OSColumnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => row.getValue("status"),
  }),
  OSColumnHelper.accessor("city", {
    header: "City",
    cell: ({ row }) => row.getValue("city"),
  }),
  OSColumnHelper.accessor("total", {
    header: () => <div className="text-end">Total</div>,
    cell: ({ row }) => {
      const rawTotal = row.getValue("total") as number;
      const formattedTotal =
        rawTotal >= 1000
          ? `${(rawTotal / 1000).toFixed(1)}K`
          : rawTotal.toLocaleString();
      return <div className="text-end">{formattedTotal}</div>;
    },
  }),
];
