import { getDataBase } from "@/apis/notion";
import BaseLayout from "@/components/Layouts/BaseLayout";
import SubLayout from "@/components/Layouts/SubLayout";
import Link from "next/link";
import { ReactElement } from "react";

type PostInfo = {
  created_time: Date;
  properties: {
    name: { id: string; title: { plain_text: string }[] };
    tag: { id: string; multi_select: { name: string }[] };
  };
};

export async function getStaticProps() {
  const db = await getDataBase();
  const posts = db.results.map(post => {
    if ("properties" in post) {
      const result = {
        properties: post.properties,
        created_time: post.created_time,
      };
      return result;
    }
  });

  return { props: { posts } };
}

const Blog = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <>
      <div className="text-3xl">Blog</div>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>
            {JSON.stringify(post.created_time)}
            <Link href="/blog/1">
              {post.properties.name.title[0].plain_text}
            </Link>
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
