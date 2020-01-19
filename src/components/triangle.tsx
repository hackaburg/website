import { css } from "@emotion/core";
import styled from "@emotion/styled";
import * as React from "react";
import { triangleSize } from "../constants";

const Base = styled.div`
  position: relative;
  width: 100%;

  &:before {
    content: " ";
    display: block;

    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;

    border-style: solid;
  }
`;

interface ITriangleProps {
  color?: string;
}

export const UpwardsLeftTriangle = ({ color = "white" }: ITriangleProps) => (
  <Base
    css={css`
      &:before {
        border-width: ${triangleSize} 0rem 0rem 100vw;
        border-color: transparent transparent transparent ${color};
      }
    `}
  />
);

export const UpwardsRightTriangle = ({ color = "white" }: ITriangleProps) => (
  <Base
    css={css`
      &:before {
        border-width: 0rem 0rem ${triangleSize} 100vw;
        border-color: transparent transparent ${color} transparent;
      }
    `}
  />
);

export const DownwardsLeftTriangle = ({ color = "white" }: ITriangleProps) => (
  <Base
    css={css`
      &:before {
        border-width: ${triangleSize} 100vw 0rem 0rem;
        border-color: ${color} transparent transparent transparent;
      }
    `}
  />
);

export const DownwardsRightTriangle = ({ color = "white" }: ITriangleProps) => (
  <Base
    css={css`
      &:before {
        border-width: 0rem 100vw ${triangleSize} 0rem;
        border-color: transparent ${color} transparent transparent;
      }
    `}
  />
);
