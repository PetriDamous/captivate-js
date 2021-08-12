import {
  onLoad,
  slideEnter,
  slideExit,
  movieStop,
  unLoad,
  moduleReady,
} from "./App/app";

import { developerMode } from "./developer/developer";

window.addEventListener("load", (e) => {
  onLoad(e);
});

window.addEventListener("moduleReadyEvent", (e) => {
  moduleReady(e);

  window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", (e) => {
    slideEnter(e);
  });

  window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEEXIT", (e) => {
    slideExit(e);
  });

  window.cpAPIEventEmitter.addEventListener("CPAPI_MOVIESTOP", (e) => {
    movieStop(e);
  });
});

window.addEventListener("beforeunload", (e) => {
  unLoad(e);
});

/////////////////////
// Developer Mode
////////////////////

const isDeveloper = true;

developerMode(isDeveloper);
