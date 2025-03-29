import { CardSkeletonProps, Size } from "@/lib/definitions/definition";
import clsx from "clsx";

const DotSkeleton = ({
  size = "sm",
  className,
}: {
  size?: Size;
  className?: string;
}) => (
  <div
    className={clsx(
      "rounded-full",
      (size === "sm" || size === "md") && "size-c-0.5",
      size === "lg" && "size-c-2",
      className
    )}
  />
);

const TrendIndicatorSkeleton = ({ className }: { className?: string }) => {
  return (
    <main
      className={`py-c-0.5 px-c-1 rounded-c-0.5 flex items-center gap-c-0.5 h-[clamp(calc(10px*0.6*1.4),calc((10/1440*100vw)*1.4),calc(10px*1.4))] w-c-12 ${className}`}
    />
  );
};

const LegendSkeleton = ({
  className,
  legend = 0,
}: {
  className?: string;
  legend?: number;
}) => {
  return (
    <div className={`flex gap-c-6 ${className}`}>
      {Array.from({ length: legend }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-c-2 h-[clamp(calc(12px*0.6*1.17),calc((12/1440*100vw)*1.17),calc(12px*1.17))] w-c-12"
        />
      ))}
    </div>
  );
};

const ElipsisSkeleton = ({
  className,
  size,
}: {
  className?: string;
  size?: Size;
}) => {
  return (
    <div className={`flex gap-c-1 ${className}`}>
      {Array.from({ length: 3 }).map((_, index) => (
        <DotSkeleton key={index} size={size} />
      ))}
    </div>
  );
};

const TitleSkeleton = ({
  className,
  size,
}: {
  className?: string;
  size?: Size;
}) => (
  <p
    className={clsx(
      "w-c-24",
      className,
      (size === "sm" || size === "md") &&
        "h-[clamp(calc(12px*0.6*1.17),calc((12/1440*100vw)*1.17),calc(12px*1.17))]",
      size === "lg" &&
        "h-[clamp(calc(14px*0.6*1.2),calc((14/1440*100vw)*1.2),calc(14px*1.2))]"
    )}
  />
);

const SecondTitleSkeleton = ({ className }: { className?: string }) => (
  <div className={`h-c-4 w-c-12 ${className}`} />
);

const ValueSkeleton = ({ className }: { className?: string }) => (
  <div
    className={`h-[clamp(calc(24px*0.6*1.33),calc((24/1440*100vw)*1.33),calc(24px*1.33))] w-c-12 ${className}`}
  />
);

const ButtonSkeleton = ({ className }: { className?: string }) => (
  <div
    className={`h-[clamp(calc(12px*0.6*1.17),calc((12/1440*100vw)*1.17),calc(12px*1.17))] p-c-2 w-c-10 rounded-c-1 ${className}`}
  />
);

const CardSkeleton = ({
  size,
  className,
  children,
  title,
  Icon,
  TrendIndicator,
  legend,
  secondTitle,
  value,
  elipsis,
  rangeDate,
  singleDate,
}: CardSkeletonProps) => {
  const leftSection = Icon || title || secondTitle || value || TrendIndicator;
  const rightSection = elipsis || legend || singleDate || rangeDate;
  return (
    <main
      className={clsx(
        `bg-secondary-colors-color-1 rounded-c-2 flex flex-col ${className}`,
        size === "sm" && "p-c-5",
        size === "md" && "p-c-5 lg:p-c-6.5",
        size === "lg" && "p-c-5 lg:p-c-10.5"
      )}
    >
      {(leftSection || rightSection) && (
        <header
          className={clsx(
            legend
              ? `grid gap-c-4 lg:flex lg:justify-between items-center`
              : "flex justify-between"
          )}
        >
          {leftSection && (
            <section
              className={clsx(
                `grid`,
                size === "sm" && "gap-c-4",
                size === "md" && "gap-c-1.5",
                size === "lg" && "gap-c-2.5"
              )}
            >
              {(Icon || title || secondTitle) && (
                <div className="flex items-center gap-c-1">
                  {Icon && <div className="size-c-3.5 shimmerItem" />}
                  {title && (
                    <TitleSkeleton size={size} className="shimmerItem" />
                  )}
                  {secondTitle && (
                    <SecondTitleSkeleton className="shimmerItem" />
                  )}
                </div>
              )}
              {(value || TrendIndicator) && (
                <div className={clsx("flex items-center gap-c-1.5")}>
                  {value && <ValueSkeleton className="shimmerItem" />}
                  {TrendIndicator && (
                    <TrendIndicatorSkeleton className="shimmerItem" />
                  )}
                </div>
              )}
            </section>
          )}
          {rightSection && (
            <section className={clsx(legend && "flex items-center gap-c-5")}>
              {elipsis && (
                <ElipsisSkeleton className="shimmerItem" size={size} />
              )}
              {legend && <LegendSkeleton legend={legend} />}
              {singleDate && <ButtonSkeleton className="shimmerItem" />}
              {rangeDate && <ButtonSkeleton className="shimmerItem" />}
            </section>
          )}
        </header>
      )}
      {children}
    </main>
  );
};

const StatSkeleton = () => {
  return (
    <main className="grid grid-cols-2 lg:grid-cols-4 gap-c-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <CardSkeleton
          key={index}
          size="sm"
          title
          value
          TrendIndicator
          Icon
          elipsis
        />
      ))}
    </main>
  );
};

export {
  CardSkeleton,
  TitleSkeleton,
  ButtonSkeleton,
  TrendIndicatorSkeleton,
  SecondTitleSkeleton,
  DotSkeleton,
  ElipsisSkeleton,
  LegendSkeleton,
  ValueSkeleton,
  StatSkeleton,
};
