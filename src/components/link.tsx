import styled from "@emotion/styled";
import * as React from "react";
import { useCallback } from "react";

import * as JumpJS from "jump.js";

declare global {
  interface Window {
    Jump: typeof JumpJS;
  }
}

const A = styled.a`
  color: inherit;
  text-decoration: none;

  &:active,
  &:focus,
  &:visited {
    color: currentColor;
    text-decoration: none;
  }
`;

interface ILinkProps {
  children?: React.ReactNode;
  label: string;
  target?: "_blank";
  to: string;
}

export const Link = ({ children, label, target, to }: ILinkProps) => {
  const smoothScrollToTarget = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();

      window.Jump(to, {
        duration: 200,
      });
    },
    [to],
  );

  const onClick = to.startsWith("#") ? smoothScrollToTarget : undefined;

  return (
    <A aria-label={label} href={to} onClick={onClick} target={target}>
      {children ?? label}
    </A>
  );
};
