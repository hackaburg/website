import * as React from "react";
import { Anchors } from "../../anchors";
import { useScrollSpyMarker } from "../../hooks/use-scrollspy";
import { isBetween } from "../../lib/is-between";
import { Container } from "../container";
import { Header } from "../header";
import { Day } from "./days";
import { Event, Spacer } from "./event";
import { Timetable } from "./timetable";

const eventStart = new Date(2020, 4, 14);
const eventEnd = new Date(2020, 4, 16);

export const Schedule = () => {
  const marker = useScrollSpyMarker(Anchors.Schedule);
  const isDuringEvent = isBetween(
    eventStart.getTime(),
    Date.now(),
    eventEnd.getTime(),
  );

  return (
    <Container>
      {marker}

      <Header title="Schedule" subtitle="When and what" />
      <Timetable showCurrentTime={isDuringEvent}>
        <Day date="Thu, 14.05.2020">
          <Event hours={2} minutes={0} time="08:00 - 09:30" title="Breakfast" />
          <Event hours={2} minutes={0} time="08:00 - 09:30" title="Breakfast" />
          <Spacer hours={2} minutes={0} />
          <Event
            hours={2}
            minutes={0}
            time="08:00 - 09:30"
            title="Breakfast"
            accent
          />
          <Event
            hours={2}
            minutes={0}
            time="08:00 - 09:30"
            title="Breakfast"
            striped
          />
          <Event hours={2} minutes={0} time="08:00 - 09:30" title="Breakfast" />
        </Day>
        <Day date="Fri, 15.05.2020">
          <Event hours={4} minutes={0} time="08:00 - 09:30" title="Breakfast" />
        </Day>
        <Day date="Sat, 16.05.2020">
          <Event hours={6} minutes={0} time="08:00 - 09:30" title="Breakfast" />
        </Day>
      </Timetable>
    </Container>
  );
};
