import { IconType } from "@react-icons/all-files";
import { ReactNode } from "react";

import { cn } from "@/libs/core";

interface IconTextProps {
  Icon: IconType;
  iconsize?: number;
  text?: ReactNode;
  className?: string;
}

const IconText = ({ Icon, iconsize = 14, text, className }: IconTextProps) => {
  return (
    <div className={cn("flex items-center gap-1 text-xs", className)}>
      <Icon size={iconsize} />
      <span>{text}</span>
    </div>
  );
};

export default IconText;
