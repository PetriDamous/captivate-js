import {
  onLoad,
  DOMContentLoaded,
  slideEnter,
  slideExit,
  movieStop,
  unLoad,
  moduleReady,
} from "./App/app";

window.addEventListener("load", (e) => {
  onLoad(e);
});

window.addEventListener("DOMContentLoaded", (e) => {
  DOMContentLoaded(e);
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
