import * as React from "react";
import { css } from "@emotion/core";
import { Link } from "./link";
import { Image } from "./image";

interface ISponsorProps {
  imageURL: string;
  name: string;
  url: string;
  width?: string;
  height?: string;
}

export const Sponsor = ({
  imageURL,
  name,
  url,
  width = "auto",
  height = undefined,
}: ISponsorProps) => {
  const imageStyle = css({
    display: "block",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: width,
    height: height,
  });

  return (
    <Link label={name} target="_blank" to={url}>
      <Image label={name} src={imageURL} style={imageStyle} />
    </Link>
  );
};
