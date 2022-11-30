import * as React from "react";
import { Link } from "gatsby";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";

const IndexPage = () => {
    return (
      <LayoutAlt>
        <Seo title="Internet Issues" />
        <div className="page-header flex h-40 mb-16">
          <h2 className="text-white m-auto text-3xl uppercase">
            You are offline
          </h2>
        </div>

        <div id="padding">
          <p>
            This webpage is available for offline viewing. However, it is not possible to go through orders while offline - try again when you regain connectivity.
          </p>

          <Link to="/">Back to homepage</Link>
        </div>
      </LayoutAlt>
    );
}

export default IndexPage;
