import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import {
  accentColor,
  breakpointMobile,
  breakpointTablet,
  starBackgroundColor,
  triangleSize,
} from "../constants";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";
import { Header } from "./header";
import { Link } from "./link";
import { DownwardsRightTriangle, UpwardsLeftTriangle } from "./triangle";
import { AutoPlayVideo } from "./video";

const AftermovieContainer = styled.div`
  position: relative;
  margin-bottom: 10rem;

  @media screen and (max-width: ${breakpointMobile}) {
    padding: 5rem 0;
    margin: 0;
  }
`;

const VideoContainer = styled.div`
  @media screen and (max-width: ${breakpointMobile}) {
    display: none;
  }
`;

const TriangleContainer = styled.div`
  position: absolute;
  top: ${triangleSize};
  left: 0;
  right: 0;
`;

const ResponsiveTriangleContainer = styled.div`
  @media screen and (max-width: ${breakpointTablet}) {
    display: none;
  }
`;

const DescriptionContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 25%;
  transform: translate(-50%, -50%);

  padding: 2rem;
  width: 30rem;

  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  backdrop-filter: blur(10px);

  @media screen and (max-width: ${breakpointTablet}) {
    top: 50%;
    left: 50%;
  }

  @media screen and (max-width: ${breakpointMobile}) {
    position: static;
    width: auto;
    transform: none;
    margin: 8rem 0;
  }
`;

const AccentText = styled.div`
  color: ${accentColor};
`;

export const Aftermovie = () => {
  const marker = useScrollSpyMarker(Anchors.Hackaburg2019);

  return (
    <AftermovieContainer>
      {marker}

      <VideoContainer>
        <AutoPlayVideo src="images/video.mp4" />
      </VideoContainer>

      <TriangleContainer>
        <ResponsiveTriangleContainer>
          <DownwardsRightTriangle color="white" />
        </ResponsiveTriangleContainer>
      </TriangleContainer>

      <DescriptionContainer>
        <Header title="Hackaburg 2019" subtitle="What happened last time?" />
        <p>
          125 attendees from all over Germany together with 22 Sponsors
          transformed the facilities of Techbase Regensburg into a home for 20
          Teams working on a large variety of cool projects. The best teams got
          rewarded with prizes of more than 3.000 € in total value and everyone
          got new experiences, met new friends and had an enjoyable weekend.
        </p>

        <AccentText>
          <Link
            label="Watch last year's aftermovie &raquo;"
            target="_blank"
            to="https://www.youtube.com/watch?v=ygeK5hStwP8"
          />
        </AccentText>
      </DescriptionContainer>

      <ResponsiveTriangleContainer>
        <UpwardsLeftTriangle color={starBackgroundColor} />
      </ResponsiveTriangleContainer>
    </AftermovieContainer>
  );
};
