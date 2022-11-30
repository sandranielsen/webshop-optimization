import * as React from "react";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";

export default function ContactPage() {
    return (
      <LayoutAlt>
        <Seo title="Contact" />
        <div className="page-header flex h-40">
          <h2 className="text-white m-auto text-3xl uppercase">Contact</h2>
        </div>
        <div id="padding" className="flex flex-col items-center">
          <p className="font-semibold text-lg mb-4">
            For inquiries please feel free to contact:
          </p>
          <p className="font-light">MagoMade v/ Sandra Mago</p>
          <p className="font-light">CVR: 43520822</p>
          <p className="font-light">E-mail: sandra@magomade.dk</p>
        </div>
      </LayoutAlt>
    );
}