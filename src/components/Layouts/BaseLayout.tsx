import React, { ReactNode } from "react";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto max-w-screen-md">
      <Head>
        <title>minjae blog</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <ThemeProvider attribute="class">
        <Header />
        <main className="font-spoqa font-sans">{children}</main>
        <footer>minjae Kim</footer>
      </ThemeProvider>
    </div>
  );
};

export default BaseLayout;
