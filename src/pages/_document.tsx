import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="google-site-verification"
          content="XJtOBpU5U3tModhdmzxqFas0xo0_saGhnWxPEAC-NHk"
        />
      </Head>
      <body className="text-primary bg-primary transition-[background]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
