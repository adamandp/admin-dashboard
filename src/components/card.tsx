import { CardProps } from "@/lib/interfaces";
import clsx from "clsx";
import { StatusBadge } from "./status-badge";
import { DatePickerWithRange } from "./date-range-picker";
import { Dot } from "./dot";

export const Card = ({
  size = "sm",
  dot,
  className,
  title,
  Icon,
  value,
  statusBadge,
  legend,
  date,
  children,
}: CardProps) => {
  return (
    <div
      className={clsx(
        `bg-secondary-colors-color-1 rounded-c-2 w-full flex flex-col ${className}`,
        size === "sm" && "p-c-5",
        size === "md" && "p-c-5 lg:p-c-6.5 gap-c-5",
        size === "lg" && "p-c-5 lg:p-c-10.5 gap-c-7"
      )}
    >
      <header
        className={clsx(
          "flex justify-between",
          date && "grid gap-c-4 lg:flex lg:justify-between",
          legend && "items-center"
        )}
      >
        <section className="flex justify-between items-center">
          <div
            className={clsx(
              `grid`,
              size === "sm" && "gap-c-4",
              size === "md" && "gap-c-1.5",
              size === "lg" && "gap-c-2.5"
            )}
          >
            {(Icon || title) && (
              <div className="flex items-center gap-c-1">
                {Icon && <Icon className="size-c-3.5" />}
                {title && (
                  <p
                    className={clsx(
                      `text-neutral-colors-400 ${className}`,
                      size === "sm" && "Text-Single100Medium",
                      size === "md" && "Text-Single100Medium",
                      size === "lg" && "Text-Single200Medium"
                    )}
                  >
                    {title}
                  </p>
                )}
              </div>
            )}
            <div className="flex items-center gap-c-1.5">
              {value && (
                <p className="Special-HeadingsDisplay-4">
                  {value > 1000 ? `${value / 1000}K` : value}
                </p>
              )}
              {statusBadge && <StatusBadge {...statusBadge} />}
            </div>
          </div>
        </section>
        <section
          className={clsx(
            ``,
            date && "place-self-end flex items-center gap-c-6"
          )}
        >
          {dot && (
            <div className="flex gap-1">
              {Array.from({ length: 3 }).map((_, index) => (
                <Dot
                  key={index}
                  size={size}
                  className="bg-neutral-colors-400"
                />
              ))}
            </div>
          )}
          {legend && (
            <div className="flex gap-c-5">
              {legend.map((item, index) => (
                <div key={index} className="flex items-center gap-c-2">
                  <Dot size="lg" color={`var(--color-chart-${index + 1})`} />
                  <p className="Text-Single100Medium">{item}</p>
                </div>
              ))}
            </div>
          )}
          {date && <DatePickerWithRange {...date} />}
        </section>
      </header>
      {children}
    </div>
  );
};
