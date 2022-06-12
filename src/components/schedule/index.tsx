import * as React from "react";
import { Anchors } from "../../anchors";
import { useScrollSpyMarker } from "../../hooks/use-scrollspy";
import { isBetween } from "../../lib/is-between";
import { Container } from "../container";
import { Column } from "../grid/column";
import { Row } from "../grid/row";
import { Header } from "../header";
import { Day } from "./days";
import { Event, Spacer } from "./event";
import { Timetable } from "./timetable";

const eventStart = new Date(2022, 7, 7, 16, 0, 0);
const eventEnd = new Date(2022, 7, 9, 23, 59, 59);

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
        <Day date="Thu, 7.7.2022">
          <Spacer hours={8} minutes={0} />
          <Event
            hours={0}
            minutes={45}
            time="16:00 - 16:45"
            title="Registration"
            food
          />
          <Event
            hours={1}
            minutes={45}
            time="16:45 - 18:30"
            title="Opening Ceremony"
          >
            <Event
              hours={0}
              minutes={25}
              time="17:30 - 17:50"
              title="Track Presentation"
              special
            />
            <Event
              hours={0}
              minutes={25}
              time="17:50 - 18:10"
              title="Idea Pitches"
              special
            />
            <Event
              hours={0}
              minutes={25}
              time="18:10 - 18:30"
              title="Sponsor Pitches"
              special
            />
          </Event>
          <Event
            hours={0}
            minutes={45}
            time="18:30 - 19:15"
            title="Dinner"
            food
          />
          <Event hours={3} minutes={45} time="19:15 - 24:00" title="Hacking">
            <Spacer hours={2} minutes={50} />
            <Event
              hours={0}
              minutes={30}
              time="01:30 - 02:00"
              title="Playtime"
              special
            />
          </Event>
        </Day>
        <Day date="Fri, 8.7.2022">
          <Event hours={15} minutes={0} time="00:00 - 24:00" title="Hacking">
            <Spacer hours={0} minutes={35} />
            <Event
              hours={1}
              minutes={0}
              time="09:00 - 10:00"
              title="Breakfast"
              food
            />

            <Spacer hours={1} minutes={0} />
            <Event
              hours={1}
              minutes={0}
              time="11:00 - 12:00"
              title="How to get sound into the Raspi by Infineon"
              special
            />

            <Spacer hours={1} minutes={0} />
            <Event
              hours={1}
              minutes={0}
              time="13:00 - 14:00"
              title="Lunch"
              food
            />

            <Spacer hours={0} minutes={0} />
            <Event
              hours={1}
              minutes={0}
              time="14:00 - 15:00"
              title="How do you want to work? Waterfall vs Agile by Wolf & TeamWille"
              special
            />

            <Spacer hours={1} minutes={0} />
            <Event
              hours={1}
              minutes={0}
              time="16:00 - 17:00"
              title="Ultra-fast multiplatform-protoyping with ReactJS by Bayernwerk"
              special
            />

            <Spacer hours={1} minutes={0} />
            <Event
              hours={1}
              minutes={0}
              time="18:00 - 19:00"
              title="Dinner"
              food
            />

            <Event
              hours={1}
              minutes={0}
              time="19:00 - 20:00"
              title="Soldering Workshop by Continental"
              special
            />

            <Spacer hours={2} minutes={30} />
            <Event
              hours={0}
              minutes={30}
              time="01:30 - 02:00"
              title="Playtime"
              special
            />
          </Event>
        </Day>
        <Day date="Sat, 9.7.2022">
          <Event hours={5} minutes={0} time="00:00 - 13:00" title="Hacking">
            <Spacer hours={0} minutes={35} />
            <Event
              hours={1}
              minutes={0}
              time="09:00 - 10:00"
              title="Breakfast"
              food
            />

            <Spacer hours={1} minutes={30} />
            <Event
              hours={1}
              minutes={30}
              time="11:30 - 13:00"
              title="Project Registration"
              special
            >
              Register your project by 11:30, final submission by 13:00.
            </Event>
          </Event>

          <Event
            hours={1}
            minutes={0}
            time="13:00 - 14:00"
            title="Lunch"
            food
          />

          <Row>
            <Column grow={1}>
              <Event
                hours={2}
                minutes={0}
                time="14:00 - 16:00"
                title="Pre-Judging and Finalist Selection"
                special
              />
              <Event
                hours={1}
                minutes={0}
                time="16:00 - 17:00"
                title="Finalist Preparation"
                special
              />
            </Column>
          </Row>

          <Event
            hours={1}
            minutes={45}
            time="17:00 - 18:45"
            title="Final Pitches"
            special
          />

          <Event
            hours={4}
            minutes={15}
            time="18:45 - 24:00"
            title="Afterparty"
            food
          />
        </Day>
      </Timetable>
    </Container>
  );
};
