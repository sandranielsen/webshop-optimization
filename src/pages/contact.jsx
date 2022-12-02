import * as React from "react";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";

export default function ContactPage() {
    return (
      <LayoutAlt>
        <Seo title="Contact" />
        <div className="page-header flex h-40">
          <h3 className="text-white m-auto text-3xl uppercase">Contact</h3>
        </div>
        <div id="padding" className="flex flex-col items-center mb-8">
          <h5 className="font-semibold text-xl text-center sm:text-start mb-4">
            For inquiries please feel free to contact:
          </h5>
          <p className="font-light text-base">MagoMade v/ Sandra Mago</p>
          <p className="font-light text-base">CVR: 43520822</p>
          <p className="font-light text-base">E-mail: sandra@magomade.dk</p>
        </div>
      </LayoutAlt>
    );
}