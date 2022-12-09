import * as React from "react";
import { navigate } from "gatsby-link";
import { StaticImage } from "gatsby-plugin-image";

import PrimaryButton from "./PrimaryButton";


export default function Hero() {

  return (
    <div>
      <div className="z-1">
        <div className="absolute flex w-full h-screen bg-black/[.3] sm:bg-black/[.2] z-10"></div>
        <StaticImage
          src="../images/banner-beachy-top-desktop.jpg"
          alt="Beachy Top Pattern"
          width={2000}
          quality="100"
          className="hidden sm:block w-full h-screen object-cover m-0"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/banner-beachy-top-mobile.jpg"
          alt="Beachy Top Pattern"
          width={600}
          quality="100"
          className="block sm:hidden w-full h-screen object-cover m-0"
          placeholder="blurred"
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
