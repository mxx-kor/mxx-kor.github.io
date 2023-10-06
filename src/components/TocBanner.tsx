import { TocProps } from "./TocTop";
import LinkText from "./base/LinkText";
import SubTitle from "./base/SubTitle";
import { cn } from "@/libs/core";
import useScrollSpy from "@/hooks/useScrollSpy";

const TocBanner = ({ slug, tableOfContents }: TocProps) => {
  const activeId = useScrollSpy();
  const getTocLink = (id: string) => {
    return id.replaceAll("-", "");
  };

  const getStyle = (indentLevel: number) => {
    if (indentLevel === 0) return "text-base";
    if (indentLevel === 1) return "ml-4 text-sm";
    if (indentLevel === 2) return "ml-8 text-sm";
  };

  if (tableOfContents.length === 0) {
    return <></>;
  }
  return (
    <>
      <SubTitle className="mb-4 text-lg font-bold">목차</SubTitle>
      <ul>
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
                      : "",
                  )}
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

export default TocBanner;
