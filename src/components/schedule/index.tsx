import * as React from "react";
import { Anchors } from "../../anchors";
import { useScrollSpyMarker } from "../../hooks/use-scrollspy";
import { Container } from "../container";
import { Column } from "../grid/column";
import { Row } from "../grid/row";
import { Header } from "../header";
import { Hint } from "../hint";
import { Day } from "./days";
import { Event, Spacer } from "./event";
import { Timetable } from "./timetable";

export const Schedule = () => {
  const marker = useScrollSpyMarker(Anchors.Schedule);
  return (
    <Container>
      {marker}

      <Header title="Schedule" subtitle="When and what" />
      <Timetable>
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
          <Event hours={6} minutes={0} time="08:00 - 09:30" title="Breakfast">
            <Row>
              <Column>
                <Event
                  hours={1}
                  minutes={0}
                  time="08:00 - 09:30"
                  title="Breakfast"
                />
              </Column>

              <Column>
                <Event
                  hours={1}
                  minutes={0}
                  time="08:00 - 09:30"
                  title={
                    <Hint superscript="1" text="Test">
                      Breakfast
                    </Hint>
                  }
                />
              </Column>
            </Row>
          </Event>
        </Day>
      </Timetable>
    </Container>
  );
};
