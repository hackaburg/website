import * as React from "react";
import { Helmet } from "react-helmet";
import { siteDescription, siteTitle, themeColor } from "../constants";
import { usePublicFileURL } from "../hooks/use-public-file-url";
import { Background } from "./background";
import { Footer } from "./footer";
import { Cookiebanner } from "./libs/cookiebanner";
import "./reset.css";

interface IPageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: IPageProps) => {
  const icon = usePublicFileURL("images/favicon.png");
  const opengraphImage = usePublicFileURL("images/og-image.png");

  return (
    <Background>
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
        <meta name="theme-color" content={themeColor} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`http://hackaburg.de${opengraphImage}`}
        />
        <meta
          property="og:image:secure_url"
          content={`https://hackaburg.de${opengraphImage}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="650" />
        <link rel="icon" type="image/png" sizes="16x16" href={icon} />
        <link rel="shortcut icon" href={icon}></link>

        <title>{siteTitle}</title>
      </Helmet>

      <Cookiebanner />

      {children}

      <Footer />
    </Background>
  );
};
