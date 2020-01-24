import styled from "@emotion/styled";
import * as React from "react";
import { accentColor } from "../constants";
import { Container } from "./container";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { Image } from "./image";
import { Link } from "./link";

const FooterContainer = styled.div`
  padding: 1rem;
  color: #777;
  background-color: white;
`;

const List = styled.ul`
  list-style: none;
  margin: 0rem;
  padding: 0rem;
`;

const Item = styled.li`
  display: inline-block;

  & + &:before {
    content: "\\000B7";
    display: inline-block;
    padding: 0 0.3rem;
  }
`;

const RightAligned = styled.div`
  text-align: right;
`;

const AccentText = styled.span`
  color: ${accentColor};
`;

export const Footer = () => (
  <FooterContainer>
    <Container>
      <Row>
        <Column width={1}>
          <Link
            label="Gründerland Bayern"
            target="_blank"
            to="https://www.gruenderland.bayern"
          >
            <Image
              label="Gründerland Bayern logo"
              src="images/footer/gruenderland.jpg"
            />
          </Link>
        </Column>

        <Column width={1}>
          <Link
            label="Bayerisches Staatsministerium für Wirtschaft, Landesentwicklung und Energie"
            target="_blank"
            to="https://www.stmwi.bayern.de"
          >
            <Image
              label="Bayerisches Staatsministerium für Wirtschaft, Landesentwicklung und Energie logo"
              src="images/footer/bayern.jpg"
            />
          </Link>
        </Column>

        <Column width={1}>
          <Link label="TechBase" target="_blank" to="https://www.techbase.de">
            <Image label="TechBase Logo" src="images/footer/techbase.jpg" />
          </Link>
        </Column>
      </Row>

      <Row>
        <Column width={1}>
          <List>
            <Item>
              <Link
                label="Found a bug?"
                target="_blank"
                to="https://github.com/hackaburg/website"
              />
            </Item>

            <Item>
              <Link
                label="Code of Conduct"
                target="_blank"
                to="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              />
            </Item>

            <Item>
              <Link label="Imprint" to="imprint" />
            </Item>
          </List>
        </Column>

        <Column width={1}>
          <RightAligned>
            Made with <AccentText>&hearts;</AccentText> in Regensburg
          </RightAligned>
        </Column>
      </Row>
    </Container>
  </FooterContainer>
);
