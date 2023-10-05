import { TableOfContentsEntry } from "@/libs/notion";
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
    if (indentLevel === 0) return "text-base";
    if (indentLevel === 1) return "ml-8 text-sm";
    if (indentLevel === 2) return "ml-16 text-sm";
  };

  return (
    <>
      <SubTitle className="mb-2 px-2 text-xl font-bold">
        Table of contents
      </SubTitle>
      <ul className="px-2">
        {tableOfContents.map(
          toc =>
            toc.text !== "" && (
              <li className="mb-1 tracking-tighter" key={toc.id}>
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
