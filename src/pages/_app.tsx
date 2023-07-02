import Header from "@/components/Header";
import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

const Test = ({ Component }: AppProps) => {
  return (
    <>
      <Head>
        <title>minjae.log</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <Header />
      <Component />
    </>
  );
};

export default Test;
