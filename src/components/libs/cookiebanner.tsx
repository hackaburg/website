import * as React from "react";
import Helmet from "react-helmet";

export const Cookiebanner = () => (
  <Helmet>
    <script
      id="cookiebanner"
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.1/cookiebanner.min.js"
      integrity="sha256-tKsZSIsHQmNHgO2qfK8KT9SSOvKTbxgskN5dfhrpUS8="
      crossOrigin="anonymous"
      data-message="We use cookies to improve your browsing experience."
      data-moreinfo="https://hackaburg.de/imprint"
    ></script>
  </Helmet>
);
