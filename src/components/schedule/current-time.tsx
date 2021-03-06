import styled from "@emotion/styled";
import * as React from "react";
import { useCallback, useState } from "react";
import { breakpointMobile, hourSize } from "../../constants";
import { useInterval } from "../../hooks/use-interval";
import { isBetween } from "../../lib/is-between";
import { prependZero } from "../../lib/prepend-zero";

const CurrentTimeLineContainer = styled.div`
  position: relative;
  z-index: 1;

  &:after {
    content: " ";
    position: absolute;
    left: 3rem;
    right: 0rem;

    display: block;

    border-bottom: 1px solid red;
  }

  @media screen and (max-width: ${breakpointMobile}) {
    display: none;
  }
`;

const TimeContainer = styled.div`
  background-color: red;
  color: white;
  text-align: center;
  border-radius: 3px;

  width: 3.5rem;
  padding: 0.2rem 0;

  position: absolute;
  left: -0.5rem;
  top: -0.7rem;
`;

interface ITime {
  hours: number;
  minutes: number;
}

const getCurrentTime = (): ITime => {
  const now = new Date();

  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
  };
};

interface ICurrentTimeProps {
  endHour: number;
  startHour: number;
}

export const CurrentTime = ({ endHour, startHour }: ICurrentTimeProps) => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const { hours, minutes } = currentTime;

  const updateTimeInterval = useCallback(() => {
    setCurrentTime(getCurrentTime());
  }, []);

  useInterval(updateTimeInterval, 30 * 1000);

  const display = isBetween(startHour, hours, endHour) ? "block" : "none";
  const verticalPosition = hours - startHour + minutes / 60;
  const top = `${(verticalPosition / 2) * (hourSize + 1.065)}rem`;

  return (
    <CurrentTimeLineContainer
      style={{
        display,
        top,
      }}
    >
      <TimeContainer>
        {prependZero(hours)}:{prependZero(minutes)}
      </TimeContainer>
    </CurrentTimeLineContainer>
  );
};
