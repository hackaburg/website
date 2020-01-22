import * as React from "react";
import Helmet from "react-helmet";

export const GoogleTagManager = () => (
  <Helmet>
    <script src="https://www.googletagmanager.com/gtag/js?id=UA-90366502-1"></script>
    <script>
      {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }

            gtag("js", new Date());
            gtag("config", "UA-90366502-1", {
                "anonymize_ip": true
            })
          `}
    </script>
  </Helmet>
);
