import { useEffect } from "react";

const checkIntervalMilliseconds = 200;

export const useCDNScript = (
  checkAvailability: () => boolean,
  handler: () => void,
) => {
  useEffect(() => {
    const intervalHandler = () => {
      const isAvailable = checkAvailability();

      if (!isAvailable) {
        return;
      }

      if (intervalID != null) {
        clearInterval(intervalID);
        intervalID = null;
      }

      handler();
    };

    let intervalID: NodeJS.Timeout | null = setInterval(
      intervalHandler,
      checkIntervalMilliseconds,
    );

    return () => {
      if (intervalID != null) {
        clearInterval(intervalID);
      }
    };
  }, [checkAvailability, handler]);
};
