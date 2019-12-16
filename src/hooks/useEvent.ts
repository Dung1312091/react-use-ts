import { useEffect } from "react";

const useEvent = (
  name: string,
  handler: (event: any) => void,
  target?: any,
  options?: object
) => {
  useEffect(() => {
    if (target && target.current) {
      target.current.addEventListener(name, handler, options);
      return () => {
        target.current.addEventListener(name, handler, options);
      };
    } else {
      window.addEventListener(name, handler, options);
      return () => {
        window.addEventListener(name, handler, options);
      };
    }
  }, [name, handler, target, options]);
};
export default useEvent;
