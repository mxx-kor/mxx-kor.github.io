import { PageSEO } from "@/components/SEO";
import Badge from "@/components/base/Badge";
import Divider from "@/components/base/Divider";
import PlainText from "@/components/base/PlainText";
import SubTitle from "@/components/base/SubTitle";
import Title from "@/components/base/Title";
import Image from "next/image";

const aboutMe = {
  introduce: [
    "프론트엔드 개발을 통해 비즈니스 가치를 높이는 개발자를 목표로 합니다.",
    "사용성과 성능을 개선하는 작업을 좋아합니다. 개선 방향을 고민하고 더 나은 방법을 찾는 과정을 즐깁니다.",
    "꾸준히 학습하며 개인적인 목표로 정한 365일 개발하기를 달성한 경험과 깃허브, 블로그에 기록하고 공유하고자 노력합니다.",
    "커뮤니케이션을 통한 성장을 추구합니다. 팀 프로젝트, 스터디를 진행하며 동료들과 경험을 공유함으로 성장하는 것에 가치를 두고 있습니다.",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "HTML/CSS",
    "SCSS",
    "Emotion",
  ],
};

const About = () => {
  return (
    <>
      <PageSEO
        title="about me | minjae"
        description="저를 소개합니다."
        path="about"
      />
      <main>
        <Title>김민재 (Minjae Kim)</Title>
        <section className="mb-4 grid grid-cols-1 items-center sm:grid-cols-3">
          <Image
            className="mx-auto mb-4 sm:mb-0"
            src="/images/profile.png"
            width={200}
            height={200}
            alt="Profile Photo"
          />
          <div className="col-span-2">
            {aboutMe.introduce.map((p, idx) => (
              <PlainText key={idx} className="mb-1.5">
                {p}
              </PlainText>
            ))}
          </div>
        </section>
        <SubTitle>Skills</SubTitle>
        <Divider className="mb-4" />
        <div className="flex flex-wrap gap-2">
          {aboutMe.skills.map(skill => (
            <Badge key={skill} className="text-secondary rounded-lg text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </main>
    </>
  );
};

export default About;
