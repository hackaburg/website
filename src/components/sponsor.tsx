import styled from "@emotion/styled";
import * as React from "react";
import { usePublicFileURL } from "../hooks/use-public-file-url";
import { Link } from "./link";

const ImageContainer = styled.div`
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
`;

interface ISponsorProps {
  height: string;
  imageURL: string;
  name: string;
  url: string;
}

export const Sponsor = ({ height, imageURL, name, url }: ISponsorProps) => {
  const publicImageURL = usePublicFileURL(imageURL);
  return (
    <Link label={name} target="_blank" to={url}>
      <ImageContainer
        style={{ backgroundImage: `url(${publicImageURL})`, height }}
      />
    </Link>
  );
};
