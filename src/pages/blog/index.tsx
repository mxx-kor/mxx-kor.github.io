import { getDataBase } from "@/apis/notion";
import IconText from "@/components/IconText";
import { dateFormat } from "@/libs/format";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import Link from "next/link";

type PostInfo = {
  id: string;
  created_time: string;
  properties: {
    Slug: { id: string; title: { plain_text: string }[] };
    Title: { id: string; rich_text: { plain_text: string }[] };
    Tags: { id: string; multi_select: { id: string; name: string }[] };
  };
};

export async function getStaticProps() {
  const db = await getDataBase();
  const posts = db.results.map(post => {
    const data = post as PageObjectResponse;
    const result = {
      id: data.id,
      properties: data.properties,
      created_time: dateFormat(data.created_time),
    };
    return result;
  });

  return { props: { posts } };
}

const Blog = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <main className="font-spoqa font-sans">
      <div className="text-3xl font-bold mb-3">Blog</div>
      <ul>
        {posts.map(({ id, created_time, properties }) => (
          <li key={id}>
            <Link
              className="text-2xl font-medium"
              href={`/blog/${properties.Slug.title[0].plain_text}`}
            >
              {properties.Title.rich_text[0].plain_text}
            </Link>
            <IconText Icon={FiCalendar} text={created_time} />
            <div>
              {properties.Tags.multi_select.map(tag => (
                <span
                  className="border rounded-lg px-1 mr-2 text-sm"
                  key={tag.id}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;
