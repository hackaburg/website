import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { breakpointMobile } from "../constants";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Container } from "./container";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { Header } from "./header";
import { Image } from "./image";
import { Link } from "./link";
import { Question } from "./question";

const FAQContainer = styled.section`
  margin: 10rem 0;
  position: relative;
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: -3rem;
  right: 2rem;
  width: 15rem;

  @media screen and (max-width: ${breakpointMobile}) {
    display: none;
  }
`;

const QuestionsContainer = styled.div`
  padding-right: 2rem;

  @media screen and (max-width: ${breakpointMobile}) {
    padding: 0;
  }
`;

const List = styled.ul``;
const Item = styled.li``;

const More = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const FAQ = () => {
  const marker = useScrollSpyMarker(Anchors.FAQ);

  return (
    <FAQContainer>
      {marker}

      <ImageContainer>
        <Image label="Hackaburg dome" src="images/space/dome.png" />
      </ImageContainer>

      <Container>
        <Header title="FAQ" subtitle="Questions and answers" />
        <Row>
          <Column grow={1}>
            <QuestionsContainer>
              <Question title="What exactly is a hackathon?">
                A hackathon is an event in which software developers, designers
                and entrepreneurs come together and work on an idea for a few
                days. The event will be sponsored by companies, that means we
                have exciting prizes and planned key notes for you! There is
                also a career fair waiting for you to be checked out and of
                course free food and drinks.
              </Question>

              <Question title="How many people will the hackathon have?">
                We're planning with ~120 attendees, 90% students and 10%
                professionals! Just apply here!
              </Question>

              <Question title="What can I build?">
                Anything your heart desires! Hardware, web, mobile, gaming; you
                name it, we’ll support it.
              </Question>

              <Question title="How do I find a team?">
                A team has to be smaller than 5 people. On the first day, we
                will have a short pitch event. That means, you can come with an
                idea and tell everyone what you're looking for or you get
                inspired by other people. Maximum team size is 5 but of course
                you also can work in projects on smaller teams, there is no
                minimum size.
              </Question>

              <Question title="Overnight Stay?">
                Sure! We'll provide beds as required at a local hostel (maximum
                30).
              </Question>
            </QuestionsContainer>
          </Column>

          <Column grow={1}>
            <QuestionsContainer>
              <Question title="Do I have to be a programmer to attend?">
                NO! We're looking for a diverse group of people who want to work
                on an idea for a few days. You're a designer? Help create the
                user interface. You're a business rockstar? Help create a
                business or customer plan. You want to try coding for the first
                time? We will have introduction workshops that will give you a
                first glance about coding.
              </Question>

              <Question title="What about hardware?">
                We’ll have a hardware lounge with plenty of boards, tools, and
                gadgets for you to check out!
              </Question>

              <Question title="Headstart?">
                Only projects started at the hackathon will be eligible for
                prizes.
              </Question>

              <Question title="What should I bring to the event?">
                Your computer (laptop or desktop), any electronics want to use,
                chargers, toiletries and a sleeping bag or blanket and pillow if
                you're planning to stay over night and we hope you will! And of
                course, your student ID.
              </Question>

              <Question title="Will there be travel reimbursements available?">
                Yes! If you're coming from outside the Oberpfalz, it's possible
                to apply for reimbursement to cover some of your travel
                expenses. This also includes an overnight stay from Saturday to
                Sunday if you can't reasonably get home after the event.
                Depending on where you come from, the reimbursement can be up
                to:
                <List>
                  <Item>Bavaria (outside of the Oberpfalz): 25&euro;</Item>
                  <Item>Germany: 40&euro;</Item>
                  <Item>Rest of Europe (SEPA area): 75&euro;</Item>
                </List>
                <b>Important note: </b> We can only transfer money in the SEPA
                area! Thus, be ready to provide your travel receipts and bank
                address.
              </Question>
              <Question title="Are there any restrictions regarding the COVID-19 situation?">
                Yes. This event will be held with a 2G-concept, meaning that
                only people that are fully vaccinated or have recovered from a
                COVID-19 infection can participate. Make sure to bring valid
                proof of vaccination or recovery to the event.
              </Question>
            </QuestionsContainer>
          </Column>
        </Row>

        <More>
          Got more questions about our travel reimbursement process? Ping us
          your questions to{" "}
          <Link
            label="applications@hackaburg.de"
            to="mailto:applications@hackaburg.de"
          />
          .
        </More>
      </Container>
    </FAQContainer>
  );
};
