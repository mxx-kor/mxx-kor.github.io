import { cn } from "@/libs/core";
import { IconType } from "@react-icons/all-files";
import { ReactNode } from "react";

interface IconTextProps {
  Icon: IconType;
  iconsize?: number;
  text?: ReactNode;
  className?: string;
}

const IconText = ({ Icon, iconsize = 14, text, className }: IconTextProps) => {
  return (
    <div className={cn("flex items-center", className ?? "gap-1 text-xs")}>
      <Icon width={iconsize} height={iconsize} />
      <span>{text}</span>
    </div>
  );
};

export default IconText;
