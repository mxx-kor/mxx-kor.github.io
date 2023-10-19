import { AiOutlineVerticalAlignTop } from "@react-icons/all-files/ai/AiOutlineVerticalAlignTop";
import { RiArrowGoBackFill } from "@react-icons/all-files/ri/RiArrowGoBackFill";
import { RiDiscussLine } from "@react-icons/all-files/ri/RiDiscussLine";
import Link from "next/link";

import useScrollSpy from "@/hooks/useScrollSpy";
import { cn } from "@/libs/core";
import { TocProps } from "@/types/notion";

import IconButton from "./base/IconButton";
import LinkText from "./base/LinkText";
import SubTitle from "./base/SubTitle";

const TocBanner = ({ slug, tableOfContents }: TocProps) => {
  const activeId = useScrollSpy();
  const getTocLink = (id: string) => {
    return id.replaceAll("-", "");
  };

  const getStyle = (indentLevel: number) => {
    if (indentLevel === 0) return "text-base";
    if (indentLevel === 1) return "ml-4 text-sm";
    if (indentLevel === 2) return "ml-10 text-sm";
  };

  if (tableOfContents.length === 0) {
    return <></>;
  }
  return (
    <>
      <SubTitle className="mb-4 text-lg font-bold">목차</SubTitle>
      <ul className="mb-2">
        {tableOfContents.map(
          toc =>
            toc.text !== "" && (
              <li className="mb-1 font-light tracking-tighter" key={toc.id}>
                <LinkText
                  href={`/blog/${slug}#${getTocLink(toc.id)}`}
                  className={cn(
                    getStyle(toc.indentLevel),
                    activeId === getTocLink(toc.id)
                      ? "text-primary font-bold"
                      : "hover:font-normal",
                  )}
                >
                  {toc.text}
                </LinkText>
              </li>
            ),
        )}
      </ul>
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
    </>
  );
};

export default TocBanner;
