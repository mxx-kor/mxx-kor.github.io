import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import Link from "next/link";
import { Fragment, memo } from "react";

import { getPostInfo } from "@/libs/notion";
import { PostInfo } from "@/types/notion";

import IconText from "./base/IconText";
import PlainText from "./base/PlainText";
import Tag from "./base/Tag";

const PostListItem = memo(function PostListItem({ ...post }: PostInfo) {
  const { title, slug, summary, tags, createdTime } = getPostInfo(post);

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
        <div className="flex flex-wrap gap-2">
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
