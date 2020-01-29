import * as React from "react";
import { Link } from "./link";
import { Image } from "./image";

interface ISponsorProps {
  imageURL: string;
  name: string;
  url: string;
  width?: string;
}

export const Sponsor = ({ imageURL, name, url, width }: ISponsorProps) => (
  <Link label={name} target="_blank" to={url}>
    <Image label={`${name} logo`} src={imageURL} width={width} height="auto" />
  </Link>
);
