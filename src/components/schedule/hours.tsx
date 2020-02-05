import styled from "@emotion/styled";
import * as React from "react";
import { breakpointMobile, hourSize } from "../../constants";
import { useInterval } from "../../hooks/use-interval";

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
    margin-top: ${hourSize}rem;
  }
`;

const CurrentTimeContainer = styled.div`
  position: relative;
  color: #f00;
  z-index: 1;

  &:before {
    content: " ";
    position: absolute;
    top: 0.5rem;
    left: 3rem;
    right: 0rem;

    display: block;

    border-bottom: 1px solid #f00;
  }

  @media screen and (max-width: ${breakpointMobile}) {
    display: none;
  }
`;

export const CurrentTime = () => {
  const handleLine = () => {
    let hours = "" + new Date().getHours();
    let minutes = "" + new Date().getMinutes();

    if (new Date().getHours() < 10) {
      hours = "0" + new Date().getHours();
    }

    if (new Date().getMinutes() < 10) {
      minutes = "0" + new Date().getMinutes();
    }

    let time = hours + ":" + minutes;
    setCurrentTime(time);

    let display = "block";
    if (new Date().getHours() > 22 || new Date().getHours() < 8) {
      display = "none";
    }

    let top =
      1 +
      (new Date().getHours() - 8) * 2.75 +
      0.04583 * new Date().getMinutes() +
      "rem";

    let offset;
    if (new Date().getMinutes() == 0) {
      offset = (new Date().getHours() - 8) / 2 + 1 + "px";
    } else {
      offset = "0px";
    }

    setStyle({ top: top, offset: offset, display: display });
  };

  const initialTime = new Date().getHours() + ":" + new Date().getMinutes();

  const [currentTime, setCurrentTime] = React.useState(initialTime);
  const [style, setStyle] = React.useState({
    top: "0rem",
    offset: "0px",
    display: "block",
  });

  React.useEffect(() => {
    handleLine();
  }, []);

  useInterval(handleLine, 60000);

  return (
    <CurrentTimeContainer
      style={{
        top: `calc(${style.top} + ${style.offset})`,
        display: style.display,
      }}
    >
      {currentTime}
    </CurrentTimeContainer>
  );
};

interface IHourLineProps {
  text: string;
}

export const HourLine = ({ text }: IHourLineProps) => (
  <HourLineContainer>{text}</HourLineContainer>
);
