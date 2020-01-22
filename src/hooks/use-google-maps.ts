import { graphql, useStaticQuery } from "gatsby";
import { useEffect } from "react";

const isGoogleMapsLoaded = () => window.google !== undefined;
const checkIntervalMilliseconds = 200;

export const useGoogleMapsWhenLoaded = (callback: () => void): void => {
  useEffect(() => {
    const updateLoadedState = () => {
      if (!isGoogleMapsLoaded()) {
        return;
      }

      if (intervalID != null) {
        clearInterval(intervalID);
        intervalID = null;
      }

      callback();
    };

    let intervalID: NodeJS.Timeout | null = setInterval(
      updateLoadedState,
      checkIntervalMilliseconds,
    );

    return () => {
      if (intervalID != null) {
        clearTimeout(intervalID);
      }
    };
  }, [callback]);
};

interface IQueryResult {
  site?: {
    siteMetadata?: {
      apiKeys?: {
        GOOGLE_MAPS_API_KEY?: string;
      };
    };
  };
}

export const useGoogleMapsApiKey = (): string | undefined => {
  const result = useStaticQuery<IQueryResult>(graphql`
    query GoogleMapsApiKeyQuery {
      site {
        siteMetadata {
          apiKeys {
            GOOGLE_MAPS_API_KEY
          }
        }
      }
    }
  `);

  return result.site?.siteMetadata?.apiKeys?.GOOGLE_MAPS_API_KEY;
};
