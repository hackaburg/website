import { useEffect, useState } from "react";

const isGoogleMapsLoaded = () => typeof google !== undefined;

export const useGoogleMaps = (callback: () => void): void => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateLoadedState = () => {
      if (isGoogleMapsLoaded()) {
        setIsLoaded(true);
        clearInterval(intervalID);

        callback();
      }
    };

    const intervalID = setInterval(updateLoadedState, 200);

    return () => {
      if (!isLoaded) {
        clearInterval(intervalID);
      }
    };
  }, []);
};
