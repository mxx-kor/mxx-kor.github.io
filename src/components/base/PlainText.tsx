import { cn } from "@/libs/core";

const PlainText = ({ className, ...props }: React.ComponentProps<"p">) => {
  return <p {...props} className={cn("text-tertiary mb-4", className)} />;
};

export default PlainText;
