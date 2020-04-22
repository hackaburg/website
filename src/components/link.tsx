import styled from "@emotion/styled";
import * as React from "react";

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
  return (
    <A aria-label={label} href={to} target={target} underline={underline}>
      {children ?? label}
    </A>
  );
};
