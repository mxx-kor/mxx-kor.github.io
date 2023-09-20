import IconText from "./base/IconText";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { PostInfo } from "@/types/notion";
import PlainText from "./base/PlainText";
import LinkText from "./base/LinkText";

const PostListItem = ({ ...post }: PostInfo) => {
  const { properties, created_time } = post;

  return (
    <>
      <LinkText
        className="text-primary mb-2 text-xl font-bold"
        href={`/blog/${properties.Slug.title[0].plain_text}`}
      >
        {properties.Title.rich_text[0].plain_text}
      </LinkText>
      {properties.Summary.rich_text[0] && (
        <PlainText className="mb-2">
          {properties.Summary.rich_text[0].plain_text}
        </PlainText>
      )}
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
