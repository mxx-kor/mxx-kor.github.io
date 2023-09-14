import { ReactNode } from "react";
import Link from "next/link";
import { RiArrowGoBackFill } from "@react-icons/all-files/ri/RiArrowGoBackFill";
import IconText from "../base/IconText";
import IconButton from "../base/IconButton";

const SubLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Link href="/blog" className="hover:bg-gray my-3 inline-block ">
        <IconButton className="w-32">
          <IconText
            Icon={RiArrowGoBackFill}
            text="Back to posts"
            className="text-md gap-1"
          />
        </IconButton>
      </Link>
      {children}
    </>
  );
};

export default SubLayout;
