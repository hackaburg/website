import styled from "@emotion/styled";
import * as React from "react";
import { breakpointTablet } from "../constants";

const ContainerDiv = styled.div`
  position: relative;
  max-width: 960px;
  margin: auto;

  @media screen and (max-width: ${breakpointTablet}) {
    padding: 0 1rem;
  }
`;

interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => (
  <ContainerDiv>{children}</ContainerDiv>
);
