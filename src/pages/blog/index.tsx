import { getDataBase } from "@/apis/notion";
import PostListItem from "@/components/PostListItem";
import PlainText from "@/components/base/PlainText";
import TextInput from "@/components/base/TextInput";
import Title from "@/components/base/Title";
import useSearch from "@/hooks/useSearch";
import { fadeInUp, staggerChild } from "@/libs/animations";
import { dateFormat } from "@/libs/format";
import { PostInfo } from "@/types/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { m } from "framer-motion";

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

  const filteredPosts = posts.filter(
    post =>
      //포스트 제목으로 검색
      post.properties.Title.rich_text[0].plain_text
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      //태그로 검색
      post.properties.Tags.multi_select.filter(tag =>
        tag.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ).length,
  );

  return (
    <m.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChild}
    >
      <Title className="my-6 text-4xl">Blog</Title>
      <TextInput
        placeholder="포스트 제목, 태그로 검색"
        onChange={handleSearchTerm}
      />
      {searchTerm && (
        <PlainText>
          총{" "}
          <span className="text-primary font-bold">{`${filteredPosts.length}개`}</span>{" "}
          의 포스트가 있습니다.
        </PlainText>
      )}
      <m.ul
        variants={staggerChild}
        className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12"
      >
        {filteredPosts.map(post => (
          <m.li key={post.id} variants={fadeInUp} className="group">
            <PostListItem {...post} />
          </m.li>
        ))}
      </m.ul>
    </m.main>
  );
};

export default Blog;
