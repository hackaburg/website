import styled from "@emotion/styled";
import * as React from "react";
import { usePublicFileURL } from "../hooks/use-public-file-url";

const Video = styled.video`
  width: 100%;
  height: auto;
`;

interface IVideoProps {
  src: string;
}

export const AutoPlayVideo = ({ src }: IVideoProps) => {
  const url = usePublicFileURL(src);
  return (
    <Video
      preload="none"
      autoPlay={true}
      loop={true}
      muted={true}
      src={url ?? src}
    />
  );
};
