import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Head from "next/head";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto max-w-screen-md">
      <Head>
        <title>minjae.log</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <Header />
      <main>{children}</main>
      <footer>minjae Kim</footer>
    </div>
  );
};

export default BaseLayout;
