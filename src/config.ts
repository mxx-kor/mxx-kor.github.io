import { DefaultSeoProps } from "next-seo";

export const siteConfig = {
  url: "https://mxx-kor.github.io",
  title: "minjae blog",
  description: "개발 과정에 겪거나 탐구한 내용들을 기록하는 공간입니다.",
  author: {
    name: "Minjae Kim",
    photo: "https://avatars.githubusercontent.com/u/82329983?v=4",
    bio: "Frontend Engineer",
    contacts: {
      email: "minjae7728@gmail.com",
      github: "mxx-kor",
    },
  },
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
  },
  additionalMetaTags: [
    {
      name: "author",
      content: siteConfig.author.name,
    },
  ],
};
