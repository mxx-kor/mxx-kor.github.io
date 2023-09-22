import { cn } from "@/libs/core";
import { ComponentProps } from "react";

const Badge = ({ className, ...props }: ComponentProps<"span">) => {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1",
        "text-tertiary bg-tag text-xs font-medium",
        "hover:bg-secondary ring-1 ring-inset ring-gray-500/10 transition-all",
        className,
      )}
    />
  );
};

export default Badge;
