import { m } from "framer-motion";
import { Fragment } from "react";

import { getDataBase } from "@/apis/notion";
import Divider from "@/components/base/Divider";
import LinkText from "@/components/base/LinkText";
import SubTitle from "@/components/base/SubTitle";
import Tag from "@/components/base/Tag";
import Title from "@/components/base/Title";
import { PageSEO } from "@/components/SEO";
import { fadeIn, fadeInUp, staggerChild } from "@/libs/animations";
import { formatShortDate } from "@/libs/format";
import { classifyPosts, typeGuardedPosts } from "@/libs/notion";
import { PostInfo } from "@/types/notion";

export async function getStaticProps() {
  const db = await getDataBase();
  const posts = typeGuardedPosts(db);
  const allTags = Array.from(
    posts.reduce((acc, post) => {
      if ("Tags" in post.properties) {
        if ("multi_select" in post.properties.Tags) {
          post.properties.Tags.multi_select.forEach(tag => acc.add(tag.name));
        }
      }
      return acc;
    }, new Set<string>([])),
  );

  return { props: { posts, allTags } };
}

const Archives = ({
  posts,
  allTags,
}: {
  posts: PostInfo[];
  allTags: string[];
}) => {
  const sortedPosts = classifyPosts(posts);

  return (
    <>
      <PageSEO
        title="archives | minjae"
        description="태그와 포스트를 한곳에서 확인할 수 있는 기록 저장소입니다."
        path="archives"
      />
      <m.main initial="initial" animate="animate">
        <Title className="my-6 text-4xl">Archives</Title>
        <m.section variants={fadeIn}>
          <SubTitle className="mb-4">
            Tags<span className="ml-1 text-lg">{`- (${allTags.length})`}</span>
          </SubTitle>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Fragment key={tag}>
                <Tag className="text-md" name={tag} />
              </Fragment>
            ))}
          </div>
        </m.section>
        <Divider className="my-6" />
        <m.section variants={fadeIn}>
          <SubTitle className="mb-4">Posts</SubTitle>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {Object.keys(sortedPosts)
              .reverse()
              .map(year => (
                <div key={year}>
                  <h3 className="mb-2 flex items-center text-lg font-bold">
                    {year}
                    <span className="ml-1 text-sm">{`- (${sortedPosts[year].length})`}</span>
                  </h3>
                  <m.ul variants={staggerChild}>
                    {sortedPosts[year].map(post => (
                      <m.li
                        variants={fadeInUp}
                        className="flex items-center gap-2"
                        key={post.id}
                      >
                        <span className="w-14 text-lg font-light tracking-tight">
                          {formatShortDate(post.created_time)}
                        </span>
                        <LinkText
                          href={`/blog/${post.properties.Slug.title[0].plain_text}`}
                        >
                          {post.properties.Title.rich_text[0].plain_text}
                        </LinkText>
                      </m.li>
                    ))}
                  </m.ul>
                </div>
              ))}
          </div>
        </m.section>
      </m.main>
    </>
  );
};

export default Archives;
