import styled from "@emotion/styled";
import * as React from "react";

const ColumnDiv = styled.div`
  flex-basis: 0;
`;

interface IColumnProps {
  children: React.ReactNode;
  grow?: number;
  shrink?: number;
}

export const Column = ({ children, grow, shrink }: IColumnProps) => (
  <ColumnDiv style={{ flexGrow: grow, flexShrink: shrink }}>
    {children}
  </ColumnDiv>
);
