import { useEffect } from "react";

export const useEventListener = (
  type: string,
  listener: EventListenerOrEventListenerObject,
) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener(type, listener);

      return () => {
        window.removeEventListener(type, listener);
      };
    }
  }, [type, listener]);
};
