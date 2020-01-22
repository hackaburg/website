import { graphql, useStaticQuery } from "gatsby";
import { useCDNScript } from "./use-cdn-script";

const isGoogleMapsLoaded = () => window.google !== undefined;

export const useGoogleMapsWhenLoaded = (callback: () => void): void => {
  useCDNScript(isGoogleMapsLoaded, callback);
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
