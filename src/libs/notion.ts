import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { ExtendedRecordMap } from "notion-types";
import { getTextContent } from "notion-utils";

import { BlockType, PostInfo } from "@/types/notion";

import { dateFormat } from "./format";

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

  // 최소 indentLevel에 맞추어 표시를 위한 loop
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
    } while (true);
  }

  return toc;
};

export const getPostInfo = (post: PostInfo) => {
  const { properties, created_time, cover } = post;
  const title = properties.Title.rich_text[0].plain_text;
  const tags = properties.Tags.multi_select;
  const slug = properties.Slug.title[0].plain_text;
  const createdTime = dateFormat(created_time).replaceAll(" ", "").slice(0, -1);
  const summary =
    properties.Summary.rich_text[0] &&
    properties.Summary.rich_text[0].plain_text;

  return {
    title,
    tags,
    slug,
    createdTime,
    summary,
    cover,
  };
};
