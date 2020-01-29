import * as React from "react";
import { Image } from "./image";
import { Link } from "./link";

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
