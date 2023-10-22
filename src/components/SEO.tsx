import { NextSeo } from "next-seo";

import { defaultImage, siteConfig } from "@/config";
import { getPostInfo } from "@/libs/notion";
import { PostInfo } from "@/types/notion";

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

export const BlogSEO = ({ ...post }: PostInfo) => {
  const { title, summary, tags, cover, slug } = getPostInfo(post);
  const { created_time, last_edited_time } = post;
  const tagsByName = tags.map(tag => tag.name);
  const coverImage =
    cover === null
      ? defaultImage
      : cover.type === "external"
      ? cover.external.url
      : cover.file.url;
  const url = `${siteConfig.url}/blog/${slug}`;
  const createdTime = new Date(created_time).toISOString();
  const lastEditTime = new Date(last_edited_time).toISOString();

  return (
    <NextSeo
      title={title}
      description={summary || siteConfig.description}
      canonical={url}
      openGraph={{
        type: "article",
        article: {
          publishedTime: createdTime,
          modifiedTime: lastEditTime,
          authors: ["https://github.com/mxx-kor"],
          tags: tagsByName,
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
