import * as React from "react";
import { Helmet } from "react-helmet";
import { siteDescription, siteTitle } from "../constants";
import { usePublicFileURL } from "../hooks/use-public-file-url";
import { Footer } from "./footer";
import "./reset.css";

interface IPageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: IPageProps) => {
  const icon = usePublicFileURL("images/logo.png");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="description" content={siteDescription} />
        <meta
          name="keywords"
          content="hackathon,regensburg,innovation,development,design,entrepreneurship"
        />
        <meta name="theme-color" content="#9ac017" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://hackaburg.de/assets/images/og-image.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://hackaburg.de/assets/images/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="650" />
        <link rel="icon" type="image/png" sizes="16x16" href={icon} />

        <title>{siteTitle}</title>

        <script
          id="cookiebanner"
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.1/cookiebanner.min.js"
          integrity="sha256-tKsZSIsHQmNHgO2qfK8KT9SSOvKTbxgskN5dfhrpUS8="
          crossOrigin="anonymous"
          data-message="We use cookies to improve your browsing experience."
          data-moreinfo="https://hackaburg.de/imprint.html"
        ></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js"
          integrity="sha256-9Nt2r+tJnSd2A2CRUvnjgsD+ES1ExvjbjBNqidm9doI="
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/jump.js/1.0.2/jump.min.js"
          integrity="sha256-nLkfxAF8lAuFgs9kcFqZff/MohZAA8mNLQ/buYWwOLs="
          crossOrigin="anonymous"
        ></script>

        <script src="https://www.googletagmanager.com/gtag/js?id=UA-90366502-1"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }

            gtag("js", new Date());
            gtag("config", "UA-90366502-1", {
                "anonymize_ip": true
            })
          `}
        </script>
      </Helmet>

      {children}

      <Footer />
    </>
  );
};
