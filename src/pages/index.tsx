import * as React from "react";
import { Anchors } from "../anchors";
import { Landing } from "../components/landing";
import { Navbar } from "../components/navbar";
import { Page } from "../components/page";

export default () => (
  <Page>
    <Navbar
      items={[
        {
          label: "About",
          marker: Anchors.About,
        },
        {
          label: "Tracks",
          marker: Anchors.Tracks,
        },
        {
          label: "Sponsors",
          marker: Anchors.Sponsors,
        },
        {
          label: "Hackaburg 2019",
          marker: Anchors.Hackaburg2019,
        },
        {
          label: "Schedule",
          marker: Anchors.Schedule,
        },
        {
          label: "Teaser",
          marker: Anchors.Teaser,
        },
        {
          label: "Venue",
          marker: Anchors.Venue,
        },
      ]}
    />

    <Landing />
  </Page>
);
