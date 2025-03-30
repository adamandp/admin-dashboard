// import { Dot } from "@/components/dot";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/shadcn/table";
// import { SkeletonProps } from "@/lib/interfaces";
// import clsx from "clsx";

// export const StatusBadgeSkeleton = () => {
//   return (
//     <div
//       className={`rounded-c-0.5 shimmerItem w-[clamp(19.6px,19.6/1440*100vw,19.6px)]`}
//     />
//   );
// };

// const CardSkeleton = ({
//   size = "sm",
//   Icon,
//   title,
//   value,
//   children,
//   statusBadge,
//   legend,
//   dot,
//   className,
// }: SkeletonProps) => {
//   return (
//     <div
//       className={clsx(
//         `rounded-c-2 w-full shimmerBackground p-c-5 flex flex-col ${className}`,
//         size === "sm" &&
//           "p-c-5 h-[clamp(calc(101.95px*0.6),calc(101.95/1440*100vw),101.95px))]",
//         size === "md" && "p-c-5 lg:p-c-6.5 gap-c-5",
//         size === "lg" && "p-c-5 lg:p-c-10.5 gap-c-7"
//       )}
//     >
//       <header
//         className={clsx(
//           "flex justify-between",
//           // date && "grid gap-c-4 lg:flex lg:justify-between",
//           legend && "items-center"
//         )}
//       >
//         <section className="flex justify-between items-center">
//           <div
//             className={clsx(
//               `grid`,
//               size === "sm" && "gap-c-4",
//               size === "md" && "gap-c-1.5",
//               size === "lg" && "gap-c-2.5"
//             )}
//           >
//             {(Icon || title) && (
//               <div className="flex items-center gap-c-1">
//                 {Icon && (
//                   <div className="size-c-3.5 rounded-full shimmerItem" />
//                 )}
//                 {title && <div className="h-c-3.5 w-c-16 shimmerItem" />}
//               </div>
//             )}
//             <div className="flex items-center gap-c-1.5">
//               {value && (
//                 <div className="h-[clamp(calc(31.91px*0.6),calc(31.91/1440*100vw),31.91px)] w-c-16 shimmerItem" />
//               )}
//               {statusBadge && <StatusBadgeSkeleton />}
//             </div>
//           </div>
//         </section>
//         {dot && (
//           <div className="flex gap-1 shimmerItem">
//             {Array.from({ length: 3 }).map((_, index) => (
//               <Dot key={index} size={size} />
//             ))}
//           </div>
//         )}
//         {legend && (
//           <div className="flex gap-c-5">
//             {Array.from({ length: legend }).map((_, index) => (
//               <div key={index} className="shimmerBackground">
//                 <div className="py-3.5 w-c-16 shimmerItem"></div>
//               </div>
//             ))}
//           </div>
//         )}
//       </header>
//       {children}
//     </div>
//   );
// };

// export const TotalRevenueSkeleton = ({ className }: { className: string }) => {
//   return (
//     <CardSkeleton
//       title={true}
//       value={true}
//       size="lg"
//       statusBadge={true}
//       legend={2}
//       className={className}
//     >
//       <main className="h-full grid place-items-center shimmerItem">
//         <div className="aspect-video shimmerItem" />
//       </main>
//     </CardSkeleton>
//   );
// };

// export const MediumSkeleton = ({ className }: { className?: string }) => {
//   return (
//     <CardSkeleton size="md" title value statusBadge className={className}>
//       <div className="aspect-video shimmerItem" />
//     </CardSkeleton>
//   );
// };

// export const DashboardStatSkeleton = () => {
//   return (
//     <main className="mt-c-8 grid grid-cols-2 lg:grid-cols-4 gap-c-4">
//       {Array.from({ length: 4 }).map((_, index) => (
//         <CardSkeleton key={index} />
//       ))}
//     </main>
//   );
// };

// export const ClearCardSkeleton = () => {
//   return (
//     <CardSkeleton size="md">
//       <div className="aspect-video shimmerItem" />
//     </CardSkeleton>
//   );
// };

// export const TableSkeleton = () => {
//   return (
//     <CardSkeleton size="md">
//       <main className="grid gap-c-7">
//         <div className="shimmerItem h-c-9" />
//         <Table className="shimmerItem">
//           <TableHeader>
//             <TableRow>
//               <TableHead className="!shimmerItem h-c-10" />
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {Array.from({ length: 5 }).map((_, index) => (
//               <TableRow
//                 key={index}
//                 className="h-[clamp(calc(36.8px*0.6),calc(36.8/1440*100vw),36.8px)] shimmerItem"
//               >
//                 {Array.from({ length: 4 }).map((_, index) => (
//                   <TableCell key={index}></TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <div className="shimmerItem h-c-9" />
//       </main>
//     </CardSkeleton>
//   );
// };

// export const UsersByCountrySkeleton = () => {
//   return (
//     <CardSkeleton size="md">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-c-4">
//         <div className="flex flex-col gap-c-2.5">
//           <p className="shimmerItem w-c-28 h-[clamp(calc(18.08px*0.6),calc(18.08/1440*100vw),18.08px)]" />
//           <div className="flex items-center gap-c-1.5">
//             <div className="h-[clamp(calc(31.91px*0.6),calc(31.91/1440*100vw),31.91px)] w-c-16 shimmerItem" />
//           </div>
//           <div className="mt-c-1 aspect-video shimmerItem"></div>
//         </div>
//         <div className="h-c-80 lg:h-full lg:col-span-2 shimmerItem rounded-c-5" />
//       </div>
//     </CardSkeleton>
//   );
// };
