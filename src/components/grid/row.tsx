import styled from "@emotion/styled";
import * as React from "react";
import { breakpointMobile } from "../../constants";

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  @media screen and (max-width: ${breakpointMobile}) {
    display: block;
  }
`;

interface IRowProps {
  children: React.ReactNode;
}

export const Row = ({ children }: IRowProps) => <RowDiv>{children}</RowDiv>;
