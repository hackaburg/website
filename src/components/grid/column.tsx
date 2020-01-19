import styled from "@emotion/styled";
import * as React from "react";

const ColumnDiv = styled.div``;

interface IColumnProps {
  children: React.ReactNode;
  width?: number;
}

export const Column = ({ children, width = 1 }: IColumnProps) => (
  <ColumnDiv style={{ flexGrow: width }}>{children}</ColumnDiv>
);
