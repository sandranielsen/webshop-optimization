import * as React from "react";
import { navigate } from "gatsby-link";

import SecondaryButton from "../components/SecondaryButton";
import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";

// Fallback
const IndexPage = () => {
    return (
      <LayoutAlt>
        <Seo title="Internet Issues" />
        <div className="page-header flex h-40">
          <h3 className="text-white m-auto text-3xl uppercase">
            You are offline
          </h3>
        </div>

        <div id="padding">
          <p className="text-base font-light mb-8">
            This webpage is available for offline viewing. However, it is not
            possible to go through orders while offline - try again when you
            regain connectivity.
          </p>

          <SecondaryButton
            text="Back to homepage"
            onClick={() => navigate("/")}
          />
        </div>
      </LayoutAlt>
    );
}

export default IndexPage;
