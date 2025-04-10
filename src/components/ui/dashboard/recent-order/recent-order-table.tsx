// "use client";

// import { flexRender, Table as ReactTable } from "@tanstack/react-table";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/shadcn/table";
// import { RecentOrder } from "@/lib/definitions/dashboard";

// export const RecentOrderTable = ({
//   table,
// }: {
//   table: ReactTable<RecentOrder>;
// }) => {
//   return (
//     <Table className="ParagraphSmall text-neutral-colors-400">
//       <TableHeader>
//         {table.getHeaderGroups().map((headerGroup) => (
//           <TableRow key={headerGroup.id}>
//             {headerGroup.headers.map((header) => (
//               <TableHead key={header.id}>
//                 {flexRender(
//                   header.column.columnDef.header,
//                   header.getContext()
//                 )}
//               </TableHead>
//             ))}
//           </TableRow>
//         ))}
//       </TableHeader>
//       <TableBody>
//         {table.getRowModel().rows.map((row) => (
//           <TableRow key={row.id}>
//             {row.getVisibleCells().map((cell) => (
//               <TableCell key={cell.id}>
//                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
//               </TableCell>
//             ))}
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };
