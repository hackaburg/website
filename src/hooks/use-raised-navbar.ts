import { useCallback, useEffect, useState } from "react";
import { useEventListener } from "./use-event-listener";

const didScrollOverThreshold = () =>
  typeof window !== undefined && window.scrollY >= 40;

export const useRaisedNavbar = (): boolean => {
  const [isRaised, setIsRaised] = useState(false);

  useEffect(() => {
    setIsRaised(didScrollOverThreshold());
  }, []);

  const scrollHandler = useCallback(
    () => setIsRaised(didScrollOverThreshold()),
    [],
  );

  useEventListener("scroll", scrollHandler);

  return isRaised;
};
