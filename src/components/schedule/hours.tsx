import styled from "@emotion/styled";
import * as React from "react";
import { breakpointMobile, hourSize } from "../../constants";

const HoursContainer = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;

  @media screen and (max-width: ${breakpointMobile}) {
    display: none;
  }
`;

interface IHoursProps {
  children: React.ReactNode;
}

export const Hours = ({ children }: IHoursProps) => (
  <HoursContainer>{children}</HoursContainer>
);

const HourLineContainer = styled.div`
  position: relative;
  top: -0.5rem;

  &:before {
    content: " ";
    position: absolute;
    top: 0.5rem;
    left: 3rem;
    right: 0rem;

    display: block;

    border-bottom: 1px solid #eee;
  }

  & + & {
    margin-top: ${hourSize * 1.05}rem;
  }
`;

interface IHourLineProps {
  text: string;
}

export const HourLine = ({ text }: IHourLineProps) => (
  <HourLineContainer>{text}</HourLineContainer>
);
