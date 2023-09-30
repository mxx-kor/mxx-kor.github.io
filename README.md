# <img width="25px" height="25px" src="https://github.com/mxx-kor/mxx-kor.github.io/assets/82329983/dc78ac28-9a42-4fea-b1f1-4975f16fc451" alt="minjae blog logo"/> Minjae Blog

> 배포 링크 - https://mxx-kor.github.io/
>
> since 2023.08

<br />

```
🧐 개발 과정에 마주하는 다양한 문제를 기록하고 공유하기 위한 개발 블로그
```

## 주요 기능

- 노션으로 작성한 글 표시
- 검색 기능 (포스트 제목, 태그 별)
- 다크 모드
- 댓글 기능
- Archiving
- 반응형 디자인

## 기술 스택

<p>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=ffffff"/>
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/Framer Motion-0055FF?style=for-the-badge&logo=Framer&logoColor=ffffff"/>
    <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=Tailwind%20CSS&logoColor=white"/>
    <img src="https://img.shields.io/badge/Prettier-373338?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>
    <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=ffffff"/>
    <br/>
    And <strong>Github-Pages</strong>, <strong>Notion SDK (@notionhq/client)</strong>, <strong>react-notion-x</strong>
</p>

## 프로젝트 특징

- Notion을 CMS로 활용하였고 이를 SSG로 정적 사이트로 제작하였습니다.
- Next.js가 제공하는 Link, Font 최적화를 활용하였습니다.

### SEO

- 각 페이지에 맞는 메타 태그와 robots.txt, sitemap.xml을 생성하였습니다.
- next-seo, next-sitemap 라이브러리를 활용하였습니다.

### 이미지 최적화

- static export를 사용하여 Next.js의 이미지 최적화를 활용할 수 없었습니다.
- next-export-optimize-images 라이브러리를 사용하여 최적화를 진행했습니다.

### CI/CD

- Github actions를 활용해 빌드, 배포를 자동화하였습니다.

### 폴더 구조

```
Minjae Blog
├── public
│    └── images
└── src
    ├── assets
    │   └── fonts
    ├── apis
    ├── components
    │   └── layouts
    ├── constants
    ├── hooks
    ├── libs
    ├── pages
    │   ├── about
    │   ├── archives
    │   │   └── tags
    │   └── blog
    ├── styles
    └── types
```
