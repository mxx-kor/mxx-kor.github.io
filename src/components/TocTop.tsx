import { TableOfContentsEntry } from "@/libs/notion";
import Divider from "./base/Divider";
import SubTitle from "./base/SubTitle";
import LinkText from "./base/LinkText";

interface TocProps {
  slug: string;
  tableOfContents: Array<TableOfContentsEntry>;
}

const TocTop = ({ slug, tableOfContents }: TocProps) => {
  if (tableOfContents.length === 0) {
    return <></>;
  }

  const getTocLink = (id: string) => {
    return id.replaceAll("-", "");
  };

  const getStyle = (indentLevel: number) => {
    if (indentLevel === 0) return "text-lg";
    if (indentLevel === 1) return "ml-8 text-lg";
    if (indentLevel === 2) return "ml-16";
  };

  return (
    <>
      <SubTitle className="px-4 py-2 text-xl font-light">
        Table of contents
      </SubTitle>
      <Divider />
      <ul className="py-2">
        {tableOfContents.map(
          toc =>
            toc.text !== "" && (
              <li
                className="mb-1 px-4 font-light tracking-tighter"
                key={toc.id}
              >
                <LinkText
                  href={`/blog/${slug}#${getTocLink(toc.id)}`}
                  className={getStyle(toc.indentLevel)}
                >
                  {toc.text}
                </LinkText>
              </li>
            ),
        )}
      </ul>
    </>
  );
};

export default TocTop;
