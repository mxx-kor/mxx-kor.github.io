import { cn } from "@/libs/core";

const SubTitle = ({ className, ...props }: React.ComponentProps<"h2">) => {
  return (
    <h2
      {...props}
      className={cn("text-2xl font-bold tracking-tight", className)}
    />
  );
};

export default SubTitle;
