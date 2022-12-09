import * as React from "react";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";

export default function PoliciesPage() {
  return (
    <div>
      <LayoutAlt>
        <Seo title="Terms & Conditions" />
        <div className="page-header flex h-40">
          <h3 className="text-white m-auto text-3xl uppercase">
            Terms & Conditions
          </h3>
        </div>

        <div id="padding" className="flex flex-col gap-4">
          <h5 className="text-xl">Conditions</h5>
          <p className="font-light text-base">
            Patterns purchased at www.magomade.dk is for private use only and
            therefore can't be copied, shared, or resold.
          </p>
        </div>

        <div id="side-padding" className="flex flex-col gap-4 mb-8 sm:mb-16">
          <h5 className="text-xl">Payment</h5>
          <p className="font-light text-base">
            MagoMade accepts online payments with Visa, Maestro, Mastercard,
            ApplePay, GooglePay and Shop Pay. The total of digital products is
            withdrawn immediately and once the payment is completed, the product
            is send digitally via e-mail.
          </p>
        </div>

        <div id="side-padding" className="flex flex-col gap-4">
          <h5 className="text-xl">Errors</h5>
          <p className="font-light text-base">
            In case of errors or omissions, please contact: Mail:
            sandra@magomade.dk
          </p>
        </div>

        <div id="padding" className="flex flex-col gap-4  mb-8">
          <h5 className="text-xl">Right of Withdrawel</h5>
          <p className="font-light text-base">
            No right of withdrawel is granted for digital products purchased as
            digital download on www.magomade.dk.
          </p>
        </div>
      </LayoutAlt>
    </div>
  );
}
