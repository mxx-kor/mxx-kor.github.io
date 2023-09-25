import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { dateFormat } from "./format";

export const typeGuardedPosts = (db: QueryDatabaseResponse) => {
  const results = db.results.map(post => {
    const data = post as PageObjectResponse;
    const result = {
      id: data.id,
      properties: data.properties,
      created_time: dateFormat(data.created_time)
        .replaceAll(" ", "")
        .slice(0, -1),
    };
    return result;
  });

  return results;
};
