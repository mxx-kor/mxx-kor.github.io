import { getDataBase } from "@/apis/notion";
import PostListItem from "@/components/PostListItem";
import Title from "@/components/base/Title";
import { dateFormat } from "@/libs/format";
import { PostInfo } from "@/types/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function getStaticProps() {
  const db = await getDataBase();
  const posts = db.results.map(post => {
    const data = post as PageObjectResponse;
    const result = {
      id: data.id,
      properties: data.properties,
      created_time: dateFormat(data.created_time),
    };
    return result;
  });

  return { props: { posts } };
}

const Blog = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <main>
      <Title>Blog</Title>
      <ul className="mt-12 grid w-full gap-8 lg:grid-cols-2 lg:gap-12">
        {posts.map(post => (
          <li key={post.id}>
            <PostListItem {...post} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;
