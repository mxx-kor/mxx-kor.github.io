import { memo } from "react";

import { cn } from "@/libs/core";

const Title = memo(function Title({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1 {...props} className={cn("mb-4 text-2xl font-extrabold", className)} />
  );
});

export default Title;
