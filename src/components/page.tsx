import * as React from "react";
import { Helmet } from "react-helmet";
import { siteDescription, siteTitle } from "../constants";
import { usePublicFileURL } from "../hooks/use-public-file-url";
import { Background } from "./background";
import { Footer } from "./footer";
import { Cookiebanner } from "./libs/cookiebanner";
import { FacebookPixel } from "./libs/facebook-pixel";
import { GoogleTagManager } from "./libs/google-tag-manager";
import { JumpJS } from "./libs/jump-js";
import "./reset.css";

interface IPageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: IPageProps) => {
  const icon = usePublicFileURL("images/favicon.png");

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
        <link rel="shortcut icon" href={icon}></link>

        <title>{siteTitle}</title>
      </Helmet>

      <Cookiebanner />
      <JumpJS />
      <FacebookPixel />
      <GoogleTagManager />

      {children}

      <Footer />
    </Background>
  );
};
