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
            You appear to be offline
          </h2>
        </div>

        <div id="padding">
          <p>
            This page is unavailable, and no posts have been cached for offline
            viewing, unfortunately. Try again when you regain connectivity.
          </p>
          <p>
            This page is unavailable, but these posts have been cached for
            offline viewing, try one of them:
          </p>
          {/* To Do */}

          <Link to="/">Back to homepage</Link>
        </div>
      </LayoutAlt>
    );
}

export default IndexPage;
