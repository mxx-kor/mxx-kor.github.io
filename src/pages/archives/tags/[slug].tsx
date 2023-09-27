import { getDataBase } from "@/apis/notion";
import PostListItem from "@/components/PostListItem";
import { PageSEO } from "@/components/SEO";
import Badge from "@/components/base/Badge";
import Divider from "@/components/base/Divider";
import PlainText from "@/components/base/PlainText";
import SubTitle from "@/components/base/SubTitle";
import Title from "@/components/base/Title";
import { typeGuardedPosts } from "@/libs/notion";
import { PostInfo } from "@/types/notion";
import { GetStaticPropsContext } from "next";
import { m } from "framer-motion";
import { fadeInUp, staggerChild } from "@/libs/animations";

export const getStaticPaths = async () => {
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
  const paths = allTags.map(tag => ({
    params: { slug: tag },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params && context.params.slug;
  const db = await getDataBase({
    filter: {
      property: "Tags",
      multi_select: {
        contains: slug,
      },
    },
  });
  const posts = typeGuardedPosts(db);

  return { props: { slug, posts } };
};

const TagPage = ({ slug, posts }: { slug: string; posts: PostInfo[] }) => {
  return (
    <>
      <PageSEO
        title={`Tags - ${slug} | minjae`}
        description={`${slug} 태그에 관련된 블로그 포스트를 모아놨어요.`}
        path={`archive/tags/${slug}`}
      />
      <m.main initial="initial" animate="animate">
        <Title className="my-6 text-4xl font-bold">
          Tags
          <Badge className="text-secondary ml-4 rounded-lg text-2xl">
            #{slug}
          </Badge>
        </Title>
        <PlainText>
          <span className="text-primary">{posts.length}개</span>의 포스트가
          있습니다.
        </PlainText>
        <section>
          <SubTitle className="mb-4">Posts</SubTitle>
          <Divider className="mb-4" />
          <m.ul
            variants={staggerChild}
            className="mb-12 grid w-full gap-8 lg:grid-cols-2 lg:gap-12"
          >
            {posts.map(post => (
              <m.li variants={fadeInUp} key={post.id} className="group">
                <PostListItem {...post} />
              </m.li>
            ))}
          </m.ul>
        </section>
      </m.main>
    </>
  );
};

export default TagPage;
