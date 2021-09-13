import { fetchGlobal } from "../../../global/globalObjFunctions";
import { replayDelayProgressBar, closeTocOnReplay } from "./replayBtnFunctions";
import { isProgressBar, isTocCloseOnReplay } from "./replayBtnSettings";

export function replayFunc() {
  const {
    currentSlide: { from: firstFrame },
  } = fetchGlobal("slideData");

  cpCmndGotoFrame = firstFrame;

  if (isProgressBar) {
    replayDelayProgressBar();
  }

  if (isTocCloseOnReplay) {
    closeTocOnReplay();
  }
}
