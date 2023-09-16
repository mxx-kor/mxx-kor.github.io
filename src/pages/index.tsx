import { getDataBase } from "@/apis/notion";
import PostItemCard from "@/components/PostItemCard";
import IconText from "@/components/base/IconText";
import LinkText from "@/components/base/LinkText";
import PlainText from "@/components/base/PlainText";
import SubTitle from "@/components/base/SubTitle";
import Title from "@/components/base/Title";
import { dateFormat } from "@/libs/format";
import { PostInfo } from "@/types/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RiMoreFill } from "@react-icons/all-files/ri/RiMoreFill";
import { Fragment } from "react";

export async function getStaticProps() {
  const db = await getDataBase();
  const posts = db.results.map(post => {
    const data = post as PageObjectResponse;
    const result = {
      id: data.id,
      properties: data.properties,
      created_time: dateFormat(data.created_time),
      cover: data.cover,
    };
    return result;
  });

  return { props: { posts } };
}

const Home = ({ posts }: { posts: PostInfo[] }) => {
  const selectedPosts = posts
    .filter(post => post.properties.Main.checkbox === true)
    .slice(0, 4);

  return (
    <main>
      <section>
        <Title className="mt-6">👋 안녕하세요, 개발자 김민재입니다.</Title>
        <PlainText className="text-secondary">
          개발 과정에 마주하는 다양한 문제를 해결하는 것을 좋아합니다.
        </PlainText>
        <PlainText>
          경험과 변화을 공유하며 성장하는 것에 가치를 두고 있습니다.
        </PlainText>
        <LinkText href="/about" className="text-sm">
          <IconText
            Icon={RiMoreFill}
            iconsize={24}
            text="More about me"
            className="text-md gap-1"
          />
        </LinkText>
      </section>
      <section className="mt-6">
        <SubTitle className="mb-4">
          <i>Featured.</i>
        </SubTitle>
        <div className="mb-4 grid gap-6 md:grid-cols-3">
          {selectedPosts.map(selectedPost => (
            <Fragment key={selectedPost.id}>
              <PostItemCard {...selectedPost} />
            </Fragment>
          ))}
        </div>
        <LinkText href="/blog" className="text-sm">
          <IconText
            Icon={RiMoreFill}
            iconsize={24}
            text="Check all posts"
            className="text-md gap-1"
          />
        </LinkText>
      </section>
    </main>
  );
};

export default Home;
