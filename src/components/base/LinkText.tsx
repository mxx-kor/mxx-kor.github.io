import { cn } from "@/libs/core";
import Link from "next/link";

const LinkText = ({
  className,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={cn("text-mute transition-all hover:text-primary", className)}
    />
  );
};

export default LinkText;
