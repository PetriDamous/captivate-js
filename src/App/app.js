import { setupGlobalObj } from "../global/globalObject";
import {
  setContentMeta,
  setPrevSlideData,
  setNextSlideData,
  setSlideData,
  setProjectInfo,
  fetchGlobal,
} from "../global/globalObjFunctions";
import { createStyleTag } from "../UI/css/styles";
import { initialize } from "../UI/initialize/initialize";
import { removeVideoEvent } from "../UI/controls/Video/video";
import { setTocHeight } from "../UI/controls/TOC/toc";
import { removeCurrentTimeEvent } from "../UI/components/Timer/timerDOM";
import { removeProgressBarEvent } from "../UI/components/Progress-Bar/progressBarDOM";
import { developerMode } from "../developer/developer";
import { onloadAlert } from "../UI/controls/alert-box/onload/onloadAlert";

export function onLoad(e) {
  /******************
    Onload setup
  *******************/

  setContentMeta();
  setupGlobalObj();
  createStyleTag();
  onloadAlert();

  /******************
    Developer Mode
  *******************/
  const { isDeveloper } = fetchGlobal("developerMode");

  if (isDeveloper) {
    developerMode();
  }
}

export function DOMContentLoaded(e) {}

export function unLoad(e) {
  const { currentSlide, lastSlide } = fetchGlobal("slideData");

  if (currentSlide === lastSlide) {
    localStorage.clear();
  }
}

export function moduleReady(e) {
  setProjectInfo();
  setSlideData();
  setTocHeight();
}

export function slideEnter(e) {
  setNextSlideData();

  $(document).ready(() => {
    initialize(e);
  });
}

export function slideExit(e) {
  setPrevSlideData();
  // removeVideoEvent();
  removeCurrentTimeEvent();
  removeProgressBarEvent();
}

export function movieStop(e) {
  console.log("stop");
}
