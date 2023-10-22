// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
// used for rendering equations (optional)
import "katex/dist/katex.min.css";

import {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ExtendedRecordMap } from "notion-types";
import { Fragment, ReactElement, useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";

import { getDataBase, getNotionPage, getPost } from "@/apis/notion";
import IconText from "@/components/base/IconText";
import Tag from "@/components/base/Tag";
import Title from "@/components/base/Title";
import Comments from "@/components/Comments";
import BaseLayout from "@/components/Layouts/BaseLayout";
import PostLayout from "@/components/Layouts/PostLayout";
import { BlogSEO } from "@/components/SEO";
import TocBanner from "@/components/TocBanner";
import TocTop from "@/components/TocTop";
import useDarkMode from "@/hooks/useDarkMode";
import {
  getPostInfo,
  getTableOfContents,
  TableOfContentsEntry,
} from "@/libs/notion";
import { PostInfo } from "@/types/notion";

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
  tableOfContents: Array<TableOfContentsEntry>;
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
  const tableOfContents = getTableOfContents(recordMap);

  return {
    props: {
      post,
      recordMap,
      tableOfContents,
    },
  };
}

const Post = ({ post, recordMap, tableOfContents }: PostProps) => {
  const { resolvedTheme } = useDarkMode();
  const [theme, setTheme] = useState(true);
  const { title, tags, slug, createdTime } = getPostInfo(post);

  useEffect(() => {
    const isDarkTheme = resolvedTheme === "dark" ? true : false;
    setTheme(isDarkTheme);
  }, [resolvedTheme]);

  return (
    <>
      <BlogSEO {...post} />
      <article>
        <aside className="sticky top-12 hidden xl:block">
          <div className="absolute left-full w-64 rounded-2xl p-4">
            <TocBanner slug={slug} tableOfContents={tableOfContents} />
          </div>
        </aside>
        <section>
          <Title className="mb-2 break-keep text-center text-3xl font-bold">
            {title}
          </Title>
          <IconText
            className="text-tertiary mb-2 justify-center text-sm"
            Icon={FiCalendar}
            text={createdTime}
          />
          <div className="mb-4 flex justify-center gap-2">
            {tags.map(tag => (
              <Fragment key={tag.id}>
                <Tag name={tag.name} />
              </Fragment>
            ))}
          </div>
        </section>
        <section className="mx-4 transition-all xl:hidden">
          <TocTop slug={slug} tableOfContents={tableOfContents} />
        </section>
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
        <Comments />
      </article>
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
