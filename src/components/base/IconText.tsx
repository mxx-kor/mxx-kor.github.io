import { IconType } from "@react-icons/all-files";
import { ReactNode } from "react";

import { cn } from "@/libs/core";

interface IconTextProps {
  Icon: IconType;
  iconsize?: number;
  text?: ReactNode;
  className?: string;
  position?: "left" | "right";
}

const IconText = ({
  Icon,
  iconsize = 14,
  text,
  position = "left",
  className,
}: IconTextProps) => {
  return (
    <div className={cn("flex items-center gap-1 text-xs", className)}>
      {position === "left" && <Icon size={iconsize} />}
      <span>{text}</span>
      {position === "right" && <Icon size={iconsize} />}
    </div>
  );
};

export default IconText;
