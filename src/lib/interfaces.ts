import { ReactNode } from "react";
import { DateRange } from "react-day-picker";

export interface StatusBadgeProps {
  percentage: number;
  className?: string;
}

export interface DotProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  color?: string;
}

type ChartData<T extends Record<string, number | string>> = {} & T;

export type ChartDataArray<T extends Record<string, number | string>> =
  ChartData<T>[];

export interface DateRangePickerProps {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}

export interface CardProps {
  id?: string;
  dot?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  title?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  value?: number;
  statusBadge?: StatusBadgeProps;
  legend?: string[];
  date?: DateRangePickerProps;
  children?: ReactNode;
  data?: ChartDataArray<Record<string, number | string>> | undefined;
}

export interface SkeletonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  title?: boolean;
  Icon?: boolean;
  value?: boolean;
  statusBadge?: boolean;
  legend?: number;
  date?: boolean;
  children?: ReactNode;
}

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
