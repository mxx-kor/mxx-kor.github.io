import Link from "next/link";
import IconText from "./base/IconText";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { PostInfo } from "@/types/notion";

const PostListItem = ({ ...post }: PostInfo) => {
  const { properties, created_time } = post;
  return (
    <>
      <Link
        className="text-2xl font-medium"
        href={`/blog/${properties.Slug.title[0].plain_text}`}
      >
        {properties.Title.rich_text[0].plain_text}
      </Link>
      <div className="text-sm">
        {properties.Summary.rich_text[0].plain_text}
      </div>
      <div className="flex justify-between">
        <div>
          {properties.Tags.multi_select.map(tag => (
            <span className="mr-2 rounded-lg border px-1 text-sm" key={tag.id}>
              {tag.name}
            </span>
          ))}
        </div>
        <IconText Icon={FiCalendar} text={created_time} />
      </div>
    </>
  );
};

export default PostListItem;
