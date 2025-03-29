import { ArrowDownIcon } from "lucide-react";
import { Button } from "./ui/shadcn/button";
import { HeaderProps } from "@/lib/definitions/definition";

export const Header = ({ title, className, secondTitle }: HeaderProps) => (
  <main className={`flex justify-between items-center ${className}`}>
    <h1 className="Special-HeadingsDisplay-4">{title}</h1>
    <h2 className="text-neutral-colors-400 Text-Single100Regular">
      {secondTitle}
    </h2>
    <div className="flex items-center gap-c-3">
      <Button size={"custom"} variant={"default"}>
        Export Data
        <ArrowDownIcon className="size-c-3" />
      </Button>
      <Button size={"custom"} variant={"secondary"}>
        Create report
      </Button>
    </div>
  </main>
);
