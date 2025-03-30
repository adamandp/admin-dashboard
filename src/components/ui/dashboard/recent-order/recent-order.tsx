// "use client";

// import {
//   ColumnFiltersState,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import { Card } from "@/components/card";
// import { fetchRecentOrder } from "@/lib/data";
// import { useSuspenseQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
// import { RecentOrderPagination } from "./recent-order-pagination";
// import { RecentOrderDate } from "./recent-order-date";
// import { RecentOrderTable } from "./recent-order-table";
// import { RecentOrderColumn } from "./recent-order-column";

// export const RecentOrder = ({ className }: { className?: string }) => {
//   const { data } = useSuspenseQuery({
//     queryKey: ["recent-order"],
//     queryFn: fetchRecentOrder,
//   });
//   const [date, setDate] = useState<Date | undefined>();
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: 5,
//   });

//   useEffect(() => {
//     setColumnFilters([{ id: "date", value: date }]);
//   }, [date]);

//   const table = useReactTable({
//     data: data ?? [],
//     columns: RecentOrderColumn,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     onColumnFiltersChange: setColumnFilters,
//     onPaginationChange: setPagination,
//     state: {
//       columnFilters,
//       pagination,
//     },
//   });

//   return (
//     <Card size="md" className={`${className}`}>
//       <main className="grid gap-c-7">
//         <div className="flex justify-between items-center">
//           <p className="Text-Single300Medium text-white">Recent Order</p>
//           <RecentOrderDate date={date} setDate={setDate} />
//         </div>
//         <RecentOrderTable table={table} />
//         <RecentOrderPagination table={table} />
//       </main>
//     </Card>
//   );
// };
