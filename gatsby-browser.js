import "./src/styles/global.css";

import CombinedProvider from "./src/context/CombinedProvider";

export const wrapRootElement = CombinedProvider;

// Checking for sw updates - for development purposes only
// export const onServiceWorkerUpdateReady = () => {
//   const answer = window.confirm(
//     `This application has been updated. ` +
//       `Reload to display the latest version?`
//   );

//   if (answer === true) {
//     window.location.reload();
//   }
// };
