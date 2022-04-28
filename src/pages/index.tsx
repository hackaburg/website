import * as React from "react";
import { Anchors } from "../anchors";
import { About } from "../components/about";
import { Aftermovie } from "../components/aftermovie";
import { FAQ } from "../components/faq";
import { Landing } from "../components/landing";
import { Navbar } from "../components/navbar";
import { Page } from "../components/page";
import { Schedule } from "../components/schedule";
import { Sponsors } from "../components/sponsors";
import { Teaser } from "../components/teaser";
import { Tracks } from "../components/tracks";
import { Venue } from "../components/venue";

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
        {
          label: "FAQ",
          marker: Anchors.FAQ,
        },
      ]}
    />

    <Landing isApplicationOpen={true} />
    <About />
    <Tracks />
    <Sponsors />
    <Aftermovie />
    <Schedule />
    <Teaser />
    <Venue />
    <FAQ />
  </Page>
);
