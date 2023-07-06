import { getBlocks, getDataBase, getPost } from "@/apis/notion";
import BaseLayout from "@/components/Layouts/BaseLayout";
import SubLayout from "@/components/Layouts/SubLayout";
import {
  GetPageResponse,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import { Fragment, ReactElement } from "react";

interface PostProps {
  id: string;
  post: GetPageResponse;
  blocks: ListBlockChildrenResponse;
}

export const getStaticPaths = async () => {
  const { results } = await getDataBase();

  return {
    paths: results.map(post => {
      if ("properties" in post) {
        if ("title" in post.properties.url_title) {
          return {
            params: {
              slug: post.properties.url_title.title[0].plain_text,
            },
          };
        }
      }
    }),
    fallback: false,
  };
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params && context.params.slug;
  const { results } = await getDataBase();

  const { id } = results.filter(post => {
    if ("properties" in post) {
      if ("title" in post.properties.url_title) {
        return post.properties.url_title.title[0].plain_text === slug;
      }
    }
  })[0];

  const [post, blocks] = await Promise.all([getPost(id), getBlocks(id)]);
  return {
    props: {
      post,
      blocks,
    },
  };
}

const renderBlock = (block: any) => {
  switch (block.type) {
    case "heading_1":
      return <h1>{block["heading_1"].rich_text[0].plain_text} </h1>;
    case "image":
      return (
        <Image
          src={block["image"].external.url}
          width={650}
          height={400}
          alt="something"
        />
      );
    case "bulleted_list_item":
      return <li>{block["bulleted_list_item"].rich_text[0].plain_text} </li>;
    case "paragraph":
      return <p>{block["paragraph"].rich_text[0]?.text?.content} </p>;
    default:
      return <p>Undefined type </p>;
  }
};

const Post = ({ post, blocks }: PostProps) => {
  const title =
    "properties" in post &&
    "rich_text" in post.properties.blog_title &&
    post.properties.blog_title.rich_text[0].plain_text;
  return (
    <>
      <h1>{title}</h1>
      {blocks.results.map(block => {
        if ("type" in block) {
          return <Fragment key={block.id}>{renderBlock(block)}</Fragment>;
        }
      })}
    </>
  );
};

Post.getLayout = function getLayout(page: ReactElement) {
  return (
    <SubLayout>
      <BaseLayout>{page}</BaseLayout>
    </SubLayout>
  );
};

export default Post;
