import * as React from "react";
import { Link } from "../components/link";
import { Page } from "../components/page";

export default () => (
  <Page>
    <p>404 Not Found</p>
    <Link label="Go back" to="https://hackaburg.de" />
  </Page>
);
