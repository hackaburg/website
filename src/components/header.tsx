import { css } from "@emotion/core";
import styled from "@emotion/styled";

const common = css`
  font-weight: inherit;
  margin: 0;
`;

export const H1 = styled.h1`
  ${common}
  font-size: 2.5rem;
`;

export const H2 = styled.h2`
  ${common}
  font-size: 1.5rem;
`;

export const H3 = styled.h3`
  ${common}
  font-size: 1.25rem;
`;
