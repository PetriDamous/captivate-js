import { setupGlobalObj } from "../global/globalObject";
import {
  setContentMeta,
  setPrevSlideData,
  setNextSlideData,
  setSlideData,
  fetchGlobal,
} from "../global/globalObjFunctions";
import { createStyleTag } from "../UI/css/styles";
import { initialize } from "../UI/initialize/initialize";
import { removeVideoEvent } from "../UI/controls/Video/video";
import { setTocHeight } from "../UI/controls/TOC/toc";
import { removeCurrentTimeEvent } from "../UI/components/Timer/timer";

export function onLoad(e) {
  setContentMeta();
  createStyleTag();
  setupGlobalObj();
}

export function unLoad(e) {
  const { currentSlide, lastSlide } = fetchGlobal("slideData");

  if (currentSlide === lastSlide) {
    localStorage.clear();
  }
}

export function moduleReady(e) {
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
}

export function movieStop(e) {
  console.log("stop");
}
