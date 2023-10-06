import { Dispatch, SetStateAction, useEffect, useState } from "react";

const observerOption = {
  threshold: 0.4,
  rootMargin: "-5% 0px -90% 0px",
};

const getIntersectionObserver = (
  setState: Dispatch<SetStateAction<string>>,
) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        if (target.dataset.id) {
          setState(target.dataset.id);
        }
      }
    });
  }, observerOption);

  return observer;
};

const useScrollSpy = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = getIntersectionObserver(setActiveId);
    const headingElements = Array.from(document.querySelectorAll(".notion-h"));
    headingElements.map(header => {
      observer.observe(header);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeId;
};

export default useScrollSpy;
