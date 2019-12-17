import { useEffect, useState, RefObject } from "react";

export default function useIntersection(
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit
): IntersectionObserverEntry | null {
  const [
    intersectionObserverEntry,
    setIntersectionObserverEntry
  ] = useState<IntersectionObserverEntry | null>(null);
  useEffect(() => {
    if (ref.current) {
      const handler = (entries: IntersectionObserverEntry[]) => {
        console.log({ entries });
        setIntersectionObserverEntry(entries[0]);
      };
      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);
      return () => {
        if (ref.current) {
          observer.disconnect();
        }
      };
    }
    return () => {};
  }, [ref, options.threshold, options.root, options.rootMargin]);
  return intersectionObserverEntry;
}
