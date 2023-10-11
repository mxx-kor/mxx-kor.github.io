import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { defaultImage } from "@/config";
import { unsplashImages } from "@/constants/images";
import { fadeInUp } from "@/libs/animations";
import { dateFormat } from "@/libs/format";
import { PostInfo } from "@/types/notion";

import IconText from "./base/IconText";

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
  const createdTime = dateFormat(created_time).replaceAll(" ", "").slice(0, -1);
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
          priority={true}
        />
        <div className="absolute bottom-2 w-full px-6 py-4 text-neutral-100">
          <p className="mb-2 text-xl font-bold tracking-tight md:text-lg">
            {title}
          </p>
          <div className="flex justify-end">
            <IconText Icon={FiCalendar} text={createdTime} />
          </div>
        </div>
      </m.div>
    </Link>
  );
};

export default PostItemCard;
