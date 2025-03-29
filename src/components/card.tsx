import { DatePicker } from "@/components/date-picker";
import { DatePickerWithRange } from "@/components/date-range-picker";
import { CardProps, DotProps } from "@/lib/definitions/definition";
import { ArrowUpIcon } from "lucide-react";
import clsx from "clsx";

const TrendIndicator = ({ precentage }: { precentage?: number }) => (
  <main
    className={clsx(
      `py-c-0.5 px-c-1 rounded-c-0.5 border-[0.6px] ParagraphSmall flex items-center gap-c-0.5`,
      precentage && precentage > 0
        ? "bg-green-400/20 border-green-400 text-green-400"
        : "bg-red-400/20 border-red-400 text-red-400"
    )}
  >
    <p>{precentage}%</p>
    <ArrowUpIcon
      className={`size-c-2.5 ${
        precentage && precentage > 0 ? "rotate-45" : "rotate-135"
      }`}
    />
  </main>
);

const Dot = ({ size = "sm", className, color }: DotProps) => (
  <div
    style={{ backgroundColor: color }}
    className={clsx(
      "rounded-full",
      (size === "sm" || size === "md") && "size-c-0.5",
      size === "lg" && "size-c-2",
      className
    )}
  />
);

const Legend = ({ legend }: { legend?: string[] }) => (
  <div className="flex gap-c-6">
    {legend?.map((item, index) => (
      <div key={index} className="flex items-center gap-c-2">
        <Dot size="lg" color={`var(--chart-${index + 1})`} />
        <p className="Text-Single100Medium">{item}</p>
      </div>
    ))}
  </div>
);

const Elipsis = () => (
  <div className="flex gap-c-1">
    {Array.from({ length: 3 }).map((_, index) => (
      <Dot key={index} color="#D9E1FA" />
    ))}
  </div>
);

const Title = ({
  title,
  size,
}: {
  title?: string;
  size?: "sm" | "md" | "lg";
}) => (
  <p
    className={clsx(
      `text-neutral-colors-400 `,
      (size === "sm" || size === "md") && "Text-Single100Medium",
      size === "lg" && "Text-Single200Medium"
    )}
  >
    {title}
  </p>
);

const SecondTitle = ({ secondTitle }: { secondTitle?: string }) => (
  <p className={`font-worksans text-c-4 font-medium`}>{secondTitle}</p>
);

const Value = ({ value }: { value: number }) => (
  <p className="Special-HeadingsDisplay-4">
    {value > 1000 ? `${(value / 1000).toFixed(1)}k` : value}
  </p>
);

const Card = ({
  size = "sm",
  className,
  children,
  title,
  secondTitle,
  Icon,
  value,
  precentage,
  dot,
  legend,
  singleDate,
  rangeDate,
}: CardProps) => {
  const leftSection = Icon || title || secondTitle || value || precentage;
  const rightSection = dot || legend || singleDate || rangeDate;
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
                  {Icon && <Icon className="size-c-3.5" />}
                  {title && <Title title={title} size={size} />}
                  {secondTitle && <SecondTitle />}
                </div>
              )}
              {(value || precentage) && (
                <div className={clsx("flex items-center gap-c-1.5")}>
                  {value && <Value value={value} />}
                  {precentage && <TrendIndicator precentage={precentage} />}
                </div>
              )}
            </section>
          )}
          {rightSection && (
            <section className={clsx(legend && "flex items-center gap-c-5")}>
              {dot && <Elipsis />}
              {legend && <Legend legend={legend} />}
              {singleDate && (
                <DatePicker
                  date={singleDate?.date}
                  setDate={singleDate?.setDate}
                />
              )}
              {rangeDate && (
                <DatePickerWithRange
                  date={rangeDate.date}
                  setDate={rangeDate.setDate}
                />
              )}
            </section>
          )}
        </header>
      )}
      {children}
    </main>
  );
};

export {
  Card,
  TrendIndicator,
  Dot,
  Legend,
  Elipsis,
  Title,
  SecondTitle,
  Value,
};
