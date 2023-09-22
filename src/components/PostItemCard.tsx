import { defaultImage } from "@/config";
import { PostInfo } from "@/types/notion";
import Image from "next/image";
import Link from "next/link";
import IconText from "./base/IconText";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { m } from "framer-motion";
import { fadeInUp } from "@/libs/animations";
import { unsplashImages } from "@/libs/images";

interface postItemCardProps {
  idx: number;
}

const PostItemCard = ({
  created_time,
  properties,
  cover,
  idx,
}: postItemCardProps & PostInfo) => {
  const slug = properties.Slug.title[0].plain_text;
  const title = properties.Title.rich_text[0].plain_text;

  const coverImage = cover === null ? defaultImage : unsplashImages[idx];

  return (
    <Link href={`/blog/${slug}`} className="overflow-hidden rounded-xl">
      <m.div
        variants={fadeInUp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative"
      >
        <Image
          src={coverImage}
          alt={title}
          width={300}
          height={300}
          className="h-64 w-full rounded-xl object-cover"
          draggable={false}
        />
        <div className="absolute bottom-2 w-full px-6 py-4 text-neutral-100">
          <p className="mb-2 text-xl font-bold tracking-tight md:text-lg">
            {title}
          </p>
          <div className="flex justify-end">
            <IconText Icon={FiCalendar} text={created_time} />
          </div>
        </div>
      </m.div>
    </Link>
  );
};

export default PostItemCard;
