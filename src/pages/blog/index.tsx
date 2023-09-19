import { getDataBase } from "@/apis/notion";
import PostListItem from "@/components/PostListItem";
import TextInput from "@/components/base/TextInput";
import Title from "@/components/base/Title";
import useSearch from "@/hooks/useSearch";
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
  const { searchTerm, handleSearchTerm } = useSearch();

  const filteredPosts = posts.filter(post =>
    post.properties.Title.rich_text[0].plain_text
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  return (
    <main>
      <Title>Blog</Title>
      <TextInput
        placeholder="포스트 제목을 입력해주세요."
        onChange={handleSearchTerm}
      />
      <ul className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12">
        {filteredPosts.map(post => (
          <li key={post.id}>
            <PostListItem {...post} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;
