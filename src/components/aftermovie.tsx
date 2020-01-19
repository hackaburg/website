import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { accentColor, starBackgroundColor, triangleSize } from "../constants";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Header } from "./header";
import { Link } from "./link";
import { DownwardsRightTriangle, UpwardsLeftTriangle } from "./triangle";
import { AutoPlayVideo } from "./video";

const AftermovieContainer = styled.div`
  position: relative;
  margin: 10rem 0;
`;

const TriangleContainer = styled.div`
  position: absolute;
  top: ${triangleSize};
`;

const DescriptionContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 25%;
  transform: translate(-50%, -50%);

  padding: 2rem;
  width: 30rem;

  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  backdrop-filter: blur(10px);
`;

const AccentText = styled.div`
  color: ${accentColor};
`;

export const Aftermovie = () => {
  const marker = useScrollSpyMarker(Anchors.Hackaburg2019);

  return (
    <AftermovieContainer>
      {marker}

      <AutoPlayVideo src="images/video.mp4" />

      <TriangleContainer>
        <DownwardsRightTriangle color={starBackgroundColor} />
      </TriangleContainer>

      <UpwardsLeftTriangle color={starBackgroundColor} />

      <DescriptionContainer>
        <Header title="Hackaburg 2019" subtitle="What happened last year?" />
        <p>
          120 participants from all over Germany together with 15 Sponsors
          transformed the facilities of Techbase Regensburg into a home for 20
          Teams working on a large variety of projects. The best teams got
          rewarded with prizes of more than 6.000 € in total value and everyone
          got new experiences, met new friends and had an enjoyable weekend.
        </p>

        <AccentText>
          <Link
            label="Watch last year's aftermovie &raquo;"
            target="_blank"
            to="https://www.youtube.com/watch?v=LVb5gjv5KeE"
          />
        </AccentText>
      </DescriptionContainer>
    </AftermovieContainer>
  );
};
