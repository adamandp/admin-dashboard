import { Dispatch, FC, ReactNode, SetStateAction, SVGProps } from "react";
import { DateRange } from "react-day-picker";

export type Size = "sm" | "md" | "lg";

export interface CardSkeletonProps {
  size?: Size;
  className?: string;
  children?: ReactNode;
  title?: boolean;
  secondTitle?: boolean;
  Icon?: boolean;
  iconColor?: string;
  value?: boolean;
  TrendIndicator?: boolean;
  legend?: number;
  elipsis?: boolean;
  singleDate?: boolean;
  rangeDate?: boolean;
}

export interface DateRangePickerProps {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}

export interface DatePickerProps {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
}

export interface CardProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
  title?: string;
  secondTitle?: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  iconColor?: string;
  value?: number;
  precentage?: number;
  dot?: boolean;
  legend?: string[];
  rangeDate?: DateRangePickerProps;
  singleDate?: DatePickerProps;
}

export interface DotProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  color?: string;
}

export interface HeaderProps {
  title: string;
  secondTitle?: string;
  className?: string;
}
