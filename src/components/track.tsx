import styled from "@emotion/styled";
import * as React from "react";
import { accentColor } from "../constants";
import { usePublicFileURL } from "../hooks/use-public-file-url";

const TitleContainer = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;
  height: 4.5rem;
  overflow: hidden;
  transition: 0.5s ease;

  background-color: rgba(0, 0, 0, 0.75);

  -webkit-backdrop-filter: blur(10px);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  z-index: 0;
  cursor: default;
`;

const ImageContainer = styled.div`
  position: relative;

  display: block;
  height: 15rem;
  overflow: hidden;
  margin-bottom: 1rem;

  border-radius: 5px;

  background-size: 100% auto;
  background-color: white;
  background-position: center center;

  &:hover ${TitleContainer} {
    height: 100%;
  }
`;

const Title = styled.div`
  color: white;

  padding-top: 1rem;
  padding-left: 1rem;

  font-size: 1.25rem;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
`;

const Description = styled.div`
  display: block;

  color: white;

  padding-top: 1rem;
  padding-left: 1rem;

  font-size: 0.8rem;
  text-align: left;

  &::before {
    opacity: 0.9;
    color: white;
  }
`;

const Sponsor = styled.div`
  display: block;

  color: ${accentColor};

  padding-left: 1rem;

  font-size: 0.8rem;
  text-align: left;
  text-transform: uppercase;

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
        <TitleContainer>
          <Title>{title}</Title>
          <Sponsor>{sponsor}</Sponsor>
          <Description>{description}</Description>
        </TitleContainer>
      </ImageContainer>
    </div>
  );
};
