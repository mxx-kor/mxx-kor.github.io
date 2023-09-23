import { defaultImage, siteConfig } from "@/config";
import { PostInfo } from "@/types/notion";
import { NextSeo } from "next-seo";

interface PageSEOProps {
  title?: string;
  description?: string;
  path: string;
  image?: string;
}

export const PageSEO = ({
  title = siteConfig.title,
  description = siteConfig.description,
  path,
  image = defaultImage,
}: PageSEOProps) => {
  const url = `${siteConfig.url}/${path}`;
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [{ url: image }],
      }}
    />
  );
};

export const BlogSEO = ({ ...props }: PostInfo) => {
  const { properties, created_time, last_edited_time, cover } = props;
  const title = properties.Title.rich_text[0].plain_text;
  const summary =
    properties.Summary.rich_text[0]?.plain_text || siteConfig.description;
  const tags = properties.Tags.multi_select.map(tag => tag.name);
  const coverImage =
    cover === null
      ? defaultImage
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
