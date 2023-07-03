import BaseLayout from "@/components/Layouts/BaseLayout";
import SubLayout from "@/components/Layouts/SubLayout";
import Link from "next/link";
import { ReactElement } from "react";

const Blog = () => {
  return (
    <>
      <div className="text-3xl">Blog</div>
      <Link href="/blog/1">1번 포스트로</Link>
    </>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <SubLayout>
      <BaseLayout>{page}</BaseLayout>
    </SubLayout>
  );
};

export default Blog;
