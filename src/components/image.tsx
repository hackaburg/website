import styled from "@emotion/styled";
import * as React from "react";
import { usePublicFileURL } from "../hooks/use-public-file-url";

const Img = styled.img`
  width: 100%;
`;

interface IImageProps {
  height?: string;
  label: string;
  src: string;
  width?: string;
}

export const Image = ({ label, src, width, height }: IImageProps) => {
  const image = usePublicFileURL(src);
  return (
    <Img
      alt={label}
      src={image ?? src}
      style={{
        width,
        height,
      }}
    />
  );
};
