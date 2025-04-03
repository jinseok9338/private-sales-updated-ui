import { useEffect, useRef } from "react";

interface UseIntersectionObserverProps {
  onIntersect: (categoryId: number) => void;
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  onIntersect,
  threshold = 0.3,
  rootMargin = "0px",
}: UseIntersectionObserverProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryId = Number(
              entry.target.getAttribute("data-category-id")
            );
            if (!isNaN(categoryId)) {
              onIntersect(categoryId);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [onIntersect, threshold, rootMargin]);

  const observe = (element: HTMLElement | null) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  const unobserve = (element: HTMLElement | null) => {
    if (element && observerRef.current) {
      observerRef.current.unobserve(element);
    }
  };

  return { observe, unobserve };
};
