import { cn } from "@/libs/core";

const SubText = ({ className, ...props }: React.ComponentProps<"span">) => {
  return (
    <span
      className={cn("text-quaternary text-sm italic", className)}
      {...props}
    />
  );
};

export default SubText;
