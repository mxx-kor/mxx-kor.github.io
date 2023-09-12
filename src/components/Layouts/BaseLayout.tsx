import React, { ReactNode } from "react";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { seoConfig, siteConfig } from "@/config";
import Link from "next/link";
import Contacts from "../Contacts";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container mx-auto max-w-screen-md font-spoqa font-sans">
        <DefaultSeo {...seoConfig} />
        <Header />
        {children}
        <footer className="flex flex-col text-sm items-end">
          <Contacts />
          <p>
            <span>© </span>
            <Link href="/about">{siteConfig.author.name}</Link>
            <span> Powered by </span>
            <Link href="https://nextjs.org/">Next.js</Link>
            <span>, </span>
            <Link href="https://pages.github.com/">Github Pages</Link>
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default BaseLayout;
