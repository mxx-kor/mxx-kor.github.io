import { AppProps } from "next/app";
import "@/styles/globals.css";
import BaseLayout from "@/components/Layouts/BaseLayout";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout || (page => <BaseLayout>{page}</BaseLayout>);
  return getLayout(<Component />);
};

export default App;
