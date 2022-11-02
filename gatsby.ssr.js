import CombinedProvider from "./src/context/CombinedProvider"

export const wrapRootElement = CombinedProvider

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/HelveticaNeue-Thin.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="helveticaFont"
    />,
    <link
      rel="preload"
      href="/fonts/HelveticaNeue-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="helveticaFont"
    />,
    <link
      rel="preload"
      href="/fonts/HelveticaNeue-CondensedBlack.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="helveticaFont"
    />,
    <link
      rel="preload"
      href="/fonts/HelveticaNeue-BoldCondensed.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="helveticaFont"
      />,
    <link
      rel="preload"
      href="/fonts/HelveticaNeue-Bold-Italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="helveticaFont"
    />,
  ]);
};