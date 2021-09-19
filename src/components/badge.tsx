import styled from "@emotion/styled";
import * as React from "react";
import { breakpointTablet } from "../constants";
import { Image } from "./image";
import { Link } from "./link";

const Container = styled.div`
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: fixed;
  right: 50px;
  top: 0;
  width: 10%;
  z-index: 6;

  @media screen and (max-width: ${breakpointTablet}) {
    visibility: hidden;
  }
`;

export const Badge = () => (
  <Container>
    <Link
      label="Major League Hacking 2020 Hackathon Season"
      to="https://mlh.io/seasons/eu-2020/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=gray"
    >
      <Image
        label="Major League Hacking 2020 Hackathon Season"
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-gray.svg"
        width="100px"
      />
    </Link>
  </Container>
);
