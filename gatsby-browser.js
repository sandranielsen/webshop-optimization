import "./src/styles/global.css";

import CombinedProvider from "./src/context/CombinedProvider";

export const wrapRootElement = CombinedProvider;

// Checking for sw updates
export const onServiceWorkerUpdateReady = () => {
  const answer = console.log(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
};
