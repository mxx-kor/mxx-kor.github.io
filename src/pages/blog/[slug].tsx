import { getDataBase, getNotionPage, getPost } from "@/apis/notion";
import Comments from "@/components/Comments";
import BaseLayout from "@/components/Layouts/BaseLayout";
import PostLayout from "@/components/Layouts/PostLayout";
import {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { GetStaticPropsContext } from "next";
import { Fragment, ReactElement, useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
import { ExtendedRecordMap } from "notion-types";
import useDarkMode from "@/hooks/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import { BlogSEO } from "@/components/SEO";
import { PostInfo } from "@/types/notion";
import Title from "@/components/base/Title";
import Tag from "@/components/base/Tag";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(m => m.Code),
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(m => m.Collection),
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then(m => m.Equation),
);
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then(m => m.Pdf),
  {
    ssr: false,
  },
);
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then(m => m.Modal),
  {
    ssr: false,
  },
);

interface PostProps {
  post: PostInfo;
  recordMap: ExtendedRecordMap;
}

export const getStaticPaths = async () => {
  const { results } = await getDataBase();

  return {
    paths: results.map(post => {
      if ("properties" in post) {
        if ("title" in post.properties.Slug) {
          const slugFirstTitle = post.properties.Slug
            .title as RichTextItemResponse[];
          return {
            params: {
              slug: slugFirstTitle[0].plain_text,
            },
          };
        }
      }
    }),
    fallback: false,
  };
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params && context.params.slug;
  const db = await getDataBase({
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });
  const { id } = db.results[0] as PageObjectResponse;
  const [post, recordMap] = await Promise.all([getPost(id), getNotionPage(id)]);

  return {
    props: {
      post,
      recordMap,
    },
  };
}

const Post = ({ post, recordMap }: PostProps) => {
  const { resolvedTheme } = useDarkMode();
  const [theme, setTheme] = useState(true);
  const title = post.properties.Title.rich_text[0].plain_text;
  const tags = post.properties.Tags.multi_select;

  useEffect(() => {
    const isDarkTheme = resolvedTheme === "dark" ? true : false;
    setTheme(isDarkTheme);
  }, [resolvedTheme]);

  return (
    <>
      <BlogSEO {...post} />
      <article>
        <Title className="mb-6 text-center text-3xl font-bold">{title}</Title>
        <div className="mb-4 flex justify-center gap-2">
          {tags.map(tag => (
            <Fragment key={tag.id}>
              <Tag name={tag.name} />
            </Fragment>
          ))}
        </div>
        <NotionRenderer
          recordMap={recordMap}
          darkMode={theme}
          components={{
            Code,
            Collection,
            Equation,
            Modal,
            Pdf,
            nextImage: Image,
            nextLink: Link,
          }}
        />
      </article>
      <Comments />
    </>
  );
};

Post.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <PostLayout>{page}</PostLayout>
    </BaseLayout>
  );
};

export default Post;
