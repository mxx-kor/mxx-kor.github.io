// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
// used for rendering equations (optional)
import "katex/dist/katex.min.css";

import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine";
import { RiArrowRightLine } from "@react-icons/all-files/ri/RiArrowRightLine";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ExtendedRecordMap } from "notion-types";
import { Fragment, ReactElement, useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";

import { getDataBase, getNotionPage, getPost } from "@/apis/notion";
import Divider from "@/components/base/Divider";
import IconText from "@/components/base/IconText";
import LinkText from "@/components/base/LinkText";
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
  typeGuardedPosts,
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
  prevPost: PostInfo | null;
  post: PostInfo;
  nextPost: PostInfo | null;
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
  const db = await getDataBase();
  const posts = typeGuardedPosts(db);
  const { id } = posts.filter(post => {
    if ("properties" in post) {
      if ("title" in post.properties.Slug) {
        const slugFirstTitle = post.properties.Slug
          .title as RichTextItemResponse[];
        return slugFirstTitle[0].plain_text === slug;
      }
    }
  })[0];
  const middleIndex = db.results.findIndex(result => result.id === id);
  const [prevPost = null, nextPost = null] = [
    db.results[middleIndex - 1],
    db.results[middleIndex + 1],
  ];
  const [post, recordMap] = await Promise.all([getPost(id), getNotionPage(id)]);
  const tableOfContents = getTableOfContents(recordMap);

  return {
    props: {
      prevPost,
      post,
      nextPost,
      recordMap,
      tableOfContents,
    },
  };
}

const Post = ({
  prevPost,
  post,
  nextPost,
  recordMap,
  tableOfContents,
}: PostProps) => {
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
        <Divider className="my-6" />
        <section className="mb-12 flex justify-between px-2">
          <div>
            {prevPost && (
              <LinkText
                href={`/blog/${prevPost.properties.Slug.title[0].plain_text}`}
              >
                <IconText Icon={RiArrowLeftLine} text="Prev" />
                <span className="tracking-tighter">
                  {prevPost.properties.Title.rich_text[0].plain_text}
                </span>
              </LinkText>
            )}
          </div>
          <div>
            {nextPost && (
              <LinkText
                href={`/blog/${nextPost.properties.Slug.title[0].plain_text}`}
              >
                <IconText
                  Icon={RiArrowRightLine}
                  text="Next"
                  position="right"
                  className="justify-end"
                />
                <span className="tracking-tighter">
                  {nextPost.properties.Title.rich_text[0].plain_text}
                </span>
              </LinkText>
            )}
          </div>
        </section>
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
