import styled from "@emotion/styled";
import * as React from "react";
import { usePublicFileURL } from "../hooks/use-public-file-url";

interface IBackgroundDivProps {
  imageUrl: string | undefined;
}

const BackgroundDiv = styled.div<IBackgroundDivProps>`
  background-image: url(${(props) => props.imageUrl});
  color: white;
`;

interface IBackgroundProps {
  children: React.ReactNode;
}

export const Background = ({ children }: IBackgroundProps) => {
  const imageUrl = usePublicFileURL("images/stars.svg");
  return <BackgroundDiv imageUrl={imageUrl}>{children}</BackgroundDiv>;
};
