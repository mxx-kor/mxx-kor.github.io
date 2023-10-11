import "@/styles/globals.css";

import { domAnimation, LazyMotion } from "framer-motion";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import { ReactElement, ReactNode } from "react";

import Font from "@/components/Font";
import BaseLayout from "@/components/Layouts/BaseLayout";
import { seoConfig } from "@/config";
import useGtag from "@/hooks/useGtag";
import { isDev } from "@/libs/core";
import * as gtag from "@/libs/gtag";

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
      <DefaultSeo {...seoConfig} />
      <Font />
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
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
