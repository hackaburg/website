import styled from "@emotion/styled";
import * as React from "react";

const Sup = styled.sup`
  cursor: help;
`;

interface IHintProps {
  children: React.ReactNode;
  superscript: string;
  text: string;
}

export const Hint = ({ children, superscript, text }: IHintProps) => (
  <>
    {children}
    <Sup title={text}>{superscript}</Sup>
  </>
);
