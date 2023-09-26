import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { PostInfo } from "@/types/notion";

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
