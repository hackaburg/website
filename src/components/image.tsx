import styled from "@emotion/styled";
import * as React from "react";
import { usePublicFileURL } from "../hooks/use-public-file-url";

const Img = styled.img`
  width: 100%;
`;

interface IImageProps {
  label: string;
  src: string;
}

export const Image = ({ label, src }: IImageProps) => {
  const image = usePublicFileURL(src);
  return <Img alt={label} src={image ?? src} />;
};