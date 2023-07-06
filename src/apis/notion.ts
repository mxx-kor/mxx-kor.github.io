import { Client } from "@notionhq/client";

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

export async function getBlocks(id: string) {
  const myBlocks = await notion.blocks.children.list({
    block_id: id,
  });
  return myBlocks;
}
