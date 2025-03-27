import { StatusBadgeProps } from "@/lib/interfaces";
import clsx from "clsx";
import { ArrowUpIcon } from "lucide-react";

export const StatusBadge = ({ percentage, className }: StatusBadgeProps) => {
  return (
    <main
      className={clsx(
        `px-c-1 py-c-0.5 rounded-c-0.5 border-[0.6px] flex items-center gap-c-1 ${className}`,
        percentage > 0
          ? "bg-green-500/20 border-green-500/60 text-green-400"
          : "bg-red-500/20 border-red-500/60 text-red-400"
      )}
    >
      <p className="ParagraphSmall">{percentage}%</p>
      <ArrowUpIcon className="size-c-1.5" />
    </main>
  );
};
