import { CustomBlockObjectResponse } from "@/types/notion";
import { Client, isFullBlock } from "@notionhq/client";
import { PartialBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDataBase = async () => {
  const response = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
  });
  return response;
};

export const getPost = async (id: string) => {
  const myPost = await notion.pages.retrieve({
    page_id: id,
  });
  return myPost;
};

export const getBlocks = async (
  blockId: string,
): Promise<(PartialBlockObjectResponse | CustomBlockObjectResponse)[]> => {
  blockId = blockId.replaceAll("-", "");

  const { results } = await notion.blocks.children.list({
    block_id: blockId,
  });

  const childBlocks = results.map(async block => {
    if (!isFullBlock(block)) return block;
    if (block.has_children) {
      const children = await getBlocks(block.id);
      return { ...block, children };
    }
    return block;
  });

  return Promise.all(childBlocks);
};
