import styled from "@emotion/styled";
import * as React from "react";
import { useCallback } from "react";

import * as JumpJS from "jump.js";

declare global {
  interface Window {
    Jump: typeof JumpJS;
  }
}

interface IAProps {
  underline: boolean;
}

const A = styled.a<IAProps>`
  color: inherit;

  ${(props) =>
    props.underline
      ? `
        text-decoration: underline;
      `
      : `
        text-decoration: none;
      `}

  &:active,
  &:focus,
  &:visited {
    color: currentColor;

    ${(props) =>
      props.underline
        ? `
          text-decoration: underline;
        `
        : `
          text-decoration: none;
        `}
  }
`;

interface ILinkProps {
  children?: React.ReactNode;
  label: string;
  target?: "_blank";
  to: string;
  underline?: boolean;
}

export const Link = ({
  children,
  label,
  target,
  to,
  underline = true,
}: ILinkProps) => {
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
    <A
      aria-label={label}
      href={to}
      onClick={onClick}
      target={target}
      underline={underline}
    >
      {children ?? label}
    </A>
  );
};
