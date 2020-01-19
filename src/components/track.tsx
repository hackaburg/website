import styled from "@emotion/styled";
import * as React from "react";
import { accentColor } from "../constants";
import { usePublicFileURL } from "../hooks/use-public-file-url";

const ImageContainer = styled.div`
  position: relative;

  display: block;
  width: 100%;
  height: 15rem;
  overflow: hidden;
  margin-bottom: 1rem;

  border-radius: 5px;

  background-size: 100% auto;
  background-position: center center;
  background-color: white;
`;

const Title = styled.h3`
  position: absolute;
  bottom: 1rem;
  left: 0rem;

  padding: 1rem 1.5rem;

  font-size: 1.25rem;
  text-align: center;
  text-transform: uppercase;

  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  -webkit-backdrop-filter: blur(10px);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  z-index: 0;
  cursor: default;
`;

const Sponsor = styled.div`
  display: block;

  color: ${accentColor};
  font-size: 0.8rem;
  text-align: left;

  &::before {
    content: "by ";
    opacity: 0.9;
    color: white;
  }
`;

interface ITrackProps {
  description: string;
  imageURL: string;
  sponsor: string;
  title: string;
}

export const Track = ({
  description,
  imageURL,
  sponsor,
  title,
}: ITrackProps) => {
  const url = usePublicFileURL(imageURL);

  return (
    <div>
      <ImageContainer style={{ backgroundImage: `url(${url})` }}>
        <Title>
          {title}
          <Sponsor>{sponsor}</Sponsor>
        </Title>
      </ImageContainer>

      {description}
    </div>
  );
};
