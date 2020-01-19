import styled from "@emotion/styled";
import * as React from "react";

const Bar = styled.i`
  display: block;
  width: 100%;
  height: 3px;
  background-color: currentColor;
  border-radius: 1px;

  & + & {
    margin-top: 4px;
  }
`;

export const Burger = () => (
  <div>
    <Bar />
    <Bar />
    <Bar />
  </div>
);
