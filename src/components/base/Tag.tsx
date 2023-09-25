import Link from "next/link";
import Badge from "./Badge";
import { cn } from "@/libs/core";

const Tag = ({ className, name }: { className?: string; name: string }) => {
  const tagValue = name.replace("\b", "");
  return (
    <Link href={`/archives/tags/${tagValue}`}>
      <Badge className={cn(className)}>{tagValue}</Badge>
    </Link>
  );
};

export default Tag;
