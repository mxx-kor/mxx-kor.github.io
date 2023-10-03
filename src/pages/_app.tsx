import { AppProps } from "next/app";
import "@/styles/globals.css";
import BaseLayout from "@/components/Layouts/BaseLayout";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Font from "@/components/Font";
import { DefaultSeo } from "next-seo";
import { seoConfig } from "@/config";
import { LazyMotion, domAnimation } from "framer-motion";
import Script from "next/script";
import * as gtag from "@/libs/gtag";
import { isDev } from "@/libs/core";
import useGtag from "@/hooks/useGtag";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  useGtag();
  const getLayout =
    Component.getLayout || (page => <BaseLayout>{page}</BaseLayout>);
  return getLayout(
    <>
      <ThemeProvider attribute="class">
        <DefaultSeo {...seoConfig} />
        <Font />
        <LazyMotion features={domAnimation}>
          <Component {...pageProps} />
        </LazyMotion>
      </ThemeProvider>
      {/* <!-- Google tag (gtag.js) --> */}
      {!isDev && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </>,
  );
};

export default App;
