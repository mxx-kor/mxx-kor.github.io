import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

interface hElementPositionRefType {
  id: string;
  top: number;
}

const useScrollSpy = () => {
  const hElementPositions = useRef<hElementPositionRefType[]>();
  const [activeId, setActiveId] = useState("");
  const { scrollY } = useScroll();

  const getHTagPositions = () => {
    const pageTop = 201;
    hElementPositions.current = Array.from(
      document.querySelectorAll<HTMLElement>(".notion-h"),
    )
      .filter(header => header.querySelector(".notion-h-title")?.textContent)
      .map(header => ({
        id: header.dataset.id as string,
        top: header.offsetTop + pageTop + 1,
      }));
  };

  useMotionValueEvent(scrollY, "change", latest => {
    getHTagPositions();
    let headingId = "";
    if (hElementPositions.current) {
      for (let i = 0; i < hElementPositions.current.length; i++) {
        if (latest >= hElementPositions.current[i].top) {
          headingId = hElementPositions.current[i].id;
          continue;
        }
        break;
      }
      setActiveId(headingId);
    }
  });

  return activeId;
};

export default useScrollSpy;
