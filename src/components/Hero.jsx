import * as React from "react";
import { navigate } from "gatsby-link";

import PrimaryButton from "./PrimaryButton";
import BannerImg from "../images/banner-beachy-top-desktop.jpg";

export default function Hero() {
  return (
    <div>
      <div className="z-1">
        <div className="absolute flex w-full h-screen bg-black/[.1] z-10"></div>
        <img
          src={BannerImg}
          alt="Beachy Top Pattern"
          className="w-full h-screen object-cover m-0"
        />
      </div>

      <div
        id="side-padding"
        className="absolute grid gap-4 text-white w-[36rem] z-20 bottom-12"
      >
        <h6 className="font-light text-base">New</h6>

        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold italic uppercase sm:text-5xl">
            Beachy Top Pattern
          </h1>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <PrimaryButton
              text="Find patterns"
              onClick={() => navigate("products")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
