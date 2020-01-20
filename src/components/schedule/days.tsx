import styled from "@emotion/styled";
import * as React from "react";
import { breakpointMobile } from "../../constants";

const DaysContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  flex-direction: row;

  padding-left: 3rem;

  white-space: nowrap;

  @media screen and (max-width: ${breakpointMobile}) {
    position: static;
    padding: 0;
    white-space: initial;
    flex-direction: column;
  }
`;

interface IDaysProps {
  children: React.ReactNode;
}

export const Days = ({ children }: IDaysProps) => (
  <DaysContainer>{children}</DaysContainer>
);

const DayContainer = styled.div`
  flex-grow: 1;
  margin-left: 2rem;
  vertical-align: top;

  @media screen and (max-width: ${breakpointMobile}) {
    margin: 0;
  }
`;

const Date = styled.div`
  margin: 0.64rem 0;
  font-size: 1.5rem;
`;

interface IDayProps {
  children: React.ReactNode;
  date: string;
}

export const Day = ({ children, date }: IDayProps) => (
  <DayContainer>
    <Date>{date}</Date>
    {children}
  </DayContainer>
);
