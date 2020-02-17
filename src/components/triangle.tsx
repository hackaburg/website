import { css } from "@emotion/core";
import styled from "@emotion/styled";
import * as React from "react";
import { triangleSize } from "../constants";

const TriangleWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  height: ${triangleSize};
  top: -${triangleSize};
`;

const Base = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
`;

interface ITriangleProps {
  color?: string;
}

export const UpwardsLeftTriangle = ({ color = "white" }: ITriangleProps) => (
  <TriangleWrapper>
    <Base
      css={css`
        border-width: ${triangleSize} 0rem 0rem 100vw;
        border-color: transparent transparent transparent ${color};
      `}
    />
  </TriangleWrapper>
);

export const UpwardsRightTriangle = ({ color = "white" }: ITriangleProps) => (
  <TriangleWrapper>
    <Base
      css={css`
        border-width: 0rem 0rem ${triangleSize} 100vw;
        border-color: transparent transparent ${color} transparent;
      `}
    />
  </TriangleWrapper>
);

export const DownwardsLeftTriangle = ({ color = "white" }: ITriangleProps) => (
  <TriangleWrapper>
    <Base
      css={css`
        border-width: ${triangleSize} 100vw 0rem 0rem;
        border-color: ${color} transparent transparent transparent;
      `}
    />
  </TriangleWrapper>
);

export const DownwardsRightTriangle = ({ color = "white" }: ITriangleProps) => (
  <TriangleWrapper>
    <Base
      css={css`
        border-width: 0rem 100vw ${triangleSize} 0rem;
        border-color: transparent ${color} transparent transparent;
      `}
    />
  </TriangleWrapper>
);
