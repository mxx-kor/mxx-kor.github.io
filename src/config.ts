import { DefaultSeoProps } from "next-seo";

export const defaultImage =
  "https://avatars.githubusercontent.com/u/82329983?v=4";

export const siteConfig = {
  url: "https://mxx-kor.github.io",
  title: "minjae blog",
  description: "개발 과정에 겪거나 탐구한 내용들을 기록하는 공간입니다.",
  author: {
    name: "Minjae Kim",
    photo: defaultImage,
    bio: "Frontend Engineer",
    contacts: {
      email: "minjae7728@gmail.com",
      github: "mxx-kor",
      linkedin:
        "https://www.linkedin.com/in/%EB%AF%BC%EC%9E%AC-%EA%B9%80-35a409204/",
    },
  },
  menu: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Archives",
      path: "/archives",
    },
    {
      label: "About",
      path: "/about",
    },
  ],
};

export const seoConfig: DefaultSeoProps = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: "website",
    locale: "ko-KR",
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: defaultImage,
        width: 285,
        height: 167,
      },
    ],
  },
  additionalMetaTags: [
    {
      name: "author",
      content: siteConfig.author.name,
    },
  ],
};
