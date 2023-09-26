import IconText from "./base/IconText";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { PostInfo } from "@/types/notion";
import PlainText from "./base/PlainText";
import Link from "next/link";
import Tag from "./base/Tag";
import { Fragment } from "react";
import { dateFormat } from "@/libs/format";

const PostListItem = ({ ...post }: PostInfo) => {
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
};

export default PostListItem;
