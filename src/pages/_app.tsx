import { AppProps } from "next/app";
import Header from "@/components/Header";

const Test = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default Test;
