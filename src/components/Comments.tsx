import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const Comments = () => {
  const ref = useRef<HTMLElement>(null);
  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", "mxx-kor/mxx-kor.github.io");
    script.setAttribute("data-repo-id", "R_kgDOJ2XnQw");
    script.setAttribute("data-category", "Comments");
    script.setAttribute("data-category-id", "DIC_kwDOJ2XnQ84CXxYD");
    script.setAttribute("data-mapping", "title");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", theme);
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");

    try {
      ref.current.appendChild(script);
    } catch (error) {
      console.error("Error while rendering giscus widget.", error);
    }
  }, []);

  // 동적 theme 설정
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(".giscus-frame");
    if (iframe) {
      iframe?.contentWindow?.postMessage(
        {
          giscus: {
            setConfig: {
              theme: theme,
            },
          },
        },
        "https://giscus.app",
      );
    }
  }, [theme]);

  return <section ref={ref} />;
};

export default Comments;
