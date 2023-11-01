import { AiOutlineVerticalAlignTop } from "@react-icons/all-files/ai/AiOutlineVerticalAlignTop";
import { RiArrowGoBackFill } from "@react-icons/all-files/ri/RiArrowGoBackFill";
import { RiDiscussLine } from "@react-icons/all-files/ri/RiDiscussLine";
import Link from "next/link";

import IconButton from "./base/IconButton";

const ScrollRemote = () => {
  return (
    <div className="bg-tag flex w-44 justify-between gap-2 rounded-xl px-4">
      <Link href="/blog">
        <IconButton>
          <RiArrowGoBackFill />
        </IconButton>
      </Link>
      <IconButton
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <AiOutlineVerticalAlignTop size={22} />
      </IconButton>
      <IconButton
        onClick={() =>
          document
            .querySelector(".giscus")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <RiDiscussLine size={22} />
      </IconButton>
    </div>
  );
};

export default ScrollRemote;
