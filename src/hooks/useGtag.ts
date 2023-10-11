import { useRouter } from "next/router";
import { useEffect } from "react";

import { isDev } from "@/libs/core";
import { pageview } from "@/libs/gtag";

const useGtag = () => {
  const router = useRouter();

  useEffect(() => {
    if (isDev) return;

    const handleRouteChange = (url: URL) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};

export default useGtag;
