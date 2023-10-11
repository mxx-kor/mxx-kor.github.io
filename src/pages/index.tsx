import { RiMoreFill } from "@react-icons/all-files/ri/RiMoreFill";
import { m } from "framer-motion";
import { Fragment } from "react";

import { getDataBase } from "@/apis/notion";
import IconText from "@/components/base/IconText";
import LinkText from "@/components/base/LinkText";
import PlainText from "@/components/base/PlainText";
import SubTitle from "@/components/base/SubTitle";
import Title from "@/components/base/Title";
import PostItemCard from "@/components/PostItemCard";
import { fadeIn, staggerChild } from "@/libs/animations";
import { typeGuardedPosts } from "@/libs/notion";
import { PostInfo } from "@/types/notion";

export async function getStaticProps() {
  const db = await getDataBase({
    filter: {
      property: "Main",
      checkbox: {
        equals: true,
      },
    },
  });
  const posts = typeGuardedPosts(db);

  return { props: { posts } };
}

const Home = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <main>
      <m.section initial="initial" animate="animate">
        <Title className="mt-6">👋 안녕하세요, 개발자 김민재입니다.</Title>
        <m.div variants={fadeIn}>
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
        </m.div>
      </m.section>
      <m.section
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="mt-6"
      >
        <SubTitle className="mb-4">
          <i>Featured.</i>
        </SubTitle>
        <m.div
          variants={staggerChild}
          className="mb-4 grid gap-6 md:grid-cols-3"
        >
          {posts.map((selectedPost, idx) => (
            <Fragment key={selectedPost.id}>
              <PostItemCard {...selectedPost} idx={idx} />
            </Fragment>
          ))}
        </m.div>
        <LinkText href="/blog" className="text-sm">
          <IconText
            Icon={RiMoreFill}
            iconsize={24}
            text="Check all posts"
            className="text-md gap-1"
          />
        </LinkText>
      </m.section>
    </main>
  );
};

export default Home;
