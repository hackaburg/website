import * as React from "react";
import { Helmet } from "react-helmet";

export const JumpJS = () => (
  <Helmet>
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jump.js/1.0.2/jump.min.js"
      integrity="sha256-nLkfxAF8lAuFgs9kcFqZff/MohZAA8mNLQ/buYWwOLs="
      crossOrigin="anonymous"
    ></script>
  </Helmet>
);
