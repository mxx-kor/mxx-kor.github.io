import { BsDot } from "@react-icons/all-files/bs/BsDot";
import { CgDetailsMore } from "@react-icons/all-files/cg/CgDetailsMore";

import { TocProps } from "@/types/notion";

import Divider from "./base/Divider";
import IconText from "./base/IconText";
import LinkText from "./base/LinkText";
import SubTitle from "./base/SubTitle";

const TocTop = ({ tableOfContents }: TocProps) => {
  if (tableOfContents.length === 0) {
    return <></>;
  }

  const getTocLink = (id: string) => {
    return id.replaceAll("-", "");
  };

  const getStyle = (indentLevel: number) => {
    if (indentLevel === 0) return "text-base";
    if (indentLevel === 1) return "ml-8 text-sm";
    if (indentLevel === 2) return "ml-16 text-sm";
  };

  return (
    <>
      <Divider className="border-1 mb-4 dark:border-neutral-400" />
      <SubTitle className="mb-2 px-2">
        <IconText
          Icon={CgDetailsMore}
          iconsize={25}
          text="Table of Contents"
          className="gap-3 text-xl font-bold"
        />
      </SubTitle>
      <ul className="px-2">
        {tableOfContents.map(
          toc =>
            toc.text !== "" && (
              <li className="mb-1 tracking-tighter" key={toc.id}>
                <LinkText href={`#${getTocLink(toc.id)}`} scroll={false}>
                  <IconText
                    Icon={BsDot}
                    iconsize={30}
                    text={toc.text}
                    className={getStyle(toc.indentLevel)}
                  />
                </LinkText>
              </li>
            ),
        )}
      </ul>
    </>
  );
};

export default TocTop;
