import * as React from "react";
import { navigate } from "gatsby-link";

import PrimaryButton from "./PrimaryButton";
import HeroDesktop from "../images/banner-beachy-top-desktop.jpg";
import HeroMobile from "../images/banner-beachy-top-mobile.jpg";


export default function Hero() {

  return (
    <div>
      <div className="z-1">
        <div className="absolute flex w-full h-screen bg-black/[.3] sm:bg-black/[.2] z-10"></div>
        <img
          src={HeroDesktop}
          alt="Beachy Top Pattern"
          width={2000}
          className="hero-desktop h-screen"
        />
        <img
          src={HeroMobile}
          alt="Beachy Top Pattern"
          width={600}
          className="hero-mobile h-screen"
        />
      </div>

      <div
        id="side-padding"
        className="absolute flex flex-col gap-8  text-center items-center sm:text-start sm:items-start text-white w-full sm:w-[36rem] z-20 bottom-40 sm:bottom-12"
      >
        <h6 className="font-light text-base">New</h6>
        <h1 className="font-bold italic uppercase text-5xl">
          Beachy Top Pattern
        </h1>

        <PrimaryButton
          text="Find patterns"
          onClick={() => navigate("products")}
        />
      </div>
    </div>
  );
}
