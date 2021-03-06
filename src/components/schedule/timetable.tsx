import styled from "@emotion/styled";
import * as React from "react";
import { breakpointMobile } from "../../constants";
import { CurrentTime } from "./current-time";
import { Days } from "./days";
import { HourLine, Hours } from "./hours";

const TimetableContainer = styled.div`
  position: relative;
  height: 45rem;

  @media screen and (max-width: ${breakpointMobile}) {
    height: auto;
    margin: 5rem 0;
  }
`;

interface ITimetableProps {
  children: React.ReactNode;
  showCurrentTime: boolean;
}

export const Timetable = ({ children, showCurrentTime }: ITimetableProps) => (
  <TimetableContainer>
    <Hours>
      {showCurrentTime && <CurrentTime startHour={8} endHour={22} />}
      <HourLine text="08:00" />
      <HourLine text="10:00" />
      <HourLine text="12:00" />
      <HourLine text="14:00" />
      <HourLine text="16:00" />
      <HourLine text="18:00" />
      <HourLine text="20:00" />
      <HourLine text="22:00" />
    </Hours>

    <Days>{children}</Days>
  </TimetableContainer>
);
