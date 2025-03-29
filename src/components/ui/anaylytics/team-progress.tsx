// "use client";

// import { Card } from "@/components/card";
// import { ScrollArea } from "@/components/ui/shadcn/scroll-area";
// import { fetchTeamProgress } from "@/lib/data";
// import { useSuspenseQuery } from "@tanstack/react-query";

// export function TeamProgress() {
//   const { data } = useSuspenseQuery({
//     queryKey: ["team-progress"],
//     queryFn: fetchTeamProgress,
//   });
//   return (
//     <Card>
//       <p className="font-worksans font-medium text-[clamp(calc(16px*0.6),calc(16/1440*100vw),16px)]">
//         Team Progress
//       </p>
//       <ScrollArea className="mt-c-7.5 pr-c-4 max-h-c-80">
//         {data.data.map(({ name, email, progress }) => (
//           <div
//             key={name}
//             className="flex justify-between items-center mb-c-2.5 bg-blue-950 p-c-2 rounded-c-2"
//           >
//             <div className="grid gap-0.5">
//               <p className="font-worksans font-medium text-[clamp(calc(14px*0.6),calc(14/1440*100vw),14px)]">
//                 {name}
//               </p>
//               <p className="ParagraphDefault text-neutral-colors-400">
//                 {email}
//               </p>
//             </div>
//             <p className="Text-Single100Medium">{progress}%</p>
//           </div>
//         ))}
//       </ScrollArea>
//     </Card>
//   );
// }
