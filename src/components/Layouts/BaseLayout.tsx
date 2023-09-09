import React, { ReactNode } from "react";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { seoConfig } from "@/config";

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
        <footer>minjae Kim</footer>
      </div>
    </ThemeProvider>
  );
};

export default BaseLayout;
