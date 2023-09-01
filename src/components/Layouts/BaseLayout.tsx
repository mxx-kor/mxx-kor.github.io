import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>minjae.log</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <div className="container mx-auto max-w-screen-md">
        <ThemeProvider attribute="class">
          <Header />
          <main className="font-spoqa font-sans">{children}</main>
          <footer>minjae Kim</footer>
        </ThemeProvider>
      </div>
    </>
  );
};

export default BaseLayout;
