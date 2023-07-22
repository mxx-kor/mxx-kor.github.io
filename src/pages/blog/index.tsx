import { getDataBase } from "@/apis/notion";
import BaseLayout from "@/components/Layouts/BaseLayout";
import SubLayout from "@/components/Layouts/SubLayout";
import { isFullPage } from "@notionhq/client";
import Link from "next/link";
import { ReactElement } from "react";

type PostInfo = {
  id: string;
  created_time: Date;
  properties: {
    Slug: { id: string; title: { plain_text: string }[] };
    Title: { id: string; rich_text: { plain_text: string }[] };
    Tags: { id: string; multi_select: { id: string; name: string }[] };
  };
};

export async function getStaticProps() {
  const db = await getDataBase();
  const posts = db.results.map(post => {
    if (!isFullPage(post)) return;
    const result = {
      id: post.id,
      properties: post.properties,
      created_time: post.created_time,
    };
    return result;
  });

  return { props: { posts } };
}

const Blog = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <>
      <div className="text-3xl">Blog</div>
      <ul>
        {posts.map(({ id, created_time, properties }) => (
          <li key={id}>
            <Link href={`/blog/${properties.Slug.title[0].plain_text}`}>
              {properties.Title.rich_text[0].plain_text}
            </Link>
            <div>{JSON.stringify(created_time)}</div>
            <div>
              {properties.Tags.multi_select.map(tag => (
                <span key={tag.id}>{tag.name}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <SubLayout>
      <BaseLayout>{page}</BaseLayout>
    </SubLayout>
  );
};

export default Blog;
