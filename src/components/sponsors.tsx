import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Container } from "./container";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { Header } from "./header";
import { Sponsor } from "./sponsor";

const SponsorsContainer = styled.div`
  margin: 10rem 0;
`;

const SponsorContainer = styled.div`
  padding: 1rem;
`;

const RowContainer = styled.div`
  margin: 2rem 0;
`;

interface ISponsor {
  name: string;
  url: string;
  imageURL: string;
}

interface ISponsorList {
  size: string;
  sponsors: ISponsor[];
}

export const Sponsors = () => {
  const marker = useScrollSpyMarker(Anchors.Sponsors);
  const levels: ISponsorList[] = [
    {
      size: "3rem",
      sponsors: [
        {
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
        },
        {
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
        },
      ],
    },
    {
      size: "2rem",
      sponsors: [
        {
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
        },
        {
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
        },
        {
          imageURL: "images/sponsors/telis.png",
          name: "Telis Finanz",
          url: "https://www.telis-finanz.de",
        },
      ],
    },
  ];

  const renderedLevels = levels.map(({ size, sponsors }, levelIndex) => {
    const renderedSponsors = sponsors.map(
      ({ imageURL, name, url }, sponsorIndex) => (
        <Column key={sponsorIndex}>
          <SponsorContainer>
            <Sponsor height={size} imageURL={imageURL} name={name} url={url} />
          </SponsorContainer>
        </Column>
      ),
    );

    return (
      <RowContainer key={levelIndex}>
        <Row center>{renderedSponsors}</Row>
      </RowContainer>
    );
  });

  return (
    <SponsorsContainer>
      {marker}
      <Container>
        <Header title="Sponsors" subtitle="Our partners" />

        {renderedLevels}
      </Container>
    </SponsorsContainer>
  );
};
