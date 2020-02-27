import styled from "@emotion/styled";
import * as React from "react";
import {
  accentColor,
  accentColorLight,
  breakpointMobile,
  hourSize,
} from "../../constants";

interface IEventContainerProps {
  accent: boolean;
  striped: boolean;
}

const EventContainer = styled.div<IEventContainerProps>`
  display: block;
  position: relative;

  color: black;
  background-color: white;
  border-left: 3px solid ${accentColor};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 2px;

  white-space: initial;

  ${(props) =>
    props.accent &&
    `
      color: white;
      background-color: ${accentColorLight};
    `}

  ${(props) =>
    props.striped &&
    `
      background: repeating-linear-gradient(
        -45deg,
        #eee,
        #eee 3px,
        #f7f7f7 3px,
        #f7f7f7 10px
      );
    `}
`;

const DurationContainer = styled.div`
  @media screen and (max-width: ${breakpointMobile}) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;

  @media screen and (max-width: ${breakpointMobile}) {
    position: initial;
    margin-bottom: 0.5rem;
  }
`;

const TimeContainer = styled.div`
  display: inline-block;
  opacity: 0.75;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const TitleContainer = styled.div`
  display: inline-block;
`;

const getHeightFromDuration = (hours: number, minutes: number) =>
  `${((hours + minutes / 60) * hourSize) / 1.655}rem`;

interface IEventProps {
  children?: React.ReactNode;
  food?: boolean;
  hidden?: boolean;
  hours: number;
  minutes: number;
  special?: boolean;
  time: string;
  title: React.ReactNode;
}

export const Event = ({
  children = null,
  food = false,
  hidden = false,
  hours,
  minutes,
  special = false,
  time,
  title,
}: IEventProps) => (
  <EventContainer accent={special} hidden={hidden} striped={food}>
    <DurationContainer
      style={{
        height: getHeightFromDuration(hours, minutes),
      }}
    />

    <ContentContainer>
      <TimeContainer>{time}</TimeContainer>
      <TitleContainer>{title}</TitleContainer>
      <div>{children}</div>
    </ContentContainer>
  </EventContainer>
);

interface ISpacerProps {
  hours: number;
  minutes: number;
}

export const Spacer = ({ hours, minutes }: ISpacerProps) => (
  <DurationContainer
    style={{
      height: getHeightFromDuration(hours, minutes),
    }}
  />
);
