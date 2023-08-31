import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Head from "next/head";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>minjae.log</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <div className="container mx-auto max-w-screen-md dark">
        <Header />
        <main className="font-spoqa font-sans dark:bg-black">{children}</main>
        <footer>minjae Kim</footer>
      </div>
    </>
  );
};

export default BaseLayout;
