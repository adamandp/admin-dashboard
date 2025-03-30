// import { RecentOrder as RecentOrderType } from "@/lib/definitions/dashboard";
// import { createColumnHelper } from "@tanstack/react-table";
// import { format } from "date-fns";

// const ROColumnHelper = createColumnHelper<RecentOrderType>();

// export const RecentOrderColumn = [
//   ROColumnHelper.accessor("customer", {
//     header: "Customer",
//   }),
//   ROColumnHelper.accessor("date", {
//     header: ({ column }) => (
//       <div
//         className="text-center cursor-pointer select-none"
//         onClick={column.getToggleSortingHandler()}
//       >
//         Date {"   "}
//         {column.getIsSorted() === "asc"
//           ? " ▲"
//           : column.getIsSorted() === "desc"
//           ? " ▼"
//           : " ⇅"}
//       </div>
//     ),
//     cell: ({ row }) => {
//       return (
//         <div className="text-center">
//           {format(row.getValue("date") as string, "PPP")}
//         </div>
//       );
//     },
//     sortingFn: (rowA, rowB, columnId) => {
//       const dateA = new Date(rowA.getValue(columnId) as string).getTime();
//       const dateB = new Date(rowB.getValue(columnId) as string).getTime();
//       return dateA - dateB;
//     },
//     filterFn: (row, id, value) => {
//       if (!value) return true;
//       const rowDate = new Date(row.getValue(id) as string);
//       return (
//         rowDate.getFullYear() === value.getFullYear() &&
//         rowDate.getMonth() === value.getMonth() &&
//         rowDate.getDate() === value.getDate()
//       );
//     },
//     enableColumnFilter: true,
//     enableSorting: true,
//   }),
//   ROColumnHelper.accessor("status", {
//     header: () => <div className="text-center">Status</div>,
//     cell: ({ row }) => (
//       <div className="text-center">{row.getValue("status")}</div>
//     ),
//   }),
//   ROColumnHelper.accessor("total", {
//     header: () => <div className="text-end">Total</div>,
//     cell: ({ row }) => {
//       const rawTotal = row.getValue("total") as number;
//       const formattedTotal = rawTotal > 1000 ? `${rawTotal / 1000}K` : rawTotal;
//       return <div className="text-end">{formattedTotal}</div>;
//     },
//   }),
// ];
