import { AppProps } from "next/app";
import "@/styles/globals.css";
import BaseLayout from "@/components/Layouts/BaseLayout";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Font from "@/components/Font";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout || (page => <BaseLayout>{page}</BaseLayout>);
  return getLayout(
    <>
      <Font />
      <Component {...pageProps} />
    </>,
  );
};

export default App;
