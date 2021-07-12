import {
  setupGlobal,
  setContentMeta,
  setPrevSlideData,
} from "./global/globalSettings";
import { createStyleTag } from "./UI/components/Styles/styles";
import { initialize } from "./UI/initialize/initialize";
import { getButtonsList } from "./UI/uiFunctions";
import { addVideoToStorage, removeVideoEvent } from "./UI/controls/Video/video";

window.addEventListener("load", function () {
  setContentMeta();
  setupGlobal();
  createStyleTag();
});

window.addEventListener("moduleReadyEvent", function (e) {
  window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", function (e) {
    $(document).ready(function () {
      initialize();
    });
  });

  window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEEXIT", function (e) {
    setPrevSlideData();
    console.log(cpGlobalSetup);
    removeVideoEvent();
    // const vidCCArray = e.cpData.vidCC;
    // if (vidCCArray.length !== 0) {
    //   addVideoToStorage(vidCCArray[vidCCArray.length - 1].ef);
    // }
  });

  window.cpAPIEventEmitter.addEventListener("CPAPI_MOVIESTOP", function (e) {
    console.log("stop");
  });
});
