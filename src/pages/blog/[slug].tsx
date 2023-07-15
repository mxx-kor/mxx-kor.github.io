import { getBlocks, getDataBase, getPost } from "@/apis/notion";
import Comments from "@/components/Comments";
import BaseLayout from "@/components/Layouts/BaseLayout";
import SubLayout from "@/components/Layouts/SubLayout";
import { CustomBlockObjectResponse } from "@/types/notion";
import { isFullPage } from "@notionhq/client";
import {
  GetPageResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment, ReactElement } from "react";

interface PostProps {
  id: string;
  post: GetPageResponse;
  blocks: CustomBlockObjectResponse[];
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
    if (!isFullPage(post)) return;
    if ("title" in post.properties.url_title) {
      return post.properties.url_title.title[0].plain_text === slug;
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

export const Text = ({ text }: { text: Array<RichTextItemResponse> }) => {
  if (!text) {
    return null;
  }

  return text.map(value => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value as TextRichTextItemResponse;
    const textDecoration = `${bold ? "font-bold" : ""} ${
      code ? `bg-black text-red` : ""
    } ${color !== "default" ? `text-${color}` : ""} ${italic ? "italic" : ""} ${
      underline ? "underline" : ""
    } ${strikethrough ? "line-through" : ""}`;
    return (
      <span className={textDecoration.trim()} key={text.content}>
        {text.link ? (
          <Link href={text.link.url}>{text.content}</Link>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

const renderNestedList = (block: CustomBlockObjectResponse) => {
  const { type } = block;

  if (type === "numbered_list_item") {
    if (!block.children) return;
    const isNumberedList = block.children[0].type === "numbered_list_item";

    if (isNumberedList) {
      return <ol>{block.children?.map(block => renderBlock(block))}</ol>;
    }
  } else if (type === "bulleted_list_item") {
    if (!block.children) return;
    const isBulletedList = block.children[0].type === "bulleted_list_item";

    if (isBulletedList) {
      return <ul>{block.children?.map(block => renderBlock(block))}</ul>;
    }
  }
};

const renderBlock = (block: CustomBlockObjectResponse) => {
  const { type, id } = block;

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={block[type].rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="text-xl font-bold">
          <Text text={block[type].rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="text-lg font-bold">
          <Text text={block[type].rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={block[type].rich_text} />
        </h3>
      );
    case "bulleted_list_item":
      return (
        <li key={block.id}>
          <Text text={block[type].rich_text} />
          {!!block.children && renderNestedList(block)}
        </li>
      );
    case "numbered_list_item":
      return (
        <li key={block.id}>
          <Text text={block[type].rich_text} />
          {!!block.children && renderNestedList(block)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input
              type="checkbox"
              id={id}
              defaultChecked={block[type].checked}
            />{" "}
            <Text text={block[type].rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={block[type].rich_text} />
          </summary>
          {block.children?.map(child => (
            <Fragment key={child.id}>{renderBlock(child)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return (
        <div>
          <strong>{block[type].title}</strong>
          {block.children?.map(child => renderBlock(child))}
        </div>
      );
    case "image":
      if (block[type].type === "external") {
        const { external } = block[type] as {
          type: "external";
          external: { url: string };
          caption: RichTextItemResponse[];
        };
        return (
          <figure key={block.id}>
            <Image
              className="w-auto h-auto"
              width={300}
              height={300}
              src={external.url}
              alt={
                block[type].caption ? block[type].caption[0]?.plain_text : ""
              }
            />
            {block[type].caption && (
              <figcaption>{block[type].caption[0]?.plain_text}</figcaption>
            )}
          </figure>
        );
      } else {
        const { file } = block[type] as {
          type: "file";
          file: { url: string; expiry_time: string };
          caption: RichTextItemResponse[];
        };
        return (
          <figure key={block.id}>
            <Image
              className="w-auto h-auto"
              width={300}
              height={300}
              src={file.url}
              alt={
                block[type].caption ? block[type].caption[0]?.plain_text : ""
              }
            />
            {block[type].caption && (
              <figcaption>{block[type].caption[0]?.plain_text}</figcaption>
            )}
          </figure>
        );
      }
    case "divider":
      return <hr key={id} />;
    case "quote":
      return (
        <blockquote key={id}>{block[type].rich_text[0].plain_text}</blockquote>
      );
    case "code":
      return (
        <pre>
          <code key={id}>{block[type].rich_text[0].plain_text}</code>
        </pre>
      );
    case "file":
      if (block[type].type === "external") {
        const { external } = block[type] as {
          type: "external";
          external: { url: string };
          caption: RichTextItemResponse[];
        };
        return (
          <figure>
            <div>
              <Link href={external.url} passHref>
                {
                  external.url
                    .split("/")
                    [external.url.split("/").length - 1].split("?")[0]
                }
              </Link>
            </div>
            {block[type].caption && (
              <figcaption>{block[type].caption[0]?.plain_text}</figcaption>
            )}
          </figure>
        );
      } else {
        const { file } = block[type] as {
          type: "file";
          file: { url: string; expiry_time: string };
          caption: RichTextItemResponse[];
        };
        return (
          <figure>
            <div>
              <Link href={file.url} passHref>
                {
                  file.url
                    .split("/")
                    [file.url.split("/").length - 1].split("?")[0]
                }
              </Link>
            </div>
            {block[type].caption && (
              <figcaption>{block[type].caption[0]?.plain_text}</figcaption>
            )}
          </figure>
        );
      }
    case "bookmark":
      return (
        <a href={block[type].url} target="_brank">
          {block[type].url}
        </a>
      );
    case "table": {
      return (
        <table>
          <tbody>
            {block.children?.map((child, i: number) => {
              const RowElement =
                block[type].has_column_header && i == 0 ? "th" : "td";
              return (
                <tr key={child.id}>
                  {child.table_row?.cells?.map((cell, i: number) => {
                    return (
                      <RowElement key={`${i}`}>
                        <Text text={cell} />
                        {cell.map(c => (
                          <RowElement key={`${c.plain_text}-${i}`}>
                            <Text text={cell} />
                          </RowElement>
                        ))}
                      </RowElement>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    case "column_list": {
      return (
        <div className="flex">
          {block.children?.map(block => renderBlock(block))}
        </div>
      );
    }
    case "column": {
      return (
        <div key={block.id}>
          {block.children?.map(child => renderBlock(child))}
        </div>
      );
    }
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

const Post = ({ post, blocks }: PostProps) => {
  console.log(blocks);
  const title =
    isFullPage(post) &&
    "rich_text" in post.properties.blog_title &&
    post.properties.blog_title.rich_text[0].plain_text;
  const repo = process.env.COMMENTS_REPO;
  const repoId = process.env.COMMENTS_REPO_ID;
  const category = process.env.COMMENTS_CATEGORY;
  const categoryId = process.env.COMMENTS_CATEGORY_ID;

  return (
    <>
      <h1 className="text-brown">{title}</h1>
      {blocks.map(block => {
        return <Fragment key={block.id}>{renderBlock(block)}</Fragment>;
      })}
      {repo && repoId && category && categoryId && (
        <Comments
          repo={repo}
          repoId={repoId}
          category={category}
          categoryId={categoryId}
        />
      )}
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
