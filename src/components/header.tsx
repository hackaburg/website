import { css } from "@emotion/core";
import styled from "@emotion/styled";
import * as React from "react";

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

const HeaderContainer = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

interface IHeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: IHeaderProps) => (
  <HeaderContainer>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </HeaderContainer>
);
