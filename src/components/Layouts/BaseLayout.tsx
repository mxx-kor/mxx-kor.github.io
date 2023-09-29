import React, { ReactNode } from "react";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { seoConfig } from "@/config";
import Contacts from "../Contacts";
import Divider from "../base/Divider";
import CopyRight from "../CopyRight";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container mx-auto max-w-screen-md px-6 font-spoqa">
        <DefaultSeo {...seoConfig} />
        <Header />
        {children}
        <Divider className="my-8" />
        <footer className="mb-10 flex flex-col items-end text-sm">
          <Contacts />
          <CopyRight />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default BaseLayout;
