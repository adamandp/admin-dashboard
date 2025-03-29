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
// import { fetchOrderStatus } from "@/lib/data";
// import { useSuspenseQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
// import { OrderStatusColumn } from "./order-status-column";
// import { OrderStatusTable } from "./order-status-table";
// import { OrderStatusPagination } from "./order-status-pagination";
// import { OrderStatusDate } from "./order-status-date";

// export const OrderStatus = ({ className }: { className?: string }) => {
//   const { data } = useSuspenseQuery({
//     queryKey: ["order-status"],
//     queryFn: fetchOrderStatus,
//   });
//     const [date, setDate] = useState<Date | undefined>();
//     const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: 5,
//   });

//     useEffect(() => {
//       setColumnFilters([{ id: "date", value: date }]);
//     }, [date]);

//   const table = useReactTable({
//     data: data.data ?? [],
//     columns: OrderStatusColumn,
//     getCoreRowModel: getCoreRowModel(),
//     // getSortedRowModel: getSortedRowModel(),
//     // getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     // onColumnFiltersChange: setColumnFilters,
//     onPaginationChange: setPagination,
//     state: {
//       columnFilters,
//       pagination,
//     },
//   });

//   return (
//     <Card size="lg" className={`${className}`} header={false}>
//       <main className="grid gap-c-7">
//         <div className="flex justify-between items-center">
//           <p className="Text-Single300Medium text-white">Recent Order</p>
//           <OrderStatusDate date={date} setDate={setDate} />
//         </div>
//         <OrderStatusTable table={table} />
//         <OrderStatusPagination table={table} />
//       </main>
//     </Card>
//   );
// };
