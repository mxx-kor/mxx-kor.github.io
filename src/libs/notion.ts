import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { BlockType, PostInfo } from "@/types/notion";
import { ExtendedRecordMap } from "notion-types";
import { getPageTableOfContents, getTextContent } from "notion-utils";

export const typeGuardedPosts = (db: QueryDatabaseResponse) => {
  const results = db.results.map(post => {
    const data = post as PageObjectResponse;
    const result = {
      id: data.id,
      properties: data.properties,
      created_time: data.created_time,
    };
    return result;
  });

  return results;
};

type ClassifiedPosts = {
  [key: string]: PostInfo[];
};

export const classifyPosts = (posts: PostInfo[]) => {
  return [...posts]
    .sort(
      (a, b) =>
        new Date(b.created_time).getTime() - new Date(a.created_time).getTime(),
    )
    .reduce<ClassifiedPosts>((ac, v) => {
      const year = new Date(v.created_time).getFullYear();

      if (!ac[year]) {
        ac[year] = [];
      }
      ac[year].push(v);

      return ac;
    }, {});
};

getPageTableOfContents;

export interface TableOfContentsEntry {
  id: string;
  type: BlockType;
  text: string;
  indentLevel: number;
}

const indentLevels = {
  header: 0,
  sub_header: 1,
  sub_sub_header: 2,
};

export const getTableOfContents = (
  recordMap: ExtendedRecordMap,
): Array<TableOfContentsEntry> => {
  const toc = Object.keys(recordMap.block)
    .map((blockId: string) => {
      const block = recordMap.block[blockId]?.value;

      if (block) {
        const { type } = block;

        if (
          type === "header" ||
          type === "sub_header" ||
          type === "sub_sub_header"
        ) {
          return {
            id: blockId,
            type,
            text: getTextContent(block.properties?.title),
            indentLevel: indentLevels[type],
          };
        }
      }

      return null;
    })
    .filter(Boolean) as Array<TableOfContentsEntry>;

  const indentLevelStack = [
    {
      actual: -1,
      effective: -1,
    },
  ];

  // Adjust indent levels to always change smoothly.
  // This is a little tricky, but the key is that when increasing indent levels,
  // they should never jump more than one at a time.
  for (const tocItem of toc) {
    const { indentLevel } = tocItem;
    const actual = indentLevel;

    do {
      const prevIndent = indentLevelStack[indentLevelStack.length - 1];
      const { actual: prevActual, effective: prevEffective } = prevIndent;

      if (actual > prevActual) {
        tocItem.indentLevel = prevEffective + 1;
        indentLevelStack.push({
          actual,
          effective: tocItem.indentLevel,
        });
      } else if (actual === prevActual) {
        tocItem.indentLevel = prevEffective;
        break;
      } else {
        indentLevelStack.pop();
      }

      // eslint-disable-next-line no-constant-condition
    } while (true);
  }

  return toc;
};
