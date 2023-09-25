import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

const notionReact = new NotionAPI();

export const getDataBase = async (options = {}) => {
  const response = await notionClient.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
    ...options,
  });
  return response;
};

export const getNotionPage = async (blockId: string) => {
  const response = await notionReact.getPage(blockId);

  return response;
};

export const getPost = async (id: string) => {
  const myPost = await notionClient.pages.retrieve({
    page_id: id,
  });
  return myPost;
};
