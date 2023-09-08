import { siteConfig } from "@/config";
import { PostInfo } from "@/types/notion";
import { NextSeo } from "next-seo";

export const BlogSEO = ({ ...props }: PostInfo) => {
  const { properties, created_time, last_edited_time, cover } = props;
  const title = properties.Title.rich_text[0].plain_text;
  const summary = properties.Summary.rich_text[0].plain_text;
  const tags = properties.Tags.multi_select.map(tag => tag.name);
  const coverImage =
    cover === null
      ? "https://avatars.githubusercontent.com/u/82329983?v=4"
      : cover.type === "external"
      ? cover.external.url
      : cover.file.url;
  const url = `${siteConfig.url}/blog/${properties.Slug.title[0].plain_text}`;
  const createdTime = new Date(created_time).toISOString();
  const lastEditTime = new Date(last_edited_time).toISOString();

  return (
    <NextSeo
      title={title}
      description={summary}
      canonical={url}
      openGraph={{
        type: "article",
        article: {
          publishedTime: createdTime,
          modifiedTime: lastEditTime,
          authors: ["https://github.com/mxx-kor"],
          tags,
        },
        url,
        title,
        description: summary,
        images: [
          {
            url: coverImage,
            width: 285,
            height: 167,
          },
        ],
      }}
    />
  );
};
