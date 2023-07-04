import { getDataBase } from "@/apis/notion";
import BaseLayout from "@/components/Layouts/BaseLayout";
import SubLayout from "@/components/Layouts/SubLayout";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import { ReactElement } from "react";

export async function getStaticProps() {
  const posts = await getDataBase();

  return { props: { posts } };
}

const Blog = ({ posts }: { posts: QueryDatabaseResponse }) => {
  return (
    <>
      <div className="text-3xl">Blog</div>
      {posts.results.map((post, idx) => (
        <Link key={idx} href="/blog/1">
          {post.id}
        </Link>
      ))}
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
