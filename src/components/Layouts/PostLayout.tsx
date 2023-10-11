import { RiArrowGoBackFill } from "@react-icons/all-files/ri/RiArrowGoBackFill";
import Link from "next/link";
import { ReactNode } from "react";

import IconButton from "../base/IconButton";
import IconText from "../base/IconText";
import ScrollProgressBar from "../ScrollProgressBar";

const SubLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ScrollProgressBar />
      <Link href="/blog" className="mb-6 inline-block pl-2">
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
