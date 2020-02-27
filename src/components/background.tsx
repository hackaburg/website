import styled from "@emotion/styled";
import * as React from "react";
import { usePublicFileURL } from "../hooks/use-public-file-url";
import {breakpointMobile} from "../constants";

interface IBackgroundDivProps {
  imageUrl: string | undefined;
}

const BackgroundDiv = styled.div<IBackgroundDivProps>`
  background-image: url(${(props) => props.imageUrl});
  background-color: #040b1a;
  color: white;

  @media screen and (max-width: ${breakpointMobile}) {
    background-size: 535px 535px;
  }
`;

interface IBackgroundProps {
  children: React.ReactNode;
}

export const Background = ({ children }: IBackgroundProps) => {
  const imageUrl = usePublicFileURL("images/stars.svg");
  return <BackgroundDiv imageUrl={imageUrl}>{children}</BackgroundDiv>;
};
