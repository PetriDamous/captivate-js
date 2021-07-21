import {
  setContentMeta,
  setupGlobal,
  setPrevSlideData,
} from "../global/globalSettings";
import { createStyleTag } from "../UI/components/Styles/styles";
import { initialize } from "../UI/initialize/initialize";
import { removeVideoEvent } from "../UI/controls/Video/video";

export function onLoad(e) {
  setContentMeta();
  setupGlobal();
  createStyleTag();
}

export function unLoad(e) {
  const { currentSlide, lastSlide } = window.cpGlobalSetup;

  if (currentSlide === lastSlide) {
    localStorage.clear();
  }
}

export function slideEnter(e) {
  $(document).ready(() => {
    initialize(e);
  });
}

export function slideExit(e) {
  setPrevSlideData();
  removeVideoEvent();
}

export function movieStop(e) {
  console.log("stop");
}