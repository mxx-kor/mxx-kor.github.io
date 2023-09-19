import { cn } from "@/libs/core";
import { ComponentProps } from "react";

const TextInput = ({ className, ...props }: ComponentProps<"input">) => {
  return (
    <input
      type="text"
      className={cn(
        "placeholder:text-tertiary mb-8 w-full rounded-md border px-4 py-2 transition-all",
        "border-stone-200 bg-stone-50 dark:border-stone-900 dark:bg-stone-800",
        "focus:outline-none focus:ring-1 focus:ring-stone-400",
        className,
      )}
      {...props}
    />
  );
};

export default TextInput;
