import { PageSEO } from "@/components/SEO";
import Badge from "@/components/base/Badge";
import Divider from "@/components/base/Divider";
import PlainText from "@/components/base/PlainText";
import SubTitle from "@/components/base/SubTitle";
import Title from "@/components/base/Title";
import Image from "next/image";
import { HiOutlineLink } from "@react-icons/all-files/hi/HiOutlineLink";
import { aboutMe, devExperience, projects } from "@/constants/about";
import { getKeys } from "@/libs/core";
import { m } from "framer-motion";
import { fadeIn, staggerChild } from "@/libs/animations";

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
                  <span className="text-quaternary text-sm italic">
                    since {projects[project].since}
                  </span>
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
            {getKeys(devExperience).map((content, idx) => (
              <li key={idx} className="mb-3 grid grid-cols-1 sm:grid-cols-3">
                <div className="w-full sm:w-44">
                  <h3 className="text-primary text-md font-medium tracking-tight">
                    {content}
                  </h3>
                  <span className="text-quaternary text-sm italic">
                    {devExperience[content].period}
                  </span>
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
