import { defaultImage } from "@/config";
import { PostInfo } from "@/types/notion";
import Image from "next/image";
import Link from "next/link";
import IconText from "./base/IconText";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";

const PostItemCard = ({ created_time, properties, cover }: PostInfo) => {
  const slug = properties.Slug.title[0].plain_text;
  const title = properties.Title.rich_text[0].plain_text;

  const coverImage =
    cover === null
      ? defaultImage
      : cover.type === "external"
      ? cover.external.url
      : cover.file.url;

  return (
    <Link
      href={`/blog/${slug}`}
      className="overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
    >
      <div>
        <Image
          src={coverImage}
          alt={title}
          width={300}
          height={300}
          className="h-64 w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex w-full items-end">
          <IconText Icon={FiCalendar} text={created_time} />
        </div>
        <p className="text-xl font-bold tracking-tight md:text-lg">{title}</p>
      </div>
    </Link>
  );
};

export default PostItemCard;
