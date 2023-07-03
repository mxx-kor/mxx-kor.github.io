import BaseLayout from "@/components/Layouts/BaseLayout";
import SubLayout from "@/components/Layouts/SubLayout";
import Image from "next/image";
import { ReactElement } from "react";

const About = () => {
  return (
    <>
      <div>About 페이지입니다.</div>
      <Image
        src="/images/profile.png"
        width={144}
        height={144}
        alt="Profile Photo"
      />
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <SubLayout>
      <BaseLayout>{page}</BaseLayout>
    </SubLayout>
  );
};

export default About;
