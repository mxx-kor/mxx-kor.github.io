import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Head from "next/head";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Head>
        <title>minjae.log</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>minjae Kim</footer>
    </div>
  );
};

export default BaseLayout;
