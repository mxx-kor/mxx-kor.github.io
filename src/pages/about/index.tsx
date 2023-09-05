import Image from "next/image";

const About = () => {
  return (
    <main>
      <div>About 페이지입니다.</div>
      <Image
        src="/images/profile.png"
        width={144}
        height={144}
        alt="Profile Photo"
      />
    </main>
  );
};

export default About;
