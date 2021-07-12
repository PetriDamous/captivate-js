import {
  setupGlobal,
  setContentMeta,
  setPrevSlideData,
  setSlideData,
} from "./global/globalSettings";
import { createStyleTag } from "./UI/components/Styles/styles";
import { initialize } from "./UI/initialize/initialize";
import { removeVideoEvent } from "./UI/controls/Video/video";

window.addEventListener("load", () => {
  setContentMeta();
  setupGlobal();
  createStyleTag();
});

window.addEventListener("moduleReadyEvent", (e) => {
  setSlideData();

  window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", (e) => {
    $(document).ready(() => {
      initialize(e);
    });
  });

  window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEEXIT", (e) => {
    setPrevSlideData();
    removeVideoEvent();
  });

  window.cpAPIEventEmitter.addEventListener("CPAPI_MOVIESTOP", (e) => {
    console.log("stop");
  });
});
