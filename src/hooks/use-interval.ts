import { useEffect } from "react";

export const useInterval = (handler: () => void, ms: number): void => {
  useEffect(() => {
    const intervalID = setInterval(handler, ms);

    return () => {
      clearInterval(intervalID);
    };
  }, [handler, ms]);
};
