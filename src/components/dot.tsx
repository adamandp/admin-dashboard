import { DotProps } from "@/lib/interfaces";
import clsx from "clsx";

export const Dot = ({ size = "sm", className, color }: DotProps) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={clsx(
        "rounded-full",
        size === "sm" && "size-c-0.5",
        size === "md" && "",
        size === "lg" && "size-c-2",
        className
      )}
    ></div>
  );
};
