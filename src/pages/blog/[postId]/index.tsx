import BaseLayout from "@/components/Layouts/BaseLayout";
import SubLayout from "@/components/Layouts/SubLayout";
import { ReactElement } from "react";

const Post = () => {
  return <div>Post</div>;
};

Post.getLayout = function getLayout(page: ReactElement) {
  return (
    <SubLayout>
      <BaseLayout>{page}</BaseLayout>
    </SubLayout>
  );
};

export default Post;
