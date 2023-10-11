import Link from "next/link";

import { cn } from "@/libs/core";

const LinkText = ({
  className,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={cn(
        // prettier-ignore
        "text-mute hover:text-primary inline-block transition-all",
        className,
      )}
    />
  );
};

export default LinkText;
