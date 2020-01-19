import styled from "@emotion/styled";
import * as React from "react";
import { breakpointMobile } from "../../constants";

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${breakpointMobile}) {
    display: block;
  }
`;

interface IRowProps {
  center?: boolean;
  children: React.ReactNode;
}

export const Row = ({ center, children }: IRowProps) => (
  <RowDiv style={{ alignItems: center ? "center" : "stretch" }}>
    {children}
  </RowDiv>
);
