import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { starBackgroundColor } from "../constants";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Column } from "./grid/column";
import { Row } from "./grid/row";
import { Header } from "./header";
import { Sponsor } from "./sponsor";
import { UpwardsLeftTriangle } from "./triangle";

const SponsorsContainer = styled.div`
  background-color: white;
  color: ${starBackgroundColor};
  padding-bottom: 10rem;
`;

const LevelContainer = styled.div`
  & + & {
    margin-top: 1rem;
    border-top: 1px dashed #ccc;
    padding-top: 1rem;
  }
`;

const RowContainer = styled.div`
  margin: 4rem 0;
`;

interface ISponsorContainer {
  containerWidth: string;
}

const SponsorContainer = styled.div<ISponsorContainer>`
  padding: 1rem;
  text-align: center;
  margin: auto;

  ${(props) => `
    width: ${props.containerWidth};
  `}
`;

interface ISponsor {
  width?: string;
  imageURL: string;
  name: string;
  url: string;
}

interface ISponsorList {
  width: string;
  lines: ISponsor[][];
}

// Jupiter: Infineon, Continental, Projekt 29, (Nexis probably)
// Uranus: MR, InternetX, T-Con, Zollner, BHS (Telis & Vector probably)
// Neptun: Horsch, Witt, TNG, Bertrandt, Byte-Schmiede (wird umbenannt)

export const Sponsors = () => {
  const marker = useScrollSpyMarker(Anchors.Sponsors);
  const levels: ISponsorList[] = [
    {
      lines: [
        [
          {
            imageURL: "images/sponsors/infineon.png",
            name: "Infineon",
            url: "https://infineon.com",
            width: "100%",
          },
          {
            imageURL: "images/sponsors/bayernwerk.png",
            name: "Bayernwerk",
            url: "https://www.bayernwerk-netz.de/de.html",
            width: "100%",
          },
          {
            imageURL: "images/sponsors/continental.jpg",
            name: "Continental",
            url: "https://www.continental.com/de",
            width: "100%",
          },
        ],
      ],
      width: "80%",
    },
    {
      lines: [
        [
          {
            imageURL: "images/sponsors/internetx.png",
            name: "InterNetX GmbH",
            url: "https://www.internetx.com",
            width: "70%",
          },
          {
            imageURL: "images/sponsors/mr.jpg",
            name: "Maschinenfabrik Reinhausen GmbH",
            url: "https://www.reinhausen.com",
            width: "35%",
          },
          {
            imageURL: "images/sponsors/vector.png",
            name: "Vector IT",
            url: "https://www.vector.com",
            width: "100%",
          }
        ],
        [
          {
            imageURL: "images/sponsors/zollner.jpg",
            name: "Zollner Elektronik",
            url: "https://www.zollner.de",
            width: "80%",
          },
          {
            imageURL: "images/sponsors/telis.png",
            name: "Telis Finanz",
            url: "https://www.telis-finanz.de",
            width: "100%",
          },
          {
            imageURL: "images/sponsors/projekt29.png",
            name: "Projekt 29 GmbH & Co. KG",
            url: "https://www.projekt29.de",
            width: "100%",
          },
        ],
      ],
      width: "60%",
    },
    {
      lines: [
        [
          {
            imageURL: "images/sponsors/bertrandt.png",
            name: "Bertrandt",
            url: "https://www.bertrandt.com",
            width: "80%",
          },
          {
            imageURL: "images/sponsors/horsch.png",
            name: "Horsch Maschinen GmbH",
            url: "https://www.horsch.com",
            width: "60%",
          },
          {
            imageURL: "images/sponsors/witt.png",
            name: "Witt Gruppe",
            url: "https://www.witt-weiden.de",
            width: "100%",
          },
          {
            imageURL: "images/sponsors/tng.png",
            name: "TNG",
            url: "https://www.tngtech.com",
            width: "100%",
          },
          {
            imageURL: "images/sponsors/maganamed.png",
            name: "Maganamed",
            url: "https://maganamed.com",
            width: "100%",
          },
        ],
      ],
      width: "50%",
    },
  ];

  const renderedLevels = levels.map(
    ({ width: levelWidth, lines }, levelIndex) => {
      const renderedLines = lines.map((line, lineIndex) => {
        const renderedSponsors = line.map(
          ({ imageURL, name, url, width }, sponsorIndex) => (
            <Column key={sponsorIndex} grow={1}>
              <SponsorContainer containerWidth={levelWidth}>
                <Sponsor
                  width={width}
                  imageURL={imageURL}
                  name={name}
                  url={url}
                />
              </SponsorContainer>
            </Column>
          ),
        );

        return (
          <div key={lineIndex}>
            <Row center>{renderedSponsors}</Row>
          </div>
        );
      });

      return (
        <LevelContainer key={levelIndex}>
          <RowContainer>{renderedLines}</RowContainer>
        </LevelContainer>
      );
    },
  );

  return (
    <SponsorsContainer>
      <UpwardsLeftTriangle color="white" />

      {marker}
      <div style={{ textAlign: "center" }}>
        <Header title="Sponsors" subtitle="Our partners" />
      </div>

      {renderedLevels}
    </SponsorsContainer>
  );
};
