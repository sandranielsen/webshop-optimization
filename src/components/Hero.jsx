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
        className="absolute grid text-white w-12 z-20 bottom-12"
      >
        <h6>New</h6>

        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
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
