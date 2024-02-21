import { HiOutlineLink } from "@react-icons/all-files/hi/HiOutlineLink";
import { m } from "framer-motion";

import Badge from "@/components/base/Badge";
import Divider from "@/components/base/Divider";
import ImageWithFallback from "@/components/base/ImageWithFallback";
import PlainText from "@/components/base/PlainText";
import SubText from "@/components/base/SubText";
import SubTitle from "@/components/base/SubTitle";
import Title from "@/components/base/Title";
import { PageSEO } from "@/components/SEO";
import { aboutMe, devExperience, projects } from "@/constants/about";
import { fadeIn, staggerChild } from "@/libs/animations";
import { getKeys } from "@/libs/core";
import { calculateToMonths } from "@/libs/format";

const About = () => {
  return (
    <>
      <PageSEO
        title="about me | minjae"
        description="저를 소개합니다."
        path="about"
      />
      <m.main initial="initial" animate="animate" variants={staggerChild}>
        <Title className="my-6 text-2xl">김민재 (Minjae Kim)</Title>
        <m.section
          variants={fadeIn}
          className="mb-6 grid grid-cols-1 items-center gap-2 sm:grid-cols-3"
        >
          <ImageWithFallback
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
        </m.section>
        <m.section variants={fadeIn} className="mb-6">
          <SubTitle>Skills</SubTitle>
          <Divider className="mb-4" />
          <div className="flex flex-wrap gap-2">
            {aboutMe.skills.map(skill => (
              <Badge key={skill} className="text-secondary rounded-lg text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </m.section>
        <m.section variants={fadeIn} className="mb-6">
          <SubTitle>Projects</SubTitle>
          <Divider className="mb-4" />
          <ul>
            {getKeys(projects).map((project, idx) => (
              <li key={idx} className="mb-3 grid grid-cols-1 sm:grid-cols-3">
                <div>
                  <h3 className="text-primary text-lg font-medium tracking-tight">
                    <a
                      target="_blank"
                      href={projects[project].github}
                      className="flex items-center gap-1 hover:underline"
                      rel="noreferrer"
                    >
                      <HiOutlineLink size={18} />
                      {project}
                    </a>
                  </h3>
                  <SubText>since {projects[project].since}</SubText>
                </div>
                <PlainText className="col-span-2">
                  {projects[project].description}
                </PlainText>
              </li>
            ))}
          </ul>
        </m.section>
        <m.section variants={fadeIn}>
          <SubTitle>Dev Experience</SubTitle>
          <Divider className="mb-4" />
          <ul>
            {getKeys(devExperience).map(content => (
              <li
                key={content}
                className="mb-3 grid grid-cols-1 sm:grid-cols-3"
              >
                <div className="mb-1 flex w-full flex-col sm:w-44">
                  <h3 className="text-primary text-md font-medium tracking-tight">
                    {content}
                  </h3>
                  <SubText>{devExperience[content].period}</SubText>
                  <SubText>
                    {calculateToMonths(devExperience[content].period)}개월
                  </SubText>
                  <SubText>
                    {content.includes("프로그래머스") && (
                      <a
                        target="_blank"
                        href="https://mxxcode.tistory.com/category/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4%20%EB%8D%B0%EB%B8%8C%EC%BD%94%EC%8A%A4"
                        rel="noreferrer"
                        className="hover:text-secondary underline underline-offset-2"
                      >
                        관련 블로그 글
                      </a>
                    )}
                  </SubText>
                </div>
                <ul className="text-tertiary col-span-2 list-disc break-keep pl-3.5">
                  {devExperience[content].details.map((detail, idx) => (
                    <li key={idx}>
                      <PlainText className="mb-0.5">{detail}</PlainText>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </m.section>
      </m.main>
    </>
  );
};

export default About;
