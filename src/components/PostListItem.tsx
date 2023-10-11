import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import Link from "next/link";
import { Fragment, memo } from "react";

import { dateFormat } from "@/libs/format";
import { PostInfo } from "@/types/notion";

import IconText from "./base/IconText";
import PlainText from "./base/PlainText";
import Tag from "./base/Tag";

const PostListItem = memo(function PostListItem({ ...post }: PostInfo) {
  const { properties, created_time } = post;
  const createdTime = dateFormat(created_time).replaceAll(" ", "").slice(0, -1);
  const slug = properties.Slug.title[0].plain_text;
  const title = properties.Title.rich_text[0].plain_text;
  const summary =
    properties.Summary.rich_text[0] &&
    properties.Summary.rich_text[0].plain_text;
  const tags = properties.Tags.multi_select;

  return (
    <>
      <Link href={`/blog/${slug}`}>
        <h3 className="text-primary mb-2 text-xl font-bold group-hover:underline">
          {title}
        </h3>
        <PlainText className="group-hover:text-secondary mb-2 transition-all">
          {summary}
        </PlainText>
      </Link>
      <div className="flex justify-between">
        <div className="flex gap-2">
          {tags.map(tag => (
            <Fragment key={tag.id}>
              <Tag name={tag.name} />
            </Fragment>
          ))}
        </div>
        <IconText
          className="text-tertiary group-hover:text-secondary"
          Icon={FiCalendar}
          text={createdTime}
        />
      </div>
    </>
  );
});

export default PostListItem;
