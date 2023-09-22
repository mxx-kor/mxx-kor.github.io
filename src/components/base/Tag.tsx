import Link from "next/link";
import Badge from "./Badge";
import { MultiSelectType } from "@/types/notion";

const Tag = ({ name }: MultiSelectType) => {
  const tagValue = name.replace("\b", "");
  return (
    <Link href={`/archives/tags/${tagValue}`}>
      <Badge>{tagValue}</Badge>
    </Link>
  );
};

export default Tag;
