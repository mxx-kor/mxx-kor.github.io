import { PageSEO } from "@/components/SEO";
import Image from "next/image";

const About = () => {
  return (
    <>
      <PageSEO
        title="about me | minjae"
        description="저를 소개합니다."
        path="about"
      />
      <main>
        <Image
          src="/images/profile.png"
          width={144}
          height={144}
          alt="Profile Photo"
        />
      </main>
    </>
  );
};

export default About;
