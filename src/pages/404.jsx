import * as React from "react"
import { navigate } from "gatsby-link";

import SecondaryButton from "../components/SecondaryButton";
import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";



const NotFoundPage = () => {
  return (
    <main>
      <LayoutAlt>
        <Seo title="404 - Page not found" />
        <div className="page-header flex h-40">
          <h3 className="text-white m-auto text-3xl uppercase">
            Page not found
          </h3>
        </div>
        <div id="padding">
          <p className="text-base font-light mb-8">Sorry, we couldn’t find what you were looking for.</p>
          <SecondaryButton
            text="Back to homepage"
            onClick={() => navigate("/")}
          />
        </div>
      </LayoutAlt>
    </main>
  );
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
