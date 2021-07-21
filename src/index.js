import { onLoad, slideEnter, slideExit, movieStop, unLoad } from "./App/app";
import { setSlideData } from "./global/globalSettings";

window.addEventListener("load", (e) => {
  onLoad(e);
});

window.addEventListener("moduleReadyEvent", (e) => {
  setSlideData();

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
