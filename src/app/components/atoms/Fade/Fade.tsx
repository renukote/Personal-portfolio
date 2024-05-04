"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

export function Fade({ children }: { children: ReactNode }) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentElement = containerRef.current;

    if (currentElement && !isInView) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  });

  return (
    <div
      className={`w-full transition-all duration-700 ${isInView ? "opacity-1 translate-y-0" : "translate-y-24 opacity-0 "}`}
      ref={containerRef}
    >
      {children}
    </div>
  );
}
