import { siteConfig } from "@/config";
import { getKeys } from "@/libs/core";
import Link from "next/link";
import React, { Fragment } from "react";

const poweredBy = {
  "Next.js": "https://nextjs.org/",
  "Notion API": "https://developers.notion.com/",
  "Github Pages": "https://pages.github.com/",
};

const typedPoweredBy = getKeys(poweredBy);

const CopyRight = () => {
  return (
    <p className="text-tertiary">
      <span>© </span>
      <Link href="/about" className="hover:text-primary hover:underline">
        {siteConfig.author.name}
      </Link>
      <span> Powered by </span>
      {typedPoweredBy.map(content => (
        <Fragment key={content}>
          <a
            target="_blank"
            href={poweredBy[content]}
            rel="noreferrer"
            className="hover:text-primary hover:underline"
          >
            {content}
          </a>
          {content !== typedPoweredBy.at(-1) && <span>, </span>}
        </Fragment>
      ))}
    </p>
  );
};

export default CopyRight;
